"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

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
  { org: "Stanford University", location: "Remote", period: "May 2025 – June 2025", title: "Section Leader – Python Programming", bullets: [] },
  { org: "COMSATS University", location: "Islamabad, PK", period: "Oct 2024", title: "Instructor – Python for Mathematicians", bullets: [] },
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
  { org: "City Lights Trading", location: "Dubai, UAE", period: "Jan 2005 – Dec 2005", title: "Credit Controller", bullets: [] },
  { org: "Pakistan Stock Exchange", location: "Islamabad, PK", period: "1999 – 2004", title: "Equity Investment and Portfolio Management", bullets: [] },
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
  { category: "Technologies & Specializations", items: ["Machine Learning", "Deep Learning", "NLP", "Applied Generative AI", "MLOps", "FinTech", "Cloud-Native Gen AI Engineering", "Full-Stack Development", "Google AI Studio"] },
  { category: "Cloud & Dev Tools", items: ["Azure", "AWS", "MS Project", "Neo4j", "Apache Spark", "Oracle VM VirtualBox", "Linux (CentOS)", "LaTeX", "Markdown"] },
  { category: "Data Science Libraries", items: ["Pydantic", "LeetCode DSA", "Kaggle", "Jupyter", "ggplot2"] },
];

const honors = [
  { title: "National Winner – AI FinTech Projects (2025)", org: "National Technology Fund (MoITT) & Asian Development Bank (ADB)", details: "Built AFIW–ZulfiQode: Agentic Financial Intelligence Wrapper. Technologies: LangGraph, FastAPI, Neo4j. Features: RAG pipelines for financial statement summarization and ESG scoring, RLHF and SFT for adaptive reasoning, ML and econometric models for volatility, causal, rumour, and reversal detection." },
  { title: "Create Apps Championship 2025–26", org: "Dubai Chamber of Digital Economy, UAE", details: "Certificate of Participation." },
  { title: "Judge – HEC Generative AI Cohort 2 (2026)", org: "Higher Education Commission (HEC) Pakistan", details: "Evaluated AI innovation projects under NCEAC, Pak Angels, iCodeGuru, and ASPIRE Pakistan collaboration." },
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
  { title: "Ensuring Ethical and Secure AI", outlet: "Pakistan Observer", date: "May 25, 2024" },
  { title: "Insights into Pakistan Stock Exchange's recent record high triumph", outlet: "The Financial Daily International", date: "March 30, 2024" },
  { title: "Navigate the psychological maze of inflation and make smarter investment decisions", outlet: "The Financial Daily International", date: "March 10, 2024" },
  { title: "Penny Wise Pound Foolish Approach", outlet: "The Financial Daily International", date: "July 2022" },
];

const certGroups = [
  { category: "AI & Agent Frameworks", items: ["Generative AI Application Developer | Pak Angels (July–Sept 2024)", "LangGraph | LangChain Academy", "CrewAI", "OpenAI Agents SDK", "Cloud Applied Generative AI Engineering (GenEng) | PIAIC (2024)", "NetLogo – Agent-Based Modelling (In Progress)"] },
  { category: "Banking, Finance & Quantitative Modeling", items: ["Construct Stock Market Indices | Coursera Project Network (Aug 2023)", "Introduction to Fundamental Analysis | Pakistan Stock Exchange", "Stock Market Basics | Pakistan Stock Exchange", "Banking Certificates | Bank Alfalah Limited", "Public Financial Management System Workshop | ICMAP (Dec 2012)"] },
  { category: "Cloud Computing & Infrastructure", items: ["Introduction to Cloud Computing | IBM (Sept 2023)", "Azure Cloud Computing | Microsoft", "Microsoft Azure AI Fundamentals | Microsoft (June 23, 2024)", "Microsoft Azure AI Services: Fundamentals of Machine Learning | Microsoft", "Microsoft Azure AI Services: Fundamentals of Computer Vision | Microsoft"] },
  { category: "Big Data, Data Science & AI", items: ["Neo4j Fundamentals | Graph Academy (Dec 2024)", "Generative AI for Everyone | DeepLearning.AI (Nov 2023)", "Introduction to Generative AI Studio | Google Cloud Skills Boost (2024)", "Building Your Own Database Agent | DeepLearning.AI", "Multi AI Agent Systems with CrewAI | DeepLearning.AI (2024)", "Data Analysis with R Programming | Google (Jan 2022)", "Foundations: Data, Data, Everywhere | Google (Jan 2021)", "Apache Spark Programming in Python", "FastAPI Fundamentals"] },
  { category: "Programming & Algorithms", items: ["AI Python for Beginners: Basics of AI Python Coding | DeepLearning.AI", "Introduction to Programming with MATLAB | Vanderbilt University (Oct 2021)", "LeetCode – Data Structures and Algorithms", "Programming for Everybody (Getting Started with Python) | University of Michigan (Jan 2016)"] },
  { category: "Teaching Certifications", items: ["Extension Cambridge O Level Mathematics (4024) | Cambridge Assessment International Education (Feb 2018)", "Gen AI Application Instructor/Mentor | Pakistan Engineering Council (March 2025)", "Instructor – Python for Mathematicians | COMSATS University (Oct 2024)"] },
];

async function downloadPDF(element: HTMLElement) {
  const html2canvas = (await import("html2canvas")).default;
  const { jsPDF } = await import("jspdf");

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
    backgroundColor: "#ffffff",
  });

  const pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const scaledHeight = (canvas.height * pdfWidth) / canvas.width;
  const imgData = canvas.toDataURL("image/png");

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, scaledHeight);
  let heightLeft = scaledHeight - pdfHeight;
  let offset = -pdfHeight;

  while (heightLeft > 0) {
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, offset, pdfWidth, scaledHeight);
    offset -= pdfHeight;
    heightLeft -= pdfHeight;
  }

  pdf.save("Zulfiqar-Ali-Mir-Resume.pdf");
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
    if (!containerRef.current) return;
    setGenerating("pdf");
    try {
      await downloadPDF(containerRef.current);
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
                    {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
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

        {/* ── HONORS ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Honors & Distinctions</h2>
          <div className="space-y-2">
            {honors.map((h, i) => (
              <div key={i} className="text-sm">
                <span className="font-semibold text-gray-800">{h.title}</span>
                <span className="text-gray-500"> — {h.org}</span>
                {h.details && <p className="text-gray-600 text-xs mt-0.5">{h.details}</p>}
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
          <div className="space-y-1">
            {press.map((p, i) => (
              <div key={i} className="text-sm">
                <span className="text-gray-800">{p.title}</span>
                <span className="text-gray-400 ml-2 text-xs">{p.outlet} · {p.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Certifications & Training</h2>
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
