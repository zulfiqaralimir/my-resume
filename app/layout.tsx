import type { Metadata } from "next";
import { Geist, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css"; // ✅ This works

import Navbar from "./components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: "700",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "600",
});

export const metadata: Metadata = {
  title: "My Resume",
  description: "Personal resume built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${playfair.variable} ${montserrat.variable} font-sans`}>
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
