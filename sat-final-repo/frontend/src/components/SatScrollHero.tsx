import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// ── Config ──────────────────────────────────────────────────────────────────
const FRAME_COUNT = 360;
const FRAME_START = 1;
const SEQ_PATH    = '/SATQUERY-SEQUENCE/sat_';
const SEQ_EXT     = '.webp';

function frameSrc(i: number) {
  return `${SEQ_PATH}${String(i).padStart(3, '0')}${SEQ_EXT}`;
}

// ── Loading HUD ──────────────────────────────────────────────────────────────
function LoadingHUD({ progress }: { progress: number }) {
  const pct  = Math.round(progress * 100);
  const r    = 54;
  const circ = 2 * Math.PI * r;
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#030712',
        zIndex: 50,
      }}
    >
      <div style={{ position: 'relative', width: '128px', height: '128px', marginBottom: '24px' }}>
        <svg style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }} viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(0,240,255,0.08)" strokeWidth="3" />
          <circle cx="60" cy="60" r={r} fill="none" stroke="#00f0ff" strokeWidth="3"
            strokeDasharray={circ}
            strokeDashoffset={circ * (1 - progress)}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
          />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#67e8f9', fontFamily: 'monospace', fontSize: '1.25rem', fontWeight: 'bold' }}>{pct}%</span>
        </div>
      </div>
      <p style={{ fontFamily: 'monospace', color: '#22d3ee', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
        INITIALIZING ORBITAL LINK...
      </p>
      <div style={{ marginTop: '16px', width: '192px', height: '1px', backgroundColor: 'rgba(22, 78, 99, 0.4)', overflow: 'hidden' }}>
        <div style={{ height: '100%', backgroundColor: 'rgba(34, 211, 238, 0.6)', width: `${pct}%`, transition: 'width 0.1s linear' }} />
      </div>
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────
export default function SatScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const vignetteRef  = useRef<HTMLDivElement>(null);
  const ctxRef       = useRef<CanvasRenderingContext2D | null>(null);
  const imagesRef    = useRef<HTMLImageElement[]>([]);
  const frameRef     = useRef(0);
  const rafRef       = useRef<number | null>(null);

  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded,     setIsLoaded]     = useState(false);

  const { scrollYProgress } = useScroll({ target: containerRef });

  // ── Draw ───────────────────────────────────────────────────────────────────
  const draw = useCallback((idx: number) => {
    const canvas = canvasRef.current;
    const clampedIdx = Math.max(0, Math.min(FRAME_COUNT - 1, idx));
    const img = imagesRef.current[clampedIdx];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
    
    if (!ctxRef.current) {
      ctxRef.current = canvas.getContext('2d');
    }
    const ctx = ctxRef.current;
    if (!ctx) return;

    // Use logical (CSS) pixel dimensions — context is already dpr-scaled
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    const scale = Math.min(cw / img.naturalWidth, ch / img.naturalHeight);
    const sw    = img.naturalWidth  * scale;
    const sh    = img.naturalHeight * scale;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, (cw - sw) / 2, (ch - sh) / 2, sw, sh);

    // Light corner vignette
    const v = ctx.createRadialGradient(cw / 2, ch / 2, ch * 0.38, cw / 2, ch / 2, ch * 0.85);
    v.addColorStop(0, 'rgba(3,7,18,0)');
    v.addColorStop(1, 'rgba(3,7,18,0.40)');
    ctx.fillStyle = v;
    ctx.fillRect(0, 0, cw, ch);
  }, []);

  // ── Resize ─────────────────────────────────────────────────────────────────
  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = window.innerWidth  * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width  = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctxRef.current = ctx;
    }
    draw(frameRef.current);
  }, [draw]);

  // ── Preload ────────────────────────────────────────────────────────────────
  useEffect(() => {
    let done = 0;
    const imgs: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = 'async';
      img.src   = frameSrc(FRAME_START + i);
      const onDone = () => {
        done++;
        setLoadProgress(done / FRAME_COUNT);
        if (done === FRAME_COUNT) setIsLoaded(true);
      };
      img.onload  = onDone;
      img.onerror = onDone;
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [resize]);

  useEffect(() => {
    if (isLoaded) { resize(); draw(0); }
  }, [isLoaded, resize, draw]);

  // ── High-Precision Smooth Frame Engine (Zero-Jitter, 60+ FPS) ───────────
  useEffect(() => {
    if (!isLoaded) return;

    let targetProgress = 0;
    let currentProgress = 0;
    let animId: number | null = null;

    const updateScrollTarget = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;
      
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      targetProgress = progress;
    };

    const renderLoop = () => {
      // Damped smooth lerp: catches up smoothly even at tiny fractional scroll increments
      const delta = targetProgress - currentProgress;
      
      if (Math.abs(delta) > 0.00001) {
        currentProgress += delta * 0.18;
      } else {
        currentProgress = targetProgress;
      }

      const frameIndex = Math.round(currentProgress * (FRAME_COUNT - 1));
      const clampedFrame = Math.max(0, Math.min(FRAME_COUNT - 1, frameIndex));

      if (clampedFrame !== frameRef.current) {
        frameRef.current = clampedFrame;
        draw(clampedFrame);
      }

      if (vignetteRef.current) {
        const fade = Math.max(0, Math.min(1, (currentProgress - 0.92) / 0.08));
        vignetteRef.current.style.opacity = String(fade);
      }

      animId = requestAnimationFrame(renderLoop);
    };

    // Initialize position
    updateScrollTarget();
    currentProgress = targetProgress;
    const initialFrame = Math.round(currentProgress * (FRAME_COUNT - 1));
    frameRef.current = initialFrame;
    draw(initialFrame);

    window.addEventListener('scroll', updateScrollTarget, { passive: true });
    animId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('scroll', updateScrollTarget);
      if (animId !== null) cancelAnimationFrame(animId);
    };
  }, [isLoaded, draw]);

  return (
    <div
      ref={containerRef}
      style={{
        height: '450vh',
        position: 'relative',
        width: '100%',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          backgroundColor: '#030712',
          zIndex: 10,
        }}
      >
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />

        {/* Loading screen */}
        {!isLoaded && <LoadingHUD progress={loadProgress} />}

        {/* Exit gentle vignette fade into dashboard */}
        <div
          ref={vignetteRef}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 0%, rgba(3,7,18,0.4) 60%, rgba(6,10,20,1) 100%)',
            pointerEvents: 'none',
            opacity: 0,
            transition: 'opacity 0.05s linear',
          }}
        />
      </div>
    </div>
  );
}
