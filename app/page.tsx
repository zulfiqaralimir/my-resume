"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  BookOpen,
  Building2,
  Clock,
  Code,
  ExternalLink,
  FileText,
  Handshake,
  Landmark,
  Mail,
  Phone,
  Presentation,
  Rocket,
  Trophy,
  Users,
  Link2,
} from "lucide-react";
import HeroBackground from "./components/HeroBackground";

const badges = [
  "National AI FinTech Winner 2025",
  "Stanford Section Leader",
  "Ph.D. Econometrics",
  "Lead Economist · Trade Policy",
  "LLM Trainer · Turing",
  "Author · 3 Books",
  "Educator · 15+ Yrs",
  "HEC AI Judge 2026",
];

const achievements = [
  { Icon: Landmark, date: "Oct 2026", title: "Lead Economist and Technical Adviser", desc: "Trade policy and economic modelling for a national trade policy framework, 2026–31." },
  { Icon: FileText, date: "2026", title: "SSRN Working Paper", desc: "Hormuz Energy Shock and Pakistan: A CGE Analysis (No. 7653420)." },
  { Icon: Presentation, date: "30 Dec 2026", title: "SPRC 6th Annual Conference", desc: "Paper accepted: Algorithmic Inclusion — AI-driven targeting for Pakistan's social protection system." },
  { Icon: Handshake, date: "2026", title: "Claude Partner Network", desc: "Registered Partner through Black Iron Quantum AI (Private) Limited." },
  { Icon: Rocket, date: "2026", title: "Startup Accelerator Graduate", desc: "Founder Institute, Islamabad Chapter." },
  { Icon: Users, date: "Jan–Feb 2026", title: "GenAI Instructor, Mentor and Judge", desc: "NCEAC–HEC Cohort 2, Higher Education Commission Pakistan." },
  { Icon: Trophy, date: "2025", title: "National Winner – AI FinTech", desc: "National Technology Fund (MoITT) and Asian Development Bank (ADB)." },
];

