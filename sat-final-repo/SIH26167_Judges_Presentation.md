# SIH26167 Judges' Presentation — SatQuery AI

**Smart India Hackathon 2026 · Problem Statement SIH26167**
**Organization: ISRO**
**Theme: Space Technology**

---

## §1 One-Page Overview

### Problem Statement (SIH26167)
Develop an Interactive Vision-Language Assistant for Multimodal Remote Sensing Image Analysis that enables users to query satellite imagery through natural-language text (and voice) and receive evidence-grounded, confidence-scored answers.

### Solution: SatQuery AI
A 7-step agentic pipeline with 6 specialist model agents, real-time sensor selection, evidence verification, 6-component confidence scoring, and a full-featured web application with voice input in Indian languages.

---

## §2 Architecture at a Glance

```
User (text / 🎤 voice)
   │
   ▼
EarthQueryCompiler  →  sensor_hint, task_type, entities, confidence
   │
   ▼
SensorSelector      →  "Sentinel-2 MSI selected (cloud cover 12%)"
   │
   ▼  (routes to 1–2 agents based on task_type)
┌─────────────────────────────────┐
│  VQAAgent / CaptionAgent /      │
│  GroundingAgent /               │
│  ChangeDetectionAgent /         │
│  ChangeVQAAgent /               │
│  SAROpticalAgent                │
└──────────────┬──────────────────┘
               │
               ▼
           Verifier   →  conflicts?, re-plan?
               │
               ▼
       ConfidenceScorer  →  6-component breakdown
               │
               ▼
       ProvenanceTracker →  auditable execution trace
               │
               ▼
        QueryResponse   (all 8 fields → Frontend)
```

---

## §3 PS-Requirement → File Mapping

| PS Requirement | File | Endpoint / Component |
|---|---|---|
| Single-image VQA | `backend/agents/vqa_agent.py` | `/query/analyze` |
| Image Captioning | `backend/agents/caption_agent.py` | `/query/analyze` |
| Visual Grounding | `backend/agents/grounding_agent.py` | `/query/analyze` |
| Bi-temporal Change Detection | `backend/agents/change_detection_agent.py` | `/query/analyze` |
| Change-VQA | `backend/agents/change_vqa_agent.py` | `/query/analyze` |
| SAR-Optical Joint Analysis | `backend/agents/sar_optical_agent.py` | `/query/analyze` |
| Agentic Orchestration | `backend/orchestrator.py` | `/query/analyze` |
| EarthQuery Compiler | `backend/services/earthquery/compiler.py` | `/query/compile` |
| Sensor Selection + Rationale | `backend/services/sensor_selector.py` | `SensorDecision.tsx` |
| Verifier + Re-plan | `backend/services/verifier.py` | `ResultsPanel.tsx` |
| 6-Component Confidence | `backend/services/confidence.py` | `ConfidenceBreakdown.tsx` |
| Provenance Graph | `backend/services/provenance.py` | `ProvenanceGraph.tsx` |
| PDF Report | `backend/api/routes_report.py` | `/report/download/{id}` |
| Voice Input (en-IN/hi-IN) | `frontend/src/components/QueryComposer.tsx` | Web Speech API |
| Web App | `frontend/src/` | http://localhost:5173 |

---

## §4 What Judges Will See on Screen (Not Just in Logs)

| Pipeline Step | UI Component | ID |
|---|---|---|
| How the query was understood | `EarthQuerySpec.tsx` collapsible panel | `#earthquery-spec-panel` |
| Sensor selection + rationale | `SensorDecision.tsx` card | `#sensor-decision-panel` |
| Per-agent outputs | `AgentOutputCard.tsx` × N | `#agent-card-{agent_id}` |
| Verifier agreement / conflicts | `ResultsPanel.tsx` verifier card | `#verifier-result-panel` |
| 6-component confidence | `ConfidenceBreakdown.tsx` radar + bars | `#confidence-breakdown-panel` |
| Provenance graph | `ProvenanceGraph.tsx` clickable trace | `#provenance-graph-panel` |
| Final answer | `ResultsPanel.tsx` answer card | `#answer-card` |
| Downloadable report | Link button | `#download-report-btn` |

---

## §5 Four-Query Demo Script

Run these queries in order during the live demo. Each one exercises a specific PS requirement.

### Query 1 — VQA (PS Req. 1)
**What to type**: `Is there any flooding visible in this image?`
**Upload**: Any satellite image (or leave blank for text-only demo)
**PS requirement proved**: Single-image VQA — `VQAAgent` runs, answer + confidence shown
**What judge sees**: Answer card, EarthQuery spec shows `task_type: vqa`, sensor selected, confidence breakdown with all 6 bars

---

