"use client";

import { BadgeCheck, Bot, Landmark, Database, Code2, Cloud, ShieldCheck, Lightbulb, GraduationCap, FlaskConical, type LucideIcon } from "lucide-react";
import { Card, CardGrid, PageHero, PageShell, IconChip, type IconMotion } from "../components/fx";

const certIcons: { Icon: LucideIcon; anim: IconMotion }[] = [
  { Icon: Bot, anim: "wiggle" },
  { Icon: Landmark, anim: "float" },
  { Icon: Database, anim: "pulse" },
  { Icon: Code2, anim: "sway" },
  { Icon: Cloud, anim: "float" },
  { Icon: ShieldCheck, anim: "pulse" },
  { Icon: Lightbulb, anim: "wiggle" },
  { Icon: GraduationCap, anim: "sway" },
  { Icon: FlaskConical, anim: "float" },
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

export default function CoursesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Lifelong Learning"
        title="Certifications & Training"
        subtitle="Professional certificates across AI, data, finance, cloud, teaching and research methods."
        icons={[
          { icon: BadgeCheck, motionType: "pulse" },
          { icon: GraduationCap, motionType: "float" },
          { icon: Bot, motionType: "wiggle" },
        ]}
        mascot="certified"
      />
      <CardGrid className="grid gap-5">
        {certGroups.map((group, i) => {
          const { Icon, anim } = certIcons[i % certIcons.length];
          return (
            <Card key={i}>
              <div className="mb-4 flex items-center gap-3">
                <IconChip icon={Icon} motionType={anim} delay={i * 0.2} />
                <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-navy-700">{group.category}</h2>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <BadgeCheck size={16} className="mt-0.5 shrink-0 text-navy-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </CardGrid>
    </PageShell>
  );
}
