"use client";

import { useEffect, useRef } from "react";

const symbols = ["∑", "∫", "π", "σ", "β", "{ }", "</>", "λ"];

type Node = { x: number; y: number; vx: number; vy: number };
type Glyph = { x: number; y: number; vy: number; s: string; size: number };

export default function HeroBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let nodes: Node[] = [];
    let glyphs: Glyph[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = w < 640 ? 18 : 32;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
      glyphs = Array.from({ length: w < 640 ? 5 : 9 }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vy: -0.1 - Math.random() * 0.15,
        s: symbols[i % symbols.length],
        size: 14 + Math.random() * 14,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // trade-network: drifting nodes joined by nearby links
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.strokeStyle = `rgba(255,255,255,${0.22 * (1 - d / 120)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.fillStyle = "rgba(255,255,255,0.45)";
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fill();
        if (!reduce) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
      }

      // finance: faint price line along the bottom
      ctx.strokeStyle = "rgba(255,255,255,0.25)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      const t = reduce ? 0 : performance.now() / 4000;
      for (let x = 0; x <= w; x += 8) {
        const y =
          h * 0.82 -
          Math.sin(x / 70 + t) * 10 -
          Math.sin(x / 23 + t * 1.7) * 4 -
          (x / w) * 30;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // teaching / AI: drifting math and code glyphs
      ctx.fillStyle = "rgba(255,255,255,0.18)";
      for (const g of glyphs) {
        ctx.font = `${g.size}px ui-monospace, monospace`;
        ctx.fillText(g.s, g.x, g.y);
        if (!reduce) {
          g.y += g.vy;
          if (g.y < -20) {
            g.y = h + 20;
            g.x = Math.random() * w;
          }
        }
      }

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
