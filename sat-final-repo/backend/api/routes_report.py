"""
Report Routes — Downloadable PDF report for a completed query.

Generates a structured PDF containing:
  - Query summary
  - EarthQuery spec
  - Sensor selection rationale
  - Agent outputs
  - Confidence breakdown
  - Execution trace

For the demo, report content is derived from the query_id stored in a simple in-memory cache.
In production: reports would be stored in object storage (S3/GCS).
"""
from __future__ import annotations
import io
import uuid
from typing import Dict, Any
from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse

router = APIRouter()

# In-memory cache: query_id → QueryResponse dict (populated by /query/analyze)
_report_cache: Dict[str, Dict[str, Any]] = {}


def cache_report(query_id: str, data: Dict[str, Any]) -> None:
    """Called by the orchestrator to cache report data."""
    _report_cache[query_id] = data


@router.get("/download/{query_id}")
async def download_report(query_id: str):
    """Generate and stream a PDF report for the given query_id."""
    try:
        from reportlab.lib.pagesizes import A4
        from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
        from reportlab.lib.units import cm
        from reportlab.lib import colors
        from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
        from reportlab.lib.enums import TA_CENTER, TA_LEFT

        buf = io.BytesIO()
        doc = SimpleDocTemplate(buf, pagesize=A4, rightMargin=2*cm, leftMargin=2*cm, topMargin=2*cm, bottomMargin=2*cm)
        styles = getSampleStyleSheet()

        # Custom styles
        title_style = ParagraphStyle("Title", parent=styles["Heading1"], fontSize=20, textColor=colors.HexColor("#1a73e8"), alignment=TA_CENTER, spaceAfter=12)
        section_style = ParagraphStyle("Section", parent=styles["Heading2"], fontSize=13, textColor=colors.HexColor("#0d47a1"), spaceBefore=12, spaceAfter=6)
        body_style = ParagraphStyle("Body", parent=styles["Normal"], fontSize=10, leading=14, spaceAfter=4)
        label_style = ParagraphStyle("Label", parent=styles["Normal"], fontSize=9, textColor=colors.HexColor("#555555"), spaceAfter=2)

        story = []

        # Header
        story.append(Paragraph("SatQuery AI — Analysis Report", title_style))
        story.append(Paragraph("SIH26167 | ISRO Smart India Hackathon 2026", ParagraphStyle("sub", parent=styles["Normal"], fontSize=10, textColor=colors.grey, alignment=TA_CENTER)))
        story.append(Spacer(1, 0.4*cm))
        story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#1a73e8")))
        story.append(Spacer(1, 0.3*cm))

        data = _report_cache.get(query_id)

        if data:
            # Query info
            story.append(Paragraph("Query Information", section_style))
            story.append(Paragraph(f"<b>Query ID:</b> {data.get('query_id', query_id)}", body_style))
            story.append(Paragraph(f"<b>Question:</b> {data.get('question', 'N/A')}", body_style))

            # EarthQuery spec
            spec = data.get("earthquery_spec", {})
            if spec:
                story.append(Paragraph("EarthQuery Interpretation", section_style))
                rows = [["Field", "Value"]] + [[k, str(v)] for k, v in spec.items()]
                t = Table(rows, colWidths=[5*cm, 11*cm])
                t.setStyle(TableStyle([
                    ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1a73e8")),
                    ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                    ("FONTSIZE", (0, 0), (-1, -1), 9),
                    ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#f5f5f5")]),
                    ("GRID", (0, 0), (-1, -1), 0.5, colors.lightgrey),
                    ("LEFTPADDING", (0, 0), (-1, -1), 6),
                ]))
                story.append(t)

            # Sensor selection
            sensor = data.get("sensor_selection", {})
            if sensor:
                story.append(Paragraph("Sensor Selection", section_style))
                story.append(Paragraph(f"<b>Selected:</b> {sensor.get('selected_sensor', 'N/A')}", body_style))
                story.append(Paragraph(f"<b>Rationale:</b> {sensor.get('rationale', 'N/A')}", body_style))
                story.append(Paragraph(f"<b>Cloud Cover Estimate:</b> {sensor.get('cloud_cover_estimate', 'N/A')}%", body_style))

            # Confidence
            conf = data.get("confidence_breakdown", {})
            if conf:
                story.append(Paragraph("Confidence Breakdown (6-Component)", section_style))
                conf_rows = [["Component", "Score"]] + [
                    [k.replace("_", " ").title(), f"{v:.2f}" if isinstance(v, float) else str(v)]
                    for k, v in conf.items()
                ]
                ct = Table(conf_rows, colWidths=[9*cm, 7*cm])
                ct.setStyle(TableStyle([
                    ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#0d47a1")),
                    ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                    ("FONTSIZE", (0, 0), (-1, -1), 9),
                    ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#e8f5e9")]),
                    ("GRID", (0, 0), (-1, -1), 0.5, colors.lightgrey),
                    ("LEFTPADDING", (0, 0), (-1, -1), 6),
                ]))
                story.append(ct)

            # Answer
            answer = data.get("answer", "")
            if answer:
                story.append(Paragraph("Final Answer", section_style))
                story.append(Paragraph(answer.replace("\n", "<br/>"), body_style))

            # Execution trace summary
            trace = data.get("execution_trace", {})
            if trace:
                story.append(Paragraph("Execution Trace Summary", section_style))
                story.append(Paragraph(f"<b>Trace ID:</b> {trace.get('trace_id', 'N/A')}", body_style))
                story.append(Paragraph(f"<b>Total Duration:</b> {trace.get('total_duration_ms', 'N/A')} ms", body_style))
                steps = trace.get("steps", [])
                if steps:
                    step_rows = [["Step", "Component", "Status", "Duration (ms)"]]
                    for s in steps:
                        step_rows.append([s.get("step_name", ""), s.get("component", ""), s.get("status", ""), str(s.get("duration_ms", ""))])
                    st = Table(step_rows, colWidths=[5*cm, 4*cm, 3*cm, 4*cm])
                    st.setStyle(TableStyle([
                        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#424242")),
                        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                        ("FONTSIZE", (0, 0), (-1, -1), 8),
                        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#f5f5f5")]),
                        ("GRID", (0, 0), (-1, -1), 0.5, colors.lightgrey),
                        ("LEFTPADDING", (0, 0), (-1, -1), 4),
                    ]))
                    story.append(st)

        else:
            # Demo report when no cache entry
            story.append(Paragraph("Analysis Report", section_style))
            story.append(Paragraph(
                f"Report for query ID: {query_id}<br/><br/>"
                "This report was generated by SatQuery AI (SIH26167). "
                "Run a full query via the /query/analyze endpoint to populate detailed analysis results. "
                "The report will include: EarthQuery spec, sensor selection rationale, "
                "agent outputs, 6-component confidence breakdown, and execution trace.",
                body_style
            ))

        story.append(Spacer(1, 0.5*cm))
        story.append(HRFlowable(width="100%", thickness=0.5, color=colors.grey))
        story.append(Paragraph("Generated by SatQuery AI — SIH26167 | Team Antigravity | ISRO Smart India Hackathon 2026", ParagraphStyle("footer", parent=styles["Normal"], fontSize=8, textColor=colors.grey, alignment=TA_CENTER)))

        doc.build(story)
        buf.seek(0)

        return StreamingResponse(
            buf,
            media_type="application/pdf",
            headers={"Content-Disposition": f"attachment; filename=satquery_report_{query_id}.pdf"},
        )

    except ImportError:
        raise HTTPException(status_code=500, detail="reportlab not installed. Run: pip install reportlab")
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Report generation failed: {exc}")