const jobs = [
  {
    org: "Independent Economic Policy Think Tank · Islamabad",
    period: "Oct 2026 – Present",
    title: "Lead Economist and Technical Adviser, Trade Policy and Economic Modelling (Consultant)",
    detail: "Led the economic modelling behind an evidence-based national trade policy framework, 2026–31: export, import and trade-balance projections, costed policy options, stress tests, and a CGE model of Pakistan in GAMS.",
  },
  {
    org: "Black Iron Quantum AI (Private) Limited · Islamabad",
    period: "2026 – Present",
    title: "Director – Accounting ERP SaaS Platform Development",
    detail: "Leading a cloud-based accounting ERP SaaS platform for SMBs with AI-powered financial analysis and FP&A advisory.",
  },
  {
    org: "Turing (Palo Alto, California)",
    period: "Sept 2024 – Present",
    title: "Research Analyst / LLM Trainer / Advanced Maths Subject Expert",
    detail: "RLHF and SFT for Apple, Meta, and Anthropic — refining AI models in advanced mathematics.",
  },
  {
    org: "Stanford University",
    period: "May 2025 – June 2025",
    title: "Section Leader – Python Programming",
    detail: "",
  },
  {
    org: "Mir Global Soft Private Limited · Islamabad",
    period: "2020 – Present",
    title: "Senior Research Analyst & Financial Strategist",
    detail: "Equity research, quant-driven investment strategies, financial modeling, portfolio optimization.",
  },
  {
    org: "iCodeGuru · San Jose, California",
    period: "June 2024 – Present",
    title: "Teacher and Trainer",
    detail: "IELTS, GRE, LeetCode, Python, ML, Data Analysis.",
  },
  {
    org: "Super Nova Academy · Islamabad",
    period: "2010 – Present",
    title: "Teacher – Mathematics, Statistics & SAT",
    detail: "",
  },
  {
    org: "Beaconhouse School System, BMI · Islamabad",
    period: "Aug 2017 – Sept 2022",
    title: "Teacher of Mathematics",
    detail: "",
  },
  {
    org: "Bank Alfalah Limited · Wah Cantt",
    period: "June 2008 – July 2010",
    title: "Operations Officer",
    detail: "",
  },
  {
    org: "City Lights Trading · Dubai",
    period: "Jan 2005 – Dec 2005",
    title: "Credit Controller",
    detail: "",
  },
  {
    org: "Pakistan Stock Exchange · Islamabad",
    period: "1999 – 2004",
    title: "Equity Investment and Portfolio Management",
    detail: "",
  },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">

      {/* ── HERO ── */}
      <motion.section
        className="relative bg-gradient-to-br from-[#00132c] via-[#011735] to-[#0b2447] rounded-2xl shadow-xl px-8 py-12 mb-14 text-white overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <HeroBackground />
        {/* subtle background circles */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full" />
        <div className="absolute -bottom-16 -left-10 w-80 h-80 bg-white/5 rounded-full" />

        <div className="relative flex flex-col sm:flex-row items-center gap-8 lg:pr-44">
          {/* Photo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0"
          >
            <Image
              src="/profile.jpg"
              alt="Zulfiqar Ali Mir"
              width={120}
              height={120}
              className="rounded-full border-4 border-white/80 shadow-lg"
            />
          </motion.div>

          {/* Text */}
          <div className="text-center sm:text-left">
            <motion.h1
              className="font-display text-4xl sm:text-5xl tracking-tight mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Zulfiqar Ali Mir
            </motion.h1>

            <motion.p
              className="text-[#f2d27a] text-lg sm:text-xl font-medium mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              Quantitative Researcher · Trade Policy &amp; Economic Modelling · AI Engineer · Financial Strategist
            </motion.p>

            {/* Badges */}
            <motion.div
              className="flex flex-wrap justify-center sm:justify-start gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              {badges.map((b, i) => (
                <span
                  key={i}
                  className="bg-white/10 border border-[#d4a73a]/50 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm"
                >
                  {b}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap justify-center sm:justify-start gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              <Link
                href="/projects"
                className="bg-white text-navy-700 font-semibold text-sm px-5 py-2.5 rounded-lg shadow hover:bg-navy-50 transition"
              >
                View Projects
              </Link>
              <Link
                href="/resume#research"
                className="border border-white/60 text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-white/10 transition"
              >
                Research &amp; Papers
              </Link>
              <a
                href="mailto:manager.equity.finance@gmail.com"
                className="border border-white/60 text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-white/10 transition"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>

        {/* Logo */}
        <Image
          src="/logo-512.png"
          alt="ZAM — Zulfiqar Ali Mir logo"
          width={170}
          height={170}
          className="hidden lg:block absolute top-8 right-8 rounded-full shadow-lg"
        />

        {/* Contact row */}
        <motion.div
          className="relative mt-8 pt-6 border-t border-white/20 flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-sm text-navy-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <a href="mailto:manager.equity.finance@gmail.com" className="hover:text-white transition">
            <Mail size={15} className="inline -mt-0.5 mr-1.5" />manager.equity.finance@gmail.com
          </a>
          <span><Phone size={15} className="inline -mt-0.5 mr-1.5" />+92 322 5150501</span>
          <a href="https://www.linkedin.com/in/zulfiqar-ali-mir/" target="_blank" className="hover:text-white transition">
            <Link2 size={15} className="inline -mt-0.5 mr-1.5" />LinkedIn <ExternalLink size={12} className="inline -mt-0.5" />
          </a>
          <a href="https://github.com/zulfiqaralimir" target="_blank" className="hover:text-white transition">
            <Code size={15} className="inline -mt-0.5 mr-1.5" />GitHub <ExternalLink size={12} className="inline -mt-0.5" />
          </a>
          <a href="https://leetcode.com/u/xBe6uVINlF/" target="_blank" className="hover:text-white transition">
            <Trophy size={15} className="inline -mt-0.5 mr-1.5" />LeetCode <ExternalLink size={12} className="inline -mt-0.5" />
          </a>
        </motion.div>
      </motion.section>

      {/* ── QUICK STATS ── */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {[
          { label: "Experience", value: "25+ yrs", Icon: Clock },
          { label: "Books Published", value: "3", Icon: BookOpen },
          { label: "Hackathons Led", value: "9+", Icon: Award },
          { label: "Daily Requests", value: "100K+", Icon: Rocket },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4 text-center border border-gray-100">
            <s.Icon size={22} className="mx-auto mb-1.5 text-[#d4a73a]" />
            <p className="font-heading text-2xl text-navy-700">{s.value}</p>
            <p className="text-xs text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* ── LATEST ACHIEVEMENTS ── */}
      <motion.h2
        className="font-heading text-2xl mb-6 border-b border-gray-200 pb-2 text-navy-700 flex items-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Award size={24} className="text-[#d4a73a]" /> Latest Achievements
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-14">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            className="flex gap-3 bg-white p-4 rounded-lg shadow hover:shadow-md transition border-l-4 border-[#d4a73a]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-navy-800 text-[#f2d27a]">
              <a.Icon size={20} />
            </span>
            <div>
              <p className="font-semibold text-navy-700">{a.title}</p>
              <p className="text-xs text-gray-400 mb-0.5">{a.date}</p>
              <p className="text-sm text-gray-600">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── EXPERIENCE ── */}
      <motion.h2
        className="font-heading text-2xl mb-6 border-b border-gray-200 pb-2 text-navy-700 flex items-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Briefcase size={24} className="text-[#d4a73a]" /> Experience
      </motion.h2>

      <div className="space-y-4">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
              <span className="font-semibold text-navy-700 flex items-center gap-2"><Building2 size={16} className="text-[#d4a73a] shrink-0" />{job.org}</span>
              <span className="text-xs text-gray-400 sm:text-right whitespace-nowrap">{job.period}</span>
            </div>
            <p className="text-sm font-medium text-gray-700 mt-0.5">{job.title}</p>
            {job.detail && <p className="text-sm text-gray-500 mt-1">{job.detail}</p>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
