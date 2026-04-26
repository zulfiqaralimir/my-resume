"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      className="max-w-4xl mx-auto py-12 px-6 text-gray-800 bg-gray-50 rounded-xl shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Profile Image */}
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Image
          src="/profile.jpg"
          alt="Zulfiqar Ali Mir"
          width={128}
          height={128}
          className="rounded-full shadow-lg border-4 border-white"
        />
      </motion.div>

      {/* Header */}
      <motion.h1
        className="text-4xl font-extrabold text-center text-indigo-700 font-serif mb-2"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Zulfiqar Ali Mir
      </motion.h1>

      <motion.p
        className="mb-4 text-center text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <a
          href="mailto:manager.equity.finance@gmail.com"
          className="text-indigo-600 hover:underline transition duration-300"
        >
          manager.equity.finance@gmail.com
        </a>{" "}
        | Phone: +92 322 5150501
      </motion.p>

      <motion.ul
        className="space-y-2 mb-8 text-md text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <li>
          <strong>LinkedIn:</strong>{" "}
          <motion.a
            href="https://www.linkedin.com/in/zulfiqar-ali-mir/"
            target="_blank"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-indigo-600 hover:underline inline-block transition duration-300"
          >
            linkedin.com/in/zulfiqar-ali-mir
          </motion.a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <motion.a
            href="https://github.com/zulfiqaralimir"
            target="_blank"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-indigo-600 hover:underline inline-block transition duration-300"
          >
            github.com/zulfiqaralimir
          </motion.a>
        </li>
        <li>
          <strong>LeetCode:</strong>{" "}
          <motion.a
            href="https://leetcode.com/u/xBe6uVINlF/"
            target="_blank"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-indigo-600 hover:underline inline-block transition duration-300"
          >
            leetcode.com/u/xBe6uVINlF
          </motion.a>
        </li>
      </motion.ul>

      {/* Key Qualifications */}
      <motion.div
        className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-gray-700 space-x-4">
          <span><strong>Typing Speed:</strong> 70 WPM</span>
          <span>·</span>
          <span><strong>IELTS Speaking:</strong> 7.5 &nbsp;|&nbsp; Overall: 6.5</span>
          <span>·</span>
          <span><strong>GRE:</strong> Under Preparation</span>
        </p>
      </motion.div>

      {/* Experience Summary */}
      <motion.h2
        className="text-3xl font-bold mt-12 mb-6 border-b border-gray-300 pb-2 text-indigo-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="space-y-6 text-gray-800"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <div className="flex justify-between font-semibold">
            <span>Turing (Palo Alto, California)</span>
            <span>Remote · Sept 2024 – Present</span>
          </div>
          <p className="text-sm text-gray-600">Research Analyst / LLM Trainer / Advanced Maths Subject Expert</p>
          <p className="mt-2 text-sm">
            RLHF and SFT for clients including Apple, Meta, and Anthropic — refining AI models in advanced mathematics problem-solving.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <div className="flex justify-between font-semibold">
            <span>Stanford University</span>
            <span>May 2025 – June 2025</span>
          </div>
          <p className="text-sm text-gray-600">Section Leader – Python Programming</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <div className="flex justify-between font-semibold">
            <span>Mir Global Soft Private Limited</span>
            <span>Islamabad, PK · 2020 – Present</span>
          </div>
          <p className="text-sm text-gray-600">Senior Research Analyst & Financial Strategist</p>
          <p className="text-sm mt-1">Equity research, quant-driven investment strategies, financial modeling, portfolio optimization.</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <div className="flex justify-between font-semibold">
            <span>iCodeGuru (San Jose, California)</span>
            <span>June 2024 – Present</span>
          </div>
          <p className="text-sm text-gray-600">Teacher and Trainer – IELTS, GRE, LeetCode, Python, ML, Data Analysis</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <div className="flex justify-between font-semibold">
            <span>Super Nova Academy</span>
            <span>Islamabad, PK · 2010 – Present</span>
          </div>
          <p className="text-sm text-gray-600">Teacher – Mathematics, Statistics & SAT</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <div className="flex justify-between font-semibold">
            <span>Beaconhouse School System, BMI</span>
            <span>Islamabad, PK · Aug 2017 – Sept 2022</span>
          </div>
          <p className="text-sm text-gray-600">Teacher of Mathematics</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <div className="flex justify-between font-semibold">
            <span>Bank Alfalah Limited</span>
            <span>Wah Cantt, PK · June 2008 – July 2010</span>
          </div>
          <p className="text-sm text-gray-600">Operations Officer</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <div className="flex justify-between font-semibold">
            <span>City Lights Trading</span>
            <span>Dubai, UAE · Jan 2005 – Dec 2005</span>
          </div>
          <p className="text-sm text-gray-600">Credit Controller</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <div className="flex justify-between font-semibold">
            <span>Pakistan Stock Exchange</span>
            <span>Islamabad, PK · 1999 – 2004</span>
          </div>
          <p className="text-sm text-gray-600">Equity Investment and Portfolio Management</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