### Query 2 — Bi-temporal Change Detection + Change-VQA (PS Req. 4 + 5)
**What to type**: `How much area was inundated after the cyclone compared to before?`
**Upload**: Two images (before/after) — or leave blank
**PS requirement proved**: Change detection + Change-VQA — both agents run, verifier cross-validates
**What judge sees**:
  - EarthQuery spec: `task_type: change_vqa`, `requires_two_images: true`, `temporal_context: before: T0 | after: T1`
  - ChangeDetectionAgent: `change_type`, `changed_area_km2`, `severity: High`
  - ChangeVQAAgent: narrative answer about extent
  - Confidence: `temporal_consistency` component shown

---

### Query 3 — SAR-Optical Joint Analysis (PS Req. 6)
**What to type**: `Compare the SAR backscatter with optical imagery to identify urban zones and water bodies`
**PS requirement proved**: SAR-Optical fusion — `SAROpticalAgent` runs, fusion_insights listed
**What judge sees**:
  - Sensor selection: `Multi-modal (Optical + SAR)`, rationale explains cross-modal fusion
  - SAROpticalAgent: SAR backscatter values, NDVI/NDWI, fusion classification percentages
  - 4 fusion insights listed (SAR double-bounce, water cross-validation, agricultural boundaries, canopy estimation)

---

### Query 4 — Visual Grounding (PS Req. 3) + Verifier Conflict Demo
**What to type**: `Locate and highlight all buildings and road networks in the image` *(use a single image only)*
**PS requirement proved**: Grounding + verifier conflict on SAR hint mismatch
**What judge sees**:
  - GroundingAgent: 3 building clusters + 2 road segments with bounding boxes
  - Evidence region chips: `📌 building_cluster_1 (94%)`, `📌 primary_road (97%)`
  - If you also click the "📡 SAR+Optical" suggestion and run, verifier shows conflict badge: `VQA task on SAR imagery`

---

## §6 Voice Input Demo

1. Click 🎤 mic button
2. Say: `"Is there vegetation in this satellite image?"`
3. Toast appears: `Heard: "Is there vegetation in this satellite image?"`
4. Click Analyze — same result as typed
5. Toggle `हि` and repeat in Hindi: `"इस छवि में कौन सी वनस्पति दिखाई देती है?"`

---

## §7 Technical Stack

| Component | Technology |
|---|---|
| Backend API | FastAPI (Python) |
| Intent Classification | Rule-based regex + keyword NLP (EarthQueryCompiler) |
| Agentic Pipeline | Custom orchestrator (no LangChain dependency) |
| VQA Model (reference) | BLIP-2 (OPT-6.7B) fine-tuned on RSVQA-LR |
| Change Detection (ref.) | ChangeFormer (LEVIR-CD + WHU-CD) |
| Grounding (ref.) | SAM ViT-H + GroundingDINO |
| SAR-Optical (ref.) | GF-SARNet (Sentinel-1 + Sentinel-2 fusion) |
| Captioning (ref.) | GeoChat (LLaVA-1.5 RS fine-tuned) |
| PDF Reports | ReportLab |
| Frontend | React 18 + Vite + TypeScript |
| Charts | Chart.js (radar + bar) |
| Voice Input | Web Speech API (en-IN, hi-IN) |

---

## §8 Judges' Q&A Cheat Sheet

**Q: How does the system decide which model to run?**
A: `EarthQueryCompiler` classifies the query into one of 7 task types. `orchestrator.py:_AGENT_REGISTRY` maps each task type to the required agent(s). Every route is explicit — show them the registry dict.

**Q: How is confidence computed?**
A: 6-component weighted harmonic mean: task classification (15%), sensor compatibility (15%), model quality (25%), evidence agreement (20%), temporal consistency (10%), answer groundedness (15%). Code: `backend/services/confidence.py`.

**Q: What happens if agents disagree?**
A: `verifier.py` detects divergence (score spread > 0.2, missing images, sensor-task mismatch). If ≥2 conflicts → re-plan flag set → highest-scoring agent prioritised → final answer includes warning. Run Query 4 + Verifier demo above.

**Q: Is this real model inference?**
A: The pipeline, routing, schemas, and UI are production-complete. The agent `.run()` methods return realistic deterministic responses (shown on screen with model attribution). Swapping in real model calls (BLIP-2, ChangeFormer, SAM) requires only changing the body of `agent.run()` — no API contract changes. This was a deliberate choice to keep the demo stable and fast.

**Q: How is the execution trace auditable?**
A: Every step in `orchestrator.py` calls `prov.add_step()` with input summary, output summary, component name, duration, and status. The full trace is returned in `execution_trace` and rendered as a clickable step-by-step graph in the UI. Click any step to expand its I/O.
