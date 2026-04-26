"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const badges = [
  "National AI FinTech Winner 2025",
  "Stanford Section Leader",
  "Ph.D. Econometrics",
  "LLM Trainer · Turing",
  "HEC AI Judge 2026",
];

const jobs = [
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
        className="relative bg-gradient-to-br from-amber-700 via-amber-600 to-amber-500 rounded-2xl shadow-xl px-8 py-12 mb-14 text-white overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* subtle background circles */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full" />
        <div className="absolute -bottom-16 -left-10 w-80 h-80 bg-white/5 rounded-full" />

        <div className="relative flex flex-col sm:flex-row items-center gap-8">
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
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Zulfiqar Ali Mir
            </motion.h1>

            <motion.p
              className="text-amber-100 text-lg sm:text-xl font-medium mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              Quantitative Researcher · AI Engineer · Financial Strategist
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
                  className="bg-white/20 border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm"
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
                className="bg-white text-amber-700 font-semibold text-sm px-5 py-2.5 rounded-lg shadow hover:bg-amber-50 transition"
              >
                View Projects
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

        {/* Contact row */}
        <motion.div
          className="relative mt-8 pt-6 border-t border-white/20 flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-sm text-amber-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <a href="mailto:manager.equity.finance@gmail.com" className="hover:text-white transition">
            ✉ manager.equity.finance@gmail.com
          </a>
          <span>📞 +92 322 5150501</span>
          <a href="https://www.linkedin.com/in/zulfiqar-ali-mir/" target="_blank" className="hover:text-white transition">
            LinkedIn ↗
          </a>
          <a href="https://github.com/zulfiqaralimir" target="_blank" className="hover:text-white transition">
            GitHub ↗
          </a>
          <a href="https://leetcode.com/u/xBe6uVINlF/" target="_blank" className="hover:text-white transition">
            LeetCode ↗
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
          { label: "Experience", value: "25+ yrs" },
          { label: "Books Published", value: "3" },
          { label: "Hackathons Led", value: "9+" },
          { label: "Daily Requests", value: "100K+" },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4 text-center border border-gray-100">
            <p className="text-2xl font-extrabold text-amber-600">{s.value}</p>
            <p className="text-xs text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* ── EXPERIENCE ── */}
      <motion.h2
        className="text-3xl font-bold mb-6 border-b border-gray-200 pb-2 text-amber-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Experience
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
              <span className="font-semibold text-amber-700">{job.org}</span>
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
