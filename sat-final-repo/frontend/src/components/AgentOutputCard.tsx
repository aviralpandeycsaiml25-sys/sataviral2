/**
 * AgentOutputCard — Renders a single specialist agent's result.
 * Shows task, score, evidence regions count, and key result fields.
 */
import { useState } from 'react';
import type { AgentOutput } from '../types';

interface Props { output: AgentOutput; index: number; }

const AGENT_COLORS: Record<string, string> = {
  vqa_agent:              'var(--accent-primary)',
  caption_agent:          'var(--accent-secondary)',
  grounding_agent:        'var(--accent-tertiary)',
  change_detection_agent: 'var(--accent-warning)',
  change_vqa_agent:       'var(--accent-warning)',
  sar_optical_agent:      'var(--accent-success)',
};

export default function AgentOutputCard({ output, index }: Props) {
  const [expanded, setExpanded] = useState(true);
  const color = AGENT_COLORS[output.agent_id] ?? 'var(--accent-primary)';
  const score = Math.round(output.raw_score * 100);

  return (
    <div
      className="card agent-card fade-in-up"
      id={`agent-card-${output.agent_id}`}
      style={{ animationDelay: `${index * 0.07}s`, borderLeft: `3px solid ${color}` }}
    >
      {/* Header */}
      <div className="agent-header" onClick={() => setExpanded(e => !e)}>
        <div className="agent-title-row">
          <span className="agent-badge" style={{ color, borderColor: color }}>
            Agent {index + 1}
          </span>
          <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{output.agent_name}</span>
          {output.error && <span className="badge badge-red">Error</span>}
        </div>
        <div className="agent-meta">
          <ScoreRing score={score} color={color} />
          <span className="toggle-arrow">{expanded ? '▲' : '▼'}</span>
        </div>
      </div>

      {/* Task label */}
      <p className="text-xs text-muted" style={{ marginTop: '4px' }}>{output.task}</p>

      {/* Evidence regions summary */}
      {output.evidence_regions && output.evidence_regions.length > 0 && (
        <div className="evidence-chips">
          {output.evidence_regions.map((r, i) => (
            <span key={i} className="badge badge-blue">
              📌 {r.label} ({(r.confidence * 100).toFixed(0)}%)
            </span>
          ))}
        </div>
      )}

      {/* Expanded detail */}
      <div className={`collapsible-content ${expanded ? 'open' : 'closed'}`}>
        <div className="divider" />
        {output.error ? (
          <p className="text-sm" style={{ color: 'var(--accent-danger)' }}>⚠ {output.error}</p>
        ) : (
          <ResultFields result={output.result} />
        )}
      </div>

      <style>{`
        .agent-card { cursor: default; }
        .agent-header { display: flex; align-items: flex-start; justify-content: space-between; cursor: pointer; }
        .agent-title-row { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
        .agent-badge { font-size: 0.68rem; font-weight: 800; text-transform: uppercase; border: 1px solid; border-radius: 4px; padding: 1px 6px; }
        .agent-meta { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; }
        .evidence-chips { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.5rem; }
        .score-ring { position: relative; width: 36px; height: 36px; flex-shrink: 0; }
        .score-ring svg { transform: rotate(-90deg); }
        .score-ring .score-text { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; font-weight: 700; }
      `}</style>
    </div>
  );
}

function ScoreRing({ score, color }: { score: number; color: string }) {
  const r = 14, c = 2 * Math.PI * r;
  const filled = (score / 100) * c;
  return (
    <div className="score-ring">
      <svg width="36" height="36" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
        <circle
          cx="18" cy="18" r={r} fill="none"
          stroke={color} strokeWidth="3"
          strokeDasharray={`${filled} ${c}`}
          strokeLinecap="round"
          style={{ transition: 'stroke-dasharray 0.8s ease' }}
        />
      </svg>
      <div className="score-text" style={{ color }}>{score}</div>
    </div>
  );
}

function ResultFields({ result }: { result: Record<string, unknown> }) {
  const PRIORITY_KEYS = ['answer', 'caption', 'change_type', 'change_map_description', 'severity', 'changed_area_km2', 'change_percent', 'fusion_insights', 'num_objects_detected', 'land_cover_distribution'];
  const entries = Object.entries(result)
    .filter(([k]) => !k.includes('inference_time') && k !== 'model')
    .sort(([a], [b]) => {
      const ai = PRIORITY_KEYS.indexOf(a), bi = PRIORITY_KEYS.indexOf(b);
      return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    });

  return (
    <div className="result-fields">
      {entries.map(([key, val]) => {
        const label = key.replace(/_/g, ' ');
        if (Array.isArray(val)) {
          return (
            <div key={key} className="rf-row">
              <span className="rf-label">{label}</span>
              <ul className="rf-list">
                {(val as string[]).map((item, i) => <li key={i}>{String(item)}</li>)}
              </ul>
            </div>
          );
        }
        if (typeof val === 'object' && val !== null) {
          return (
            <div key={key} className="rf-row">
              <span className="rf-label">{label}</span>
              <div className="rf-dict">
                {Object.entries(val as Record<string, unknown>).map(([k, v]) => (
                  <span key={k} className="rf-chip">
                    <span style={{ color: 'var(--text-muted)' }}>{k.replace(/_/g, ' ')}: </span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{String(v)}</span>
                  </span>
                ))}
              </div>
            </div>
          );
        }
        return (
          <div key={key} className="rf-row">
            <span className="rf-label">{label}</span>
            <span className="rf-value">{String(val)}</span>
          </div>
        );
      })}
      <style>{`
        .result-fields { display: flex; flex-direction: column; gap: 0.5rem; }
        .rf-row { display: grid; grid-template-columns: 140px 1fr; gap: 0.5rem; align-items: baseline; }
        .rf-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); white-space: nowrap; }
        .rf-value { font-size: 0.85rem; color: var(--text-secondary); }
        .rf-list { font-size: 0.82rem; color: var(--text-secondary); padding-left: 1rem; line-height: 1.7; }
        .rf-dict { display: flex; flex-wrap: wrap; gap: 0.3rem; }
        .rf-chip { display: inline-flex; gap: 2px; font-size: 0.75rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 4px; padding: 2px 6px; }
        @media (max-width: 500px) { .rf-row { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
