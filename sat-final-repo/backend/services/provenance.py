"""
Provenance Tracker — Records an auditable execution trace for every query.

Each pipeline step records:
  - component name
  - input/output summary
  - timing
  - status

The trace is returned to the frontend and rendered as a clickable provenance graph.
"""
from __future__ import annotations
import time
import uuid
from contextlib import contextmanager
from typing import Any, Dict, List, Optional
from backend.schemas.response import TraceStep, ExecutionTrace


class ProvenanceTracker:
    def __init__(self):
        self._steps: List[TraceStep] = []
        self._start_time = time.perf_counter()
        self.trace_id = str(uuid.uuid4())[:8]

    def add_step(
        self,
        step_name: str,
        component: str,
        input_summary: str,
        output_summary: str,
        duration_ms: float,
        status: str = "success",
        metadata: Optional[Dict[str, Any]] = None,
    ) -> None:
        self._steps.append(TraceStep(
            step_id=f"{self.trace_id}-{len(self._steps)+1:02d}",
            step_name=step_name,
            component=component,
            input_summary=input_summary,
            output_summary=output_summary,
            duration_ms=round(duration_ms, 1),
            status=status,
            metadata=metadata or {},
        ))

    def build(self) -> ExecutionTrace:
        total_ms = round((time.perf_counter() - self._start_time) * 1000, 1)
        return ExecutionTrace(
            trace_id=self.trace_id,
            steps=self._steps,
            total_duration_ms=total_ms,
        )
