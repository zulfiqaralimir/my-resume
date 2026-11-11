"use client";

import Image from "next/image";
import { Trophy, Medal, Star, Award } from "lucide-react";
import { Card, CardGrid, PageHero, PageShell, IconChip, type IconMotion } from "../components/fx";

const honorIcons = [Trophy, Medal, Award, Star];
const honorAnims: IconMotion[] = ["wiggle", "pulse", "float", "sway"];

const honors = [
  {
    title: "National Winner – AI FinTech Projects (2025)",
    logos: [
      { src: "/logos/moitt.png", w: 433, h: 128, alt: "Ministry of Information Technology & Telecom" },
      { src: "/logos/adb.png", w: 862, h: 178, alt: "Asian Development Bank" },
    ],
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
    title: "Generative AI Instructor / Mentor / Judge Certificate – NCEAC–HEC Cohort 2 (Jan–Feb 2026)",
    org: "Higher Education Commission (HEC) Pakistan & National Computing Education Accreditation Council (NCEAC)",
    details:
      "Recognized for contributions as Instructor, Mentor, and Judge for the NCEAC–HEC Generative AI Training Cohort 2 (Jan–Feb 2026). Helped aspiring professionals build practical Generative AI skills and evaluated AI innovation projects. Collaborating partners: iCodeGuru, Pak Angels, ASPIRE Pakistan, HEC Pakistan, NCEAC, and UETIANS Lahore Endowment Foundation (ULEF), USA.",
    bold: "UETIANS Lahore Endowment Foundation (ULEF), USA",
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
  {
    title: "Claude Partner Network — Registered Partner",
    org: "Black Iron Quantum AI (Private) Limited",
    details: "Accepted into the Claude Partner Network, expanding engagement with the Claude ecosystem and supporting the company's work in AI applications, agentic systems, and production-oriented AI solutions.",
  },
  {
    title: "Startup Accelerator Graduate (2026)",
    org: "Founder Institute, Islamabad Chapter",
    details: "Completed FI's structured founder program covering idea validation, business model design, go-to-market and fundraising. Member of the global FI alumni network.",
  },
];

export default function HonorsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Recognition"
        title="Honors & Distinctions"
        subtitle="National wins, judging and mentoring roles, speaking invitations and programmes completed."
        icons={[
          { icon: Trophy, motionType: "wiggle" },
          { icon: Medal, motionType: "pulse" },
          { icon: Star, motionType: "spin" },
        ]}
        mascot="champion"
      />
      <CardGrid className="grid gap-5">
        {honors.map((h, i) => (
          <Card key={i}>
            <div className="flex items-start gap-4">
              <IconChip icon={honorIcons[i % honorIcons.length]} motionType={honorAnims[i % honorAnims.length]} delay={i * 0.2} />
              <div>
                <p className="font-display text-lg font-bold leading-snug text-navy-700">{h.title}</p>
                {"logos" in h && h.logos && (
                  <div className="mb-3 flex flex-wrap items-center gap-6">
                    {h.logos.map((l) => (
                      <Image key={l.src} src={l.src} width={l.w} height={l.h} alt={l.alt} className="h-10 w-auto" />
                    ))}
                  </div>
                )}
                <p className="mt-1 font-heading text-xs uppercase tracking-wider text-navy-400">{h.org}</p>
                {h.details && (
                  <p className="mt-2 text-sm text-gray-600">
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
            </div>
          </Card>
        ))}
      </CardGrid>
    </PageShell>
  );
}
