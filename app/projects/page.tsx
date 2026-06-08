"use client";

import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "Gulf SWF SEC Filings Agent – AI-Powered Regulatory Intelligence",
    url: "https://frontend-blue-eta-10.vercel.app",
    github: "https://github.com/zulfiqaralimir/gulf-swf-agent",
    bullets: [
      "Built a full-stack AI agent that autonomously tracks and analyzes SEC filings from Gulf Sovereign Wealth Funds (ADIA, PIF, QIA, Mubadala) — monitoring 13F, 13D/G, and SC filings for portfolio shifts and activist positions",
      "Engineered the agentic layer using Gemini 2.5 Flash and Google Cloud Agent Development Kit (ADK), enabling natural-language querying of filing data with reasoning-backed responses",
      "Designed a FastAPI backend with MongoDB Atlas for structured storage of parsed SEC EDGAR filings, supporting efficient querying by fund, filing type, date range, and holding",
      "Built a Next.js frontend deployed to Vercel, providing a clean research interface for exploring fund activity, position changes, and filing timelines",
      "Deployed the backend to Google Cloud Run for serverless, auto-scaling execution — handling burst workloads from EDGAR polling and agent inference without idle costs",
      "Delivered the complete system — agent, API, database, and frontend — in 10 days, from architecture design to production deployment",
    ],
    stack: ["Gemini 2.5 Flash", "Google Cloud ADK", "FastAPI", "Next.js", "MongoDB Atlas", "Cloud Run", "Vercel", "Python", "SEC EDGAR"],
  },
  {
    title: "Gulf SWF Filing Intelligence Agent – Web Data UNLOCKED Hackathon (May 2026)",
    url: "https://databright-gulf-swf-agent.vercel.app",
    github: "https://github.com/zulfiqaralimir/databright_gulf-swf-agent",
    bullets: [
      "Built a real-time SEC EDGAR filing monitor for 5 Gulf Sovereign Wealth Funds (ADIA, PIF, QIA, Mubadala, ADQ) managing $4T+ AUM — tracking 13F, 13D/G, and SC filings for live portfolio intelligence",
      "Bypassed EDGAR bot detection and rate limits using Bright Data's 400M+ residential IP network via MCP Server, enabling reliable real-time data extraction at scale",
      "Generated institutional-grade investment intelligence (BEARISH/BULLISH/NEUTRAL signals, sector analysis, EXIT/MAINTAIN action recommendations) on 87+ live filings using Gemini 2.0 Flash",
      "Deployed production full stack: FastAPI backend on Hugging Face Spaces, Next.js dashboard on Vercel, and MongoDB Atlas for structured filing storage",
    ],
    stack: ["Bright Data MCP", "Gemini 2.0 Flash", "LangChain", "MongoDB Atlas", "FastAPI", "Next.js", "Python", "Hugging Face Spaces", "SEC EDGAR"],
  },
  {
    title: "PSX Intraday Intelligence System – Black Iron Quantum AI (2026)",
    url: "",
    bullets: [
      "Engineered a Python web scraper extracting 12 OHLCV fields from dps.psx.com.pk for 7 PSX-listed equities (KEL, OGDC, PPL, HBL, ENGRO, OBOY, FCEPL) — building a fully automated end-to-end financial data pipeline and visualization system",
      "Designed a dual-sheet Google Sheets architecture — live snapshot table + append-only price history — via Google Sheets API and service account authentication, enabling persistent intraday OHLCV storage",
      "Implemented intraday OHLCV aggregation across 6 hourly intervals (Mon–Thu) and 5 Friday intervals with Jummah prayer break logic, accurately modeling PSX's market session structure",
      "Deployed on GitHub Actions with 15 cron triggers (UTC-converted PKT schedule) — fully serverless and PC-independent, running reliably without local infrastructure",
      "Built interactive candlestick charts with gap detection using Plotly — identifying intraday price gaps with PKR and % annotations for actionable intraday signal analysis",
      "Integrated Looker Studio dashboard with live data refresh, Change % bar chart, and multi-field stock comparison table for real-time equity monitoring",
    ],
    stack: ["Python", "BeautifulSoup4", "gspread", "Plotly", "GitHub Actions", "Google Sheets API", "Looker Studio", "Pandas", "Windows Task Scheduler"],
  },
  {
    title: "zam-webtool — Agent-Safe Web Browsing Tool (2026)",
    github: "https://github.com/zulfiqaralimir/zam-webtool",
    url: "",
    bullets: [
      "Built a controlled browser execution layer for agentic AI systems enforcing strict agent-browser decoupling — preventing agents from directly manipulating browser state and enabling safe, auditable web interactions",
      "Implemented hard action limits (MAX_STEPS=20), mandatory audit logging, and abuse prevention mechanisms designed for enterprise-grade safety in production AI workflows",
      "Designed for compatibility with CrewAI, LangGraph, and Anthropic tool-use patterns — enabling plug-and-play integration across major agentic frameworks without framework-specific rewrites",
      "Published as an installable open-source Python package via GitHub, with a clean API surface designed for rapid adoption in AI agent pipelines",
    ],
    stack: ["Python", "Playwright", "Firefox", "LangChain", "CrewAI", "LangGraph", "Anthropic Tool Use"],
  },
  {
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
  },
  {
    title: "Quantara – Personal Hedge Fund Research Platform",
    url: "https://quantara-nine.vercel.app/",
    bullets: [
      "Developed Quantara, a personal hedge fund research platform enforcing a disciplined fundamental value investment process — including structured diligence checklists, bull/base/bear scenario analysis, and valuation frameworks across SaaS, semiconductors, specialty finance, and medtech",
    ],
    stack: [],
  },
  {
    title: "IGCSE Math AI Tutor",
    url: "",
    bullets: [
      "Built an AI tutoring system for IGCSE Mathematics (Sets): students ask questions in natural language and receive step-by-step explanations, Venn diagram visualisations, and graded answer evaluation",
      "Surfaces semantically relevant past-paper questions to improve answer accuracy and curriculum alignment",

      "Designed a difficulty-tiered question bank with structured mark-scheme grading, mirroring the pedagogical structure of IGCSE examinations",
    ],
    stack: [],
  },
  {
    title: "ByteWise – CS Education Platform",
    url: "",
    bullets: [
      "Built and authored a full-stack computer science education platform (Next.js 16, React 19, TypeScript, Tailwind CSS v4, MDX) featuring 20+ long-form technical articles across 8 topic areas from networking to AI/LLMs",
      "Designed a custom MDX content pipeline with math rendering (KaTeX), syntax highlighting (rehype-highlight), and reusable React components for diagrams, callouts, and article navigation",
      "Authored deep-dive content covering the full OSI networking stack, algorithms, design patterns (SOLID, GoF), system design, distributed systems (CAP theorem, microservices, message queues), machine learning, and agentic AI — including real-world fintech and retail case studies",
      "Structured content into 8 progressive parts (Parts 0–7) spanning CS foundations through advanced ML and LLMs, plus a standalone technical blog",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "MDX", "KaTeX", "rehype-highlight"],
  },
];

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
    event: "Web Data UNLOCKED Hackathon",
    org: "lablab.ai × Bright Data",
    period: "May 2026",
    project: "Gulf SWF Filing Intelligence Agent — real-time SEC EDGAR monitor for $4T+ AUM funds using Bright Data MCP, Gemini 2.0 Flash, FastAPI, and Next.js",
  },
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
      {/* Featured Projects */}
      <h1 className="text-4xl font-bold mb-6 border-b pb-2 text-amber-700">
        Featured Projects
      </h1>
      <div className="space-y-8 mb-14">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white border-2 border-amber-300 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <h2 className="text-xl font-bold text-amber-700">{project.title}</h2>
              <div className="flex gap-3 items-center">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-amber-600 hover:underline font-medium whitespace-nowrap"
                  >
                    {project.url.replace("https://", "")} ↗
                  </a>
                )}
                {"github" in project && project.github && (
                  <a
                    href={project.github as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-amber-600 hover:underline font-medium whitespace-nowrap"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700 mb-4">
              {project.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.stack.map((s, i) => (
                <span key={i} className="bg-amber-50 text-amber-700 text-xs font-medium px-3 py-1 rounded-full border border-amber-200">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

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
