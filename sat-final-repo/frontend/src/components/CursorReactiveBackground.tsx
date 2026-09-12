import React, { useEffect, useRef } from 'react';

export default function CursorReactiveBackground() {
  const bgRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth;
      const ny = e.clientY / window.innerHeight;
      mouseRef.current.targetX = nx;
      mouseRef.current.targetY = ny;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Canvas cosmic particles & telemetry grid
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate telemetry star nodes
    const particleCount = 70;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? '#38bdf8' : '#818cf8',
      alpha: Math.random() * 0.6 + 0.2,
      depth: Math.random() * 0.8 + 0.2,
    }));

    const render = () => {
      // Lerp mouse
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      const mx = (mouseRef.current.x - 0.5) * 60;
      const my = (mouseRef.current.y - 0.5) * 60;

      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(${-mx * 0.5}px, ${-my * 0.5}px, 0) scale(1.05)`;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw interactive telemetry connecting lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const px = p.x + mx * p.depth;
        const py = p.y + my * p.depth;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const p2x = p2.x + mx * p2.depth;
          const p2y = p2.y + my * p2.depth;
          const dist = Math.hypot(px - p2x, py - p2y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(p2x, p2y);
            ctx.strokeStyle = '#38bdf8';
            ctx.globalAlpha = (1 - dist / 110) * 0.18;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {/* Parallax Nebula / Cosmic Space Mesh Background */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: '-5%',
          width: '110%',
          height: '110%',
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(14, 165, 233, 0.15) 0%, transparent 45%),
            radial-gradient(circle at 80% 60%, rgba(139, 92, 246, 0.16) 0%, transparent 50%),
            radial-gradient(circle at 50% 85%, rgba(6, 182, 212, 0.12) 0%, transparent 45%),
            radial-gradient(circle at 70% 15%, rgba(59, 130, 246, 0.12) 0%, transparent 40%)
          `,
          backgroundSize: 'cover',
          transition: 'transform 0.1s ease-out',
          opacity: 0.85,
        }}
      />

      {/* Interactive Cursor Particle Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          opacity: 0.75,
        }}
      />
    </div>
  );
}
