"use client";

import { motion } from "framer-motion";

const jobs = [
  {
    org: "Turing (Palo Alto, California)",
    location: "Remote",
    period: "Sept 2024 – Present",
    title: "Research Analyst / LLM Trainer / Advanced Maths Subject Expert",
    bullets: [
      "RLHF and Supervised Fine-Tuning (SFT) to refine AI models in advanced mathematics",
      "Assess AI-generated solutions, deliver structured feedback, and shape model behavior",
      "Clients: Apple, Meta, Anthropic (Data Science)",
      "Skills: Mathematics, Statistics, Problem Solving, Data Analysis, Generative AI, Prompt Engineering, Markdown, LaTeX",
    ],
  },
  {
    org: "Turing (Palo Alto, California)",
    location: "Remote",
    period: "2024 – Present",
    title: "Subject Matter Expert (Mathematics) & AI Evaluator – Pelican Paper STEM Project (Paper Assist)",
    bullets: [
      <><strong className="font-semibold text-gray-800">Selected from a strong pool of talented candidates</strong> to contribute to the advancement of state-of-the-art Large Language Models (LLMs).</>,
      "Served as a Subject Matter Expert (Mathematics), applying advanced mathematical knowledge to evaluate and improve AI model outputs.",
      "Participated in the Pelican Paper STEM Project (Paper Assist), supporting AI evaluation, benchmarking, and quality assurance initiatives.",
      "Assessed AI-generated responses for mathematical accuracy, logical reasoning, problem-solving quality, and instruction adherence.",
      "Collaborated with reviewers and project stakeholders through Taiga and evaluation platforms to maintain high-quality standards.",
      "Contributed to research and development efforts aimed at improving the reliability, reasoning capabilities, and performance of next-generation AI systems.",
    ],
  },
  {
    org: "Stanford University",
    location: "Remote",
    period: "May 2025 – June 2025",
    title: "Section Leader – Python Programming",
    bullets: [],
  },
  {
    org: "COMSATS University",
    location: "Islamabad, PK",
    period: "Oct 2024",
    title: "Instructor – Python for Mathematicians",
    bullets: [],
  },
  {
    org: "Education Group, Karachi (Name TBC)",
    location: "Remote",
    period: "2026",
    title: "Trainer and Instructor – Generative AI (Advanced RAG)",
    bullets: [
      "Delivered training on Advanced RAG systems: Naive vs Production-Grade RAG, Hybrid Search, Query Expansion, HyDE, Reranking, RAGAS evaluation (Context Precision, Recall, Faithfulness), and LangSmith observability.",
    ],
  },
  {
    org: "Pakistan Engineering Council",
    location: "Islamabad, PK",
    period: "Dec 2024 – Jan 2025",
    title: "Mentor and Instructor – PEC Generative AI Training",
    bullets: [],
  },
  {
    org: "Pak Angels (San Jose, California)",
    location: "Remote",
    period: "Aug – Sept 2024",
    title: "Mentor and Judge – Essential Generative AI Training",
    bullets: [],
  },
  {
    org: "iCodeGuru (San Jose, California)",
    location: "Remote",
    period: "June 2024 – Present",
    title: "Teacher and Trainer",
    bullets: [
      "Subjects: IELTS, GRE, LeetCode, Python, Machine Learning, Data Analysis",
    ],
  },
  {
    org: "Mir Global Soft Private Limited",
    location: "Islamabad, PK",
    period: "2020 – Present",
    title: "Senior Research Analyst & Financial Strategist",
    bullets: [
      "Equity research and quant-driven investment strategies",
      "Financial modeling and portfolio optimization",
      "Created a Stock Market Index for the Tech Sector",
      "Spearheaded Stock Market Analysis using 15+ years of expertise",
    ],
  },
  {
    org: "Super Nova Academy",
    location: "Islamabad, PK",
    period: "2010 – Present",
    title: "Teacher – Mathematics, Statistics & SAT",
    bullets: [],
  },
  {
    org: "Beaconhouse School System, BMI",
    location: "Islamabad, PK",
    period: "Aug 2017 – Sept 2022",
    title: "Teacher of Mathematics",
    bullets: [],
  },
  {
    org: "Bank Alfalah Limited",
    location: "Wah Cantt, PK",
    period: "June 2008 – July 2010",
    title: "Operations Officer",
    bullets: [],
  },
  {
    org: "City Lights Trading",
    location: "Dubai, UAE",
    period: "Jan 2005 – Dec 2005",
    title: "Credit Controller",
    bullets: [
      "Managed accounts receivable, credit limits, collections, and payment reconciliations to maintain healthy cash flow across key client accounts.",
      "Maintained accounting records, ledgers, invoicing, and financial transactions using Tally Accounting Software.",
      "Developed and maintained financial databases and reporting systems using Microsoft Access.",
      "Built advanced Excel models and dashboards leveraging pivot tables, VLOOKUP, and financial data analysis techniques.",
      "Prepared management reports, credit assessments, and financial performance summaries to support decision-making.",
      "Coordinated with finance, sales, and management teams to monitor outstanding receivables and improve collection efficiency.",
      "Supported month-end reconciliation and financial close reporting activities.",
    ],
  },
  {
    org: "Pakistan Stock Exchange",
    location: "Islamabad, PK",
    period: "1999 – 2004",
    title: "Equity Investment and Portfolio Management",
    bullets: [],
  },
];

export default function ExperiencePage() {
  return (
    <motion.section
      className="max-w-4xl mx-auto py-12 px-6 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-8 border-b pb-2 text-amber-700">
        Professional Experience
      </h1>

      <div className="space-y-6">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between font-semibold text-amber-700">
              <span>{job.org}</span>
              <span className="text-sm text-gray-500">{job.location} · {job.period}</span>
            </div>
            <p className="mt-1 font-medium text-gray-700">{job.title}</p>
            {job.bullets.length > 0 && (
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-600">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
