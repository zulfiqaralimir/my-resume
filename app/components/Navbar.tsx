"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/education", label: "Education" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/courses", label: "Certifications" },
  { href: "/honors", label: "Honors" },
  { href: "/publications", label: "Publications" },
];

const cvOptions = [
  { href: "/resume", label: "Comprehensive Resume" },
  { href: "/resume/teaching-math", label: "Maths Teacher IGCSE & A' Levels" },
  { href: "/resume-qia.pdf", label: "Quantitative Research Analyst / Risk & Financial Modeling Analyst", download: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCvOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-xl text-amber-700">Zulfiqar Ali Mir</h1>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          <ul className="flex space-x-5 text-sm font-medium text-gray-700">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-amber-600 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Download CV dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setCvOpen(!cvOpen)}
              className="flex items-center gap-1.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-4 py-1.5 rounded-lg transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {cvOpen && (
              <div className="absolute right-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50">
                {cvOptions.map((cv) =>
                  cv.download ? (
                    <a
                      key={cv.href}
                      href={cv.href}
                      download
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                      onClick={() => setCvOpen(false)}
                    >
                      {cv.label}
                    </a>
                  ) : (
                    <Link
                      key={cv.href}
                      href={cv.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                      onClick={() => setCvOpen(false)}
                    >
                      {cv.label}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium text-gray-700 bg-white border-t border-gray-100">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block py-1 hover:text-amber-600 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-1 border-t border-gray-100">
            <p className="text-xs text-gray-400 mb-1.5">Download CV</p>
            {cvOptions.map((cv) =>
              cv.download ? (
                <a
                  key={cv.href}
                  href={cv.href}
                  download
                  className="block py-1 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {cv.label}
                </a>
              ) : (
                <Link
                  key={cv.href}
                  href={cv.href}
                  className="block py-1 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {cv.label}
                </Link>
              )
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}
