"use client";

import { motion } from "framer-motion";

export default function EducationPage() {
  return (
    <motion.section
      className="max-w-4xl mx-auto py-12 px-6 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-8 border-b pb-2 text-amber-700">Education</h1>

      <div className="space-y-8">
        <motion.div
          className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between font-semibold text-amber-700">
            <span>World Quant University (USA)</span>
            <span>Jan 2025 – Present</span>
          </div>
          <p className="mt-1">Master&apos;s in Financial Engineering <em>(In Progress)</em></p>
        </motion.div>

        <motion.div
          className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between font-semibold text-amber-700">
            <span>Pakistan Institute of Development Economics (PIDE)</span>
            <span>Aug 2016 – Aug 2022</span>
          </div>
          <p className="mt-1">Ph.D., Econometrics &nbsp;·&nbsp; CGPA 3.36</p>
          <p className="mt-1 text-sm text-gray-600">
            <strong>Thesis:</strong> Causal Discovery using Modified Riz PC Algorithm from Observational and Latent Variables Data
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between font-semibold text-amber-700">
            <span>Pakistan Institute of Development Economics (PIDE)</span>
            <span>Aug 2014 – Aug 2016</span>
          </div>
          <p className="mt-1">M.Phil., Economics and Finance &nbsp;·&nbsp; CGPA 3.21</p>
          <p className="mt-1 text-sm text-gray-600">
            <strong>Thesis:</strong> The Impact of Macroeconomic Volatility on Stock Returns Volatility: Evidence from Pakistani Stock Market
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between font-semibold text-amber-700">
            <span>Allama Iqbal Open University</span>
            <span>Aug 2006 – Sept 2009</span>
          </div>
          <p className="mt-1">MBA, Human Resource Management</p>
          <p className="mt-1 text-sm text-gray-600"><strong>Thesis:</strong> Report on Bank Alfalah Limited</p>
        </motion.div>

        <motion.div
          className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between font-semibold text-amber-700">
            <span>Institute of Cost and Management Accountants in Pakistan</span>
            <span>2006 – 2010</span>
          </div>
          <p className="mt-1">Master, Chartered Management Accountant</p>
        </motion.div>

        <motion.div
          className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between font-semibold text-amber-700">
            <span>F.G. Degree College, Wah Cantt</span>
            <span>June 1990 – June 1992</span>
          </div>
          <p className="mt-1">B.Sc., Mathematics &amp; Statistics</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
