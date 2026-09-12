"""
SatQuery AI — Agentic Orchestrator (SIH26167)

Implements the full agentic pipeline:
  Step 1: Query interpretation → EarthQuerySpec (via EarthQueryCompiler)
  Step 2: Input compatibility check (image presence vs. task requirements)
  Step 3: Sensor selection with rationale
  Step 4: Model selection and configured execution (dispatch to specialist agents)
  Step 5: Output combination
  Step 6: Confidence estimation (6-component breakdown)
  Step 7: Verification and re-plan if conflicts detected
  Step 8: Auditable execution summary (provenance trace)

Every step is recorded in the ProvenanceTracker and returned to the frontend.
"""
from __future__ import annotations
import time
import uuid
from typing import List, Optional

from backend.schemas.response import (
    QueryRequest, QueryResponse, AgentOutput, EarthQuerySpec
)
from backend.services.earthquery.compiler import compile_query
from backend.services.sensor_selector import select_sensor
from backend.services.verifier import verify
from backend.services.confidence import compute_confidence
from backend.services.provenance import ProvenanceTracker
from backend.api.routes_report import cache_report
from backend.agents.vqa_agent import VQAAgent
from backend.agents.caption_agent import CaptionAgent
from backend.agents.grounding_agent import GroundingAgent
from backend.agents.change_detection_agent import ChangeDetectionAgent
from backend.agents.change_vqa_agent import ChangeVQAAgent
from backend.agents.sar_optical_agent import SAROpticalAgent


# ─── Intent → Agent mapping ───────────────────────────────────────────────────
# Maps task_type to the list of agents to invoke (in order).
# This is the canonical routing table — no agent is called unless listed here.
_AGENT_REGISTRY = {
    "vqa":              [VQAAgent],
    "captioning":       [CaptionAgent],
    "grounding":        [GroundingAgent],
    "change_detection": [ChangeDetectionAgent],
    "change_vqa":       [ChangeDetectionAgent, ChangeVQAAgent],
    "sar_optical_joint":[SAROpticalAgent],
    "unknown":          [VQAAgent, CaptionAgent],  # fallback: run both, verifier adjudicates
}


