"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight canvas mesh — sparse points, no external deps.
 */
export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      t += 0.006;
      const gap = 14;
      const startX = Math.floor(w * 0.28);
      const cx = w * 0.82;
      const cy = h * 0.42;

      for (let x = startX; x < w + gap; x += gap) {
        for (let y = 0; y < h; y += gap) {
          const nx = (x - startX) / (w - startX + 1);
          const ny = y / h;
          const waveX =
            Math.sin(ny * 7 + t) * 18 +
            Math.cos(nx * 5 + t * 0.8) * 10 +
            Math.sin((nx + ny) * 9 + t * 1.1) * 8;
          const waveY = Math.sin(t * 0.9 + nx * 4) * 6;
          const px = x + waveX;
          const py = y + waveY;
          const dist = Math.hypot(px - cx, py - cy);
          const falloff = Math.max(0, 1 - dist / (Math.min(w, h) * 0.55));
          if (falloff < 0.04) continue;
          const a = falloff * 0.45;
          ctx.fillStyle = `rgba(255,255,255,${a})`;
          ctx.fillRect(px, py, 1.25, 1.25);
        }
      }

      const accentPulse = 0.08 + Math.sin(t * 0.5) * 0.03;
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(w, h) * 0.4);
      g.addColorStop(0, `rgba(0, 240, 255, ${accentPulse})`);
      g.addColorStop(0.4, "rgba(0, 240, 255, 0.02)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      raf = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    />
  );
}
