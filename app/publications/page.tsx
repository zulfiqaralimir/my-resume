"use client";

import { motion } from "framer-motion";

const books = [
  {
    title: "Barriers to AGI Maturation",
    date: "February 2025",
  },
  {
    title: "The Speed Learning Formula: Learn Fast, Grow Fast, Earn Fast",
    date: "February 2025",
  },
  {
    title: "Loops of Mind, Wings of Code: Rebirth of Agency – First Step towards Agentic AI",
    date: "May 2025",
  },
];

const press = [
  {
    title: "Ensuring Ethical and Secure AI",
    outlet: "Pakistan Observer",
    date: "May 25, 2024",
    desc: "Comprehensive Guide to AI Audits and Foundational LLMs.",
  },
  {
    title: "Insights into Pakistan Stock Exchange's recent record high triumph",
    outlet: "The Financial Daily International",
    date: "March 30, 2024",
    desc: "",
  },
  {
    title: "Navigate the psychological maze of inflation and make smarter investment decisions",
    outlet: "The Financial Daily International",
    date: "March 10, 2024",
    desc: "",
  },
  {
    title: "Penny Wise Pound Foolish Approach",
    outlet: "The Financial Daily International",
    date: "July 2022",
    desc: "",
  },
];

const videos = [
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

export default function PublicationsPage() {
  return (
    <motion.section
      className="max-w-4xl mx-auto py-12 px-6 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Books */}
      <h1 className="text-4xl font-bold mb-8 border-b pb-2 text-amber-700">Book Publications</h1>
      <div className="space-y-4 mb-14">
        {books.map((b, i) => (
          <motion.div
            key={i}
            className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold text-amber-700">{b.title}</p>
            <p className="text-sm text-gray-500 mt-0.5">{b.date}</p>
          </motion.div>
        ))}
      </div>

      {/* Press */}
      <h2 className="text-3xl font-bold mb-6 border-b pb-2 text-amber-700">Press Publications</h2>
      <div className="space-y-4 mb-14">
        {press.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold text-amber-700">{p.title}</p>
            <p className="text-sm text-gray-500 mt-0.5">
              {p.outlet} &nbsp;·&nbsp; {p.date}
            </p>
            {p.desc && <p className="text-sm text-gray-600 mt-1">{p.desc}</p>}
          </motion.div>
        ))}
      </div>

      {/* Teaching Videos */}
      <h2 className="text-3xl font-bold mb-6 border-b pb-2 text-amber-700">Teaching Videos</h2>
      <div className="space-y-3">
        {videos.map((v, i) => (
          <motion.div
            key={i}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            viewport={{ once: true }}
          >
            <p className="font-medium text-gray-800">{v.title}</p>
            <p className="text-xs text-gray-500 mt-0.5">
              {v.platform}{v.date ? ` · ${v.date}` : ""}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