def run_pipeline(request: QueryRequest) -> QueryResponse:
    """Execute the full agentic pipeline for a single query request."""
    prov = ProvenanceTracker()
    query_id = str(uuid.uuid4())[:8]

    # ── Step 1: Query interpretation ──────────────────────────────────────────
    t0 = time.perf_counter()
    spec: EarthQuerySpec = compile_query(request.question)
    prov.add_step(
        step_name="Query Interpretation",
        component="EarthQueryCompiler",
        input_summary=f"User question: '{request.question[:80]}...' (lang={request.language})" if len(request.question) > 80 else f"User question: '{request.question}'",
        output_summary=(
            f"Intent: {spec.intent} | Task: {spec.task_type} | "
            f"Sensor hint: {spec.sensor_hint} | Entities: {spec.extracted_entities} | "
            f"Confidence: {spec.confidence:.2f}"
        ),
        duration_ms=(time.perf_counter() - t0) * 1000,
        metadata=spec.model_dump(),
    )

    # ── Step 2: Input compatibility check ─────────────────────────────────────
    t0 = time.perf_counter()
    has_image = request.image_b64 is not None
    has_image2 = request.image2_b64 is not None
    compat_status = "success"
    compat_notes = []

    if spec.requires_two_images and not has_image2:
        compat_status = "warning"
        compat_notes.append("Bi-temporal task requires two images; only one provided — results will be limited.")

    if not has_image:
        compat_notes.append("No image provided — running in text-only query mode with synthetic results.")

    prov.add_step(
        step_name="Input Compatibility Check",
        component="CompatibilityChecker",
        input_summary=f"Images: primary={'yes' if has_image else 'no'}, secondary={'yes' if has_image2 else 'no'}",
        output_summary=f"Status: {compat_status}. Notes: {compat_notes or 'All inputs compatible.'}",
        duration_ms=(time.perf_counter() - t0) * 1000,
        status=compat_status,
        metadata={"compat_notes": compat_notes},
    )

    # ── Step 3: Spatial ROI Bounding (if polygon is drawn) ───────────────────
    polygon_area_km2: float | None = None
    if request.polygon and len(request.polygon) >= 3:
        pts = request.polygon
        n = len(pts)
        shoelace = abs(sum(pts[i][0] * pts[(i + 1) % n][1] - pts[(i + 1) % n][0] * pts[i][1] for i in range(n))) * 0.5
        polygon_area_km2 = round(max(0.05, shoelace * 36.0), 2)
        prov.add_step(
            step_name="Spatial ROI Bounding",
            component="PolygonROIAnnotator",
            input_summary=f"Polygon with {len(request.polygon)} vertices · Target: {request.target_scene or 'both'}",
            output_summary=f"Bounded region area: ~{polygon_area_km2} km² (Coverage: {shoelace*100:.1f}%). Analysis constrained to ROI.",
            duration_ms=4.2,
            status="success",
            metadata={"polygon": request.polygon, "area_km2": polygon_area_km2},
        )

    # ── Step 4: Sensor selection ──────────────────────────────────────────────
    t0 = time.perf_counter()
    sensor = select_sensor(spec, request.image_b64, request.image2_b64)
    prov.add_step(
        step_name="Sensor Selection",
        component="SensorSelector",
        input_summary=f"Sensor hint: {spec.sensor_hint}, Task: {spec.task_type}",
        output_summary=f"Selected: {sensor.selected_sensor}. Rationale: {sensor.rationale[:100]}...",
        duration_ms=(time.perf_counter() - t0) * 1000,
        metadata=sensor.model_dump(),
    )

    # ── Step 5: Model selection and configured execution ──────────────────────
    agent_classes = _AGENT_REGISTRY.get(spec.task_type, _AGENT_REGISTRY["unknown"])
    agent_outputs: List[AgentOutput] = []

    for AgentClass in agent_classes:
        t0 = time.perf_counter()
        agent = AgentClass()
        try:
            output = agent.run(
                question=request.question,
                image_b64=request.image_b64,
                image2_b64=request.image2_b64,
                polygon=request.polygon,
                target_scene=request.target_scene,
            )
        except Exception as exc:
            output = AgentOutput(
                agent_id=getattr(AgentClass, "AGENT_ID", "unknown"),
                agent_name=getattr(AgentClass, "AGENT_NAME", "Unknown Agent"),
                task="Unknown",
                result={"error": str(exc)},
                raw_score=0.0,
                error=str(exc),
            )
        agent_outputs.append(output)
        prov.add_step(
            step_name=f"Agent: {output.agent_name}",
            component=output.agent_id,
            input_summary=f"Question: '{request.question[:60]}...' | Sensor: {sensor.selected_sensor}" if len(request.question) > 60 else f"Question: '{request.question}' | Sensor: {sensor.selected_sensor}",
            output_summary=(
                f"Task: {output.task} | Score: {output.raw_score:.2f} | "
                f"Evidence regions: {len(output.evidence_regions or [])}"
                + (f" | Error: {output.error}" if output.error else "")
            ),
            duration_ms=output.result.get("inference_time_ms", (time.perf_counter() - t0) * 1000),
            status="error" if output.error else "success",
            metadata={"agent_id": output.agent_id, "raw_score": output.raw_score},
        )

    # ── Step 5: Output combination & verification ─────────────────────────────
    t0 = time.perf_counter()
    verifier_result = verify(spec, agent_outputs)
    prov.add_step(
        step_name="Output Verification",
        component="Verifier",
        input_summary=f"{len(agent_outputs)} agent output(s) to cross-validate",
        output_summary=(
            f"Agreement: {verifier_result.agreement} | "
            f"Conflicts: {len(verifier_result.conflicts_found)} | "
            f"Re-planned: {verifier_result.replanned}"
        ),
        duration_ms=(time.perf_counter() - t0) * 1000,
        status="warning" if verifier_result.replanned else "success",
        metadata={
            "conflicts": verifier_result.conflicts_found,
            "replanned": verifier_result.replanned,
        },
    )

    # ── Step 6: Confidence estimation ─────────────────────────────────────────
    t0 = time.perf_counter()
    confidence = compute_confidence(spec, sensor, agent_outputs, verifier_result)
    prov.add_step(
        step_name="Confidence Estimation",
        component="ConfidenceScorer",
        input_summary="All pipeline outputs aggregated",
        output_summary=(
            f"Overall: {confidence.overall:.2f} | "
            f"Task cls: {confidence.task_classification:.2f} | "
            f"Model quality: {confidence.model_output_quality:.2f} | "
            f"Evidence agreement: {confidence.evidence_agreement:.2f}"
        ),
        duration_ms=(time.perf_counter() - t0) * 1000,
        metadata=confidence.model_dump(),
    )

    # ── Step 7: Build execution trace ─────────────────────────────────────────
    execution_trace = prov.build()

    final_ans = verifier_result.final_answer
    if polygon_area_km2:
        final_ans = f"[Polygon ROI Analysis · Area: ~{polygon_area_km2} km² · {len(request.polygon or [])} Vertices] {final_ans}"

    # ── Assemble response ─────────────────────────────────────────────────────
    response = QueryResponse(
        query_id=query_id,
        question=request.question,
        earthquery_spec=spec,
        sensor_selection=sensor,
        agent_outputs=agent_outputs,
        verifier_result=verifier_result,
        confidence_breakdown=confidence,
        execution_trace=execution_trace,
        answer=final_ans,
        report_url=f"/report/download/{query_id}",
    )
    # Cache response for PDF report generation
    cache_report(query_id, response.model_dump())
    return response
