"use client";

import Link from "next/link";
import { useState } from "react";

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

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
          <Link
            href="/resume"
            className="flex items-center gap-1.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-4 py-1.5 rounded-lg transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </Link>
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
          <li>
            <Link
              href="/resume"
              className="block py-1 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              Download CV
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
