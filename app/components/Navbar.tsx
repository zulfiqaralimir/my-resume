"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { downloadableDocuments } from "../documents/documentsConfig";

const links = [
  { href: "/", label: "Home" },
  { href: "/education", label: "Education" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/courses", label: "Certifications" },
  { href: "/honors", label: "Honors" },
  { href: "/publications", label: "Publications" },
  { href: "/documents", label: "Documents" },
];

const cvOptions = [
  { href: "/resume", label: "Comprehensive Resume" },
  { href: "/resume/startup-profile", label: "Startup Profile — Black Iron Quantum AI" },
  { href: "/resume/teaching-math", label: "Maths Teacher IGCSE & A' Levels" },
  { href: "/resume/qia", label: "Quantitative Research Analyst / Risk & Financial Modeling Analyst" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCvOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav className="sticky top-3 z-50 px-3 sm:px-4" aria-label="Main">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center rounded-2xl border border-white/15 bg-navy-800/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,19,44,0.45)] ring-1 ring-[#d4a73a]/30">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-128.png" alt="ZAM logo" width={44} height={44} className="rounded-full" />
          <h1 className="font-display font-bold text-xl text-[#f2d27a]">Zulfiqar Ali Mir</h1>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          <ul className="flex items-center gap-0.5 text-sm font-medium text-white">
            {links.map((l) => (
              <li key={l.href} className="relative">
                {isActive(l.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[#d4a73a]/20 ring-1 ring-[#d4a73a]/60"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={"relative block rounded-full px-3 py-1.5 transition-colors hover:text-[#f2d27a] " + (isActive(l.href) ? "text-[#f2d27a]" : "")}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Download CV dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setCvOpen(!cvOpen)}
              className="flex items-center gap-1.5 bg-[#d4a73a] hover:bg-[#f2d27a] text-navy-900 text-sm font-semibold px-4 py-1.5 rounded-lg transition"
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
                {cvOptions.map((cv) => (
                  <Link
                    key={cv.href}
                    href={cv.href}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-navy-50 hover:text-navy-700 transition-colors"
                    onClick={() => setCvOpen(false)}
                  >
                    {cv.label}
                  </Link>
                ))}
                {downloadableDocuments.length > 0 && (
                  <>
                    <p className="px-4 pt-2.5 pb-1 text-xs font-semibold text-gray-400 border-t border-gray-100">
                      Documents
                    </p>
                    {downloadableDocuments.map((doc) => (
                      <a
                        key={doc.id}
                        href={doc.fileUrl}
                        download
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-navy-50 hover:text-navy-700 transition-colors"
                        onClick={() => setCvOpen(false)}
                      >
                        {doc.title}
                      </a>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#f2d27a] focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Open menu" aria-expanded={open}
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

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 z-[60] overflow-y-auto bg-navy-900/95 backdrop-blur-xl px-6 pt-6 pb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-display font-bold text-xl text-[#f2d27a]">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-[#f2d27a]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="space-y-1">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={"block font-display text-3xl py-1.5 transition-colors " + (isActive(l.href) ? "text-[#f2d27a]" : "text-white hover:text-[#f2d27a]")}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 pt-5 border-t border-white/20">
              <p className="text-xs uppercase tracking-widest text-navy-200 mb-2">Download CV</p>
              {cvOptions.map((cv) => (
                <Link key={cv.href} href={cv.href} className="block py-1.5 text-[#f2d27a] font-semibold hover:text-white transition-colors" onClick={() => setOpen(false)}>
                  {cv.label}
                </Link>
              ))}
              {downloadableDocuments.length > 0 && (
                <>
                  <p className="text-xs uppercase tracking-widest text-navy-200 mb-2 mt-5">Documents</p>
                  {downloadableDocuments.map((doc) => (
                    <a key={doc.id} href={doc.fileUrl} download className="block py-1.5 text-[#f2d27a] font-semibold hover:text-white transition-colors" onClick={() => setOpen(false)}>
                      {doc.title}
                    </a>
                  ))}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
