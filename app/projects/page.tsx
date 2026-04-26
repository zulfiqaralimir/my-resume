"use client";

import { motion } from "framer-motion";

const featuredProject = {
  title: "BlackIronTimes – Quantitative Financial Intelligence Platform",
  url: "https://lackirontimes.com",
  bullets: [
    "Developed a quantitative financial intelligence platform integrating macroeconomic analysis, market data pipelines, and research-grade reporting",
    "Engineered a scalable data architecture using Next.js, Supabase, and Cloudflare R2, enabling efficient handling of high-frequency financial content and datasets",
    "Designed market data pipelines for storing and analyzing time-series data (prices, returns, % changes), supporting real-time and historical financial analysis",
    "Implemented hybrid rendering + caching strategy (ISR + dynamic execution) to optimize latency-sensitive financial data delivery while maintaining scalability to 100K+ daily requests",
    "Built real-time financial dashboards for monitoring market indicators, aligning with quantitative trading and portfolio monitoring workflows",
    "Developed structured research outputs (long-form reports, macro insights) similar to institutional research used in hedge funds and asset management",
    "Applied vector-based semantic retrieval (pgvector) to enable intelligent search across financial research and historical analyses",
    "Architected a multi-agent AI research pipeline (Market Agent, News Agent, Research Agent, Visualization Agent) using LangGraph and Claude Haiku for automated signal extraction and report generation",
    "Designed relational schemas for financial time-series data, research metadata, and multilingual datasets, supporting extensibility for econometric modeling",
    "Integrated multilingual financial data dissemination (English, Urdu, Arabic) for broader market accessibility and emerging market coverage",
    "Optimized system under resource constraints (free-tier infra), demonstrating cost-efficient scaling — critical for systematic strategy deployment environments",
  ],
  stack: ["Next.js", "Supabase", "Cloudflare R2", "pgvector", "LangGraph", "Claude Haiku", "ISR", "TypeScript"],
};

const researchProjects = [
  {
    title: "Climate Justice RIZPC Algorithm Analysis (2024)",
    desc: "First quantitative causal analysis of emissions → loss & damage. Statistical proof showing 24:1 ratio disparity.",
  },
  {
    title: "Environmental Risk Mapping for Sustainable Finance",
    desc: "Satellite-based ESG framework using NDVI and land surface temperature.",
  },
  {
    title: "Hidden Links in Environment, Energy, Economy Nexus: FCI Approach",
    desc: "VAR modeling and ARDL bounds testing for causal discovery.",
  },
  {
    title: "Penalized Regression Methods for Exchange Rate Forecasting",
    desc: "Evidence from U.S. Dollar Index.",
  },
  {
    title: "Causal Discovery in Stock Market Data using PC Algorithms",
    desc: "Structural learning approach.",
  },
  {
    title: "Multi-Agent System for Portfolio Optimization",
    desc: "Via OpenAI Agents SDK.",
  },
  {
    title: "Yield Curve & ETF Analysis",
    desc: "",
  },
  {
    title: "Application of Geospatial Data",
    desc: "Hurricane Irene's path analysis.",
  },
  {
    title: "Intelligent Approach for Stock Market Movement Prediction",
    desc: "Optimized technical indicators and neural networks for emerging markets.",
  },
  {
    title: "ZulfiQode: Computational Approach to Systematic Theme Mining of Financial Ethics",
    desc: "",
  },
  {
    title: "Business Climate and Inequality",
    desc: "Panel IV–Quantile Regression evidence.",
  },
  {
    title: "Cointegration and Error Correction – Apple and Microsoft",
    desc: "Time-series modeling of long-run relationships.",
  },
  {
    title: "Agricultural Subsidy Reform: CGE Modelling Approach",
    desc: "Pakistan case study.",
  },
];

const conferences = [
  {
    title: "5th SPRC Social Policy Conference (2025)",
    paper: "Challenges of Social Policy Financing in Pakistan: Evidence from NFC Allocations and Provincial Expenditure Patterns",
    details: "",
  },
  {
    title: "6th International Applied Economics Conference (Oct 22–23, 2025)",
    paper: "Bridging Gaps in Pakistan's Fertilizer Sector: A Power BI Framework for Governance, Input–Output Linkages, and Food Loss Mitigation",
    details: "Organized by Quaid-i-Azam University. Location: NARC, Islamabad. Supported by ACIAR (Australia).",
  },
];

