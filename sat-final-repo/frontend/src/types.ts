// TypeScript types mirroring backend/schemas/response.py
// These are the ground-truth shapes the frontend expects.

export interface EarthQuerySpec {
  intent: string;
  task_type: 'vqa' | 'captioning' | 'grounding' | 'change_detection' | 'change_vqa' | 'sar_optical_joint' | 'unknown';
  requires_two_images: boolean;
  sensor_hint: string | null;
  temporal_context: string | null;
  extracted_entities: string[];
  confidence: number;
}

export interface SensorSelection {
  selected_sensor: string;
  rationale: string;
  cloud_cover_estimate: number | null;
  fallback_considered: boolean;
}

export interface EvidenceRegion {
  bbox: [number, number, number, number];
  label: string;
  confidence: number;
  [key: string]: unknown;
}

export interface AgentOutput {
  agent_id: string;
  agent_name: string;
  task: string;
  result: Record<string, unknown>;
  evidence_regions: EvidenceRegion[] | null;
  raw_score: number;
  error: string | null;
}

export interface VerifierResult {
  agreement: boolean;
  conflicts_found: string[];
  replanned: boolean;
  replan_reason: string | null;
  final_answer: string;
}

export interface ConfidenceBreakdown {
  task_classification: number;
  sensor_compatibility: number;
  model_output_quality: number;
  evidence_agreement: number;
  temporal_consistency: number;
  answer_groundedness: number;
  overall: number;
}

export interface TraceStep {
  step_id: string;
  step_name: string;
  component: string;
  input_summary: string;
  output_summary: string;
  duration_ms: number;
  status: 'success' | 'warning' | 'error' | 'skipped';
  metadata: Record<string, unknown>;
}

export interface ExecutionTrace {
  trace_id: string;
  steps: TraceStep[];
  total_duration_ms: number;
}

export interface QueryResponse {
  query_id: string;
  question: string;
  earthquery_spec: EarthQuerySpec;
  sensor_selection: SensorSelection;
  agent_outputs: AgentOutput[];
  verifier_result: VerifierResult;
  confidence_breakdown: ConfidenceBreakdown;
  execution_trace: ExecutionTrace;
  answer: string;
  report_url: string;
}

export interface QueryRequest {
  question: string;
  image_b64?: string;
  image2_b64?: string;
  language?: string;
  polygon?: [number, number][];
  roi_mode?: boolean;
  target_scene?: 'scene1' | 'scene2' | 'both';
}
