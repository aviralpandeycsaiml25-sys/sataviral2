/**
 * ConfidenceBreakdown — Renders the 6-component confidence breakdown.
 * Uses Chart.js radar chart + individual bar gauges.
 * All 6 required components (task_classification, sensor_compatibility,
 * model_output_quality, evidence_agreement, temporal_consistency,
 * answer_groundedness) are shown explicitly.
 */
import { useEffect, useRef } from 'react';
import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js';
import type { ConfidenceBreakdown as CB } from '../types';

Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

interface Props { breakdown: CB; }

const LABELS = [
  'Task Classification',
  'Sensor Compatibility',
  'Model Output Quality',
  'Evidence Agreement',
  'Temporal Consistency',
  'Answer Groundedness',
];
const KEYS: (keyof CB)[] = [
  'task_classification', 'sensor_compatibility', 'model_output_quality',
  'evidence_agreement', 'temporal_consistency', 'answer_groundedness',
];

function scoreColor(v: number) {
  if (v >= 0.85) return 'var(--accent-success)';
  if (v >= 0.65) return 'var(--accent-warning)';
  return 'var(--accent-danger)';
}

export default function ConfidenceBreakdown({ breakdown }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);
  const data = KEYS.map(k => Math.round((breakdown[k] as number) * 100));

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartRef.current) { chartRef.current.destroy(); }
    chartRef.current = new Chart(canvasRef.current, {
      type: 'radar',
      data: {
        labels: LABELS,
        datasets: [{
          label: 'Confidence',
          data,
          fill: true,
          backgroundColor: 'rgba(59,130,246,0.15)',
          borderColor: 'rgba(59,130,246,0.8)',
          pointBackgroundColor: 'rgba(6,182,212,1)',
          pointRadius: 4,
          borderWidth: 2,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        animation: { duration: 800, easing: 'easeInOutQuart' },
        scales: {
          r: {
            min: 0, max: 100,
            ticks: { stepSize: 25, color: 'rgba(148,163,184,0.6)', font: { size: 10 }, backdropColor: 'transparent' },
            grid: { color: 'rgba(255,255,255,0.06)' },
            pointLabels: { color: 'rgba(148,163,184,0.9)', font: { size: 11, family: 'Inter, sans-serif' } },
            angleLines: { color: 'rgba(255,255,255,0.06)' },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => `${ctx.label}: ${ctx.parsed.r}%`,
            },
          },
        },
      },
    });
    return () => { chartRef.current?.destroy(); };
  }, [breakdown]);

  const overall = Math.round(breakdown.overall * 100);

  return (
    <div className="card fade-in-up" id="confidence-breakdown-panel">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="section-label">📊 Confidence Breakdown</p>
          <p className="text-sm text-muted">6-component analysis · SIH26167 §4.3</p>
        </div>
        <div className="overall-score" style={{ color: scoreColor(breakdown.overall) }}>
          <span className="overall-number">{overall}</span>
          <span className="overall-label">/ 100</span>
        </div>
      </div>

      {/* Radar chart */}
      <div className="radar-wrap">
        <canvas ref={canvasRef} id="confidence-radar-chart" />
      </div>

      {/* Bar gauges for each component */}
      <div className="gauge-list">
        {KEYS.map((k, i) => {
          const val = breakdown[k] as number;
          const pct = Math.round(val * 100);
          return (
            <div key={k} className="gauge-row" id={`gauge-${k}`}>
              <span className="gauge-label">{LABELS[i]}</span>
              <div className="progress-bar gauge-bar">
                <div
                  className="progress-bar-fill"
                  style={{
                    width: `${pct}%`,
                    background: `linear-gradient(90deg, ${scoreColor(val)}, ${scoreColor(val)}88)`,
                  }}
                />
              </div>
              <span className="gauge-val" style={{ color: scoreColor(val) }}>{pct}%</span>
            </div>
          );
        })}
      </div>

      <style>{`
        .overall-score { text-align: right; }
        .overall-number { font-size: 2rem; font-weight: 800; line-height: 1; }
        .overall-label { font-size: 0.85rem; font-weight: 600; opacity: 0.7; }
        .radar-wrap { max-width: 300px; margin: 0 auto 1.25rem; }
        .gauge-list { display: flex; flex-direction: column; gap: 0.55rem; }
        .gauge-row { display: grid; grid-template-columns: 160px 1fr 42px; align-items: center; gap: 0.6rem; }
        .gauge-label { font-size: 0.75rem; font-weight: 600; color: var(--text-secondary); white-space: nowrap; }
        .gauge-bar { height: 8px; }
        .gauge-val { font-size: 0.78rem; font-weight: 700; text-align: right; font-family: var(--font-mono); }
        @media (max-width: 500px) { .gauge-row { grid-template-columns: 1fr; } .gauge-label { font-size: 0.7rem; } }
      `}</style>
    </div>
  );
}
