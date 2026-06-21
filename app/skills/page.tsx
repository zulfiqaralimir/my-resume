"use client";

import { motion } from "framer-motion";

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
    <motion.section
      className="max-w-4xl mx-auto py-12 px-6 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-8 border-b pb-2 text-amber-700">Technical Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <h2 className="font-semibold text-amber-700 mb-3">{group.category}</h2>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, j) => (
                <span
                  key={j}
                  className="bg-amber-50 text-amber-700 text-xs font-medium px-3 py-1 rounded-full border border-amber-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
