"use client";

import { Code2, Brain, BarChart3, Cpu, Cloud, Database, Scale, Landmark, Wrench, type LucideIcon } from "lucide-react";
import { Card, CardGrid, PageHero, PageShell, Tag, IconChip, type IconMotion } from "../components/fx";

const skillIcons: { Icon: LucideIcon; anim: IconMotion }[] = [
  { Icon: Code2, anim: "float" },
  { Icon: BarChart3, anim: "pulse" },
  { Icon: Brain, anim: "sway" },
  { Icon: Cpu, anim: "wiggle" },
  { Icon: Cloud, anim: "float" },
  { Icon: Database, anim: "pulse" },
  { Icon: Scale, anim: "sway" },
  { Icon: Landmark, anim: "wiggle" },
];

const skillGroups = [
  {
    category: "Programming Languages",
    items: ["Python (Advanced)", "R", "TypeScript", "JavaScript", "SQL", "Next.js", "Tailwind CSS", "FastAPI"],
  },
  {
    category: "Statistical & Analytical Software",
    items: ["MATLAB", "STATA", "EViews", "SPSS", "OxMatrix", "Power BI", "Tableau", "MS Office"],
  },
  {
    category: "AI / ML Frameworks",
    items: ["LangChain", "LangGraph", "CrewAI", "OpenAI Agents SDK", "PyTorch (Fine Tuning)", "Streamlit", "FastAPI"],
  },
  {
    category: "Technologies & Specializations",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Applied Generative AI",
      "MLOps",
      "FinTech",
      "Cloud-Native Gen AI Engineering",
      "Full-Stack Development",
      "SaaS Product Development",
      "Business Intelligence",
      "Google AI Studio",
    ],
  },
  {
    category: "Cloud & Dev Tools",
    items: ["Azure", "AWS", "MS Project", "Neo4j", "Apache Spark", "Oracle VM VirtualBox", "Linux (CentOS)", "LaTeX", "Markdown"],
  },
  {
    category: "Data Science Libraries",
    items: ["Pydantic", "LeetCode DSA", "Kaggle", "Jupyter", "ggplot2"],
  },
  {
    category: "Research & Policy",
    items: [
      "Policy Research",
      "Social Policy",
      "Public Finance",
      "Development Economics",
      "Econometrics",
      "Quantitative Research",
      "Evidence-Based Policy",
      "Public Policy Analysis",
      "Social Protection",
      "Poverty Analysis",
      "Governance",
      "Impact Evaluation",
      "Economic Policy",
      "Think Tank Research",
    ],
  },
  {
    category: "Finance & Accounting",
    items: [
      "Accounting ERP Systems",
      "General Ledger (GL)",
      "Accounts Receivable (AR)",
      "Accounts Payable (AP)",
      "Cash Flow Management",
      "Budgeting",
      "Financial Planning & Analysis (FP&A)",
      "Financial Analysis",
      "Financial Forecasting",
      "Financial Reporting",
      "Financial Dashboards",
      "Reconciliation",
      "Invoicing",
      "Accounting Automation",
      "CFO Advisory",
      "SMB Finance",
      "Credit Control & Collections",
      "Tally ERP / Tally Accounting Software",
      "Microsoft Access",
      "Advanced Microsoft Excel",
    ],
  },
];

export default function SkillsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Toolkit"
        title="Technical Skills"
        subtitle="Languages, analytics, AI frameworks, cloud and the policy and finance know-how behind them."
        icons={[
          { icon: Code2, motionType: "float" },
          { icon: Brain, motionType: "pulse" },
          { icon: Wrench, motionType: "wiggle" },
        ]}
        mascot="coder"
      />
      <CardGrid className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillGroups.map((group, i) => {
          const { Icon, anim } = skillIcons[i % skillIcons.length];
          return (
            <Card key={i}>
              <div className="mb-4 flex items-center gap-3">
                <IconChip icon={Icon} motionType={anim} delay={i * 0.2} />
                <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-navy-700">{group.category}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, j) => (
                  <Tag key={j}>{skill}</Tag>
                ))}
              </div>
            </Card>
          );
        })}
      </CardGrid>
    </PageShell>
  );
}
