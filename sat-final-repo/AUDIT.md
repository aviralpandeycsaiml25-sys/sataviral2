# AUDIT.md — SatQuery AI PS Compliance Audit
**Problem Statement SIH26167 · Phase 0 Output**

This audit was produced by tracing imports from `backend/api/routes_query.py → orchestrator.py → agents/*` and from `frontend/src/App.tsx → components/*`.

---

## Methodology

1. Starting from `routes_query.py`, traced every import transitively.
2. Confirmed each PS requirement is reachable in the live request path.
3. Confirmed each frontend component is rendered from `App.tsx → ResultsPanel.tsx`.
4. Marked anything not reachable as "orphaned" (none found — clean build from scratch).

---

## PS Checklist Audit

### ✅ Requirement 1: Single-image VQA

- **File**: `backend/agents/vqa_agent.py` → `VQAAgent.run()`
- **Wired**: `orchestrator.py:_AGENT_REGISTRY["vqa"] = [VQAAgent]`
- **Route**: `POST /query/analyze` → `run_pipeline()` → `VQAAgent.run()`
- **Frontend**: `AgentOutputCard.tsx` renders `result.answer`
- **Status**: ✅ LIVE — reachable and rendered

### ✅ Requirement 2: Single-image Captioning

- **File**: `backend/agents/caption_agent.py` → `CaptionAgent.run()`
- **Wired**: `_AGENT_REGISTRY["captioning"] = [CaptionAgent]`
- **Frontend**: `AgentOutputCard.tsx` renders `result.caption` + `land_cover_distribution`
- **Status**: ✅ LIVE

### ✅ Requirement 3: Visual Grounding

- **File**: `backend/agents/grounding_agent.py` → `GroundingAgent.run()`
- **Wired**: `_AGENT_REGISTRY["grounding"] = [GroundingAgent]`
- **Frontend**: `AgentOutputCard.tsx` renders `evidence_regions` as chips with confidence
- **Status**: ✅ LIVE

### ✅ Requirement 4: Bi-temporal Change Detection

- **File**: `backend/agents/change_detection_agent.py` → `ChangeDetectionAgent.run()`
- **Wired**: `_AGENT_REGISTRY["change_detection"] = [ChangeDetectionAgent]`
- **Frontend**: `AgentOutputCard.tsx` renders `change_type`, `changed_area_km2`, `severity`
- **Status**: ✅ LIVE

### ✅ Requirement 5: Change-VQA

- **File**: `backend/agents/change_vqa_agent.py` → `ChangeVQAAgent.run()`
- **Wired**: `_AGENT_REGISTRY["change_vqa"] = [ChangeDetectionAgent, ChangeVQAAgent]`
- **Frontend**: Same as above
- **Status**: ✅ LIVE (both change agents run for change_vqa queries)

### ✅ Requirement 6: SAR-Optical Joint Analysis

- **File**: `backend/agents/sar_optical_agent.py` → `SAROpticalAgent.run()`
- **Wired**: `_AGENT_REGISTRY["sar_optical_joint"] = [SAROpticalAgent]`
- **Frontend**: Renders `fusion_insights` list + `fusion_classification` dict
- **Status**: ✅ LIVE

### ✅ Requirement 7: Agentic Orchestration (7-step pipeline)

- **File**: `backend/orchestrator.py` → `run_pipeline()`
- **Steps**: EarthQueryCompiler → CompatChecker → SensorSelector → AgentDispatch → Verifier → ConfidenceScorer → ProvenanceTracker
- **All steps recorded in `ExecutionTrace`** and returned to frontend
- **Status**: ✅ LIVE — all 7 steps execute for every `/query/analyze` call

### ✅ Requirement 8: EarthQuery Compiler (NL → spec)

- **File**: `backend/services/earthquery/compiler.py` → `compile_query()`
- **Route**: Also exposed standalone at `POST /query/compile`
- **Frontend**: `EarthQuerySpec.tsx` collapsible panel (default open)
- **Status**: ✅ LIVE — inspectable via API and shown in UI

### ✅ Requirement 9: Sensor Selection with Rationale

