"use client";

import Image from "next/image";
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
              {group.category === "Programming Languages" && (
                <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Image src="/logos/python.png" width={300} height={300} alt="Python" className="h-10 w-auto" />
                  <Image src="/logos/rlang.png" width={600} height={463} alt="R" className="h-10 w-auto" />
                  <Image src="/logos/typescript.png" width={540} height={131} alt="TypeScript" className="h-8 w-auto" />
                  <Image src="/logos/javascript.png" width={554} height={600} alt="JavaScript" className="h-12 w-auto" />
                  <Image src="/logos/fastapi.png" width={600} height={111} alt="FastAPI" className="h-7 w-auto" />
                  <Image src="/logos/sql.png" width={720} height={378} alt="SQL" className="h-9 w-auto" />
                  <Image src="/logos/nextjs.png" width={1028} height={610} alt="Next.js" className="h-8 w-auto" />
                  <Image src="/logos/tailwind.png" width={948} height={328} alt="Tailwind CSS" className="h-12 w-auto" />
                </div>
              )}
              {group.category === "Data Science Libraries" && (
                <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Image src="/logos/leetcode.png" width={948} height={228} alt="LeetCode" className="h-8 w-auto" />
                  <Image src="/logos/ggplot2.png" width={432} height={500} alt="ggplot2" className="h-14 w-auto" />
                </div>
              )}
              {group.category === "Cloud & Dev Tools" && (
                <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Image src="/logos/latex.png" width={724} height={270} alt="LaTeX" className="h-9 w-auto" />
                  <Image src="/logos/markdown.png" width={400} height={258} alt="Markdown" className="h-9 w-auto" />
                </div>
              )}
              {group.category === "Statistical & Analytical Software" && (
                <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Image src="/logos/matlab.png" width={700} height={174} alt="MATLAB" className="h-9 w-auto" />
                  <Image src="/logos/msoffice.png" width={700} height={252} alt="Microsoft Office" className="h-9 w-auto" />
                  <Image src="/logos/powerbi.png" width={382} height={294} alt="Power BI" className="h-12 w-auto" />
                </div>
              )}
              {group.category === "AI / ML Frameworks" && (
                <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Image src="/logos/langgraph.png" width={600} height={368} alt="LangGraph" className="h-12 w-auto" />
                  <Image src="/logos/langchain.png" width={870} height={135} alt="LangChain" className="h-8 w-auto" />
                  <Image src="/logos/crewai.png" width={700} height={350} alt="CrewAI" className="h-10 w-auto" />
                  <Image src="/logos/streamlit.png" width={600} height={85} alt="Streamlit" className="h-8 w-auto" />
                </div>
              )}
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
