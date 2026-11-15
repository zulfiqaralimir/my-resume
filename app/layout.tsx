import type { Metadata } from "next";
import { Geist, Playfair_Display, Montserrat, Press_Start_2P } from "next/font/google";
import "./globals.css"; // ✅ This works

import Navbar from "./components/Navbar";
import Assistant from "./components/Assistant";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: "700",
});

const pixel = Press_Start_2P({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "600",
});

export const metadata: Metadata = {
  title: "ZAM CV | Zulfiqar Ali Mir",
  description: "Personal resume built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${playfair.variable} ${montserrat.variable} ${pixel.variable} font-sans`}>
        <Navbar />
        <main className="p-6 overflow-x-clip">{children}</main>
        <Assistant />
      </body>
    </html>
  );
}
