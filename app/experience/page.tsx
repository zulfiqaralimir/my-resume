"use client";

import { motion } from "framer-motion";

function renderBold(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((p, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold text-gray-800">{p}</strong> : p
  );
}

const jobs = [
  {
    org: "Lead Economist and Technical Adviser, Trade Policy and Economic Modelling (Consultant)",
    location: "Islamabad, PK",
    period: "Oct 2026 – Present",
    title: "Policy Research and Consulting — Independent, non-partisan economic policy think tank",
    project: "**Project:** Evidence-based alternative to the **federal commerce ministry's** national trade policy framework, 2026–31",
    bullets: [] as string[],
    groups: [
      { color: [37, 99, 235] as [number, number, number], icon: "🔵", heading: "Leadership", bullets: [
        "Provided **technical leadership** to the project team, resolving key **modelling and data challenges** that enabled delivery of the framework.",
      ] },
      { color: [37, 99, 235] as [number, number, number], icon: "🔵", heading: "Trade and macro projections", bullets: [
        "Led the **economic modelling** behind the framework's **export, import and trade-balance targets** for FY2026–31.",
        "Built **three growth scenarios** using Pakistan's historical growth patterns (1976–2025), with a **3-year moving average** and a **44-cycle robustness test**.",
        "Tested the projection method against **FY2025 actual exports**.",
        "Turned **policy measures** (energy costs, tax, duties, export finance, DLTL, solar, import replacement) into numbers for exports and the trade balance.",
        "Benchmarked projections against the **federal government's Strategic Trade Policy Framework 2020–25**.",
      ] },
      { color: [13, 148, 136] as [number, number, number], icon: "🔷", heading: "Policy design", bullets: [
        "Shaped **costed policy options** for decision-makers: **lower power, finance and tax costs** for exporters; **new non-textile exports** (pharma, engineering, processed food); **IT and services** as a growth pillar; **human resource development** (technology, skills, productivity).",
        "Modelled **import replacement** (local energy, edible oil, cotton, solar) and **new markets** (Africa, ASEAN, GCC, Central Asia).",
        "Built targets **bottom-up from what districts can produce and sell**, with **district-led delivery**, clear owners and yearly reviews, and **tested them against shocks** rather than setting them top-down.",
      ] },
      { color: [22, 163, 74] as [number, number, number], icon: "🟢", heading: "Economic and social impact", bullets: [
        "Linked trade outcomes to **GDP growth, jobs, labour productivity, poverty and income per person**.",
        "Showed the path from a **large trade deficit to balanced trade**, with **more jobs, lower poverty, higher income per person and productivity**, and **stronger resilience** to oil and global shocks.",
        "Ran **stress tests** for oil-price (Strait of Hormuz), inflation and interest-rate, global-demand and remittance shocks, and **designed protective measures**.",
      ] },
      { color: [234, 88, 12] as [number, number, number], icon: "🟠", heading: "CGE modelling (in progress)", bullets: [
        "Developing a **computable general equilibrium (CGE) model of Pakistan in GAMS**, based on the **IFPRI standard model**.",
        "Aggregated and validated the **2020-21 Social Accounting Matrix** (60 sectors → 8, fully reversible) against World Bank data.",
        "Linked **HIES household survey data** for welfare and poverty analysis.",
      ] },
      { color: [147, 51, 234] as [number, number, number], icon: "🟣", heading: "Writing and communication", bullets: [
        "Wrote the **modelling chapter, technical annex and executive-summary inputs**.",
        "Prepared **plain-language briefing decks** for senior policymakers.",
      ] },
    ],
    publication: "Mir, Z.A., Naqvi, H.A. & Abbas, A. (2026). Hormuz Energy Shock and Pakistan: A CGE Analysis. SSRN Working Paper No. 7653420.",
    skills: "CGE modelling (GAMS, IFPRI), Social Accounting Matrix, trade elasticities, scenario and stress testing, Python, policy writing.",
  },
  {
    org: "Black Iron Quantum AI (Private) Limited",
    location: "Islamabad, PK",
    period: "2026 – Present",
    title: "Director – Accounting ERP SaaS Platform Development",
    bullets: [
      "Leading design and development of a cloud-based Accounting ERP SaaS platform for SMBs — covering General Ledger (GL), Accounts Receivable (AR), Accounts Payable (AP), Cash Management, Budgeting, and Financial Reporting modules.",
      "Designing financial dashboards, KPI tracking systems, and business intelligence (BI) reports to support data-driven decision-making for CFOs, controllers, and finance managers.",
      "Developing automated accounting workflows — invoicing, reconciliation, journal entries, and financial close — to eliminate manual bookkeeping and improve financial accuracy.",
      "Integrating AI-powered financial analysis, forecasting, and FP&A advisory capabilities to enhance financial planning and business performance for SMB clients.",
      "Architecting a scalable SaaS platform focused on accounting automation, financial visibility, compliance, and operational efficiency — purpose-built for SMB finance, bookkeeping, and CFO advisory use cases.",
      "Building controller-level financial reporting, cash flow management, and reconciliation tools to empower finance managers, accountants, and business owners with actionable financial intelligence.",
    ],
  },
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

const fellowships = [
  {
    org: "Social Policy Resource Center (SPRC)",
    location: "Islamabad, PK",
    period: "2026 – Present",
    title: "Research Fellow",
    bullets: [
      "Selected for a competitive Research Fellowship at SPRC — a leading public policy and social development think tank committed to evidence-based policymaking in Pakistan.",
      "Conduct policy-oriented research on social protection, public finance, poverty, inequality, governance, and sustainable development to inform evidence-based policy.",
      "Apply advanced econometric and quantitative research methods to analyze economic and social datasets, evaluate policy outcomes, and assess development interventions.",
      "Contribute to policy briefs, working papers, research reports, and stakeholder presentations addressing socioeconomic challenges through interdisciplinary research.",
      "Collaborate with researchers, policymakers, and development sector professionals on high-impact public policy analysis and impact evaluation projects.",
    ],
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
            {job.project && <p className="mt-2 text-sm text-gray-700">{renderBold(job.project)}</p>}
            {job.groups?.map((g, gi) => (
              <div key={gi} className="mt-3 text-sm">
                <p className="font-semibold text-gray-800">{g.icon} {g.heading}</p>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-gray-600">
                  {g.bullets.map((b, j) => (
                    <li key={j}>{renderBold(b)}</li>
                  ))}
                </ul>
              </div>
            ))}
            {job.publication && (
              <div className="mt-3 text-sm">
                <p className="font-semibold text-gray-800">📄 Publications / Working Papers</p>
                <p className="text-gray-600">{job.publication}</p>
              </div>
            )}
            {job.skills && (
              <p className="mt-3 text-sm text-gray-600">
                <strong className="font-semibold text-gray-800">Skills:</strong> {job.skills}
              </p>
            )}
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

      <h1 className="text-4xl font-bold mt-12 mb-8 border-b pb-2 text-amber-700">
        Research Fellowships
      </h1>
      <div className="space-y-6">
        {fellowships.map((f, i) => (
          <motion.div
            key={i}
            className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between font-semibold text-amber-700">
              <span>{f.org}</span>
              <span className="text-sm text-gray-500">{f.location} · {f.period}</span>
            </div>
            <p className="mt-1 font-medium text-gray-700">{f.title}</p>
            {f.bullets.length > 0 && (
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-600">
                {f.bullets.map((b, j) => (
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
