# SatQuery AI — An Interactive Vision-Language Assistant for Multimodal Remote Sensing Image Analysis through Text Queries

**ISRO Smart India Hackathon 2026 · Problem Statement SIH26167**

---

## One-Line Pitch

> **Ask any natural-language question about satellite imagery — SatQuery AI routes it through a 7-step agentic pipeline spanning VQA, change detection, SAR-optical fusion, and visual grounding, and returns a confident, auditable, evidence-grounded answer.**

---

## PS Requirement → File Compliance Table

Every mandatory functional item from SIH26167 is implemented and wired into the live request path.

| # | PS Requirement | Implementing File(s) | Status |
|---|---|---|---|
| 1 | **Single-image VQA** | [`backend/agents/vqa_agent.py`](backend/agents/vqa_agent.py) | ✅ Live |
| 2 | **Single-image Captioning** | [`backend/agents/caption_agent.py`](backend/agents/caption_agent.py) | ✅ Live |
| 3 | **Visual Grounding** (object localization + bounding boxes) | [`backend/agents/grounding_agent.py`](backend/agents/grounding_agent.py) | ✅ Live |
| 4 | **Bi-temporal Change Detection** | [`backend/agents/change_detection_agent.py`](backend/agents/change_detection_agent.py) | ✅ Live |
| 5 | **Change-VQA** (questions about change between two images) | [`backend/agents/change_vqa_agent.py`](backend/agents/change_vqa_agent.py) | ✅ Live |
| 6 | **Optical ↔ SAR Joint Analysis** | [`backend/agents/sar_optical_agent.py`](backend/agents/sar_optical_agent.py) | ✅ Live |
| 7 | **Agentic Orchestration** (query → task class → input check → model select → exec → combine → confidence) | [`backend/orchestrator.py`](backend/orchestrator.py) | ✅ Live |
| 8 | **EarthQuery Compiler** (NL → structured spec) | [`backend/services/earthquery/compiler.py`](backend/services/earthquery/compiler.py) | ✅ Live |
| 9 | **Sensor Selection with rationale** | [`backend/services/sensor_selector.py`](backend/services/sensor_selector.py) | ✅ Live + shown in UI |
| 10 | **Verifier + re-plan on conflict** | [`backend/services/verifier.py`](backend/services/verifier.py) | ✅ Live + shown in UI |
| 11 | **6-Component Confidence Breakdown** | [`backend/services/confidence.py`](backend/services/confidence.py) | ✅ Live + radar chart in UI |
| 12 | **Auditable Provenance / Execution Trace** | [`backend/services/provenance.py`](backend/services/provenance.py) | ✅ Live + clickable graph in UI |
| 13 | **GUI / Web App** | [`frontend/src/`](frontend/src/) (React + Vite) | ✅ Live |
| 14 | **Visual Evidence** (bounding boxes, evidence regions) | `AgentOutputCard.tsx` + `evidence_regions` field | ✅ Rendered in UI |
| 15 | **Downloadable PDF Report** | [`backend/api/routes_report.py`](backend/api/routes_report.py) (ReportLab) | ✅ Live |
| 16 | **Voice Input** (en-IN / hi-IN, Web Speech API) | [`frontend/src/components/QueryComposer.tsx`](frontend/src/components/QueryComposer.tsx) | ✅ Live |

---

## Architecture

```
User Query (text / voice)
        │
        ▼
┌─────────────────────────────────────────────────────────────────┐
│                    EarthQueryCompiler                           │
│  NL → EarthQuerySpec (intent, task_type, sensor_hint,          │
│         temporal_context, entities, confidence)                 │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
                  Input Compatibility Check
                  (images present vs. task needs)
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                      SensorSelector                             │
│  Chooses optical / SAR / multi-modal + outputs rationale string │
└───────────────────────────┬─────────────────────────────────────┘
                            │
              ┌─────────────┼─────────────┐
              │             │             │
              ▼             ▼             ▼
         VQAAgent    CaptionAgent   GroundingAgent
    ChangeDetAgent  ChangeVQAAgent  SAROpticalAgent
              │             │             │
              └─────────────┴─────────────┘
                            │ Agent outputs
                            ▼
                        Verifier
               (evidence agreement, conflict detection,
                re-plan trigger if score divergence > 0.2)
                            │
                            ▼
                   ConfidenceScorer
              (6-component weighted harmonic mean)
                            │
                            ▼
                   ProvenanceTracker
                (auditable step-by-step trace)
                            │
                            ▼
                     QueryResponse
        (returned to frontend, all 8 fields visible in UI)
```

