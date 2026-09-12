/**
 * ProvenanceGraph — Renders the clickable execution trace / provenance graph.
 * Each pipeline step is shown as a node with status, timing, and expandable I/O.
 */
import { useState } from 'react';
import type { ExecutionTrace, TraceStep } from '../types';

interface Props { trace: ExecutionTrace; }

const STATUS_CONFIG: Record<string, { icon: string; color: string; badge: string }> = {
  success: { icon: '✓', color: 'var(--accent-success)', badge: 'badge-green' },
  warning: { icon: '⚠', color: 'var(--accent-warning)', badge: 'badge-amber' },
  error:   { icon: '✕', color: 'var(--accent-danger)',  badge: 'badge-red' },
  skipped: { icon: '—', color: 'var(--text-muted)',      badge: 'badge-blue' },
};

export default function ProvenanceGraph({ trace }: Props) {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  const toggle = (id: string) => setExpandedStep(prev => prev === id ? null : id);

  return (
    <div className="card fade-in-up" id="provenance-graph-panel">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="section-label">🔗 Execution Trace</p>
          <p className="text-sm text-muted">
            Trace ID: <code className="text-mono" style={{ color: 'var(--text-accent)' }}>{trace.trace_id}</code>
            &nbsp;·&nbsp;{trace.steps.length} steps&nbsp;·&nbsp;{trace.total_duration_ms.toFixed(0)} ms total
          </p>
        </div>
        <span className="badge badge-blue">Auditable</span>
      </div>

      <div className="trace-pipeline">
        {trace.steps.map((step, i) => (
          <StepNode
            key={step.step_id}
            step={step}
            index={i}
            isLast={i === trace.steps.length - 1}
            expanded={expandedStep === step.step_id}
            onToggle={() => toggle(step.step_id)}
          />
        ))}
      </div>

      <style>{`
        .trace-pipeline { display: flex; flex-direction: column; gap: 0; }
      `}</style>
    </div>
  );
}

function StepNode({
  step, index, isLast, expanded, onToggle
}: {
  step: TraceStep; index: number; isLast: boolean; expanded: boolean; onToggle: () => void;
}) {
  const sc = STATUS_CONFIG[step.status] ?? STATUS_CONFIG.success;

  return (
    <div className="step-wrap" id={`trace-step-${step.step_id}`}>
      <div className="step-connector-col">
        <div className="step-dot" style={{ borderColor: sc.color, color: sc.color }}>
          {sc.icon}
        </div>
        {!isLast && <div className="step-line" />}
      </div>
      <div className="step-body">
        <div className="step-header" onClick={onToggle} role="button" tabIndex={0}
             onKeyDown={e => e.key === 'Enter' && onToggle()}>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="step-num text-xs text-muted">#{index + 1}</span>
            <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>{step.step_name}</span>
            <span className={`badge ${sc.badge}`}>{step.status}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {step.duration_ms.toFixed(1)} ms
            </span>
            <span className="text-xs" style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>{expanded ? '▲' : '▼'}</span>
          </div>
        </div>
        <p className="step-component text-xs text-muted" style={{ marginTop: '2px' }}>{step.component}</p>

        {expanded && (
          <div className="step-detail fade-in">
            <div className="step-io">
              <div>
                <p className="section-label" style={{ fontSize: '0.65rem' }}>Input</p>
                <p className="text-xs text-secondary">{step.input_summary}</p>
              </div>
              <div>
                <p className="section-label" style={{ fontSize: '0.65rem' }}>Output</p>
                <p className="text-xs text-secondary">{step.output_summary}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .step-wrap { display: flex; gap: 0.75rem; }
        .step-connector-col { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; width: 28px; }
        .step-dot { width: 28px; height: 28px; border-radius: 50%; border: 2px solid; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; background: var(--bg-card); flex-shrink: 0; }
        .step-line { flex: 1; width: 2px; background: linear-gradient(180deg, rgba(59,130,246,0.25), rgba(59,130,246,0.06)); min-height: 16px; }
        .step-body { flex: 1; padding-bottom: 1rem; min-width: 0; }
        .step-header { display: flex; align-items: center; justify-content: space-between; cursor: pointer; padding: 4px 8px; border-radius: var(--radius-sm); transition: background 0.15s; }
        .step-header:hover { background: rgba(255,255,255,0.04); }
        .step-num { min-width: 18px; }
        .step-component { padding-left: 8px; }
        .step-detail { margin-top: 0.5rem; padding: 0.65rem; background: rgba(0,0,0,0.25); border-radius: var(--radius-sm); border: 1px solid var(--border-card); }
        .step-io { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
        @media (max-width: 500px) { .step-io { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
