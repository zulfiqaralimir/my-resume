"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-xl text-gray-800">Zulfiqar Ali Mir</h1>
        <ul className="flex space-x-6 text-sm font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/education"
              className="hover:text-blue-600 transition-colors"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              href="/experience"
              className="hover:text-blue-600 transition-colors"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
