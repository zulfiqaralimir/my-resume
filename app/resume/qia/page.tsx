"use client";

import Link from "next/link";

export default function QiaResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 text-gray-800">

      {/* Nav row + download button */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <Link href="/resume" className="text-sm text-amber-600 hover:text-amber-700 font-medium transition">
          ← All CVs
        </Link>

        <a
          href="/resume-qia.pdf"
          download
          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition flex items-center gap-2 text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </a>
      </div>

      <div className="mb-4">
        <h1 className="text-2xl font-extrabold text-amber-700 tracking-tight">Zulfiqar Ali Mir</h1>
        <p className="text-gray-600 mt-0.5">Quantitative Research Analyst / Risk &amp; Financial Modeling Analyst</p>
      </div>

      {/* Inline PDF preview */}
      <div className="border border-gray-200 rounded-lg shadow overflow-hidden bg-gray-50">
        <object data="/resume-qia.pdf" type="application/pdf" className="w-full h-[80vh]">
          <div className="p-6 text-sm text-gray-600">
            Your browser can&apos;t preview PDFs inline.{" "}
            <a href="/resume-qia.pdf" download className="text-amber-700 font-medium hover:text-amber-800">
              Download the PDF instead
            </a>
            .
          </div>
        </object>
      </div>
    </div>
  );
}
