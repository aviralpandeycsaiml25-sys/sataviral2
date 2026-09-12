"""
Request / response Pydantic schemas for SatQuery AI.
All fields that appear in the API response are declared here —
nothing is silently dropped between backend computation and frontend rendering.
"""
from __future__ import annotations
from typing import Optional, List, Dict, Any, Literal
from pydantic import BaseModel, Field
import base64


# ─── Request ──────────────────────────────────────────────────────────────────

class QueryRequest(BaseModel):
    question: str = Field(..., description="Natural-language query from the user")
    image_b64: Optional[str] = Field(None, description="Primary image, base64-encoded")
    image2_b64: Optional[str] = Field(None, description="Second image for bi-temporal analysis")
    language: Optional[str] = Field("en-IN", description="Language hint (en-IN | hi-IN)")
    polygon: Optional[List[List[float]]] = Field(None, description="Normalized [[x1, y1], [x2, y2], ...] polygon ROI coordinates (0.0 to 1.0)")
    roi_mode: Optional[bool] = Field(False, description="Whether query is constrained to the polygon ROI")
    target_scene: Optional[Literal["scene1", "scene2", "both"]] = Field("both", description="Target scene for ROI analysis")


# ─── EarthQuery Spec ──────────────────────────────────────────────────────────

class EarthQuerySpec(BaseModel):
    intent: str = Field(..., description="Classified task intent")
    task_type: Literal[
        "vqa", "captioning", "grounding",
        "change_detection", "change_vqa",
        "sar_optical_joint", "unknown"
    ]
    requires_two_images: bool
    sensor_hint: Optional[str] = Field(None, description="optical | sar | any")
    temporal_context: Optional[str] = Field(None, description="before/after labels if bi-temporal")
    extracted_entities: List[str] = Field(default_factory=list)
    confidence: float = Field(..., ge=0.0, le=1.0)


# ─── Sensor Selection ─────────────────────────────────────────────────────────

class SensorSelection(BaseModel):
    selected_sensor: str
    rationale: str
    cloud_cover_estimate: Optional[float] = None
    fallback_considered: bool = False


# ─── Agent Output ─────────────────────────────────────────────────────────────

class AgentOutput(BaseModel):
    agent_id: str
    agent_name: str
    task: str
    result: Dict[str, Any]
    evidence_regions: Optional[List[Dict[str, Any]]] = None   # bounding boxes / masks
    raw_score: float = Field(..., ge=0.0, le=1.0)
    error: Optional[str] = None


# ─── Verifier ─────────────────────────────────────────────────────────────────

class VerifierResult(BaseModel):
    agreement: bool
    conflicts_found: List[str] = Field(default_factory=list)
    replanned: bool = False
    replan_reason: Optional[str] = None
    final_answer: str


# ─── Confidence Breakdown (6-component) ───────────────────────────────────────

class ConfidenceBreakdown(BaseModel):
    task_classification: float = Field(..., ge=0.0, le=1.0)
    sensor_compatibility: float = Field(..., ge=0.0, le=1.0)
    model_output_quality: float = Field(..., ge=0.0, le=1.0)
    evidence_agreement: float = Field(..., ge=0.0, le=1.0)
    temporal_consistency: float = Field(..., ge=0.0, le=1.0)
    answer_groundedness: float = Field(..., ge=0.0, le=1.0)
    overall: float = Field(..., ge=0.0, le=1.0)


# ─── Provenance / Execution Trace ─────────────────────────────────────────────

class TraceStep(BaseModel):
    step_id: str
    step_name: str
    component: str
    input_summary: str
    output_summary: str
    duration_ms: float
    status: Literal["success", "warning", "error", "skipped"]
    metadata: Dict[str, Any] = Field(default_factory=dict)


class ExecutionTrace(BaseModel):
    trace_id: str
    steps: List[TraceStep]
    total_duration_ms: float


# ─── Full Query Response ──────────────────────────────────────────────────────

class QueryResponse(BaseModel):
    query_id: str
    question: str
    earthquery_spec: EarthQuerySpec
    sensor_selection: SensorSelection
    agent_outputs: List[AgentOutput]
    verifier_result: VerifierResult
    confidence_breakdown: ConfidenceBreakdown
    execution_trace: ExecutionTrace
    answer: str
    report_url: str
