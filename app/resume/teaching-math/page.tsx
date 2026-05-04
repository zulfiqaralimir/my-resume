"use client";

import Image from "next/image";
import Link from "next/link";

const badges = [
  "Cambridge O-Level Mathematics Certified",
  "15+ Years Mathematics Teaching",
  "Ph.D. Econometrics",
  "Stanford Section Leader",
  "B.Sc. Mathematics & Statistics",
];

const teachingExperience = [
  {
    org: "Super Nova Academy",
    location: "Islamabad, PK",
    period: "2010 – Present",
    title: "Mathematics Teacher – IGCSE, A-Level & SAT",
    bullets: [
      "Delivering IGCSE and A-Level Mathematics to students preparing for Cambridge International Examinations",
      "Teaching Statistics and SAT Mathematics with a focus on exam technique and conceptual mastery",
      "Over 15 years of continuous teaching with consistently strong student outcomes",
    ],
  },
  {
    org: "Beaconhouse School System, BMI",
    location: "Islamabad, PK",
    period: "Aug 2017 – Sept 2022",
    title: "Teacher of Mathematics",
    bullets: [
      "Taught Cambridge O-Level and A-Level Mathematics in a structured school environment",
      "Designed lesson plans aligned with Cambridge Assessment International Education syllabi",
      "Completed Cambridge-certified extension training for O-Level Mathematics (4024)",
    ],
  },
  {
    org: "Stanford University",
    location: "Remote",
    period: "May 2025 – June 2025",
    title: "Section Leader – Python Programming",
    bullets: [
      "Selected as a section leader for Stanford's introductory Python course — a role emphasising clear explanation, student mentorship, and structured problem-solving",
    ],
  },
  {
    org: "COMSATS University",
    location: "Islamabad, PK",
    period: "Oct 2024",
    title: "Instructor – Python for Mathematicians",
    bullets: [
      "Delivered a specialised course bridging pure mathematics and computational thinking for university-level students",
    ],
  },
  {
    org: "iCodeGuru",
    location: "San Jose, California (Remote)",
    period: "June 2024 – Present",
    title: "Teacher and Trainer",
    bullets: [
      "Teaching Mathematics, Statistics, GRE Quantitative, IELTS, and Python to international students",
    ],
  },
  {
    org: "Turing (Palo Alto, California)",
    location: "Remote",
    period: "Sept 2024 – Present",
    title: "Advanced Mathematics Subject Expert",
    bullets: [
      "Assessing and refining AI model outputs in advanced mathematics — requires deep command of mathematical reasoning, proof structure, and problem-solving methodology",
      "Clients include Apple, Meta, and Anthropic",
    ],
  },
];

const education = [
  {
    school: "Pakistan Institute of Development Economics (PIDE)",
    period: "Aug 2016 – Aug 2022",
    degree: "Ph.D., Econometrics · CGPA 3.36",
    thesis: "Causal Discovery using Modified Riz PC Algorithm from Observational and Latent Variables Data",
  },
  {
    school: "Pakistan Institute of Development Economics (PIDE)",
    period: "Aug 2014 – Aug 2016",
    degree: "M.Phil., Economics and Finance · CGPA 3.21",
    thesis: "The Impact of Macroeconomic Volatility on Stock Returns Volatility: Evidence from Pakistani Stock Market",
  },
  {
    school: "World Quant University (USA)",
    period: "Jan 2025 – Present",
    degree: "Master's in Financial Engineering (In Progress)",
  },
  {
    school: "Institute of Cost and Management Accountants in Pakistan",
    period: "2006 – 2010",
    degree: "Master, Chartered Management Accountant",
  },
  {
    school: "Allama Iqbal Open University",
    period: "Aug 2006 – Sept 2009",
    degree: "MBA, Human Resource Management",
  },
  {
    school: "F.G. Degree College, Wah Cantt",
    period: "June 1990 – June 1992",
    degree: "B.Sc., Mathematics & Statistics",
  },
];

const teachingCerts = [
  "Extension Cambridge O Level Mathematics (4024) | Cambridge Assessment International Education (Feb 2018)",
  "Gen AI Application Instructor/Mentor | Pakistan Engineering Council (March 2025)",
  "Instructor – Python for Mathematicians | COMSATS University (Oct 2024)",
  "Teaching Online with Google Suite | Beaconhouse (April 2021)",
  "How to Teach Online | Beaconhouse (Jan 2021)",
  "Mind Mapping Mastery | Beaconhouse (April 2021)",
  "Microsoft Excel – From Beginner to Expert | Beaconhouse (April 2021)",
];

const mathSkills = [
  { category: "Mathematics & Statistics", items: ["Pure Mathematics", "Statistics", "Probability", "Calculus", "Linear Algebra", "Econometrics", "Discrete Mathematics"] },
  { category: "Examination Boards", items: ["Cambridge IGCSE (O-Level)", "Cambridge A-Level", "SAT Mathematics", "GRE Quantitative"] },
  { category: "Teaching Tools & Software", items: ["MATLAB", "STATA", "SPSS", "EViews", "LaTeX", "Markdown", "MS Office", "Google Workspace"] },
  { category: "Pedagogy", items: ["Lesson Planning", "Curriculum Design", "Exam Technique Coaching", "Online Teaching", "Mind Mapping", "Student Mentorship"] },
];

