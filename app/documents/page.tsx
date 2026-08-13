"use client";

import { motion } from "framer-motion";
import { downloadableDocuments } from "./documentsConfig";

export default function DocumentsPage() {
  return (
    <motion.section
      className="max-w-4xl mx-auto py-12 px-6 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-2 border-b pb-2 text-amber-700">
        Downloadable Documents
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Proposals &amp; response documents available for download.
      </p>

      <div className="space-y-6">
        {downloadableDocuments.map((doc, idx) => (
          <motion.div
            key={doc.id}
            className="bg-white border-2 border-amber-300 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <span className="inline-block text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full mb-2">
                  {doc.category}
                </span>
                <h2 className="text-lg font-bold text-amber-700">{doc.title}</h2>
                <p className="text-sm text-gray-500 mt-0.5">{doc.org}</p>
                <p className="text-sm text-gray-700 mt-3 leading-relaxed">{doc.description}</p>
              </div>

              <a
                href={doc.fileUrl}
                download
                className="shrink-0 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition flex items-center gap-2 text-sm whitespace-nowrap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {doc.fileLabel}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
