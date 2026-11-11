"use client";

import { motion, useScroll, useSpring, type Variants } from "framer-motion";
import {
  ExternalLink,
  CalendarDays,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Shared animation variants                                          */
/* ------------------------------------------------------------------ */

export const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const item: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 90, damping: 16 } },
};

export const viewportOnce = { once: true, margin: "-40px" } as const;

/* ------------------------------------------------------------------ */
/* Animated icon                                                       */
/* ------------------------------------------------------------------ */

export type IconMotion = "float" | "wiggle" | "pulse" | "sway" | "spin";

const loops: Record<IconMotion, { animate: Record<string, number[]>; duration: number }> = {
  float: { animate: { y: [0, -4, 0] }, duration: 2.6 },
  wiggle: { animate: { rotate: [0, -10, 10, -6, 0] }, duration: 3.2 },
  pulse: { animate: { scale: [1, 1.18, 1] }, duration: 2.2 },
  sway: { animate: { rotate: [-6, 6, -6], y: [0, -2, 0] }, duration: 3.4 },
  spin: { animate: { rotate: [0, 360] }, duration: 14 },
};

/** Continuously animated icon; reacts harder on hover. */
export function AnimatedIcon({
  icon: Icon,
  size = 20,
  motionType = "float",
  delay = 0,
  className = "",
}: {
  icon: LucideIcon;
  size?: number;
  motionType?: IconMotion;
  delay?: number;
  className?: string;
}) {
  const loop = loops[motionType];
  return (
    <motion.span
      className={`inline-flex ${className}`}
      animate={loop.animate}
      transition={{
        duration: loop.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
        repeatDelay: motionType === "wiggle" ? 1.5 : 0,
      }}
      whileHover={{ scale: 1.3, rotate: 12 }}
    >
      <Icon size={size} strokeWidth={1.8} />
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/* Animated SVG characters                                             */
/* ------------------------------------------------------------------ */

export type MascotKind =
  | "scientist"
  | "reader"
  | "reporter"
  | "teacher"
  | "student"
  | "worker"
  | "coder"
  | "champion"
  | "certified"
  | "archivist";

/** Little animated SVG character: bobs, blinks, waves, and holds a prop per kind. */
export function Character({
  kind,
  onDark = false,
  className = "h-24 w-24",
}: {
  kind: MascotKind;
  onDark?: boolean;
  className?: string;
}) {
  const skin = "#f6d5b8";
  const navy = onDark ? "#5870a0" : "#0b2447";
  const navy2 = onDark ? "#93a6c9" : "#183463";
  return (
    <motion.svg
      viewBox="0 0 100 110"
      className={`shrink-0 drop-shadow-md ${className}`}
      initial={{ opacity: 0, y: 30, scale: 0.6 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 140, damping: 12, delay: 0.3 }}
      aria-hidden="true"
    >
      <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}>
        {/* body */}
        <path d="M22 108 C22 78 78 78 78 108 Z" fill={navy} />
        <path d="M44 82 L50 96 L56 82 Z" fill="#fff" />
        {kind === "worker" && <path d="M48 84 L52 84 L54 100 L50 104 L46 100 Z" fill="#c0392b" />}
        {/* waving arm */}
        <motion.g
          style={{ originX: "76px", originY: "88px" }}
          animate={{ rotate: [0, -28, 0, -28, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
        >
          <rect x="74" y="64" width="9" height="26" rx="4.5" fill={navy} />
          <circle cx="78.5" cy="62" r="6" fill={skin} />
        </motion.g>
        {/* head */}
        <circle cx="50" cy="52" r="24" fill={skin} />
        {/* hair */}
        <path d="M26 50 C26 24 74 24 74 50 C66 38 34 38 26 50 Z" fill="#3a2a22" />
        {/* eyes with blink */}
        <motion.g
          style={{ originX: "50px", originY: "54px" }}
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
        >
          <circle cx="41" cy="54" r="3" fill="#1a1a1a" />
          <circle cx="59" cy="54" r="3" fill="#1a1a1a" />
        </motion.g>
        <path d="M43 64 Q50 71 57 64" stroke="#a5513a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="35" cy="62" r="3.5" fill="#f2a8a0" opacity="0.6" />
        <circle cx="65" cy="62" r="3.5" fill="#f2a8a0" opacity="0.6" />

        {kind === "scientist" && (
          <>
            <path d="M24 34 L50 22 L76 34 L50 46 Z" fill={navy2} />
            <rect x="40" y="40" width="20" height="6" fill={navy2} />
            <motion.path
              d="M76 34 L82 52"
              stroke="#e0b341"
              strokeWidth="2"
              style={{ originX: "76px", originY: "34px" }}
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <circle cx="82" cy="53" r="3" fill="#e0b341" />
            <path d="M12 86 L18 72 L18 62 L28 62 L28 72 L34 86 Z" fill="#8fd3f4" stroke="#fff" strokeWidth="2" />
            {[0, 1, 2].map((n) => (
              <motion.circle
                key={n}
                cx={20 + n * 3}
                cy={60}
                r={1.8}
                fill="#8fd3f4"
                animate={{ y: [0, -14], opacity: [1, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: n * 0.5 }}
              />
            ))}
          </>
        )}

        {kind === "reader" && (
          <>
            <circle cx="41" cy="54" r="7" fill="none" stroke={navy2} strokeWidth="2" />
            <circle cx="59" cy="54" r="7" fill="none" stroke={navy2} strokeWidth="2" />
            <path d="M48 54 H52" stroke={navy2} strokeWidth="2" />
            <path d="M14 92 L34 88 L34 74 L14 78 Z" fill="#fff" stroke={navy2} strokeWidth="1.5" />
            <path d="M34 88 L54 92 L54 78 L34 74 Z" fill="#e2e8f2" stroke={navy2} strokeWidth="1.5" />
            <motion.path
              d="M34 88 L34 74 L50 77 L50 90 Z"
              fill="#fff"
              stroke={navy2}
              strokeWidth="1"
              style={{ originX: "34px", originY: "82px" }}
              animate={{ scaleX: [1, -1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        {kind === "reporter" && (
          <>
            <path d="M26 40 C26 18 74 18 74 40 Z" fill={navy2} />
            <rect x="22" y="38" width="56" height="5" rx="2.5" fill="#0b2447" />
            <rect x="42" y="26" width="16" height="8" rx="2" fill="#fff" />
            <text x="50" y="33" fontSize="6" fontWeight="700" textAnchor="middle" fill="#0b2447">PRESS</text>
            <motion.g
              style={{ originX: "24px", originY: "86px" }}
              animate={{ rotate: [-4, 4, -4] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <rect x="8" y="68" width="30" height="22" rx="2" fill="#fff" stroke={navy2} strokeWidth="1.5" />
              <rect x="12" y="72" width="22" height="4" fill={navy2} />
              <path d="M12 80 H34 M12 84 H34 M12 88 H28" stroke="#93a6c9" strokeWidth="1.5" />
            </motion.g>
          </>
        )}

        {kind === "teacher" && (
          <>
            <path d="M24 52 C24 22 76 22 76 52" fill="none" stroke={navy2} strokeWidth="4" />
            <rect x="19" y="48" width="8" height="14" rx="4" fill={navy2} />
            <rect x="73" y="48" width="8" height="14" rx="4" fill={navy2} />
            <rect x="8" y="68" width="34" height="22" rx="3" fill="#0b2447" />
            <motion.path
              d="M20 73 L32 79 L20 85 Z"
              fill="#fff"
              style={{ originX: "26px", originY: "79px" }}
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          </>
        )}

        {kind === "student" && (
          <>
            <path d="M22 34 L50 20 L78 34 L50 48 Z" fill="#0b2447" stroke="#fff" strokeWidth="1" />
            <rect x="38" y="40" width="24" height="7" fill="#0b2447" />
            <motion.g
              style={{ originX: "78px", originY: "34px" }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            >
              <path d="M78 34 L84 54" stroke="#e0b341" strokeWidth="2" />
              <circle cx="84" cy="55" r="3" fill="#e0b341" />
            </motion.g>
            {/* diploma scroll */}
            <motion.g
              style={{ originX: "24px", originY: "82px" }}
              animate={{ rotate: [-6, 6, -6] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <rect x="8" y="76" width="34" height="10" rx="5" fill="#fff" stroke={navy2} strokeWidth="1.5" />
              <rect x="22" y="75" width="6" height="12" fill="#c0392b" />
            </motion.g>
          </>
        )}

        {kind === "worker" && (
          <>
            <motion.g
              style={{ originX: "24px", originY: "74px" }}
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M17 74 Q17 68 24 68 Q31 68 31 74" fill="none" stroke={navy2} strokeWidth="2" />
              <rect x="8" y="74" width="32" height="20" rx="3" fill="#8a5a2b" />
              <rect x="8" y="82" width="32" height="2" fill="#5c3a18" />
              <rect x="21" y="80" width="6" height="5" rx="1" fill="#e0b341" />
            </motion.g>
          </>
        )}

        {kind === "coder" && (
          <>
            <circle cx="41" cy="54" r="7" fill="none" stroke={navy2} strokeWidth="2" />
            <circle cx="59" cy="54" r="7" fill="none" stroke={navy2} strokeWidth="2" />
            <path d="M48 54 H52" stroke={navy2} strokeWidth="2" />
            {/* laptop */}
            <path d="M6 94 L46 94 L42 90 L10 90 Z" fill="#93a6c9" />
            <rect x="12" y="68" width="28" height="22" rx="2" fill="#0b2447" stroke="#93a6c9" strokeWidth="1.5" />
            <path d="M17 74 L22 78 L17 82" stroke="#8fd3f4" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            <motion.rect
              x="25"
              y="81"
              width="8"
              height="2"
              fill="#8fd3f4"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </>
        )}

        {kind === "champion" && (
          <>
            <motion.g
              animate={{ y: [0, -5, 0], rotate: [-3, 3, -3] }}
              style={{ originX: "24px", originY: "86px" }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M12 66 H36 V76 C36 84 12 84 12 76 Z" fill="#e0b341" stroke="#b88a1f" strokeWidth="1.5" />
              <path d="M12 69 C4 69 4 78 13 78 M36 69 C44 69 44 78 35 78" fill="none" stroke="#b88a1f" strokeWidth="2" />
              <rect x="21" y="82" width="6" height="6" fill="#b88a1f" />
              <rect x="16" y="88" width="16" height="4" rx="1" fill="#b88a1f" />
            </motion.g>
            {[
              [8, 58],
              [42, 60],
              [26, 54],
            ].map(([x, y], n) => (
              <motion.path
                key={n}
                d={`M${x} ${y - 4} L${x + 1.5} ${y - 1.5} L${x + 4} ${y} L${x + 1.5} ${y + 1.5} L${x} ${y + 4} L${x - 1.5} ${y + 1.5} L${x - 4} ${y} L${x - 1.5} ${y - 1.5} Z`}
                fill="#fff6c8"
                style={{ originX: `${x}px`, originY: `${y}px` }}
                animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: n * 0.6 }}
              />
            ))}
            {/* party hat */}
            <path d="M38 32 L50 8 L62 32 Z" fill="#c0392b" />
            <circle cx="50" cy="8" r="3.5" fill="#e0b341" />
          </>
        )}

        {kind === "certified" && (
          <>
            <path d="M24 36 C24 22 76 22 76 36 Z" fill={navy2} />
            <motion.g
              style={{ originX: "24px", originY: "80px" }}
              animate={{ rotate: [-6, 6, -6] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M16 90 L20 78 L28 78 L32 90 L24 86 Z" fill="#c0392b" />
              <circle cx="24" cy="72" r="10" fill="#e0b341" stroke="#b88a1f" strokeWidth="2" />
              <motion.path
                d="M24 66 L26 70 L30 70.5 L27 73.5 L27.8 78 L24 75.8 L20.2 78 L21 73.5 L18 70.5 L22 70 Z"
                fill="#fff"
                style={{ originX: "24px", originY: "72px" }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
            </motion.g>
          </>
        )}

        {kind === "archivist" && (
          <>
            <motion.g
              style={{ originX: "24px", originY: "86px" }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M8 74 H20 L24 70 H40 V92 H8 Z" fill="#e0b341" stroke="#b88a1f" strokeWidth="1.5" />
              <motion.path
                d="M24 76 V86 M20 82 L24 87 L28 82"
                stroke="#0b2447"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ y: [0, 2, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.g>
            <path d="M24 52 C24 22 76 22 76 52" fill="none" stroke={navy2} strokeWidth="4" opacity="0" />
          </>
        )}
      </motion.g>
    </motion.svg>
  );
}

/* ------------------------------------------------------------------ */
/* Layout pieces                                                       */
/* ------------------------------------------------------------------ */

/** Thin reading-progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-navy-400 to-navy-700"
      style={{ scaleX: progress }}
    />
  );
}

/** Page wrapper: progress bar + fade-up entrance. */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <motion.section
        className="relative max-w-4xl mx-auto py-10 px-2 sm:px-6 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {children}
      </motion.section>
    </>
  );
}

/** Dark gradient hero banner with drifting glows, floating icons and a mascot. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  icons,
  mascot,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  icons: { icon: LucideIcon; motionType: IconMotion }[];
  mascot: MascotKind;
}) {
  return (
    <div className="relative mb-14 overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 via-navy-700 to-navy-500 px-8 py-12 text-white shadow-xl">
      <motion.span
        className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-navy-300/20 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative flex items-center gap-6">
        <div className="flex-1">
          <motion.p
            className="font-heading text-xs uppercase tracking-[0.3em] text-navy-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl text-navy-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
          <div className="mt-5 flex gap-4 text-navy-200/80">
            {icons.map((ic, i) => (
              <AnimatedIcon key={i} icon={ic.icon} size={26} motionType={ic.motionType} delay={i * 0.4} />
            ))}
          </div>
        </div>
        <Character kind={mascot} onDark className="hidden h-32 w-32 sm:block" />
      </div>
    </div>
  );
}

export function SectionHeading({
  icon,
  eyebrow,
  title,
  motionType,
  mascot,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  motionType: IconMotion;
  mascot: MascotKind;
}) {
  return (
    <motion.div
      className="mb-8 mt-16 first:mt-0"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-4">
        <motion.span
          className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-500 to-navy-800 text-white shadow-lg shadow-navy-700/30"
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
        >
          <motion.span
            className="absolute inset-0 rounded-2xl ring-2 ring-navy-400"
            animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
          <AnimatedIcon icon={icon} size={24} motionType={motionType} />
        </motion.span>
        <div className="flex-1">
          <p className="font-heading text-xs uppercase tracking-[0.25em] text-navy-400">{eyebrow}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-700 leading-tight">{title}</h2>
        </div>
        <Character kind={mascot} />
      </div>
      <motion.div
        className="mt-4 h-1 origin-left rounded-full bg-gradient-to-r from-navy-600 via-navy-300 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
      />
    </motion.div>
  );
}

/** Card for use inside a `motion.div variants={container}` grid. */
export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 shadow-[0_2px_16px_rgba(11,36,71,0.06)] hover:shadow-[0_14px_40px_rgba(11,36,71,0.16)] transition-shadow ${className}`}
    >
      <span className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-navy-300 to-navy-700 opacity-70 group-hover:opacity-100 transition-opacity" />
      <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-navy-100/60 blur-2xl group-hover:bg-navy-200/70 transition-colors" />
      <div className="relative pl-2">{children}</div>
    </motion.div>
  );
}

/** Grid wrapper that staggers its Card children into view. */
export function CardGrid({ children, className = "grid gap-5" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={container} initial="hidden" whileInView="show" viewport={viewportOnce}>
      {children}
    </motion.div>
  );
}

export function IconChip({ icon, motionType, delay = 0 }: { icon: LucideIcon; motionType: IconMotion; delay?: number }) {
  return (
    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-600">
      <AnimatedIcon icon={icon} motionType={motionType} delay={delay} />
    </span>
  );
}

export function LinkPill({ href, label, download = false }: { href: string; label: string; download?: boolean }) {
  return (
    <a
      href={href}
      {...(download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
      className="group/pill inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1.5 text-xs font-medium text-navy-600 ring-1 ring-navy-100 transition hover:bg-navy-700 hover:text-white hover:ring-navy-700"
    >
      {label}
      <ExternalLink size={12} className="transition-transform duration-300 group-hover/pill:-translate-y-0.5 group-hover/pill:translate-x-0.5" />
    </a>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.06 }}
      className="inline-block rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700 ring-1 ring-navy-200 transition-colors hover:bg-navy-700 hover:text-white"
    >
      {children}
    </motion.span>
  );
}

export function Meta({ children, icon = CalendarDays }: { children: React.ReactNode; icon?: LucideIcon }) {
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-sm text-navy-400">
      <AnimatedIcon icon={icon} size={14} motionType="pulse" />
      <span>{children}</span>
    </p>
  );
}
