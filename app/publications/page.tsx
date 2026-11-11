"use client";

import { motion, useScroll, useSpring, type Variants } from "framer-motion";
import {
  Newspaper,
  BookOpen,
  FlaskConical,
  Presentation,
  PlayCircle,
  GraduationCap,
  ExternalLink,
  FileText,
  Library,
  CalendarDays,
  type LucideIcon,
} from "lucide-react";

const books = [
  {
    title: "Barriers to AGI Maturation",
    date: "February 2025",
  },
  {
    title: "The Speed Learning Formula: Learn Fast, Grow Fast, Earn Fast",
    date: "February 2025",
  },
  {
    title: "Loops of Mind, Wings of Code: Rebirth of Agency – First Step towards Agentic AI",
    date: "May 2025",
  },
];

const press = [
  {
    title: "Ensuring Ethical and Secure AI",
    outlet: "Pakistan Observer",
    date: "May 25, 2024",
    desc: "Comprehensive Guide to AI Audits and Foundational LLMs.",
  },
  {
    title: "Insights into Pakistan Stock Exchange's recent record high triumph",
    outlet: "The Financial Daily International",
    date: "March 30, 2024",
    desc: "",
  },
  {
    title: "Navigate the psychological maze of inflation and make smarter investment decisions",
    outlet: "The Financial Daily International",
    date: "March 10, 2024",
    desc: "",
  },
  {
    title: "Penny Wise Pound Foolish Approach",
    outlet: "The Financial Daily International",
    date: "July 2022",
    desc: "",
  },
];

const videos = [
  { title: "From Naive RAG to Production-Grade RAG: A Journey into Advanced Retrieval Systems", platform: "Education Group, Karachi (Name TBC)", date: "2026" },
  { title: "Workshop on Building Neural Networks from Scratch using Python", platform: "iCodeGuru", date: "Sept 8, 2024" },
  { title: "Machine Learning from Scratch and its Privacy Implications", platform: "iCodeGuru", date: "Aug 19, 2024" },
  { title: "IELTS Prep For Fully Funded Scholarships", platform: "iCodeGuru", date: "July 22, 2024" },
  { title: "Python for Absolute Beginners", platform: "iCodeGuru", date: "July 4, 2024" },
  { title: "Advance Data Analysis with Python for International Jobs", platform: "iCodeGuru", date: "July 1, 2024" },
  { title: "Data Structures and Algorithms", platform: "iCodeGuru", date: "June 11, 2024" },
  { title: "Pak Angels Gen AI Cohort 2 – Module 2: Online Dev Platforms & Python with ChatGPT", platform: "Pak Angels", date: "" },
  { title: "Module 3 – Python for Beginners", platform: "Pak Angels", date: "" },
  { title: "Module 5 Day 1 – Hands-on with Generative AI Models", platform: "Pak Angels", date: "" },
  { title: "Module 3–4 Practice Session: Developing Calculator using ChatGPT, VS Code, GitHub", platform: "Pak Angels", date: "" },
  { title: "Mastering Shading Venn Diagram with Tick Rule for 3 Sets", platform: "IGCSE / A-Level", date: "" },
  { title: "How To Complete The Square and Write a Quadratic Expression in the Form (x+a)²+b", platform: "IGCSE / A-Level", date: "" },
  { title: "Bootstrap Sampling Using Excel", platform: "IGCSE / A-Level", date: "" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 90, damping: 16 } },
};

type Motion = "float" | "wiggle" | "pulse" | "sway" | "spin";

const loops: Record<Motion, { animate: Record<string, number[]>; duration: number }> = {
  float: { animate: { y: [0, -4, 0] }, duration: 2.6 },
  wiggle: { animate: { rotate: [0, -10, 10, -6, 0] }, duration: 3.2 },
  pulse: { animate: { scale: [1, 1.18, 1] }, duration: 2.2 },
  sway: { animate: { rotate: [-6, 6, -6], y: [0, -2, 0] }, duration: 3.4 },
  spin: { animate: { rotate: [0, 360] }, duration: 14 },
};