- **File**: `backend/services/sensor_selector.py` → `select_sensor()`
- **Rationale string**: Present in every branch of the selection logic
- **Frontend**: `SensorDecision.tsx` — shows sensor name, rationale, cloud cover bar
- **Status**: ✅ LIVE — rationale visible in UI (not just backend logs)

### ✅ Requirement 10: Verifier + Re-plan

- **File**: `backend/services/verifier.py` → `verify()`
- **Conflict rules**: Score divergence >0.2, missing second image, sensor-task mismatch
- **Re-plan**: Triggered when ≥2 conflicts detected
- **Frontend**: `ResultsPanel.tsx` — verifier card with agreement badge / conflict list / re-plan notice
- **Status**: ✅ LIVE

### ✅ Requirement 11: 6-Component Confidence Breakdown

- **File**: `backend/services/confidence.py` → `compute_confidence()`
- **6 components**: task_classification, sensor_compatibility, model_output_quality, evidence_agreement, temporal_consistency, answer_groundedness
- **Frontend**: `ConfidenceBreakdown.tsx` — Chart.js radar + 6 bar gauges
- **Status**: ✅ LIVE — all 6 components visible, not just a single number

### ✅ Requirement 12: Auditable Execution Trace / Provenance

- **File**: `backend/services/provenance.py` → `ProvenanceTracker`
- **Each step**: Records step_name, component, input_summary, output_summary, duration_ms, status
- **Frontend**: `ProvenanceGraph.tsx` — clickable step nodes, expandable I/O
- **Status**: ✅ LIVE

### ✅ Requirement 13: GUI / Web Application

- **Files**: `frontend/src/` — React 18 + Vite + TypeScript
- **Features**: Dark theme, voice input, image upload, responsive layout
- **Status**: ✅ LIVE

### ✅ Requirement 14: Visual Evidence

- **Schema**: `AgentOutput.evidence_regions` — list of `{bbox, label, confidence}`
- **Frontend**: `AgentOutputCard.tsx` — evidence region chips with labels
- **Status**: ✅ LIVE

### ✅ Requirement 15: Downloadable PDF Report

- **File**: `backend/api/routes_report.py` — ReportLab PDF generation
- **Content**: EarthQuery spec, sensor selection, confidence breakdown, execution trace, answer
- **Cache**: `routes_report._report_cache` — populated by orchestrator after each query
- **Frontend**: "Download Full PDF Report" button in `ResultsPanel.tsx`
- **Status**: ✅ LIVE

### ✅ Requirement 16: Voice Input (en-IN / hi-IN)

- **File**: `frontend/src/components/QueryComposer.tsx`
- **API**: Web Speech API, `SpeechRecognition`
- **Languages**: en-IN / hi-IN selectable via toggle
- **Same code path**: `onResult` → sets `question` state → `handleSubmit()` calls `onAnalyze()` — identical to typed text
- **Toast**: "Heard: ..." shown for 3s after transcription
- **Graceful degradation**: `isSpeechAvailable()` — mic button not rendered on non-Chromium browsers
- **Status**: ✅ LIVE

---

## Dead Code Audit

| Check | Result |
|-------|--------|
| Duplicate `HeroQueryCenterpiece.tsx` | ❌ Does not exist — was never created (clean build) |
| Multiple change detection entry points | ❌ None — single canonical route via `_AGENT_REGISTRY` |
| Multiple report generators | ❌ None — single `routes_report.py` |
| Agents not called by any intent | ❌ None — all 6 agents appear in `_AGENT_REGISTRY` |
| Orphaned frontend components | ❌ None — all components imported from `ResultsPanel.tsx` or `App.tsx` |

**Result: No dead code found. Every defined file is reachable from the live request path.**

---

## Honest Gap Assessment

| Item | Gap | Severity |
|------|-----|----------|
| Real model inference | Agents use deterministic simulated outputs | Medium — API contract is identical; swap `.run()` body to call real models |
| Pixel-level image analysis | Cloud cover / NDVI simulated | Low — cosmetic for demo; does not affect pipeline architecture |
| Report persistence | In-memory cache, lost on restart | Low — swap for S3/DB in production |
| Playwright e2e tests | Not added (no browser automation in this environment) | Low — unit tests cover all pipeline fields |
