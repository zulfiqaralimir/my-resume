"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Newspaper,
  BookOpen,
  FlaskConical,
  Presentation,
  PlayCircle,
  GraduationCap,
  FileText,
  Library,
} from "lucide-react";
import {
  AnimatedIcon,
  Card,
  IconChip,
  LinkPill,
  Meta,
  ScrollProgress,
  SectionHeading,
  container,
} from "../components/fx";

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

export default function PublicationsPage() {
  return (
    <>
      <ScrollProgress />
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
                <Image src="/logos/thenews.png" width={273} height={73} alt="The News International" className="mt-3 h-9 w-auto" />
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
                <Image src="/logos/ssrn.png" width={471} height={282} alt="Elsevier SSRN" className="mt-3 h-14 w-auto" />
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
