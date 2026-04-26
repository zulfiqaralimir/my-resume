"use client";

import { motion } from "framer-motion";

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
    <motion.section
      className="max-w-4xl mx-auto py-12 px-6 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-8 border-b pb-2 text-indigo-700">
        Certifications &amp; Training
      </h1>

      <div className="space-y-8">
        {certGroups.map((group, i) => (
          <motion.div
            key={i}
            className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            viewport={{ once: true }}
          >
            <h2 className="font-semibold text-indigo-700 mb-3">{group.category}</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              {group.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
