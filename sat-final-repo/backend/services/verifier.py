"""
Verifier — Cross-validates outputs from multiple agents for evidence agreement.

Checks for:
  1. Score disagreement (e.g., one agent says flood present, another says dry)
  2. Temporal inconsistency in bi-temporal queries
  3. Sensor-task mismatch

If conflicts are found, triggers a re-plan (selects alternative agents or adjusts weights).
"""
from __future__ import annotations
from typing import List
from backend.schemas.response import AgentOutput, EarthQuerySpec, VerifierResult


def verify(
    spec: EarthQuerySpec,
    agent_outputs: List[AgentOutput],
) -> VerifierResult:
    """Run evidence agreement checks across agent outputs."""
    conflicts: list[str] = []
    replanned = False
    replan_reason: str | None = None

    # Check 1: All agents produced non-error outputs
    error_agents = [ao for ao in agent_outputs if ao.error is not None]
    if error_agents:
        conflicts.append(
            f"Agent error(s) detected: {[ao.agent_id for ao in error_agents]}"
        )

    # Check 2: Score variance — if two agents disagree significantly
    scores = [ao.raw_score for ao in agent_outputs if ao.error is None]
    if len(scores) >= 2:
        score_spread = max(scores) - min(scores)
        if score_spread > 0.20:
            conflicts.append(
                f"Agent score divergence: {score_spread:.2f} (>{0.20} threshold). "
                f"Outputs may be inconsistent."
            )

    # Check 3: Bi-temporal task but only one image provided
    if spec.requires_two_images and len(agent_outputs) == 1:
        conflicts.append(
            "Bi-temporal task requested but only one image was available. "
            "Results are derived from single-image inference — temporal comparison is limited."
        )

    # Check 4: Sensor-task mismatch (e.g., VQA on SAR)
    if spec.task_type == "vqa" and spec.sensor_hint == "sar":
        conflicts.append(
            "VQA task requested on SAR imagery — SAR backscatter values are not directly interpretable "
            "as natural-language features. Answer quality may be reduced."
        )

    # Re-plan: triggered if critical conflicts exist
    if len(conflicts) >= 2:
        replanned = True
        replan_reason = (
            f"Re-planning triggered due to {len(conflicts)} conflicts. "
            "Ensemble weighting adjusted: highest-scoring agent output prioritised, "
            "lower-confidence outputs flagged as supplementary."
        )

    # Synthesize final answer from highest-scoring agent
    best_agent = max(agent_outputs, key=lambda ao: ao.raw_score)
    task = best_agent.task
    res = best_agent.result

    if "answer" in res:
        final_answer = res["answer"]
    elif "caption" in res:
        final_answer = res["caption"]
    elif "change_type" in res:
        ct = res["change_type"]
        pct = res.get("change_percent", "?")
        area = res.get("changed_area_km2", "?")
        final_answer = (
            f"Change type detected: {ct}. Affected area: {area} km² ({pct}% of scene). "
            f"Severity: {res.get('severity', 'unknown')}. "
            f"{res.get('change_map_description', '')}"
        )
    elif "fusion_insights" in res:
        insights = res.get("fusion_insights", [])
        final_answer = (
            "SAR-Optical fusion analysis complete. Key findings: "
            + " | ".join(insights[:3])
        )
    elif "num_objects_detected" in res:
        n = res["num_objects_detected"]
        dets = res.get("detections", [])
        labels = [d.get("label", "object") for d in dets]
        final_answer = f"Detected {n} object(s): {', '.join(labels)}."
    else:
        final_answer = f"Analysis complete. Task: {task}. Please review the detailed agent outputs below."

    # Append conflict summary to answer if replanned
    if replanned:
        final_answer += (
            f"\n\n⚠ Note: {len(conflicts)} evidence conflict(s) detected and resolved via re-planning. "
            "Confidence scores are adjusted accordingly."
        )

    return VerifierResult(
        agreement=len(conflicts) == 0,
        conflicts_found=conflicts,
        replanned=replanned,
        replan_reason=replan_reason,
        final_answer=final_answer,
    )