const honors = [
  {
    title: "Featured Educator – Abako Calculators (2024)",
    org: "Abako Scientific Calculators",
    details: "Recognised as a top mathematics educator and brand ambassador.",
  },
  {
    title: "Speaker – WordPress Hackathon 2024",
    org: "WPBrigade & iCodeGuru (Silicon Valley)",
    details: "Invited speaker representing educational innovation.",
  },
  {
    title: "Winner – All Employees Banking Quiz",
    org: "Bank Alfalah Limited",
    details: "June 2009 — demonstrating analytical and quantitative reasoning.",
  },
];

const teachingVideos = [
  { title: "Mastering Shading Venn Diagram with Tick Rule for 3 Sets", platform: "IGCSE / A-Level" },
  { title: "How To Complete The Square and Write a Quadratic Expression in the Form (x+a)²+b", platform: "IGCSE / A-Level" },
  { title: "Bootstrap Sampling Using Excel", platform: "IGCSE / A-Level" },
  { title: "Workshop on Building Neural Networks from Scratch using Python", platform: "iCodeGuru", date: "Sept 8, 2024" },
  { title: "Machine Learning from Scratch and its Privacy Implications", platform: "iCodeGuru", date: "Aug 19, 2024" },
  { title: "Python for Absolute Beginners", platform: "iCodeGuru", date: "July 4, 2024" },
  { title: "Data Structures and Algorithms", platform: "iCodeGuru", date: "June 11, 2024" },
];

export default function TeachingMathResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 text-gray-800 print-container">

      {/* Nav row – hidden when printing */}
      <div className="no-print flex items-center justify-between mb-6">
        <Link href="/resume" className="text-sm text-amber-600 hover:text-amber-700 font-medium transition">
          ← All CVs
        </Link>

      {/* Download button */}
      <div className="flex justify-end">
        <button
          onClick={() => window.print()}
          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow transition flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </button>
      </div>
      </div>

      {/* ── HEADER ── */}
      <div className="flex items-center gap-6 mb-6 pb-5 border-b-2 border-amber-600">
        <Image
          src="/profile.jpg"
          alt="Zulfiqar Ali Mir"
          width={90}
          height={90}
          className="rounded-full border-2 border-amber-600 shrink-0"
        />
        <div>
          <h1 className="text-3xl font-extrabold text-amber-700 tracking-tight">Zulfiqar Ali Mir</h1>
          <p className="text-gray-600 mt-0.5 font-medium">Mathematics Educator · IGCSE &amp; A-Level Specialist · Cambridge Certified</p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {badges.map((b, i) => (
              <span key={i} className="bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium px-2 py-0.5 rounded-full">{b}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
            <span>manager.equity.finance@gmail.com</span>
            <span>+92 322 5150501</span>
            <span>linkedin.com/in/zulfiqar-ali-mir</span>
            <span>Islamabad, Pakistan</span>
          </div>
        </div>
      </div>

      {/* ── PROFILE SUMMARY ── */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-2 border-b border-gray-200 pb-1">Profile</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Dedicated mathematics educator with over 15 years of classroom experience teaching Cambridge IGCSE and A-Level Mathematics in Pakistan&apos;s leading schools.
          Holds a Ph.D. in Econometrics and a B.Sc. in Mathematics &amp; Statistics, providing deep subject-matter expertise far beyond the syllabus.
          Cambridge-certified (O-Level Mathematics 4024), experienced in designing rigorous lesson plans, coaching exam technique, and achieving strong student outcomes.
          Equally comfortable in traditional classrooms and online environments, with a track record of mentoring students for high-stakes international examinations.
        </p>
      </section>

      {/* ── TEACHING EXPERIENCE ── */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Teaching Experience</h2>
        <div className="space-y-3">
          {teachingExperience.map((job, i) => (
            <div key={i} className="text-sm">
              <div className="flex justify-between items-start">
                <span className="font-semibold text-gray-800">{job.org}</span>
                <span className="text-xs text-gray-400 text-right shrink-0 ml-2">{job.location} · {job.period}</span>
              </div>
              <p className="text-amber-700 font-medium">{job.title}</p>
              {job.bullets.length > 0 && (
                <ul className="list-disc pl-4 mt-1 space-y-0.5 text-gray-600">
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Education</h2>
        <div className="space-y-2">
          {education.map((e, i) => (
            <div key={i} className="text-sm">
              <div className="flex justify-between items-start">
                <span className="font-semibold text-gray-800">{e.school}</span>
                <span className="text-xs text-gray-400 shrink-0 ml-2">{e.period}</span>
              </div>
              <p className="text-amber-700">{e.degree}</p>
              {e.thesis && <p className="text-gray-500 text-xs mt-0.5">Thesis: {e.thesis}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Subject Knowledge &amp; Skills</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {mathSkills.map((g, i) => (
            <div key={i} className="text-sm">
              <span className="font-semibold text-gray-700">{g.category}: </span>
              <span className="text-gray-600">{g.items.join(", ")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEACHING CERTIFICATIONS ── */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Teaching Certifications</h2>
        <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
          {teachingCerts.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      </section>

      {/* ── HONORS ── */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Honors &amp; Recognition</h2>
        <div className="space-y-2">
          {honors.map((h, i) => (
            <div key={i} className="text-sm">
              <span className="font-semibold text-gray-800">{h.title}</span>
              <span className="text-gray-500"> — {h.org}</span>
              {h.details && <p className="text-gray-600 text-xs mt-0.5">{h.details}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ── TEACHING VIDEOS ── */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Teaching Content &amp; Videos</h2>
        <div className="space-y-1">
          {teachingVideos.map((v, i) => (
            <div key={i} className="text-sm">
              <span className="text-gray-800">{v.title}</span>
              <span className="text-gray-400 ml-2 text-xs">{v.platform}{v.date ? ` · ${v.date}` : ""}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