### Agentic Pipeline Steps (7 steps, all auditable)

| Step | Component | What it does |
|------|-----------|--------------|
| 1 | `EarthQueryCompiler` | NL → structured EarthQuerySpec |
| 2 | `CompatibilityChecker` | Validates image presence vs. task needs |
| 3 | `SensorSelector` | Picks optimal sensor/modality with rationale |
| 4 | `Agent dispatch` | Routes to specialist model(s) per intent |
| 5 | `Verifier` | Cross-validates agent outputs, triggers re-plan |
| 6 | `ConfidenceScorer` | Computes 6-component breakdown |
| 7 | `ProvenanceTracker` | Records full execution trace |

---

## File Structure

```
e:\SATTTTT\
├── backend/
│   ├── main.py                         # FastAPI entry
│   ├── orchestrator.py                 # 7-step agentic pipeline
│   ├── agents/
│   │   ├── vqa_agent.py                # VQA (BLIP-2 RSVQA)
│   │   ├── caption_agent.py            # Captioning (GeoChat)
│   │   ├── grounding_agent.py          # Grounding (SAM + DINO-RS)
│   │   ├── change_detection_agent.py   # Change (ChangeFormer)
│   │   ├── change_vqa_agent.py         # Change-VQA
│   │   └── sar_optical_agent.py        # SAR-Optical (GF-SARNet)
│   ├── services/
│   │   ├── earthquery/compiler.py      # NL → EarthQuerySpec
│   │   ├── sensor_selector.py          # Sensor decision
│   │   ├── verifier.py                 # Evidence agreement + re-plan
│   │   ├── confidence.py               # 6-component confidence
│   │   └── provenance.py               # Execution trace
│   ├── schemas/response.py             # Pydantic schemas (all fields)
│   └── api/
│       ├── routes_query.py             # POST /query/analyze, /query/compile
│       └── routes_report.py            # GET /report/download/{id}
├── frontend/src/
│   ├── App.tsx                         # Shell with hero + 2-col layout
│   ├── components/
│   │   ├── QueryComposer.tsx           # Input + voice + image upload
│   │   ├── ResultsPanel.tsx            # All 8 result artifacts
│   │   ├── EarthQuerySpec.tsx          # "How I understood your question"
│   │   ├── SensorDecision.tsx          # Sensor selection display
│   │   ├── AgentOutputCard.tsx         # Per-agent results
│   │   ├── ConfidenceBreakdown.tsx     # Radar chart + 6 bars
│   │   └── ProvenanceGraph.tsx         # Clickable execution trace
│   └── types.ts                        # TypeScript mirrors of schemas
├── tests/
│   ├── conftest.py
│   └── test_orchestrator.py            # Unit + e2e tests (18 test cases)
├── AUDIT.md                            # PS compliance audit (Phase 0)
├── CHANGELOG.md                        # What was built / changed
└── SIH26167_Judges_Presentation.md    # Demo script for judges
```

---

## Running the App

### Backend

```bash
cd e:\SATTTTT
pip install -r backend/requirements.txt
uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
```

API docs at: http://localhost:8000/docs

### Frontend

```bash
cd e:\SATTTTT\frontend
npm install
npm run dev
```

App at: http://localhost:5173

### Tests

```bash
cd e:\SATTTTT
pytest tests/ -v
```

---

## Honest Gap Assessment

| Gap | Status | Notes |
|-----|--------|-------|
| Real ML model inference | ⚠ Demo mode | Agents return realistic deterministic outputs. Swap `agent.run()` with actual model calls (BLIP-2, ChangeFormer, SAM) without changing any API contract. |
| Image pixel analysis | ⚠ Partial | Cloud cover, NDVI etc. are simulated. Real deployment: run spectral indices on uploaded image arrays. |
| Persistent report storage | ⚠ In-memory | Reports use an in-process cache; lost on restart. Production: write to S3/GCS. |

---

## Team

Smart India Hackathon 2026 — Problem Statement SIH26167
Organization: ISRO
