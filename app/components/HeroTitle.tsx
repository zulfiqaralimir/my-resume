"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/** Editorial hero headline: small serif intro above a tall, airy condensed headline, revealed with GSAP. */
export default function HeroTitle() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.ticker.lagSmoothing(0);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".ht-eyebrow", { opacity: 0, y: 24, duration: 0.9 })
        .from(".ht-rule", { scaleX: 0, transformOrigin: "left center", duration: 0.8 }, "-=0.5")
        .from(".ht-line-inner", { yPercent: 110, opacity: 0, duration: 1.1, stagger: 0.18 }, "-=0.6");
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="mb-5">
      <p className="ht-eyebrow font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl italic font-medium tracking-[0.12em] text-white/85">
        Hello, I&rsquo;m
      </p>
      <span className="ht-rule mx-auto sm:mx-0 mt-2 mb-3 block h-px w-24 bg-[#f2d27a]/70" aria-hidden="true" />
      <h1 style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }} className="font-normal uppercase text-white tracking-[0.18em] sm:tracking-[0.2em] leading-[0.92] text-[64px] sm:text-[88px] lg:text-[92px] [text-shadow:0_2px_30px_rgba(0,20,80,0.35)]">
        <span className="block overflow-hidden"><span className="ht-line-inner block">Zulfiqar</span></span>
        <span className="block overflow-hidden"><span className="ht-line-inner block">Ali Mir</span></span>
      </h1>
    </div>
  );
}
