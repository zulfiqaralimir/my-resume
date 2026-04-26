"use client";

import { motion } from "framer-motion";

const honors = [
  {
    title: "National Winner – AI FinTech Projects (2025)",
    org: "National Technology Fund (MoITT) & Asian Development Bank (ADB)",
    details:
      "Built AFIW–ZulfiQode: Agentic Financial Intelligence Wrapper. Technologies: LangGraph, FastAPI, Neo4j. Features: RAG pipelines for financial statement summarization and ESG scoring, RLHF and SFT for adaptive reasoning, ML and econometric models for volatility, causal, rumour, and reversal detection, Streamlit dashboards with real-time monitoring.",
  },
  {
    title: "Create Apps Championship 2025–26",
    org: "Dubai Chamber of Digital Economy, UAE",
    details: "Certificate of Participation.",
  },
  {
    title: "Judge – HEC Generative AI Cohort 2 (2026)",
    org: "Higher Education Commission (HEC) Pakistan",
    details:
      "Evaluated AI innovation projects under NCEAC, Pak Angels, iCodeGuru, and ASPIRE Pakistan collaboration.",
  },
  {
    title: "Judge – AI Innovation & Prompt Engineering",
    org: "All Pakistan Prompt Engineering Competition (APPEC) – ETL Online",
    details: "",
  },
  {
    title: "Participant / Contributor – Strategic Foresight & Governance",
    org: "The Futures Forum 2025 (UNESCO World Futures Day – Society 5.0)",
    details: "",
  },
  {
    title: "McKinsey Forward Program Participant",
    org: "McKinsey & Company",
    details: "Dec 2024. Focus: Problem-solving, leadership, digital transformation skills.",
  },
  {
    title: "Speaker – WordPress Hackathon 2024",
    org: "WPBrigade & iCodeGuru (Silicon Valley)",
    details: "Topic: AI Leadership and LLM Innovation at Turing.",
  },
  {
    title: "Winner – All Employees Banking Quiz",
    org: "Bank Alfalah Limited",
    details: "June 2009.",
  },
  {
    title: "Featured Educator – Abako Calculators (2024)",
    org: "Abako Scientific Calculators",
    details: "Top educator and brand ambassador.",
  },
  {
    title: "CALICO Fall '24",
    org: "UC Berkeley",
    details: "Dec 2024. Focus: Reasoning and Problem-solving.",
  },
];

export default function HonorsPage() {
  return (
    <motion.section
      className="max-w-4xl mx-auto py-12 px-6 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-8 border-b pb-2 text-indigo-700">
        Honors &amp; Distinctions
      </h1>

      <div className="space-y-6">
        {honors.map((h, i) => (
          <motion.div
            key={i}
            className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold text-indigo-700">{h.title}</p>
            <p className="text-sm text-gray-500 mt-0.5">{h.org}</p>
            {h.details && <p className="text-sm text-gray-600 mt-2">{h.details}</p>}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
