"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Resume</h1>
      <ul className="flex flex-wrap gap-4 text-sm font-medium">
        <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
        <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
        <li><Link href="/projects" className="hover:text-blue-500">Projects</Link></li>
        <li><Link href="/courses" className="hover:text-blue-500">Courses</Link></li>
        <li><Link href="/programming" className="hover:text-blue-500">Programming</Link></li>
        <li><Link href="/tools" className="hover:text-blue-500">Tools</Link></li>
        <li><Link href="/publications" className="hover:text-blue-500">Publications</Link></li>
        <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>
      </ul>
    </nav>
  );
}
