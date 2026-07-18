"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

function renderBullet(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  if (parts.length === 1) return text;
  return parts.map((p, i) => i % 2 === 1 ? <strong key={i} className="font-semibold text-gray-800">{p}</strong> : p);
}

const badges = [
  "National AI FinTech Winner 2025",
  "Stanford Section Leader",
  "Ph.D. Econometrics",
  "LLM Trainer · Turing",
  "HEC AI Judge 2026",
];

const jobs = [
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
      "**Selected from a strong pool of talented candidates** to contribute to the advancement of state-of-the-art Large Language Models (LLMs).",
      "Served as a Subject Matter Expert (Mathematics), applying advanced mathematical knowledge to evaluate and improve AI model outputs.",
      "Participated in the Pelican Paper STEM Project (Paper Assist), supporting AI evaluation, benchmarking, and quality assurance initiatives.",
      "Assessed AI-generated responses for mathematical accuracy, logical reasoning, problem-solving quality, and instruction adherence.",
      "Collaborated with reviewers and project stakeholders through Taiga and evaluation platforms to maintain high-quality standards.",
      "Contributed to research and development efforts aimed at improving the reliability, reasoning capabilities, and performance of next-generation AI systems.",
    ],
  },
  { org: "Stanford University", location: "Remote", period: "May 2025 – June 2025", title: "Section Leader – Python Programming", bullets: [] },
  { org: "COMSATS University", location: "Islamabad, PK", period: "Oct 2024", title: "Instructor – Python for Mathematicians", bullets: [] },
  { org: "Education Group, Karachi (Name TBC)", location: "Remote", period: "2026", title: "Trainer and Instructor – Generative AI (Advanced RAG)", bullets: ["Delivered training on Advanced RAG: Naive vs Production-Grade RAG, Hybrid Search, Query Expansion, HyDE, Reranking, RAGAS evaluation (Context Precision, Recall, Faithfulness), and LangSmith observability."] },
  { org: "Pakistan Engineering Council", location: "Islamabad, PK", period: "Dec 2024 – Jan 2025", title: "Mentor and Instructor – PEC Generative AI Training", bullets: [] },
  { org: "Pak Angels (San Jose, California)", location: "Remote", period: "Aug – Sept 2024", title: "Mentor and Judge – Essential Generative AI Training", bullets: [] },
  {
    org: "iCodeGuru (San Jose, California)",
    location: "Remote",
    period: "June 2024 – Present",
    title: "Teacher and Trainer",
    bullets: ["Subjects: IELTS, GRE, LeetCode, Python, Machine Learning, Data Analysis"],
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
  { org: "Super Nova Academy", location: "Islamabad, PK", period: "2010 – Present", title: "Teacher – Mathematics, Statistics & SAT", bullets: [] },
  { org: "Beaconhouse School System, BMI", location: "Islamabad, PK", period: "Aug 2017 – Sept 2022", title: "Teacher of Mathematics", bullets: [] },
  { org: "Bank Alfalah Limited", location: "Wah Cantt, PK", period: "June 2008 – July 2010", title: "Operations Officer", bullets: [] },
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
  { org: "Pakistan Stock Exchange", location: "Islamabad, PK", period: "1999 – 2004", title: "Equity Investment and Portfolio Management", bullets: [] },
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

const education = [
  { school: "World Quant University (USA)", period: "Jan 2025 – Present", degree: "Master's in Financial Engineering (In Progress)" },
  { school: "Pakistan Institute of Development Economics (PIDE)", period: "Aug 2016 – Aug 2022", degree: "Ph.D., Econometrics · CGPA 3.36", thesis: "Causal Discovery using Modified Riz PC Algorithm from Observational and Latent Variables Data" },
  { school: "Pakistan Institute of Development Economics (PIDE)", period: "Aug 2014 – Aug 2016", degree: "M.Phil., Economics and Finance · CGPA 3.21", thesis: "The Impact of Macroeconomic Volatility on Stock Returns Volatility: Evidence from Pakistani Stock Market" },
  { school: "Allama Iqbal Open University", period: "Aug 2006 – Sept 2009", degree: "MBA, Human Resource Management", thesis: "Report on Bank Alfalah Limited" },
  { school: "Institute of Cost and Management Accountants in Pakistan", period: "2006 – 2010", degree: "Master, Chartered Management Accountant" },
  { school: "F.G. Degree College, Wah Cantt", period: "June 1990 – June 1992", degree: "B.Sc., Mathematics & Statistics" },
];

const skillGroups = [
  { category: "Programming Languages", items: ["Python (Advanced)", "R", "TypeScript", "JavaScript", "SQL", "Next.js", "Tailwind CSS", "FastAPI"] },
  { category: "Statistical & Analytical Software", items: ["MATLAB", "STATA", "EViews", "SPSS", "OxMatrix", "Power BI", "Tableau", "MS Office"] },
  { category: "AI / ML Frameworks", items: ["LangChain", "LangGraph", "CrewAI", "OpenAI Agents SDK", "PyTorch (Fine Tuning)", "Streamlit", "FastAPI"] },
  { category: "Technologies & Specializations", items: ["Machine Learning", "Deep Learning", "NLP", "Applied Generative AI", "MLOps", "FinTech", "Cloud-Native Gen AI Engineering", "Full-Stack Development", "SaaS Product Development", "Business Intelligence", "Google AI Studio"] },
  { category: "Cloud & Dev Tools", items: ["Azure", "AWS", "MS Project", "Neo4j", "Apache Spark", "Oracle VM VirtualBox", "Linux (CentOS)", "LaTeX", "Markdown"] },
  { category: "Data Science Libraries", items: ["Pydantic", "LeetCode DSA", "Kaggle", "Jupyter", "ggplot2"] },
  { category: "Finance & Accounting", items: ["Accounting ERP Systems", "General Ledger (GL)", "Accounts Receivable (AR)", "Accounts Payable (AP)", "Cash Flow Management", "Budgeting", "Financial Planning & Analysis (FP&A)", "Financial Analysis", "Financial Forecasting", "Financial Reporting", "Financial Dashboards", "Reconciliation", "Invoicing", "Accounting Automation", "CFO Advisory", "SMB Finance", "Credit Control & Collections", "Tally ERP / Tally Accounting Software", "Microsoft Access", "Advanced Microsoft Excel"] },
  { category: "Research & Policy", items: ["Policy Research", "Social Policy", "Public Finance", "Development Economics", "Econometrics", "Quantitative Research", "Evidence-Based Policy", "Public Policy Analysis", "Social Protection", "Poverty Analysis", "Governance", "Impact Evaluation", "Economic Policy", "Think Tank Research"] },
];

const honors = [
  { title: "National Winner – AI FinTech Projects (2025)", org: "National Technology Fund (MoITT) & Asian Development Bank (ADB)", details: "Built AFIW–ZulfiQode: Agentic Financial Intelligence Wrapper. Technologies: LangGraph, FastAPI, Neo4j. Features: RAG pipelines for financial statement summarization and ESG scoring, RLHF and SFT for adaptive reasoning, ML and econometric models for volatility, causal, rumour, and reversal detection, Streamlit dashboards with real-time monitoring." },
  { title: "Create Apps Championship 2025–26", org: "Dubai Chamber of Digital Economy, UAE", details: "Certificate of Participation." },
  { title: "Generative AI Instructor / Mentor / Judge Certificate – NCEAC–HEC Cohort 2 (Jan–Feb 2026)", org: "Higher Education Commission (HEC) Pakistan & National Computing Education Accreditation Council (NCEAC)", details: "Recognized for contributions as Instructor, Mentor, and Judge for the NCEAC–HEC Generative AI Training Cohort 2 (Jan–Feb 2026). Helped aspiring professionals build practical Generative AI skills and evaluated AI innovation projects. Collaborating partners: iCodeGuru, Pak Angels, ASPIRE Pakistan, HEC Pakistan, NCEAC, and UETIANS Lahore Endowment Foundation (ULEF), USA.", bold: "UETIANS Lahore Endowment Foundation (ULEF), USA" },
  { title: "Judge – AI Innovation & Prompt Engineering", org: "All Pakistan Prompt Engineering Competition (APPEC) – ETL Online", details: "" },
  { title: "Participant / Contributor – Strategic Foresight & Governance", org: "The Futures Forum 2025 (UNESCO World Futures Day – Society 5.0)", details: "" },
  { title: "McKinsey Forward Program Participant", org: "McKinsey & Company", details: "Dec 2024. Focus: Problem-solving, leadership, digital transformation skills." },
  { title: "Speaker – WordPress Hackathon 2024", org: "WPBrigade & iCodeGuru (Silicon Valley)", details: "Topic: AI Leadership and LLM Innovation at Turing." },
  { title: "Winner – All Employees Banking Quiz", org: "Bank Alfalah Limited", details: "June 2009." },
  { title: "Featured Educator – Abako Calculators (2024)", org: "Abako Scientific Calculators", details: "Top educator and brand ambassador." },
  { title: "CALICO Fall '24", org: "UC Berkeley", details: "Dec 2024. Focus: Reasoning and Problem-solving." },
];

const books = [
  { title: "Barriers to AGI Maturation", date: "February 2025" },
  { title: "The Speed Learning Formula: Learn Fast, Grow Fast, Earn Fast", date: "February 2025" },
  { title: "Loops of Mind, Wings of Code: Rebirth of Agency – First Step towards Agentic AI", date: "May 2025" },
];

const press = [
  { title: "Ensuring Ethical and Secure AI", outlet: "Pakistan Observer", date: "May 25, 2024", desc: "Comprehensive Guide to AI Audits and Foundational LLMs." },
  { title: "Insights into Pakistan Stock Exchange's recent record high triumph", outlet: "The Financial Daily International", date: "March 30, 2024", desc: "" },
  { title: "Navigate the psychological maze of inflation and make smarter investment decisions", outlet: "The Financial Daily International", date: "March 10, 2024", desc: "" },
  { title: "Penny Wise Pound Foolish Approach", outlet: "The Financial Daily International", date: "July 2022", desc: "" },
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

const certGroups = [
  {
    category: "AI & Agent Frameworks",
    items: [
      "Generative AI Application Developer | Pak Angels (July–Sept 2024)",
      "LangGraph | LangChain Academy",
      "CrewAI",
      "OpenAI Agents SDK",
      "Cloud Applied Generative AI Engineering (GenEng) | PIAIC (2024)",
      "NetLogo – Agent-Based Modelling (In Progress)",
    ],
  },
  {
    category: "Banking, Finance & Quantitative Modeling",
    items: [
      "Construct Stock Market Indices | Coursera Project Network (Aug 2023)",
      "Introduction to Fundamental Analysis | Pakistan Stock Exchange",
      "Stock Market Basics | Pakistan Stock Exchange",
      "Banking Certificates | Bank Alfalah Limited",
      "Public Financial Management System Workshop | ICMAP (Dec 2012)",
    ],
  },
  {
    category: "Big Data, Data Science & AI",
    items: [
      "Neo4j Fundamentals | Graph Academy (Dec 2024)",
      "Generative AI for Everyone | DeepLearning.AI (Nov 2023)",
      "Introduction to Generative AI Studio | Google Cloud Skills Boost (2024)",
      "Building Your Own Database Agent | DeepLearning.AI",
      "Multi AI Agent Systems with CrewAI | DeepLearning.AI (2024)",
      "Fast LLM Inference with Cerebras | DeepLearning.AI (2026)",
      "Data Analysis with R Programming | Google (Jan 2022)",
      "Foundations: Data, Data, Everywhere | Google (Jan 2021)",
      "Share Data Through the Art of Visualization | Google (Jan 2022)",
      "Applied Data Science (Housing in Mexico & Buenos Aires)",
      "Power BI Essential Training | Udemy (Aug 2020)",
      "Big Data 101 | IBM (Aug 2020)",
      "SQL and Relational Databases | IBM (Aug 2020)",
      "Binary Prediction of Poisonous Mushrooms | Kaggle (Machine Learning)",
      "Apache Spark Programming in Python",
      "FastAPI Fundamentals",
      "Pydantic",
    ],
  },
  {
    category: "Programming & Algorithms",
    items: [
      "AI Python for Beginners: Basics of AI Python Coding | DeepLearning.AI",
      "AI for Web Designers | Udemy (2023)",
      "Introduction to Programming with MATLAB | Vanderbilt University (Oct 2021)",
      "LeetCode – Data Structures and Algorithms",
      "Programming for Everybody (Getting Started with Python) | University of Michigan (Jan 2016)",
      "Python Data Structures | University of Michigan (Feb 2016)",
    ],
  },
  {
    category: "Cloud Computing & Infrastructure",
    items: [
      "Introduction to Cloud Computing | IBM (Sept 2023)",
      "Azure Cloud Computing | Microsoft",
      "Microsoft Azure AI Fundamentals | Microsoft (June 23, 2024)",
      "Microsoft Azure AI Services: Fundamentals of Machine Learning | Microsoft",
      "Microsoft Azure AI Services: Fundamentals of Computer Vision | Microsoft",
    ],
  },
  {
    category: "Cybersecurity & Digital Safety",
    items: ["Cybersecurity & Cybersecurity Awareness | Udemy (2023)"],
  },
  {
    category: "Emerging Tech & Digital Innovation",
    items: [
      "Become Metaverse Master: The Ultimate Guide | Udemy (2023)",
      "Internet of Things (IoT): Fundamental Course | Udemy (2023)",
    ],
  },
  {
    category: "Teaching Certifications",
    items: [
      "Extension Cambridge O Level Mathematics (4024) | Cambridge Assessment International Education (Feb 2018)",
      "Teaching Online with Google Suite | Beaconhouse (April 2021)",
      "Mind Mapping Mastery | Beaconhouse (April 2021)",
      "How to Teach Online | Beaconhouse (Jan 2021)",
      "Gen AI Application Instructor/Mentor | Pakistan Engineering Council (March 2025)",
      "Instructor – Python for Mathematicians | COMSATS University (Oct 2024)",
      "Microsoft Excel – From Beginner to Expert | Beaconhouse (April 2021)",
    ],
  },
  {
    category: "Research Training & Workshops",
    items: [
      "Introduction to CGE Modeling | PIDE (Feb 2024)",
      "Applied Research Methods for Economics and Finance Workshop | PIDE (2022)",
      "Data Visualization Using ggplot2 in R | PIDE (2017)",
      "MATLAB Programming | PIDE (2020)",
      "LaTeX & Markdown for Academic Writing | PIDE (2022)",
      "Use SurveyMonkey to Create a Survey and Analyze Results | Coursera (Oct 2021)",
      "Linux (CentOS): File System, Permissions, Ownership, Shell Commands",
    ],
  },
];

const featuredProjects = [
  {
    title: "Gulf SWF SEC Filings Agent – AI-Powered Regulatory Intelligence",
    url: "https://frontend-blue-eta-10.vercel.app",
    github: "https://github.com/zulfiqaralimir/gulf-swf-agent",
    bullets: [
      "Built a full-stack AI agent that autonomously tracks and analyzes SEC filings from Gulf Sovereign Wealth Funds (ADIA, PIF, QIA, Mubadala) — monitoring 13F, 13D/G, and SC filings for portfolio shifts and activist positions",
      "Engineered the agentic layer using Gemini 2.5 Flash and Google Cloud Agent Development Kit (ADK), enabling natural-language querying of filing data with reasoning-backed responses",
      "Designed a FastAPI backend with MongoDB Atlas for structured storage of parsed SEC EDGAR filings",
      "Built a Next.js frontend deployed to Vercel; backend deployed to Google Cloud Run for serverless, auto-scaling execution",
      "Delivered the complete system — agent, API, database, and frontend — in 10 days",
    ],
    stack: ["Gemini 2.5 Flash", "Google Cloud ADK", "FastAPI", "Next.js", "MongoDB Atlas", "Cloud Run", "Vercel", "Python", "SEC EDGAR"],
  },
  {
    title: "Gulf SWF Filing Intelligence Agent – Web Data UNLOCKED Hackathon (May 2026)",
    url: "https://databright-gulf-swf-agent.vercel.app",
    github: "https://github.com/zulfiqaralimir/databright_gulf-swf-agent",
    bullets: [
      "Built a real-time SEC EDGAR filing monitor for 5 Gulf Sovereign Wealth Funds (ADIA, PIF, QIA, Mubadala, ADQ) managing $4T+ AUM — tracking 13F, 13D/G, and SC filings",
      "Bypassed EDGAR bot detection and rate limits using Bright Data's 400M+ residential IP network via MCP Server",
      "Generated institutional-grade investment intelligence (BEARISH/BULLISH/NEUTRAL signals, sector analysis) on 87+ live filings using Gemini 2.0 Flash",
      "Deployed production full stack: FastAPI on Hugging Face Spaces, Next.js on Vercel, MongoDB Atlas for structured filing storage",
    ],
    stack: ["Bright Data MCP", "Gemini 2.0 Flash", "LangChain", "MongoDB Atlas", "FastAPI", "Next.js", "Python", "Hugging Face Spaces", "SEC EDGAR"],
  },
  {
    title: "PSX Intraday Intelligence System – Black Iron Quantum AI (2026)",
    url: "",
    github: "",
    bullets: [
      "Engineered a Python web scraper extracting 12 OHLCV fields from dps.psx.com.pk for 7 PSX-listed equities (KEL, OGDC, PPL, HBL, ENGRO, OBOY, FCEPL) — fully automated end-to-end financial data pipeline",
      "Designed a dual-sheet Google Sheets architecture — live snapshot table + append-only price history — via Google Sheets API and service account authentication",
      "Implemented intraday OHLCV aggregation across 6 hourly intervals (Mon–Thu) and 5 Friday intervals with Jummah prayer break logic",
      "Deployed on GitHub Actions with 15 cron triggers (UTC-converted PKT schedule) — fully serverless and PC-independent",
      "Built interactive candlestick charts with gap detection using Plotly — PKR and % annotated intraday price gap signals",
      "Integrated Looker Studio dashboard with live data refresh, Change % bar chart, and multi-field stock comparison table",
    ],
    stack: ["Python", "BeautifulSoup4", "gspread", "Plotly", "GitHub Actions", "Google Sheets API", "Looker Studio", "Pandas"],
  },
  {
    title: "WellServe HR Payroll System – Black Iron Quantum AI",
    url: "",
    github: "",
    bullets: [
      "Engineered a full-stack HR Payroll platform for WellServe Oilfield Services (Islamabad) — computing monthly payroll for 190+ employees across 15 departments with NUMERIC(12,2) precision: Gross (Basic + HRA 40% + Utility 5% + Conveyance 5% + OT + Rig Bonus + Travelling + Arrears) minus EOBI, FBR income tax slabs, Provident Fund, loans, absent days, and LWP.",
      "Automated Excel payroll data ingestion via a 5-sheet workbook (Employees, Salary Rates, OT Rates, Rig Bonus, Monthly Input) using SheetJS, with real-time folder watching (chokidar) that auto-detects new files and triggers a fast bulk import — updating master and monthly tables in a single operation.",
      "Built a Puppeteer-powered PDF payslip generation pipeline with automated per-employee email delivery via Nodemailer — enabling individual and bulk payslip distribution across 190+ employees per payroll cycle.",
      "Implemented JWT-secured role-based access control (Admin, HR Manager, CFO) with a CFO approval workflow that locks payroll until reviewed and approved — backed by a full audit log capturing every action (who, what, when).",
      "Delivered complete accounting and compliance outputs: bank transfer lists (FBL, HMB, Cash), Journal Voucher (JV) generation for GL posting, EOBI & Provident Fund reports, and department-wise payroll summaries — underpinned by a 17-table PostgreSQL schema (10 master + 7 derived) with soft delete on all records.",
    ],
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "SheetJS", "Puppeteer", "JWT", "Nodemailer", "chokidar"],
  },
  {
    title: "zam-webtool — Agent-Safe Web Browsing Tool (2026)",
    url: "",
    github: "https://github.com/zulfiqaralimir/zam-webtool",
    bullets: [
      "Built a controlled browser execution layer for agentic AI systems enforcing strict agent-browser decoupling — preventing agents from directly manipulating browser state and enabling safe, auditable web interactions",
      "Implemented hard action limits (MAX_STEPS=20), mandatory audit logging, and abuse prevention mechanisms for enterprise-grade safety",
      "Designed for compatibility with CrewAI, LangGraph, and Anthropic tool-use patterns — plug-and-play integration across major agentic frameworks",
      "Published as an installable open-source Python package via GitHub",
    ],
    stack: ["Python", "Playwright", "Firefox", "LangChain", "CrewAI", "LangGraph", "Anthropic Tool Use"],
  },
  {
    title: "BlackIronTimes – Quantitative Financial Intelligence Platform",
    url: "https://lackirontimes.com",
    github: "",
    bullets: [
      "Developed a quantitative financial intelligence platform integrating macroeconomic analysis, market data pipelines, and research-grade reporting",
      "Engineered a scalable data architecture using Next.js, Supabase, and Cloudflare R2 supporting 100K+ daily requests",
      "Architected a multi-agent AI research pipeline (Market Agent, News Agent, Research Agent, Visualization Agent) using LangGraph and Claude Haiku",
      "Applied vector-based semantic retrieval (pgvector) and integrated multilingual data dissemination (English, Urdu, Arabic)",
    ],
    stack: ["Next.js", "Supabase", "Cloudflare R2", "pgvector", "LangGraph", "Claude Haiku", "ISR", "TypeScript"],
  },
  {
    title: "Quantara – Personal Hedge Fund Research Platform",
    url: "https://quantara-nine.vercel.app/",
    github: "",
    bullets: [
      "Developed a personal hedge fund research platform enforcing a disciplined fundamental value investment process — including structured diligence checklists, bull/base/bear scenario analysis, and valuation frameworks across SaaS, semiconductors, specialty finance, and medtech",
    ],
    stack: [],
  },
  {
    title: "IGCSE Math AI Tutor",
    url: "",
    github: "",
    bullets: [
      "Built an AI tutoring system for IGCSE Mathematics (Sets): students ask questions in natural language and receive step-by-step explanations, Venn diagram visualisations, and graded answer evaluation",
      "Surfaces semantically relevant past-paper questions; designed a difficulty-tiered question bank with structured mark-scheme grading",
    ],
    stack: [],
  },
  {
    title: "ByteWise – CS Education Platform",
    url: "",
    github: "",
    bullets: [
      "Built and authored a full-stack CS education platform (Next.js 16, React 19, TypeScript, Tailwind CSS v4, MDX) featuring 20+ long-form technical articles across 8 topic areas",
      "Designed a custom MDX content pipeline with math rendering (KaTeX), syntax highlighting, and reusable React components",
      "Authored deep-dive content: OSI networking stack, algorithms, design patterns (SOLID, GoF), distributed systems, ML, and agentic AI",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "MDX", "KaTeX", "rehype-highlight"],
  },
];

const researchProjects = [
  { title: "Climate Justice RIZPC Algorithm Analysis (2024)", desc: "First quantitative causal analysis of emissions → loss & damage. Statistical proof showing 24:1 ratio disparity." },
  { title: "Environmental Risk Mapping for Sustainable Finance", desc: "Satellite-based ESG framework using NDVI and land surface temperature." },
  { title: "Hidden Links in Environment, Energy, Economy Nexus: FCI Approach", desc: "VAR modeling and ARDL bounds testing for causal discovery." },
  { title: "Penalized Regression Methods for Exchange Rate Forecasting", desc: "Evidence from U.S. Dollar Index." },
  { title: "Causal Discovery in Stock Market Data using PC Algorithms", desc: "Structural learning approach." },
  { title: "Multi-Agent System for Portfolio Optimization", desc: "Via OpenAI Agents SDK." },
  { title: "Yield Curve & ETF Analysis", desc: "" },
  { title: "Application of Geospatial Data", desc: "Hurricane Irene's path analysis." },
  { title: "Intelligent Approach for Stock Market Movement Prediction", desc: "Optimized technical indicators and neural networks for emerging markets." },
  { title: "ZulfiQode: Computational Approach to Systematic Theme Mining of Financial Ethics", desc: "" },
  { title: "Business Climate and Inequality", desc: "Panel IV–Quantile Regression evidence." },
  { title: "Cointegration and Error Correction – Apple and Microsoft", desc: "Time-series modeling of long-run relationships." },
  { title: "How to Read a Social Accounting Matrix (SAM) – Pakistan 2007-08 (Working Paper)", desc: "Practitioner's guide on SAM reading conventions and CGE modeling foundations; cell-by-cell breakdown of Pakistan's 9-account SAM covering production, income distribution, household expenditure, government transactions, and trade/external sector flows; research roadmap: temporal analysis (2007-08 to 2019-20), cross-country South Asian comparison, SAM invariance to inflation — targeting 3-4 peer-reviewed publications; shared with Dr. Husnain Naqvi for academic collaboration." },
  { title: "Agricultural Subsidy Reform: CGE Modelling Approach", desc: "Pakistan case study." },
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
  { event: "Web Data UNLOCKED Hackathon", org: "lablab.ai × Bright Data", period: "May 2026", project: "Gulf SWF Filing Intelligence Agent — real-time SEC EDGAR monitor for $4T+ AUM funds using Bright Data MCP, Gemini 2.0 Flash, FastAPI, and Next.js" },
  { event: "Sketch & Search Hackathon", org: "Google DeepMind × Qdrant × Freepik", period: "", project: "Multi-View Interpreter: CPU-only sketch interpretation with FastAPI and Gradio" },
  { event: "LangGraph Agentic Chatbot", org: "lablab.ai", period: "Oct 11–13, 2024", project: "Build Fast Ship Fast with Replit & Cursor Hackathon" },
  { event: "AI Agents Hackathon (FinTech)", org: "lablab.ai", period: "Sep 13–15, 2024", project: "Agentic Flow of System for Financial Analysis with ChatGPT — Team Leader" },
  { event: "Generative AI Hackathon with IBM Watsonx", org: "lablab.ai", period: "Aug 23–26, 2024", project: "Personalized Diabetes Management App (Glyco Fit) — Team Leader" },
  { event: "Falcon Hackathon", org: "lablab.ai", period: "July 26 – Aug 5, 2024", project: "AI-Powered Economics Tutor — Team Leader" },
  { event: "Llama 3 Hackathon", org: "lablab.ai", period: "July 19–21, 2024", project: "AI Driven Social Media Post Optimizer — Team Leader" },
  { event: "Langflow Hackathon", org: "lablab.ai", period: "July 12–14, 2024", project: "CodeMate — Team Member" },
  { event: "Codestral Hackathon", org: "lablab.ai", period: "June 16–17, 2024", project: "CodeMate – Your Coding Companion — Team Leader" },
  { event: "Hello GPT-4o AI Challenge", org: "lablab.ai", period: "May 31 – June 2, 2024", project: "System for Financial Analysis with ChatGPT-4o — Team Leader" },
];

async function downloadPDF() {
  const { jsPDF } = await import("jspdf");

  const doc = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const M = 14;
  const CW = W - 2 * M;
  let y = M;

  // amber-700, gray-800, gray-600, gray-500, gray-400
  const AMBER: [number, number, number] = [180, 83, 9];
  const G800: [number, number, number] = [31, 41, 55];
  const G600: [number, number, number] = [75, 85, 99];
  const G500: [number, number, number] = [107, 114, 128];
  const G400: [number, number, number] = [156, 163, 175];

  const br = (min = 6) => {
    if (y + min > H - M) { doc.addPage(); y = M; }
  };

  const style = (size: number, bold: boolean, color: [number, number, number]) => {
    doc.setFontSize(size);
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setTextColor(...color);
  };

  const wrappedLines = (text: string, maxW: number): string[] =>
    doc.splitTextToSize(text, maxW) as string[];

  const writeWrapped = (text: string, x: number, maxW: number, lh: number) => {
    const lines = wrappedLines(text, maxW);
    lines.forEach((line: string) => { br(lh); doc.text(line, x, y); y += lh; });
  };

  const section = (title: string) => {
    br(12); y += 3;
    style(11, true, AMBER);
    doc.text(title, M, y); y += 2;
    doc.setDrawColor(209, 213, 219);
    doc.setLineWidth(0.3);
    doc.line(M, y, W - M, y); y += 4;
  };

  // ── HEADER ──
  style(20, true, AMBER);
  doc.text("Zulfiqar Ali Mir", W / 2, y, { align: "center" }); y += 8;
  style(10, false, G600);
  doc.text("Quantitative Researcher · AI Engineer · Financial Strategist", W / 2, y, { align: "center" }); y += 5;
  style(8.5, false, AMBER);
  writeWrapped(badges.join(" · "), M, CW, 4);
  style(8, false, G500);
  doc.text("manager.equity.finance@gmail.com  |  +92 322 5150501", W / 2, y, { align: "center" }); y += 3.5;
  doc.text("linkedin.com/in/zulfiqar-ali-mir  |  github.com/zulfiqaralimir", W / 2, y, { align: "center" }); y += 7;

  // ── EXPERIENCE ──
  section("PROFESSIONAL EXPERIENCE");
  jobs.forEach(job => {
    br(12);
    style(10, true, G800);
    doc.text(job.org, M, y);
    style(8, false, G400);
    doc.text(`${job.location} · ${job.period}`, W - M, y, { align: "right" }); y += 4.5;
    style(9.5, true, AMBER);
    writeWrapped(job.title, M, CW, 4.2);
    job.bullets.forEach(b => { style(8.5, false, G600); writeWrapped(`• ${b.replace(/\*\*(.+?)\*\*/g, "$1")}`, M + 3, CW - 3, 4); });
    y += 1.5;
  });

  // ── RESEARCH FELLOWSHIPS ──
  section("RESEARCH FELLOWSHIPS");
  fellowships.forEach(f => {
    br(12);
    style(10, true, G800);
    doc.text(f.org, M, y);
    style(8, false, G400);
    doc.text(`${f.location} · ${f.period}`, W - M, y, { align: "right" }); y += 4.5;
    style(9.5, true, AMBER);
    writeWrapped(f.title, M, CW, 4.2);
    f.bullets.forEach(b => { style(8.5, false, G600); writeWrapped(`• ${b}`, M + 3, CW - 3, 4); });
    y += 1.5;
  });

  // ── EDUCATION ──
  section("EDUCATION");
  education.forEach(e => {
    br(12);
    style(10, true, G800);
    doc.text(e.school, M, y);
    style(8, false, G400);
    doc.text(e.period, W - M, y, { align: "right" }); y += 4.5;
    style(9.5, false, AMBER);
    doc.text(e.degree, M, y); y += 4.5;
    if (e.thesis) { style(8, false, G500); doc.setFont("helvetica", "italic"); writeWrapped(`Thesis: ${e.thesis}`, M, CW, 3.8); }
    y += 1.5;
  });

  // ── SKILLS ──
  section("TECHNICAL SKILLS");
  skillGroups.forEach(g => {
    br(5);
    style(8.5, true, G800);
    const label = `${g.category}: `;
    const lw = doc.getTextWidth(label);
    doc.text(label, M, y);
    style(8.5, false, G600);
    writeWrapped(g.items.join(", "), M + lw, CW - lw, 4);
  });
  y += 2;

  // ── FEATURED PROJECTS ──
  section("FEATURED PROJECTS");
  featuredProjects.forEach(p => {
    br(14);
    style(10, true, G800);
    writeWrapped(p.title, M, CW, 4.5);
    if (p.url || p.github) {
      style(7.5, false, G400);
      const meta = [p.url, p.github ? `GitHub: ${p.github}` : ""].filter(Boolean).join("  |  ");
      writeWrapped(meta, M, CW, 3.5);
    }
    p.bullets.forEach(b => { style(8.5, false, G600); writeWrapped(`• ${b}`, M + 3, CW - 3, 4); });
    if (p.stack.length > 0) { style(7.5, true, AMBER); writeWrapped(`Stack: ${p.stack.join(", ")}`, M + 3, CW - 3, 3.5); }
    y += 2;
  });

  // ── RESEARCH PROJECTS ──
  section("RESEARCH & CODING PROJECTS");
  researchProjects.forEach(p => {
    br(5);
    style(8.5, true, G800);
    doc.text(p.title, M, y); y += 4;
    if (p.desc) { style(8.5, false, G600); writeWrapped(p.desc, M + 3, CW - 3, 3.8); }
  });
  y += 2;

  // ── CONFERENCES ──
  section("CONFERENCE PRESENTATIONS");
  conferences.forEach(c => {
    br(12);
    style(10, true, G800);
    doc.text(c.title, M, y); y += 4.5;
    style(9, false, G600); doc.setFont("helvetica", "italic");
    writeWrapped(c.paper, M, CW, 4);
    if (c.details) { style(8, false, G500); writeWrapped(c.details, M, CW, 3.5); }
    y += 2;
  });

  // ── HACKATHONS ──
  section("AI PROJECTS & HACKATHONS");
  hackathons.forEach(h => {
    br(8);
    style(9, true, G800);
    doc.text(h.event, M, y);
    style(8, false, G400);
    doc.text(`${h.org}${h.period ? ` · ${h.period}` : ""}`, W - M, y, { align: "right" }); y += 4;
    style(8.5, false, G600);
    writeWrapped(h.project, M + 3, CW - 3, 4);
    y += 1;
  });

  // ── HONORS ──
  section("HONORS & DISTINCTIONS");
  honors.forEach(h => {
    br(10);
    style(9.5, true, G800);
    writeWrapped(h.title, M, CW, 4.2);
    style(8.5, false, G500);
    writeWrapped(h.org, M, CW, 3.8);
    if (h.details) { style(8, false, G600); writeWrapped(h.details, M, CW, 3.5); }
    y += 1.5;
  });

  // ── PUBLICATIONS ──
  section("PUBLICATIONS");
  style(9, true, G800); doc.text("Books", M, y); y += 4;
  books.forEach(b => {
    br(5); style(8.5, false, G800);
    const bLines = wrappedLines(b.title, CW * 0.8);
    doc.text(bLines, M, y);
    style(8, false, G400); doc.text(b.date, W - M, y, { align: "right" });
    y += bLines.length * 4;
  });
  y += 3;
  style(9, true, G800); doc.text("Press", M, y); y += 4;
  press.forEach(p => {
    br(7); style(8.5, false, G800); writeWrapped(p.title, M, CW, 4);
    style(8, false, G400);
    writeWrapped(`${p.outlet} · ${p.date}${p.desc ? `  —  ${p.desc}` : ""}`, M, CW, 3.5);
  });
  y += 3;
  style(9, true, G800); doc.text("Teaching Videos", M, y); y += 4;
  videos.forEach(v => {
    br(5); style(8.5, false, G800);
    const vLines = wrappedLines(v.title, CW * 0.72);
    doc.text(vLines, M, y);
    style(8, false, G400); doc.text(`${v.platform}${v.date ? ` · ${v.date}` : ""}`, W - M, y, { align: "right" });
    y += vLines.length * 3.8;
  });
  y += 2;

  // ── CERTIFICATIONS ──
  section("CERTIFICATIONS & TRAINING");
  certGroups.forEach(g => {
    br(8); style(9, true, G800); doc.text(g.category, M, y); y += 4;
    g.items.forEach(item => { style(8.5, false, G600); writeWrapped(`• ${item}`, M + 3, CW - 3, 3.8); });
    y += 2;
  });

  doc.save("Zulfiqar-Ali-Mir-Resume.pdf");
}

async function downloadDocx() {
  const { Document, Paragraph, TextRun, Packer, AlignmentType, BorderStyle } = await import("docx");

  const heading = (text: string) =>
    new Paragraph({
      children: [new TextRun({ text, bold: true, size: 22, color: "92400e" })],
      spacing: { before: 240, after: 80 },
      border: { bottom: { color: "e5e7eb", space: 1, style: BorderStyle.SINGLE, size: 4 } },
    });

  const children = [
    new Paragraph({
      children: [new TextRun({ text: "Zulfiqar Ali Mir", bold: true, size: 36, color: "92400e" })],
      alignment: AlignmentType.CENTER,
    }),
    new Paragraph({
      children: [new TextRun({ text: "Quantitative Researcher · AI Engineer · Financial Strategist", size: 22 })],
      alignment: AlignmentType.CENTER,
    }),
    new Paragraph({
      children: [new TextRun({ text: badges.join(" · "), size: 18, color: "b45309" })],
      alignment: AlignmentType.CENTER,
    }),
    new Paragraph({
      children: [new TextRun({ text: "manager.equity.finance@gmail.com | +92 322 5150501 | linkedin.com/in/zulfiqar-ali-mir | github.com/zulfiqaralimir", size: 18, color: "6b7280" })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
    }),

    heading("PROFESSIONAL EXPERIENCE"),
    ...jobs.flatMap((job) => [
      new Paragraph({
        children: [
          new TextRun({ text: job.org, bold: true, size: 20 }),
          new TextRun({ text: `   ${job.location} · ${job.period}`, size: 18, color: "9ca3af" }),
        ],
        spacing: { before: 120 },
      }),
      new Paragraph({ children: [new TextRun({ text: job.title, size: 20, color: "b45309", bold: true })] }),
      ...job.bullets.map(
        (b) =>
          new Paragraph({
            children: [new TextRun({ text: `• ${b.replace(/\*\*(.+?)\*\*/g, "$1")}`, size: 18, color: "4b5563" })],
            indent: { left: 360 },
          })
      ),
    ]),

    heading("RESEARCH FELLOWSHIPS"),
    ...fellowships.flatMap((f) => [
      new Paragraph({
        children: [
          new TextRun({ text: f.org, bold: true, size: 20 }),
          new TextRun({ text: `   ${f.location} · ${f.period}`, size: 18, color: "9ca3af" }),
        ],
        spacing: { before: 120 },
      }),
      new Paragraph({ children: [new TextRun({ text: f.title, size: 20, color: "b45309", bold: true })] }),
      ...f.bullets.map(
        (b) =>
          new Paragraph({
            children: [new TextRun({ text: `• ${b}`, size: 18, color: "4b5563" })],
            indent: { left: 360 },
          })
      ),
    ]),

    heading("EDUCATION"),
    ...education.flatMap((e) => [
      new Paragraph({
        children: [
          new TextRun({ text: e.school, bold: true, size: 20 }),
          new TextRun({ text: `   ${e.period}`, size: 18, color: "9ca3af" }),
        ],
        spacing: { before: 120 },
      }),
      new Paragraph({ children: [new TextRun({ text: e.degree, size: 20, color: "b45309" })] }),
      ...(e.thesis
        ? [new Paragraph({ children: [new TextRun({ text: `Thesis: ${e.thesis}`, size: 18, color: "6b7280", italics: true })] })]
        : []),
    ]),

    heading("TECHNICAL SKILLS"),
    ...skillGroups.map(
      (g) =>
        new Paragraph({
          children: [
            new TextRun({ text: `${g.category}: `, bold: true, size: 18 }),
            new TextRun({ text: g.items.join(", "), size: 18, color: "4b5563" }),
          ],
          spacing: { before: 80 },
        })
    ),

    heading("FEATURED PROJECTS"),
    ...featuredProjects.flatMap((p) => [
      new Paragraph({
        children: [
          new TextRun({ text: p.title, bold: true, size: 20 }),
          ...(p.url ? [new TextRun({ text: `   ${p.url}`, size: 16, color: "9ca3af" })] : []),
          ...(p.github ? [new TextRun({ text: `   GitHub: ${p.github}`, size: 16, color: "9ca3af" })] : []),
        ],
        spacing: { before: 120 },
      }),
      ...p.bullets.map(
        (b) =>
          new Paragraph({
            children: [new TextRun({ text: `• ${b}`, size: 18, color: "4b5563" })],
            indent: { left: 360 },
          })
      ),
      ...(p.stack.length > 0
        ? [
            new Paragraph({
              children: [
                new TextRun({ text: "Stack: ", bold: true, size: 16 }),
                new TextRun({ text: p.stack.join(", "), size: 16, color: "b45309" }),
              ],
              indent: { left: 360 },
            }),
          ]
        : []),
    ]),

    heading("RESEARCH & CODING PROJECTS"),
    ...researchProjects.map(
      (p) =>
        new Paragraph({
          children: [
            new TextRun({ text: p.title, bold: true, size: 18 }),
            ...(p.desc ? [new TextRun({ text: ` — ${p.desc}`, size: 18, color: "4b5563" })] : []),
          ],
          spacing: { before: 80 },
        })
    ),

    heading("CONFERENCE PRESENTATIONS"),
    ...conferences.flatMap((c) => [
      new Paragraph({
        children: [new TextRun({ text: c.title, bold: true, size: 20 })],
        spacing: { before: 120 },
      }),
      new Paragraph({ children: [new TextRun({ text: c.paper, size: 18, italics: true, color: "4b5563" })] }),
      ...(c.details
        ? [new Paragraph({ children: [new TextRun({ text: c.details, size: 16, color: "6b7280" })] })]
        : []),
    ]),

    heading("AI PROJECTS & HACKATHONS"),
    ...hackathons.map(
      (h) =>
        new Paragraph({
          children: [
            new TextRun({ text: h.event, bold: true, size: 18 }),
            new TextRun({ text: ` | ${h.org}${h.period ? ` · ${h.period}` : ""}`, size: 18, color: "6b7280" }),
            new TextRun({ text: `\n• ${h.project}`, size: 16, color: "4b5563" }),
          ],
          spacing: { before: 80 },
        })
    ),

    heading("HONORS & DISTINCTIONS"),
    ...honors.flatMap((h) => [
      new Paragraph({
        children: [
          new TextRun({ text: h.title, bold: true, size: 20 }),
          new TextRun({ text: ` — ${h.org}`, size: 20, color: "6b7280" }),
        ],
        spacing: { before: 120 },
      }),
      ...(h.details ? [new Paragraph({ children: [new TextRun({ text: h.details, size: 18, color: "4b5563" })] })] : []),
    ]),

    heading("PUBLICATIONS"),
    new Paragraph({ children: [new TextRun({ text: "Books", bold: true, size: 20 })], spacing: { before: 80 } }),
    ...books.map(
      (b) =>
        new Paragraph({
          children: [
            new TextRun({ text: b.title, size: 18 }),
            new TextRun({ text: `   ${b.date}`, size: 16, color: "9ca3af" }),
          ],
          spacing: { before: 60 },
        })
    ),
    new Paragraph({ children: [new TextRun({ text: "Press", bold: true, size: 20 })], spacing: { before: 100 } }),
    ...press.map(
      (p) =>
        new Paragraph({
          children: [
            new TextRun({ text: p.title, size: 18 }),
            new TextRun({ text: `   ${p.outlet} · ${p.date}`, size: 16, color: "9ca3af" }),
            ...(p.desc ? [new TextRun({ text: `   ${p.desc}`, size: 16, color: "6b7280" })] : []),
          ],
          spacing: { before: 60 },
        })
    ),
    new Paragraph({ children: [new TextRun({ text: "Teaching Videos", bold: true, size: 20 })], spacing: { before: 100 } }),
    ...videos.map(
      (v) =>
        new Paragraph({
          children: [
            new TextRun({ text: v.title, size: 18 }),
            new TextRun({ text: `   ${v.platform}${v.date ? ` · ${v.date}` : ""}`, size: 16, color: "9ca3af" }),
          ],
          spacing: { before: 60 },
        })
    ),

    heading("CERTIFICATIONS & TRAINING"),
    ...certGroups.flatMap((g) => [
      new Paragraph({ children: [new TextRun({ text: g.category, bold: true, size: 20 })], spacing: { before: 100 } }),
      ...g.items.map(
        (item) =>
          new Paragraph({
            children: [new TextRun({ text: `• ${item}`, size: 18, color: "4b5563" })],
            indent: { left: 360 },
          })
      ),
    ]),
  ];

  const doc = new Document({ sections: [{ children }] });
  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Zulfiqar-Ali-Mir-Resume.docx";
  a.click();
  URL.revokeObjectURL(url);
}

export default function ResumePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [generating, setGenerating] = useState<"pdf" | "docx" | null>(null);

  const handlePDF = async () => {
    setGenerating("pdf");
    try {
      await downloadPDF();
    } finally {
      setGenerating(null);
    }
  };

  const handleDocx = async () => {
    setGenerating("docx");
    try {
      await downloadDocx();
    } finally {
      setGenerating(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 text-gray-800">

      {/* Toolbar – specialised CVs + download buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-500 self-center">Specialised CVs:</span>
          <Link
            href="/resume/teaching-math"
            className="text-sm bg-amber-50 border border-amber-200 text-amber-700 font-medium px-3 py-1 rounded-full hover:bg-amber-100 transition"
          >
            Teaching Mathematics (IGCSE &amp; A-Level)
          </Link>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handlePDF}
            disabled={generating !== null}
            className="bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white font-semibold px-5 py-2 rounded-lg shadow transition flex items-center gap-2 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {generating === "pdf" ? "Generating…" : "Download PDF"}
          </button>
          <button
            onClick={handleDocx}
            disabled={generating !== null}
            className="bg-white hover:bg-gray-50 disabled:opacity-60 text-amber-700 font-semibold px-5 py-2 rounded-lg shadow border border-amber-300 transition flex items-center gap-2 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {generating === "docx" ? "Generating…" : "Download DOCX"}
          </button>
        </div>
      </div>

      {/* Resume content captured for PDF */}
      <div ref={containerRef}>

        {/* ── HEADER ── */}
        <div className="flex items-center gap-6 mb-6 pb-5 border-b-2 border-amber-600">
          <Image
            src="/profile.jpg"
            alt="Zulfiqar Ali Mir"
            width={90}
            height={90}
            className="rounded-full border-2 border-amber-600 shrink-0"
          />
          <div>
            <h1 className="text-3xl font-extrabold text-amber-700 tracking-tight">Zulfiqar Ali Mir</h1>
            <p className="text-gray-600 mt-0.5">Quantitative Researcher · AI Engineer · Financial Strategist</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {badges.map((b, i) => (
                <span key={i} className="bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium px-2 py-0.5 rounded-full">{b}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
              <span>manager.equity.finance@gmail.com</span>
              <span>+92 322 5150501</span>
              <span>linkedin.com/in/zulfiqar-ali-mir</span>
              <span>github.com/zulfiqaralimir</span>
            </div>
          </div>
        </div>

        {/* ── EXPERIENCE ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Professional Experience</h2>
          <div className="space-y-3">
            {jobs.map((job, i) => (
              <div key={i} className="text-sm">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-gray-800">{job.org}</span>
                  <span className="text-xs text-gray-400 text-right shrink-0 ml-2">{job.location} · {job.period}</span>
                </div>
                <p className="text-amber-700 font-medium">{job.title}</p>
                {job.bullets.length > 0 && (
                  <ul className="list-disc pl-4 mt-1 space-y-0.5 text-gray-600">
                    {job.bullets.map((b, j) => <li key={j}>{renderBullet(b)}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── RESEARCH FELLOWSHIPS ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Research Fellowships</h2>
          <div className="space-y-3">
            {fellowships.map((f, i) => (
              <div key={i} className="text-sm">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-gray-800">{f.org}</span>
                  <span className="text-xs text-gray-400 text-right shrink-0 ml-2">{f.location} · {f.period}</span>
                </div>
                <p className="text-amber-700 font-medium">{f.title}</p>
                {f.bullets.length > 0 && (
                  <ul className="list-disc pl-4 mt-1 space-y-0.5 text-gray-600">
                    {f.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Education</h2>
          <div className="space-y-2">
            {education.map((e, i) => (
              <div key={i} className="text-sm">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-gray-800">{e.school}</span>
                  <span className="text-xs text-gray-400 shrink-0 ml-2">{e.period}</span>
                </div>
                <p className="text-amber-700">{e.degree}</p>
                {e.thesis && <p className="text-gray-500 text-xs mt-0.5">Thesis: {e.thesis}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {skillGroups.map((g, i) => (
              <div key={i} className="text-sm">
                <span className="font-semibold text-gray-700">{g.category}: </span>
                <span className="text-gray-600">{g.items.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURED PROJECTS ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Featured Projects</h2>
          <div className="space-y-4">
            {featuredProjects.map((p, i) => (
              <div key={i} className="text-sm">
                <p className="font-semibold text-gray-800">{p.title}</p>
                {(p.url || p.github) && (
                  <p className="text-xs text-gray-400 mt-0.5">
                    {p.url && <span>{p.url}</span>}
                    {p.url && p.github && <span> · </span>}
                    {p.github && <span>GitHub: {p.github}</span>}
                  </p>
                )}
                <ul className="list-disc pl-4 mt-1 space-y-0.5 text-gray-600">
                  {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                {p.stack.length > 0 && (
                  <p className="text-xs text-amber-700 mt-1">Stack: {p.stack.join(", ")}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── RESEARCH PROJECTS ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Research &amp; Coding Projects</h2>
          <div className="space-y-1">
            {researchProjects.map((p, i) => (
              <div key={i} className="text-sm">
                <span className="font-semibold text-gray-800">{p.title}</span>
                {p.desc && <span className="text-gray-500"> — {p.desc}</span>}
              </div>
            ))}
          </div>
        </section>

        {/* ── CONFERENCE PRESENTATIONS ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Conference Presentations</h2>
          <div className="space-y-2">
            {conferences.map((c, i) => (
              <div key={i} className="text-sm">
                <p className="font-semibold text-gray-800">{c.title}</p>
                <p className="text-gray-600 italic">{c.paper}</p>
                {c.details && <p className="text-gray-500 text-xs mt-0.5">{c.details}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* ── HACKATHONS ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">AI Projects &amp; Hackathons</h2>
          <div className="space-y-2">
            {hackathons.map((h, i) => (
              <div key={i} className="text-sm">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-gray-800">{h.event}</span>
                  <span className="text-xs text-gray-400 shrink-0 ml-2">{h.org}{h.period ? ` · ${h.period}` : ""}</span>
                </div>
                <p className="text-gray-600">{h.project}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HONORS ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Honors &amp; Distinctions</h2>
          <div className="space-y-2">
            {honors.map((h, i) => (
              <div key={i} className="text-sm">
                <span className="font-semibold text-gray-800">{h.title}</span>
                <span className="text-gray-500"> — {h.org}</span>
                {h.details && (
                  <p className="text-gray-600 text-xs mt-0.5">
                    {h.bold
                      ? h.details.split(h.bold).flatMap((part, idx, arr) =>
                          idx < arr.length - 1
                            ? [part, <strong key={idx}>{h.bold}</strong>]
                            : [part]
                        )
                      : h.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── PUBLICATIONS ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Publications</h2>
          <p className="text-sm font-semibold text-gray-700 mb-1">Books</p>
          <div className="space-y-1 mb-3">
            {books.map((b, i) => (
              <div key={i} className="text-sm">
                <span className="text-gray-800">{b.title}</span>
                <span className="text-gray-400 ml-2 text-xs">{b.date}</span>
              </div>
            ))}
          </div>
          <p className="text-sm font-semibold text-gray-700 mb-1">Press</p>
          <div className="space-y-1 mb-3">
            {press.map((p, i) => (
              <div key={i} className="text-sm">
                <span className="text-gray-800">{p.title}</span>
                <span className="text-gray-400 ml-2 text-xs">{p.outlet} · {p.date}</span>
                {p.desc && <span className="text-gray-500 ml-2 text-xs">{p.desc}</span>}
              </div>
            ))}
          </div>
          <p className="text-sm font-semibold text-gray-700 mb-1">Teaching Videos</p>
          <div className="space-y-1">
            {videos.map((v, i) => (
              <div key={i} className="text-sm">
                <span className="text-gray-800">{v.title}</span>
                <span className="text-gray-400 ml-2 text-xs">{v.platform}{v.date ? ` · ${v.date}` : ""}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Certifications &amp; Training</h2>
          <div className="space-y-2">
            {certGroups.map((g, i) => (
              <div key={i} className="text-sm">
                <span className="font-semibold text-gray-700">{g.category}: </span>
                <span className="text-gray-600">{g.items.join(" · ")}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
