'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const PARTICLE_COUNT = 80;
const BASE_SPEED = 0.15;
const MOUSE_RADIUS = 110;
const MOUSE_FORCE = 2.5;
const CONNECTION_DIST = 90;

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  // Mouse stored in ref — never causes a re-render
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;

    const setSize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      canvas.width = W;
      canvas.height = H;
    };
    setSize();

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * BASE_SPEED,
      vy: (Math.random() - 0.5) * BASE_SPEED,
      size: Math.random() * 2.4 + 0.6,
      opacity: Math.random() * 0.30 + 0.08,
    }));

    // ── Event handlers ──────────────────────────────────────────────
    // pointermove is slightly cheaper than mousemove; passive: true removes
    // the overhead of the browser checking if we call preventDefault().
    const onPointerMove = (e: PointerEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };
    const onPointerLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };
    const onResize = () => {
      setSize();
      for (const p of particles) {
        if (p.x > W) p.x = Math.random() * W;
        if (p.y > H) p.y = Math.random() * H;
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('resize', onResize);

    // ── Draw loop ────────────────────────────────────────────────────
    const animate = () => {
      ctx.clearRect(0, 0, W, H);

      const { x: mx, y: my, active } = mouseRef.current;

      // ── Update + draw particles ────────────────────────────────────
      for (const p of particles) {
        // Mouse repulsion — O(n), only when mouse is on canvas
        if (active) {
          const dx = p.x - mx;
          const dy = p.y - my;
          // Bounding-box pre-check avoids sqrt for distant particles
          if (Math.abs(dx) < MOUSE_RADIUS && Math.abs(dy) < MOUSE_RADIUS) {
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < MOUSE_RADIUS && dist > 0.1) {
              const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * MOUSE_FORCE;
              p.vx += (dx / dist) * force;
              p.vy += (dy / dist) * force;
            }
          }
        }

        // Soft speed cap — cheaper than normalize
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 3) {
          p.vx = (p.vx / speed) * 3;
          p.vy = (p.vy / speed) * 3;
        }

        // Friction brings particles back to drift speed naturally
        p.vx *= 0.93;
        p.vy *= 0.93;

        // Restore base drift so they never fully stop
        if (!active || speed < BASE_SPEED * 2) {
          p.vx += (Math.random() - 0.5) * 0.02;
          p.vy += (Math.random() - 0.5) * 0.02;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -2) p.x = W + 2;
        else if (p.x > W + 2) p.x = -2;
        if (p.y < -2) p.y = H + 2;
        else if (p.y > H + 2) p.y = -2;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,190,255,${p.opacity})`;
        ctx.fill();
      }

      // ── Connections — O(n²) but pruned with bounding-box pre-check ─
      // The cheap abs comparison eliminates ~85–90 % of pairs before sqrt.
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          if (Math.abs(dx) >= CONNECTION_DIST) continue;   // ← early exit
          const dy = a.y - b.y;
          if (Math.abs(dy) >= CONNECTION_DIST) continue;   // ← early exit
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.12;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(200,190,255,${alpha})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.65 }}
    />
  );
}