const hackathons = [
  {
    event: "Sketch & Search Hackathon",
    org: "Google DeepMind × Qdrant × Freepik",
    period: "",
    project: "Multi-View Interpreter: CPU-only sketch interpretation with FastAPI and Gradio",
  },
  {
    event: "LangGraph Agentic Chatbot",
    org: "lablab.ai",
    period: "Oct 11–13, 2024",
    project: "Build Fast Ship Fast with Replit & Cursor Hackathon",
  },
  {
    event: "AI Agents Hackathon (FinTech)",
    org: "lablab.ai",
    period: "Sep 13–15, 2024",
    project: "Agentic Flow of System for Financial Analysis with ChatGPT — Team Leader",
  },
  {
    event: "Generative AI Hackathon with IBM Watsonx",
    org: "lablab.ai",
    period: "Aug 23–26, 2024",
    project: "Personalized Diabetes Management App (Glyco Fit) — Team Leader",
  },
  {
    event: "Falcon Hackathon",
    org: "lablab.ai",
    period: "July 26 – Aug 5, 2024",
    project: "AI-Powered Economics Tutor — Team Leader",
  },
  {
    event: "Llama 3 Hackathon",
    org: "lablab.ai",
    period: "July 19–21, 2024",
    project: "AI Driven Social Media Post Optimizer — Team Leader",
  },
  {
    event: "Langflow Hackathon",
    org: "lablab.ai",
    period: "July 12–14, 2024",
    project: "CodeMate — Team Member",
  },
  {
    event: "Codestral Hackathon",
    org: "lablab.ai",
    period: "June 16–17, 2024",
    project: "CodeMate – Your Coding Companion — Team Leader",
  },
  {
    event: "Hello GPT-4o AI Challenge",
    org: "lablab.ai",
    period: "May 31 – June 2, 2024",
    project: "System for Financial Analysis with ChatGPT-4o — Team Leader",
  },
];

export default function ProjectsPage() {
  return (
    <motion.section
      className="max-w-4xl mx-auto py-12 px-6 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Featured Project */}
      <h1 className="text-4xl font-bold mb-6 border-b pb-2 text-amber-700">
        Featured Project
      </h1>
      <motion.div
        className="bg-white border-2 border-amber-300 p-6 rounded-xl shadow-lg mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <h2 className="text-xl font-bold text-amber-700">{featuredProject.title}</h2>
          <a
            href={featuredProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-amber-600 hover:underline font-medium whitespace-nowrap"
          >
            {featuredProject.url.replace("https://", "")} ↗
          </a>
        </div>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700 mb-4">
          {featuredProject.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-3">
          {featuredProject.stack.map((s, i) => (
            <span key={i} className="bg-amber-50 text-amber-700 text-xs font-medium px-3 py-1 rounded-full border border-amber-200">
              {s}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Research Projects */}
      <h2 className="text-4xl font-bold mb-8 border-b pb-2 text-amber-700">
        Research &amp; Coding Projects
      </h2>
      <div className="space-y-4 mb-14">
        {researchProjects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold text-amber-700">{p.title}</p>
            {p.desc && <p className="text-sm text-gray-600 mt-1">{p.desc}</p>}
          </motion.div>
        ))}
      </div>

      {/* Conference Presentations */}
      <h2 className="text-3xl font-bold mb-6 border-b pb-2 text-amber-700">
        Conference Presentations
      </h2>
      <div className="space-y-4 mb-14">
        {conferences.map((c, i) => (
          <motion.div
            key={i}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold text-amber-700">{c.title}</p>
            <p className="text-sm text-gray-700 mt-1"><em>{c.paper}</em></p>
            {c.details && <p className="text-sm text-gray-500 mt-1">{c.details}</p>}
          </motion.div>
        ))}
      </div>

      {/* AI Hackathons */}
      <h2 className="text-3xl font-bold mb-6 border-b pb-2 text-amber-700">
        AI Projects &amp; Hackathons
      </h2>
      <div className="space-y-4">
        {hackathons.map((h, i) => (
          <motion.div
            key={i}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between font-semibold text-amber-700">
              <span>{h.event}</span>
              <span className="text-sm text-gray-500">{h.org}{h.period ? ` · ${h.period}` : ""}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{h.project}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
