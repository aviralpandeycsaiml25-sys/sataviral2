"""
Confidence Scorer — Produces the 6-component confidence breakdown required by SIH26167.

Components:
  1. task_classification   — How certain the EarthQueryCompiler was about the intent
  2. sensor_compatibility  — Whether the selected sensor matches task requirements
  3. model_output_quality  — Average raw score across all agent outputs
  4. evidence_agreement    — Agreement score from the verifier (1.0 if no conflicts)
  5. temporal_consistency  — Relevance of temporal context to the query
  6. answer_groundedness   — Whether the final answer is grounded in detected evidence

Overall = weighted harmonic mean of the 6 components.
"""
from __future__ import annotations
from typing import List
from backend.schemas.response import (
    EarthQuerySpec, SensorSelection, AgentOutput, VerifierResult, ConfidenceBreakdown
)


def compute_confidence(
    spec: EarthQuerySpec,
    sensor: SensorSelection,
    agent_outputs: List[AgentOutput],
    verifier: VerifierResult,
) -> ConfidenceBreakdown:
    # 1. Task classification confidence
    task_cls = spec.confidence

    # 2. Sensor compatibility
    if spec.sensor_hint == "any" or spec.sensor_hint is None:
        sensor_compat = 0.85
    elif spec.sensor_hint == "both" and "Multi-modal" in sensor.selected_sensor:
        sensor_compat = 0.97
    elif spec.sensor_hint == "sar" and "SAR" in sensor.selected_sensor:
        sensor_compat = 0.95
    elif spec.sensor_hint == "optical" and "Optical" in sensor.selected_sensor:
        sensor_compat = 0.95
    else:
        sensor_compat = 0.65  # mismatch

    # 3. Model output quality
    valid_scores = [ao.raw_score for ao in agent_outputs if ao.error is None]
    model_quality = sum(valid_scores) / len(valid_scores) if valid_scores else 0.5

    # 4. Evidence agreement
    if verifier.agreement:
        evidence_agreement = 0.97
    elif verifier.replanned:
        evidence_agreement = 0.62  # re-planned → lower confidence
    else:
        n_conflicts = len(verifier.conflicts_found)
        evidence_agreement = max(0.4, 0.90 - n_conflicts * 0.12)

    # 5. Temporal consistency
    if spec.task_type in ("change_detection", "change_vqa") and spec.temporal_context:
        temporal_consistency = 0.92
    elif spec.task_type in ("change_detection", "change_vqa") and not spec.temporal_context:
        temporal_consistency = 0.60  # no temporal labels provided
    else:
        temporal_consistency = 0.90  # not a temporal task

    # 6. Answer groundedness (proxy: whether evidence regions were found)
    has_evidence = any(
        ao.evidence_regions and len(ao.evidence_regions) > 0
        for ao in agent_outputs
    )
    answer_groundedness = 0.93 if has_evidence else 0.70

    # Overall: weighted harmonic mean (weights reflect PS priority)
    weights = {
        "task_classification": 0.15,
        "sensor_compatibility": 0.15,
        "model_output_quality": 0.25,
        "evidence_agreement": 0.20,
        "temporal_consistency": 0.10,
        "answer_groundedness": 0.15,
    }
    components = {
        "task_classification": task_cls,
        "sensor_compatibility": sensor_compat,
        "model_output_quality": model_quality,
        "evidence_agreement": evidence_agreement,
        "temporal_consistency": temporal_consistency,
        "answer_groundedness": answer_groundedness,
    }
    # Weighted harmonic mean
    denom = sum(w / (v + 1e-9) for k, (v, w) in zip(components, zip(components.values(), weights.values())))
    overall = sum(weights.values()) / denom

    return ConfidenceBreakdown(
        task_classification=round(task_cls, 3),
        sensor_compatibility=round(sensor_compat, 3),
        model_output_quality=round(model_quality, 3),
        evidence_agreement=round(evidence_agreement, 3),
        temporal_consistency=round(temporal_consistency, 3),
        answer_groundedness=round(answer_groundedness, 3),
        overall=round(min(overall, 1.0), 3),
    )
