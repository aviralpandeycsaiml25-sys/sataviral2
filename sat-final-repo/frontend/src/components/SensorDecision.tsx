/**
 * SensorDecision — Shows the sensor selection rationale prominently.
 * Makes the sensor decision visible to judges (not just a backend log line).
 */
import type { SensorSelection } from '../types';

interface Props { sensor: SensorSelection; }

export default function SensorDecision({ sensor }: Props) {
  const isMultiModal = sensor.selected_sensor.toLowerCase().includes('multi');
  const isSAR = sensor.selected_sensor.toLowerCase().includes('sar');

  const icon = isMultiModal ? '🛰+📡' : isSAR ? '📡' : '🛰';
  const accentColor = isMultiModal
    ? 'var(--accent-tertiary)'
    : isSAR
      ? 'var(--accent-warning)'
      : 'var(--accent-secondary)';

  return (
    <div className="card sensor-card fade-in-up" id="sensor-decision-panel">
      <p className="section-label">📡 Sensor Selection</p>
      <div className="sensor-header">
        <span className="sensor-icon" style={{ color: accentColor }}>{icon}</span>
        <div>
          <h3 style={{ color: accentColor, fontSize: '0.95rem' }}>{sensor.selected_sensor}</h3>
          {sensor.fallback_considered && (
            <span className="badge badge-amber" style={{ marginTop: '4px' }}>⚠ Fallback considered</span>
          )}
        </div>
      </div>
      <p className="sensor-rationale">{sensor.rationale}</p>
      {sensor.cloud_cover_estimate !== null && (
        <div className="cloud-row">
          <span className="text-xs text-muted">☁ Cloud cover estimate</span>
          <div className="cloud-bar-wrap">
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${Math.min(sensor.cloud_cover_estimate, 100)}%`,
                  background: sensor.cloud_cover_estimate > 25
                    ? 'linear-gradient(90deg, var(--accent-warning), var(--accent-danger))'
                    : 'linear-gradient(90deg, var(--accent-success), var(--accent-secondary))',
                }}
              />
            </div>
            <span className="text-xs" style={{ color: sensor.cloud_cover_estimate > 25 ? 'var(--accent-warning)' : 'var(--accent-success)' }}>
              {sensor.cloud_cover_estimate.toFixed(1)}%
            </span>
          </div>
        </div>
      )}
      <style>{`
        .sensor-header { display: flex; align-items: flex-start; gap: 0.75rem; margin: 0.6rem 0 0.5rem; }
        .sensor-icon { font-size: 1.8rem; line-height: 1; flex-shrink: 0; }
        .sensor-rationale { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; }
        .cloud-row { margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.3rem; }
        .cloud-bar-wrap { display: flex; align-items: center; gap: 0.5rem; }
        .cloud-bar-wrap .progress-bar { flex: 1; }
      `}</style>
    </div>
  );
}
