import React, { useRef, useState, useCallback, useEffect } from 'react';

export type Point = [number, number]; // [x, y] normalized 0.0 to 1.0

interface PolygonAnnotatorProps {
  imageSrc: string;
  polygon: Point[];
  onPolygonChange: (poly: Point[]) => void;
  sceneLabel: string;
  isDrawing: boolean;
  onToggleDrawing: () => void;
  accentColor?: string;
}

export default function PolygonAnnotator({
  imageSrc,
  polygon,
  onPolygonChange,
  sceneLabel,
  isDrawing,
  onToggleDrawing,
  accentColor = '#38bdf8',
}: PolygonAnnotatorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPoints, setCurrentPoints] = useState<Point[]>(polygon);
  const [mousePos, setMousePos] = useState<Point | null>(null);
  const [drawMode, setDrawMode] = useState<'freehand' | 'polygon'>('freehand');
  const isMouseDownRef = useRef(false);

  // Sync external polygon changes
  useEffect(() => {
    setCurrentPoints(polygon);
  }, [polygon]);

  // Convert mouse event to normalized coordinates [0.0 - 1.0]
  const getNormalizedCoords = useCallback((e: React.MouseEvent<HTMLDivElement>): Point | null => {
    if (!containerRef.current) return null;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    return [Math.round(x * 1000) / 1000, Math.round(y * 1000) / 1000];
  }, []);

  // Freehand Mouse Down
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDrawing) return;
    // Don't draw if user clicked on the toolbar or any button
    if ((e.target as HTMLElement).closest('.annotator-toolbar')) return;

    const pt = getNormalizedCoords(e);
    if (!pt) return;

    if (drawMode === 'freehand') {
      isMouseDownRef.current = true;
      setCurrentPoints([pt]);
      onPolygonChange([pt]);
    }
  };

  // Mouse Move for both Freehand and Point Preview
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDrawing) return;
    if ((e.target as HTMLElement).closest('.annotator-toolbar')) return;

    const pt = getNormalizedCoords(e);
    if (!pt) return;
    setMousePos(pt);

    if (drawMode === 'freehand' && isMouseDownRef.current) {
      setCurrentPoints((prev) => {
        if (prev.length === 0) return [pt];
        const last = prev[prev.length - 1];
        const dist = Math.hypot(pt[0] - last[0], pt[1] - last[1]);
        if (dist > 0.015) {
          const next = [...prev, pt];
          onPolygonChange(next);
          return next;
        }
        return prev;
      });
    }
  };

  // Freehand Mouse Up (Auto-closes freehand shape)
  const handleMouseUp = (e?: React.MouseEvent<HTMLDivElement>) => {
    if (!isDrawing) return;
    if (e && (e.target as HTMLElement).closest?.('.annotator-toolbar')) return;

    if (drawMode === 'freehand' && isMouseDownRef.current) {
      isMouseDownRef.current = false;
      if (currentPoints.length >= 3) {
        onPolygonChange(currentPoints);
        onToggleDrawing();
      }
    }
  };

  // Handle canvas click when drawing point-by-point
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDrawing || drawMode !== 'polygon') return;
    // Prevent toolbar or button clicks from adding a point
    if ((e.target as HTMLElement).closest('.annotator-toolbar')) return;

    const pt = getNormalizedCoords(e);
    if (!pt) return;

    // Check if clicked near first vertex to close polygon
    if (currentPoints.length >= 3) {
      const [firstX, firstY] = currentPoints[0];
      const dist = Math.hypot(pt[0] - firstX, pt[1] - firstY);
      if (dist < 0.05) {
        onPolygonChange(currentPoints);
        onToggleDrawing();
        return;
      }
    }

    const nextPoints = [...currentPoints, pt];
    setCurrentPoints(nextPoints);
    onPolygonChange(nextPoints);
  };

  // Complete polygon
  const handleFinish = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentPoints.length >= 3) {
      onPolygonChange(currentPoints);
      onToggleDrawing();
    }
  };

  // Clear polygon
  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPoints([]);
    onPolygonChange([]);
    setMousePos(null);
  };

  // Quick preset (center rectangular polygon)
  const handleCenterPreset = (e: React.MouseEvent) => {
    e.stopPropagation();
    const preset: Point[] = [
      [0.2, 0.2],
      [0.8, 0.2],
      [0.8, 0.8],
      [0.2, 0.8],
    ];
    setCurrentPoints(preset);
    onPolygonChange(preset);
  };

  const hasPolygon = currentPoints.length >= 3;

  return (
    <div
      ref={containerRef}
      className={`polygon-annotator-container ${isDrawing ? 'drawing-active' : ''}`}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => {
        setMousePos(null);
        if (isMouseDownRef.current) {
          handleMouseUp();
        }
      }}
      title={isDrawing ? (drawMode === 'freehand' ? 'Hold and drag mouse to freely draw any shape' : 'Click points to create polygon') : ''}
    >
      {/* Background satellite image */}
      <img src={imageSrc} alt={sceneLabel} className="annotator-bg-image" />

      {/* SVG overlay for drawing and displaying polygon */}
      <svg className="polygon-svg-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Closed completed polygon */}
        {hasPolygon && (
          <polygon
            points={currentPoints.map(([x, y]) => `${x * 100},${y * 100}`).join(' ')}
            fill={accentColor}
            fillOpacity="0.25"
            stroke={accentColor}
            strokeWidth="2.2"
            strokeDasharray={isDrawing ? '3,2' : undefined}
            className="polygon-filled-shape"
          />
        )}

        {/* In-progress polyline connecting vertices */}
        {isDrawing && currentPoints.length > 0 && !hasPolygon && (
          <polyline
            points={currentPoints.map(([x, y]) => `${x * 100},${y * 100}`).join(' ')}
            fill="none"
            stroke={accentColor}
            strokeWidth="2.2"
            strokeDasharray="3,2"
          />
        )}

        {/* Dynamic preview line to current mouse position (polygon mode) */}
        {isDrawing && drawMode === 'polygon' && currentPoints.length > 0 && mousePos && (
          <line
            x1={`${currentPoints[currentPoints.length - 1][0] * 100}`}
            y1={`${currentPoints[currentPoints.length - 1][1] * 100}`}
            x2={`${mousePos[0] * 100}`}
            y2={`${mousePos[1] * 100}`}
            stroke={accentColor}
            strokeWidth="1.5"
            strokeDasharray="2,2"
            opacity="0.85"
          />
        )}

        {/* Vertex nodes */}
        {currentPoints.map(([x, y], idx) => (
          <g key={idx}>
            <circle
              cx={`${x * 100}`}
              cy={`${y * 100}`}
              r={idx === 0 && isDrawing && currentPoints.length >= 3 ? 3.5 : (drawMode === 'freehand' ? 1.5 : 2.2)}
              fill={idx === 0 && isDrawing && currentPoints.length >= 3 ? '#10b981' : accentColor}
              stroke="#fff"
              strokeWidth="0.8"
              className={idx === 0 && isDrawing && currentPoints.length >= 3 ? 'closing-node' : ''}
            />
          </g>
        ))}
      </svg>

      {/* Floating Toolbar at top of image */}
      <div className="annotator-toolbar">
        <button
          type="button"
          className={`annotator-btn ${isDrawing ? 'btn-active' : ''}`}
          onClick={e => {
            e.stopPropagation();
            onToggleDrawing();
          }}
          title={isDrawing ? 'Stop drawing' : 'Draw shape on this scene'}
        >
          <span>{isDrawing ? '✏️ Drawing Active' : '✏️ Draw Shape'}</span>
        </button>

        {isDrawing && (
          <div className="mode-toggle-group">
            <button
              type="button"
              className={`mode-btn ${drawMode === 'freehand' ? 'active' : ''}`}
              onClick={e => { e.stopPropagation(); setDrawMode('freehand'); }}
              title="Drag mouse freely to trace any shape or lake"
            >
              🖌️ Freehand
            </button>
            <button
              type="button"
              className={`mode-btn ${drawMode === 'polygon' ? 'active' : ''}`}
              onClick={e => { e.stopPropagation(); setDrawMode('polygon'); }}
              title="Click point by point"
            >
              📐 Points
            </button>
          </div>
        )}

        {isDrawing && currentPoints.length >= 3 && (
          <button
            type="button"
            className="annotator-btn btn-finish"
            onClick={handleFinish}
            title="Complete shape"
          >
            <span>✔ Finish Shape</span>
          </button>
        )}

        {!hasPolygon && !isDrawing && (
          <button
            type="button"
            className="annotator-btn btn-preset"
            onClick={handleCenterPreset}
            title="Place center Region of Interest polygon"
          >
            <span>🎯 Center ROI Preset</span>
          </button>
        )}

        {hasPolygon && (
          <button
            type="button"
            className="annotator-btn btn-clear"
            onClick={handleClear}
            title="Clear shape"
          >
            <span>✕ Clear</span>
          </button>
        )}

        {hasPolygon && (
          <div className="annotator-stat-badge">
            <span>📐 ROI: {currentPoints.length} pts</span>
          </div>
        )}
      </div>

      {/* Helper tooltip when drawing */}
      {isDrawing && (
        <div className="drawing-helper-toast">
          <span>
            {drawMode === 'freehand'
              ? '🖱️ Click and drag mouse over any lake/region to freely sketch a shape'
              : `Click to place points (${currentPoints.length} pts). Click P1 or 'Finish' to complete.`}
          </span>
        </div>
      )}

      <style>{`
        .polygon-annotator-container {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 380px;
          border-radius: 8px;
          overflow: hidden;
          background: #020617;
          cursor: default;
          user-select: none;
          display: flex;
        }
        .polygon-annotator-container.drawing-active {
          cursor: crosshair;
        }
        .annotator-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .polygon-svg-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .polygon-filled-shape {
          filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.5));
        }
        .closing-node {
          animation: pulseNode 1.2s infinite ease-in-out;
        }
        @keyframes pulseNode {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.8; }
        }
        .annotator-toolbar {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          z-index: 20;
          pointer-events: auto;
          background: rgba(3, 7, 18, 0.82);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 8px;
          padding: 6px 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);
        }
        .annotator-btn {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #e2e8f0;
          font-size: 0.76rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: all 0.15s ease;
          font-family: inherit;
        }
        .annotator-btn:hover {
          background: rgba(255, 255, 255, 0.16);
          color: #ffffff;
          transform: translateY(-1px);
        }
        .annotator-btn.btn-active {
          background: rgba(14, 165, 233, 0.35);
          color: #7dd3fc;
          border-color: rgba(56, 189, 248, 0.8);
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.3);
        }
        .annotator-btn.btn-finish {
          background: rgba(16, 185, 129, 0.35);
          color: #6ee7b7;
          border-color: rgba(16, 185, 129, 0.7);
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.3);
        }
        .annotator-btn.btn-finish:hover {
          background: rgba(16, 185, 129, 0.5);
          color: #fff;
        }
        .annotator-btn.btn-clear {
          background: rgba(239, 68, 68, 0.15);
          border-color: rgba(239, 68, 68, 0.4);
          color: #fca5a5;
        }
        .annotator-btn.btn-clear:hover {
          background: rgba(239, 68, 68, 0.35);
          color: #fff;
        }
        .annotator-btn.btn-preset {
          background: rgba(234, 179, 8, 0.15);
          border-color: rgba(234, 179, 8, 0.4);
          color: #fde047;
        }
        .annotator-btn.btn-preset:hover {
          background: rgba(234, 179, 8, 0.3);
          color: #fff;
        }
        .annotator-stat-badge {
          margin-left: auto;
          font-size: 0.72rem;
          font-weight: 700;
          color: #38bdf8;
          padding: 3px 8px;
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.35);
          border-radius: 6px;
        }
        .mode-toggle-group {
          display: flex;
          align-items: center;
          background: rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          padding: 2px;
          gap: 2px;
        }
        .mode-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .mode-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
        }
        .mode-btn.active {
          background: rgba(56, 189, 248, 0.25);
          color: #38bdf8;
          font-weight: 700;
        }
        .drawing-helper-toast {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(3, 7, 18, 0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(56, 189, 248, 0.4);
          border-radius: 999px;
          padding: 6px 18px;
          font-size: 0.74rem;
          color: #bae6fd;
          text-align: center;
          z-index: 25;
          pointer-events: none;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.6);
          white-space: nowrap;
          max-width: 90%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
}
