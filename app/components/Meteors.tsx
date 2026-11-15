"use client";

import { useEffect, useRef, useState } from "react";

type Meteor = { id: number; left: number; top: number; dx: number; dy: number; rot: number; len: number; dur: number };

const rand = (a: number, b: number) => a + Math.random() * (b - a);

/** Mix of speeds: some fast, some medium, some slow and drifting. */
const pickDuration = () => {
  const r = Math.random();
  if (r < 0.3) return rand(0.6, 1.0);
  if (r < 0.65) return rand(1.3, 1.9);
  return rand(2.4, 3.4);
};

/** Occasional, random, fast shooting stars: one at a time, irregular gaps, varied angle/length/speed. */
export default function Meteors() {
  const [list, setList] = useState<Meteor[]>([]);
  const id = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: ReturnType<typeof setTimeout>;
    const spawn = () => {
      // heading down-left at 20–40° below horizontal
      const angle = rand(20, 40) * (Math.PI / 180);
      const travel = rand(220, 420);
      const dx = -Math.cos(angle) * travel;
      const dy = Math.sin(angle) * travel;
      // rotation so the tail trails behind the head (opposite to travel direction)
      const rot = (Math.atan2(-dy, -dx) * 180) / Math.PI;
      const m: Meteor = {
        id: id.current++,
        left: rand(35, 100),
        top: rand(-5, 35),
        dx,
        dy,
        rot,
        len: rand(70, 140),
        dur: pickDuration(),
      };
      setList((l) => [...l, m]);
      // sometimes a second one shortly after, like a small shower
      if (Math.random() < 0.18) timer = setTimeout(spawn, rand(150, 400));
      else timer = setTimeout(spawn, rand(2200, 6500));
    };
    timer = setTimeout(spawn, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {list.map((m) => (
        <span
          key={m.id}
          className="meteor"
          style={
            {
              left: `${m.left}%`,
              top: `${m.top}%`,
              "--dx": `${m.dx}px`,
              "--dy": `${m.dy}px`,
              "--dur": `${m.dur}s`,
              "--len": `${m.len}px`,
              "--rot": `${m.rot}deg`,
            } as React.CSSProperties
          }
          onAnimationEnd={() => setList((l) => l.filter((x) => x.id !== m.id))}
        >
          <i className="meteor-inner" />
        </span>
      ))}
    </div>
  );
}
