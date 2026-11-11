"use client";

import { GraduationCap, BookOpen, Award, Landmark, Calculator, School, CalendarDays } from "lucide-react";
import { AnimatedIcon, Card, CardGrid, PageHero, PageShell, Meta, type IconMotion } from "../components/fx";

const degrees: {
  school: string;
  period: string;
  degree: React.ReactNode;
  thesis: string;
  Icon: typeof GraduationCap;
  anim: IconMotion;
}[] = [
  { school: "World Quant University (USA)", period: "Jan 2025 – Present", degree: <>Master&apos;s in Financial Engineering <em>(In Progress)</em></>, thesis: "", Icon: GraduationCap, anim: "float" },
  { school: "Pakistan Institute of Development Economics (PIDE)", period: "Aug 2016 – Aug 2022", degree: <>Ph.D., Econometrics &nbsp;·&nbsp; CGPA 3.36</>, thesis: "Causal Discovery using Modified Riz PC Algorithm from Observational and Latent Variables Data", Icon: Landmark, anim: "sway" },
  { school: "Pakistan Institute of Development Economics (PIDE)", period: "Aug 2014 – Aug 2016", degree: <>M.Phil., Economics and Finance &nbsp;·&nbsp; CGPA 3.21</>, thesis: "The Impact of Macroeconomic Volatility on Stock Returns Volatility: Evidence from Pakistani Stock Market", Icon: Landmark, anim: "pulse" },
  { school: "Allama Iqbal Open University", period: "Aug 2006 – Sept 2009", degree: <>MBA, Human Resource Management</>, thesis: "Report on Bank Alfalah Limited", Icon: School, anim: "wiggle" },
  { school: "Institute of Cost and Management Accountants in Pakistan", period: "2006 – 2010", degree: <>Master, Chartered Management Accountant</>, thesis: "", Icon: Award, anim: "float" },
  { school: "F.G. Degree College, Wah Cantt", period: "June 1990 – June 1992", degree: <>B.Sc., Mathematics &amp; Statistics</>, thesis: "", Icon: Calculator, anim: "sway" },
];

export default function EducationPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Academic Record"
        title="Education"
        subtitle="From mathematics and management accounting to a Ph.D. in econometrics, and now financial engineering."
        icons={[
          { icon: GraduationCap, motionType: "float" },
          { icon: BookOpen, motionType: "wiggle" },
          { icon: Award, motionType: "pulse" },
        ]}
        mascot="student"
      />
      <CardGrid className="grid gap-5">
        {degrees.map((d, i) => (
          <Card key={i}>
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-500 to-navy-800 text-white">
                <AnimatedIcon icon={d.Icon} motionType={d.anim} delay={i * 0.3} />
              </span>
              <div className="flex-1">
                <p className="font-display text-lg sm:text-xl font-bold text-navy-700">{d.school}</p>
                <Meta icon={CalendarDays}>{d.period}</Meta>
                <p className="mt-2 font-heading text-sm font-semibold text-gray-800">{d.degree}</p>
                {d.thesis && (
                  <p className="mt-1 text-sm text-gray-600">
                    <strong>Thesis:</strong> {d.thesis}
                  </p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </CardGrid>
    </PageShell>
  );
}
