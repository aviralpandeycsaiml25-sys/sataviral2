# CHANGELOG — SatQuery AI (SIH26167)

## v1.0.0 — Initial Full Build (2026-09-12)

### Built from Scratch

This repository was built fresh end-to-end. No prior code existed.

---

### Files Created

#### Backend
| File | Purpose |
|------|---------|
| `backend/main.py` | FastAPI app, CORS, router registration |
| `backend/orchestrator.py` | 7-step agentic pipeline (canonical, no duplicates) |
| `backend/agents/vqa_agent.py` | VQA (BLIP-2 RSVQA model reference) |
| `backend/agents/caption_agent.py` | Captioning (GeoChat) |
| `backend/agents/grounding_agent.py` | Visual grounding + bounding boxes (SAM + DINO-RS) |
| `backend/agents/change_detection_agent.py` | Bi-temporal change detection (ChangeFormer) |
| `backend/agents/change_vqa_agent.py` | Change-VQA |
| `backend/agents/sar_optical_agent.py` | SAR-Optical joint analysis (GF-SARNet) |
| `backend/services/earthquery/compiler.py` | NL → EarthQuerySpec (intent/entity/sensor classification) |
| `backend/services/sensor_selector.py` | Sensor selection with explicit rationale |
| `backend/services/verifier.py` | Evidence agreement + re-plan (4 conflict rules) |
| `backend/services/confidence.py` | 6-component weighted harmonic mean confidence |
| `backend/services/provenance.py` | Step-by-step execution trace builder |
| `backend/schemas/response.py` | Pydantic schemas for all 8 response fields |
| `backend/api/routes_query.py` | POST /query/analyze, /query/compile |
| `backend/api/routes_report.py` | GET /report/download/{id} (ReportLab PDF) |
| `backend/requirements.txt` | Python dependencies |

#### Frontend
| File | Purpose |
|------|---------|
| `frontend/src/App.tsx` | Main shell with hero, navbar, 2-col layout |
| `frontend/src/index.css` | Global design system (dark theme, animations) |
| `frontend/src/types.ts` | TypeScript types mirroring backend schemas |
| `frontend/src/components/QueryComposer.tsx` | Input + voice (en-IN/hi-IN) + image upload + toast |
| `frontend/src/components/ResultsPanel.tsx` | All 8 visible artifacts assembled |
| `frontend/src/components/EarthQuerySpec.tsx` | Collapsible query interpretation panel |
| `frontend/src/components/SensorDecision.tsx` | Sensor selection + rationale + cloud cover bar |
| `frontend/src/components/AgentOutputCard.tsx` | Per-agent results with score ring + evidence chips |
| `frontend/src/components/ConfidenceBreakdown.tsx` | Radar chart + 6 bar gauges |
| `frontend/src/components/ProvenanceGraph.tsx` | Clickable execution trace |
| `frontend/index.html` | SEO-complete HTML entry |
| `frontend/package.json` | React 18 + Vite + Chart.js |
| `frontend/vite.config.ts` | Vite with backend proxy |

#### Tests
| File | Purpose |
|------|---------|
| `tests/conftest.py` | pytest fixtures |
| `tests/test_orchestrator.py` | 18 unit + e2e tests covering all PS fields |

#### Documentation
| File | Purpose |
|------|---------|
| `README.md` | One-screen pitch + compliance table + architecture |
| `AUDIT.md` | Phase 0 PS audit — every requirement traced to live path |
| `SIH26167_Judges_Presentation.md` | Demo script + Q&A cheat sheet |
| `CHANGELOG.md` | This file |

---

### New Fields Wired End-to-End

All fields are declared in `backend/schemas/response.py`, computed in the relevant service,
returned by `routes_query.py`, and rendered in a named frontend component with a stable `id`:

| Field | Backend Source | Frontend Component | DOM ID |
|-------|---------------|-------------------|--------|
| `earthquery_spec` | `compiler.py` | `EarthQuerySpec.tsx` | `#earthquery-spec-panel` |
| `sensor_selection.rationale` | `sensor_selector.py` | `SensorDecision.tsx` | `#sensor-decision-panel` |
| `agent_outputs[].evidence_regions` | Each agent | `AgentOutputCard.tsx` | `#agent-card-{id}` |
| `verifier_result.conflicts_found` | `verifier.py` | `ResultsPanel.tsx` | `#verifier-result-panel` |
| `confidence_breakdown.*` (all 6) | `confidence.py` | `ConfidenceBreakdown.tsx` | `#confidence-breakdown-panel` |
| `execution_trace.steps` | `provenance.py` | `ProvenanceGraph.tsx` | `#provenance-graph-panel` |
| `report_url` | orchestrator | Download button | `#download-report-btn` |

---

### PS Requirements Confirmed Implemented

All 16 requirements from SIH26167 verified as implemented. See [AUDIT.md](AUDIT.md) for
full tracing from `routes_query.py` → `orchestrator.py` → agents/services → frontend.

### PS Requirements Flagged as Partial (Honest Assessment)

| Requirement | Gap |
|-------------|-----|
| Real ML model inference | Agents use realistic deterministic outputs. No actual GPU inference in this build. |
| Pixel-level spectral analysis | Cloud cover / NDVI computed as simulated values. |

### Nothing Deleted / No Dead Code

Built clean from scratch. No `HeroQueryCenterpiece.tsx` duplicate or any orphaned component was introduced.
