"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const badges = [
  "Founder & Chairman, Black Iron Quantum AI",
  "NIC Islamabad Incubatee",
  "National AI FinTech Winner 2025",
  "Ph.D. Econometrics",
  "HEC AI Judge 2026",
];

const education = [
  "Ph.D., Econometrics",
  "M.Phil., Economics and Finance",
  "MSc, Quantitative Finance",
  "MBA (HRM)",
  "Management Accountant",
  "B.Sc., Mathematics & Statistics",
];

const coreExpertise = [
  "AI for Governance, Risk & Compliance (GRC) and AI-driven audit",
  "Data science, machine learning and deep learning",
  "Quantitative and computational finance, portfolio optimization and risk modeling",
  "Fraud and anomaly detection (Benford's Law, statistical risk scoring)",
  "Econometrics, causal discovery and Computable General Equilibrium (CGE) modeling",
  "Policy-oriented research in public finance, social policy and economic governance",
  "Agentic AI and multi-agent systems for financial and regulatory intelligence",
  "Accounting ERP, FP&A and financial reporting automation",
];

const experience = [
  "Research Analyst, LLM Trainer & Advanced Mathematics Subject Expert, Turing Inc., USA (clients: Apple, Meta, Anthropic)",
  "Researcher, Social Policy Resource Center (SPRC), conducting policy-oriented research",
  "Section Leader, Python Programming, Stanford University (2025)",
  "25+ years across equity markets (PSX), banking, credit control and research",
];

const grcProjects = [
  { title: "AuditIQ AI", desc: "AI-powered general ledger anomaly detection for auditors" },
  { title: "Gulf SWF Filings Agent", desc: "AI regulatory intelligence on SEC filings" },
  { title: "zam-webtool", desc: "Auditable, safety-controlled browsing layer for AI agents" },
];

const recognition = [
  "National Winner, AI FinTech Projects 2025 (National Technology Fund (NTF), Ministry of IT & Telecom (MoITT), and Asian Development Bank (ADB))",
  "Generative AI Instructor, Mentor & Judge, National Computing Education Accreditation Council (NCEAC) and Higher Education Commission (HEC), Pakistan (2026)",
  "Research on SSRN and arXiv; papers in the pipeline with Higher Education Commission (HEC)-recognised, Saudi Arabian and international journals",
];

const bio =
  "Zulfiqar Ali Mir is an econometrician, management accountant and AI engineer with 25+ years in finance, markets and research. His expertise spans data science, machine and deep learning, and computational finance. As Founder and Chairman of Black Iron Quantum AI, a startup incubated at the National Incubation Center (NIC) Islamabad, he builds AI-powered governance, risk, compliance and audit solutions, including AuditIQ AI for ledger anomaly detection. He serves as Research Analyst, LLM Trainer and Advanced Mathematics Subject Expert at Turing Inc., USA, and as a Researcher at SPRC, conducting policy-oriented research. He is the National AI FinTech Winner 2025.";

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

  pdf.save("Zulfiqar-Ali-Mir-Startup-Profile.pdf");
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
      children: [
        new TextRun({
          text: "Founder & Chairman, Black Iron Quantum AI (Pvt.) Ltd. — Incubated at National Incubation Center (NIC), Islamabad",
          size: 20,
          italics: true,
        }),
      ],
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
      children: [
        new TextRun({
          text: "manager.equity.finance@gmail.com | +92 322 5150501 | linkedin.com/in/zulfiqar-ali-mir | github.com/zulfiqaralimir",
          size: 18,
          color: "6b7280",
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
    }),

    heading("SHORT BIO"),
    new Paragraph({ children: [new TextRun({ text: bio, size: 18, color: "374151" })] }),

    heading("EDUCATION"),
    ...education.map(
      (e) =>
        new Paragraph({
          children: [new TextRun({ text: `• ${e}`, size: 18, color: "4b5563" })],
          indent: { left: 360 },
          spacing: { before: 60 },
        })
    ),

    heading("CORE EXPERTISE"),
    ...coreExpertise.map(
      (e) =>
        new Paragraph({
          children: [new TextRun({ text: `• ${e}`, size: 18, color: "4b5563" })],
          indent: { left: 360 },
          spacing: { before: 60 },
        })
    ),

    heading("EXPERIENCE"),
    ...experience.map(
      (e) =>
        new Paragraph({
          children: [new TextRun({ text: `• ${e}`, size: 18, color: "4b5563" })],
          indent: { left: 360 },
          spacing: { before: 60 },
        })
    ),

    heading("KEY GRC & AI PROJECTS"),
    ...grcProjects.map(
      (p) =>
        new Paragraph({
          children: [
            new TextRun({ text: `${p.title}: `, bold: true, size: 18, color: "1f2937" }),
            new TextRun({ text: p.desc, size: 18, color: "4b5563" }),
          ],
          indent: { left: 360 },
          spacing: { before: 60 },
        })
    ),

    heading("RECOGNITION"),
    ...recognition.map(
      (r) =>
        new Paragraph({
          children: [new TextRun({ text: `• ${r}`, size: 18, color: "4b5563" })],
          indent: { left: 360 },
          spacing: { before: 60 },
        })
    ),
  ];

  const doc = new Document({ sections: [{ children }] });
  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Zulfiqar-Ali-Mir-Startup-Profile.docx";
  a.click();
  URL.revokeObjectURL(url);
}

export default function StartupProfilePage() {
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

      {/* Nav row + download buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <Link href="/resume" className="text-sm text-amber-600 hover:text-amber-700 font-medium transition">
          ← All CVs
        </Link>

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
            <p className="text-gray-600 mt-0.5 font-medium">
              Founder &amp; Chairman, Black Iron Quantum AI (Pvt.) Ltd. — Incubated at National Incubation Center (NIC), Islamabad
            </p>
            <p className="text-amber-700 text-sm font-semibold mt-0.5">
              Quantitative Researcher · AI Engineer · Financial Strategist
            </p>
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

        {/* ── SHORT BIO ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-2 border-b border-gray-200 pb-1">Short Bio</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{bio}</p>
        </section>

        {/* ── EDUCATION ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-2 border-b border-gray-200 pb-1">Education</h2>
          <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
            {education.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </section>

        {/* ── CORE EXPERTISE ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-2 border-b border-gray-200 pb-1">Core Expertise</h2>
          <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
            {coreExpertise.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-2 border-b border-gray-200 pb-1">Experience</h2>
          <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
            {experience.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </section>

        {/* ── KEY GRC & AI PROJECTS ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-2 border-b border-gray-200 pb-1">Key GRC &amp; AI Projects</h2>
          <ul className="space-y-1.5 text-sm text-gray-700">
            {grcProjects.map((p, i) => (
              <li key={i}>
                <span className="font-semibold text-gray-800">{p.title}:</span> {p.desc}
              </li>
            ))}
          </ul>
        </section>

        {/* ── RECOGNITION ── */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-2 border-b border-gray-200 pb-1">Recognition</h2>
          <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
            {recognition.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