/* Continuously animated icon; reacts harder on hover. */
function AnimatedIcon({
  icon: Icon,
  size = 20,
  motionType = "float",
  delay = 0,
  className = "",
}: {
  icon: LucideIcon;
  size?: number;
  motionType?: Motion;
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

type Mascot = "scientist" | "reader" | "reporter" | "teacher";

/* Little animated SVG character: bobs, blinks, waves, and holds a prop per section. */
function Character({ kind }: { kind: Mascot }) {
  const skin = "#f6d5b8";
  const navy = "#0b2447";
  return (
    <motion.svg
      viewBox="0 0 100 110"
      className="h-24 w-24 shrink-0 drop-shadow-md"
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
            {/* graduation cap */}
            <path d="M24 34 L50 22 L76 34 L50 46 Z" fill="#183463" />
            <rect x="40" y="40" width="20" height="6" fill="#183463" />
            <motion.path
              d="M76 34 L82 52"
              stroke="#e0b341"
              strokeWidth="2"
              style={{ originX: "76px", originY: "34px" }}
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <circle cx="82" cy="53" r="3" fill="#e0b341" />
            {/* flask with bubbles */}
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
            {/* glasses */}
            <circle cx="41" cy="54" r="7" fill="none" stroke="#183463" strokeWidth="2" />
            <circle cx="59" cy="54" r="7" fill="none" stroke="#183463" strokeWidth="2" />
            <path d="M48 54 H52" stroke="#183463" strokeWidth="2" />
            {/* open book flipping */}
            <path d="M14 92 L34 88 L34 74 L14 78 Z" fill="#fff" stroke="#183463" strokeWidth="1.5" />
            <path d="M34 88 L54 92 L54 78 L34 74 Z" fill="#e2e8f2" stroke="#183463" strokeWidth="1.5" />
            <motion.path
              d="M34 88 L34 74 L50 77 L50 90 Z"
              fill="#fff"
              stroke="#183463"
              strokeWidth="1"
              style={{ originX: "34px", originY: "82px" }}
              animate={{ scaleX: [1, -1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        {kind === "reporter" && (
          <>
            {/* press cap */}
            <path d="M26 40 C26 18 74 18 74 40 Z" fill="#183463" />
            <rect x="22" y="38" width="56" height="5" rx="2.5" fill="#0b2447" />
            <rect x="42" y="26" width="16" height="8" rx="2" fill="#fff" />
            <text x="50" y="33" fontSize="6" fontWeight="700" textAnchor="middle" fill="#0b2447">PRESS</text>
            {/* newspaper */}
            <motion.g
              style={{ originX: "24px", originY: "86px" }}
              animate={{ rotate: [-4, 4, -4] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <rect x="8" y="68" width="30" height="22" rx="2" fill="#fff" stroke="#183463" strokeWidth="1.5" />
              <rect x="12" y="72" width="22" height="4" fill="#183463" />
              <path d="M12 80 H34 M12 84 H34 M12 88 H28" stroke="#93a6c9" strokeWidth="1.5" />
            </motion.g>
          </>
        )}

        {kind === "teacher" && (
          <>
            {/* headphones */}
            <path d="M24 52 C24 22 76 22 76 52" fill="none" stroke="#183463" strokeWidth="4" />
            <rect x="19" y="48" width="8" height="14" rx="4" fill="#183463" />
            <rect x="73" y="48" width="8" height="14" rx="4" fill="#183463" />
            {/* play screen */}
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
      </motion.g>
    </motion.svg>
  );
}

function SectionHeading({
  icon,
  eyebrow,
  title,
  motionType,
  mascot,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  motionType: Motion;
  mascot: Mascot;
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

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

function IconChip({ icon, motionType, delay = 0 }: { icon: LucideIcon; motionType: Motion; delay?: number }) {
  return (
    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-600">
      <AnimatedIcon icon={icon} motionType={motionType} delay={delay} />
    </span>
  );
}

function LinkPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/pill inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1.5 text-xs font-medium text-navy-600 ring-1 ring-navy-100 transition hover:bg-navy-700 hover:text-white hover:ring-navy-700"
    >
      {label}
      <ExternalLink size={12} className="transition-transform duration-300 group-hover/pill:-translate-y-0.5 group-hover/pill:translate-x-0.5" />
    </a>
  );
}

function Meta({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-sm text-navy-400">
      <AnimatedIcon icon={CalendarDays} size={14} motionType="pulse" />
      <span>{children}</span>
    </p>
  );
}

export default function PublicationsPage() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-navy-400 to-navy-700"
        style={{ scaleX: progress }}
      />
      <motion.section
        className="relative max-w-4xl mx-auto py-10 px-2 sm:px-6 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Hero */}
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
          <div className="absolute right-8 top-8 hidden gap-4 text-navy-200/70 sm:flex">
            <AnimatedIcon icon={BookOpen} size={28} motionType="float" />
            <AnimatedIcon icon={Newspaper} size={28} motionType="wiggle" delay={0.4} />
            <AnimatedIcon icon={FlaskConical} size={28} motionType="sway" delay={0.8} />
          </div>
          <motion.p
            className="relative font-heading text-xs uppercase tracking-[0.3em] text-navy-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Zulfiqar Ali Mir
          </motion.p>
          <motion.h1
            className="relative mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Publications &amp; Research
          </motion.h1>
          <motion.p
            className="relative mt-4 max-w-xl text-navy-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Op-eds, working papers, books, press and teaching material on economics, AI and public policy.
          </motion.p>
        </div>

        {/* Research */}
        <SectionHeading icon={FlaskConical} eyebrow="Scholarship" title="Research & Working Papers" motionType="sway" mascot="scientist" />
        <motion.div className="grid gap-5" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}>
          <Card>
            <div className="flex items-start gap-4">
              <IconChip icon={Newspaper} motionType="wiggle" />
              <div>
                <p className="font-heading text-xs uppercase tracking-widest text-navy-400">Publications &amp; Media</p>
                <p className="mt-2 font-display text-xl font-bold text-navy-700">Whose jobs will AI hit?</p>
                <p className="mt-1 text-sm text-gray-600">
                  <strong>Mir, Z. A.</strong> (2026, November 11). <em>The News (Pakistan)</em>, Opinion.
                </p>
                <p className="mt-2 text-sm text-gray-500">Op-ed on how AI threatens entry-level jobs in Pakistan, with four policy steps to protect youth employment.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <LinkPill href="https://www.thenews.pk/print/1448000-whose-jobs-will-ai-hit" label="Read online" />
                  <LinkPill href="https://e.thenews.pk/karachi/11-11-2026/page6" label="Print edition, Karachi p. 6" />
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <IconChip icon={FileText} motionType="float" delay={0.3} />
              <div>
                <p className="font-heading text-xs uppercase tracking-widest text-navy-400">Working Papers (SSRN)</p>
                <p className="mt-2 font-display text-xl font-bold text-navy-700">Hormuz energy shock and Pakistan: A CGE analysis</p>
                <p className="mt-1 text-sm text-gray-600">
                  <strong>Mir, Z. A.</strong>, Naqvi, H. A., &amp; Abbas, A. (2026). <em>SSRN Working Paper</em>.
                </p>
                <div className="mt-4"><LinkPill href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7653420" label="View on SSRN" /></div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <IconChip icon={Presentation} motionType="sway" delay={0.6} />
              <div>
                <p className="font-heading text-xs uppercase tracking-widest text-navy-400">Conference Papers</p>
                <p className="mt-2 font-display text-xl font-bold text-navy-700">Algorithmic inclusion</p>
                <p className="mt-1 text-sm text-gray-600">
                  <strong>Mir, Z. A.</strong> (2026). AI-driven targeting and adaptive delivery for Pakistan&apos;s social protection system. Accepted for presentation at the SPRC 6th Annual Conference, &ldquo;Need of New Social Protection Paradigms,&rdquo; Social Policy Resource Centre, Islamabad, 30 December 2026.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <IconChip icon={GraduationCap} motionType="pulse" delay={0.9} />
              <div>
                <p className="font-heading text-xs uppercase tracking-widest text-navy-400">Research Profiles</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <LinkPill href="https://scholar.google.com/citations?user=esWyOI4AAAAJ" label="Google Scholar" />
                  <span className="rounded-full bg-navy-50 px-3 py-1.5 text-xs font-medium text-navy-600 ring-1 ring-navy-100">arXiv: zambiz01</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Books */}
        <SectionHeading icon={BookOpen} eyebrow="Long form" title="Book Publications" motionType="float" mascot="reader" />
        <motion.div className="grid gap-5 sm:grid-cols-3" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}>
          {books.map((b, i) => (
            <Card key={i}>
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-500 to-navy-800 text-white">
                <AnimatedIcon icon={BookOpen} motionType="float" delay={i * 0.4} />
              </span>
              <p className="font-display text-lg font-bold leading-snug text-navy-700">{b.title}</p>
              <Meta>{b.date}</Meta>
            </Card>
          ))}
        </motion.div>

        {/* Press */}
        <SectionHeading icon={Newspaper} eyebrow="In the news" title="Press Publications" motionType="wiggle" mascot="reporter" />
        <motion.div className="grid gap-5 sm:grid-cols-2" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}>
          {press.map((p, i) => (
            <Card key={i}>
              <p className="font-heading text-xs uppercase tracking-widest text-navy-400">{p.outlet}</p>
              <p className="mt-2 font-display text-lg font-bold leading-snug text-navy-700">{p.title}</p>
              <Meta>{p.date}</Meta>
              {p.desc && <p className="mt-2 text-sm text-gray-600">{p.desc}</p>}
            </Card>
          ))}
        </motion.div>

        {/* Videos */}
        <SectionHeading icon={Library} eyebrow="Teaching" title="Teaching Videos" motionType="pulse" mascot="teacher" />
        <motion.div className="grid gap-4 sm:grid-cols-2" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}>
          {videos.map((v, i) => (
            <Card key={i} className="!p-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-navy-500">
                  <AnimatedIcon icon={PlayCircle} size={26} motionType="pulse" delay={(i % 5) * 0.3} />
                </span>
                <div>
                  <p className="font-heading text-sm font-semibold leading-snug text-navy-700">{v.title}</p>
                  <p className="mt-1.5 text-xs text-gray-500">
                    {v.platform}{v.date ? ` · ${v.date}` : ""}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}
