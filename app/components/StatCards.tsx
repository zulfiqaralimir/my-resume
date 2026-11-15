"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Award, BookOpen, Clock, Rocket, type LucideIcon } from "lucide-react";

const stats: { label: string; to: number; suffix: string; Icon: LucideIcon; hue: string }[] = [
  { label: "Experience", to: 25, suffix: "+ yrs", Icon: Clock, hue: "#16a5ff" },
  { label: "Books Published", to: 3, suffix: "", Icon: BookOpen, hue: "#f2d27a" },
  { label: "Hackathons Led", to: 9, suffix: "+", Icon: Award, hue: "#7fd0ff" },
  { label: "Daily Requests", to: 100, suffix: "K+", Icon: Rocket, hue: "#ff7a1a" },
];

function Counter({ to, suffix, run }: { to: number; suffix: string; run: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(to);
      return;
    }
    const controls = animate(0, to, { duration: 2, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [run, to]);
  return (
    <>
      {n}
      <span className="text-[0.5em] align-top ml-1 tracking-wider text-white/80">{suffix}</span>
    </>
  );
}

function Card({ s, i }: { s: (typeof stats)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  // 3D tilt following the pointer
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 18 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="group relative overflow-hidden rounded-2xl p-[1.5px]"
    >
      {/* rotating glow border */}
      <span
        aria-hidden="true"
        className="absolute -inset-[100%] animate-[spin_6s_linear_infinite] opacity-70 group-hover:opacity-100"
        style={{ background: `conic-gradient(from 0deg, transparent 0 60%, ${s.hue} 80%, transparent 100%)` }}
      />
      <div className="relative h-full rounded-[14px] bg-gradient-to-br from-[#04297a] via-[#0645bd] to-[#0a58dc] px-4 py-6 text-center text-white shadow-[0_18px_40px_-18px_rgba(0,40,120,0.8)]">
        {/* shine sweep */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/20 blur-md transition-transform duration-1000 group-hover:translate-x-[420%]"
        />
        {/* icon with pulse ring */}
        <div className="relative mx-auto mb-3 flex h-12 w-12 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full opacity-30" style={{ background: s.hue }} />
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/40 backdrop-blur-sm">
            <s.Icon size={22} style={{ color: s.hue }} />
          </span>
        </div>
        <p
          className="text-5xl leading-none tracking-wide drop-shadow-[0_2px_14px_rgba(0,20,80,0.5)]"
          style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}
        >
          <Counter to={s.to} suffix={s.suffix} run={inView} />
        </p>
        <p
          className="mt-2 text-sm uppercase tracking-[0.18em] text-white/85"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 500 }}
        >
          {s.label}
        </p>
        {/* accent underline */}
        <motion.span
          aria-hidden="true"
          className="mx-auto mt-3 block h-0.5 rounded-full"
          style={{ background: s.hue }}
          initial={{ width: 0 }}
          animate={inView ? { width: 48 } : undefined}
          transition={{ duration: 0.8, delay: 0.5 + i * 0.12 }}
        />
      </div>
    </motion.div>
  );
}

export default function StatCards() {
  return (
    <div id="stats" className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-4" aria-label="Key figures">
      {stats.map((s, i) => (
        <Card key={s.label} s={s} i={i} />
      ))}
    </div>
  );
}
