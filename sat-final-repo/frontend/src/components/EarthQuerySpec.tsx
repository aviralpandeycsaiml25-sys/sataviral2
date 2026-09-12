/**
 * EarthQuerySpec — "How I understood your question" panel.
 * Shows the compiled EarthQuerySpec so judges can verify query interpretation.
 */
import { useState } from 'react';
import type { EarthQuerySpec as EQSpec } from '../types';

interface Props { spec: EQSpec; }

const TASK_COLORS: Record<string, string> = {
  vqa: 'badge-blue',
  captioning: 'badge-cyan',
  grounding: 'badge-purple',
  change_detection: 'badge-amber',
  change_vqa: 'badge-amber',
  sar_optical_joint: 'badge-green',
  unknown: 'badge-red',
};

const TASK_ICONS: Record<string, string> = {
  vqa: '❓', captioning: '📝', grounding: '📍',
  change_detection: '🔄', change_vqa: '💧',
  sar_optical_joint: '📡', unknown: '❔',
};

export default function EarthQuerySpecPanel({ spec }: Props) {
  const [open, setOpen] = useState(true);

  return (
    <div className="card fade-in-up" id="earthquery-spec-panel">
      <button
        className="spec-toggle"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        id="spec-toggle-btn"
      >
        <span className="flex items-center gap-2">
          <span style={{ fontSize: '1.1rem' }}>🧠</span>
          <span className="section-label" style={{ margin: 0 }}>How I understood your question</span>
          <span className={`badge ${TASK_COLORS[spec.task_type]}`}>
            {TASK_ICONS[spec.task_type]} {spec.task_type.replace(/_/g, ' ')}
          </span>
        </span>
        <span className="toggle-arrow">{open ? '▲' : '▼'}</span>
      </button>

      <div className={`collapsible-content ${open ? 'open' : 'closed'}`}>
        <div className="divider" />
        <div className="spec-grid">
          <SpecRow label="Intent" value={spec.intent} highlight />
          <SpecRow label="Task type" value={spec.task_type.replace(/_/g, ' ')} />
          <SpecRow label="Requires 2 images" value={spec.requires_two_images ? 'Yes' : 'No'} />
          <SpecRow label="Sensor hint" value={spec.sensor_hint ?? 'any'} />
          {spec.temporal_context && (
            <SpecRow label="Temporal context" value={spec.temporal_context} />
          )}
          <SpecRow
            label="Extracted entities"
            value={spec.extracted_entities.length > 0 ? spec.extracted_entities.join(', ') : '(none detected)'}
          />
          <SpecRow label="Classification confidence" value={`${(spec.confidence * 100).toFixed(1)}%`} />
        </div>
      </div>

      <style>{`
        .spec-toggle {
          display: flex; align-items: center; justify-content: space-between;
          width: 100%; background: none; border: none; cursor: pointer; padding: 0;
          color: var(--text-primary);
        }
        .toggle-arrow { color: var(--text-muted); font-size: 0.75rem; }
        .spec-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; }
        @media (max-width: 600px) { .spec-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}

function SpecRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="spec-row">
      <p className="section-label">{label}</p>
      <p style={{ color: highlight ? 'var(--text-accent)' : 'var(--text-primary)', fontSize: '0.88rem', fontWeight: highlight ? 600 : 400 }}>
        {value}
      </p>
    </div>
  );
}
