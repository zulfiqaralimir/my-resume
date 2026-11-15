"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import dynamic from "next/dynamic";
import type { SoldierAction } from "./Soldier3D";

const Soldier3D = dynamic(() => import("./Soldier3D"), { ssr: false });

const tips: Record<string, string[]> = {
  "/": ["Hi! I'm Dr. ZAM. Let me show you around.", "Use the menu above to explore each section."],
  "/education": ["From B.Sc. to a Ph.D. in Econometrics!", "Currently studying Financial Engineering."],
  "/experience": ["Over two decades of policy, AI and teaching.", "Scroll down for the full career timeline."],
  "/projects": ["Try the live demos, they're linked on each card.", "Hover a tag to see it pop."],
  "/skills": ["Python, R, LangGraph and much more.", "Hover a skill tag for a little bounce."],
  "/courses": ["Certificates across AI, finance and teaching.", "Lifelong learner, always adding more."],
  "/honors": ["National AI FinTech winner, 2025!", "Also a judge and mentor for HEC."],
  "/publications": ["New op-ed: Whose jobs will AI hit?", "Books, papers and press, all in one place."],
  "/documents": ["Proposals are ready to download here."],
};

type Mood = "happy" | "thinking" | "surprised" | "excited" | "sleepy" | "wink" | "love" | "angry";

const moodTips: Partial<Record<Mood, string>> = {
  surprised: "Oh! You touched me!",
  love: "Aww, thank you!",
  excited: "Ooh, let's go!",
  wink: "Hehe, I see you!",
  angry: "Hey! Please stop poking me!",
  sleepy: "Zzz... wake me up!",
  thinking: "Hmm, let me think...",
};

export default function Assistant3D() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [i, setI] = useState(0);
  const [mood, setMood] = useState<Mood>("happy");
  const [poke, setPoke] = useState(0);
  const [action, setAction] = useState<SoldierAction>("Idle");
  const hover = useRef(false);
  const running = useRef(false);
  const syncAction = () => setAction(running.current ? "Run" : hover.current ? "Walk" : "Idle");
  function onRun() {
    running.current = true;
    syncAction();
    onClick();
    setTimeout(() => { running.current = false; syncAction(); }, 2800);
  }

  const list = tips[pathname] ?? ["Need anything? Use the menu above."];

  useEffect(() => {
    setI(0);
    const t = setInterval(() => setI((n) => n + 1), 6000);
    return () => clearInterval(t);
  }, [pathname]);

  // Mood changes with time: cycle through every mood on a timer.
  useEffect(() => {
    const seq: Mood[] = ["happy", "wink", "thinking", "excited", "love", "surprised", "sleepy", "happy", "angry"];
    let n = 0;
    const t = setInterval(() => {
      n = (n + 1) % seq.length;
      setMood(seq[n]);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  function onClick() {
    const next = poke + 1;
    setPoke(next);
    // Poking repeatedly makes the doctor grumpy.
    setMood(next % 4 === 0 ? "angry" : next % 3 === 0 ? "love" : "surprised");
  }

  // Skip the printable CV documents.
  if (pathname.startsWith("/resume")) return null;

  if (hidden) {
    return (
      <button
        onClick={() => setHidden(false)}
        className="fixed bottom-4 right-4 z-40 rounded-full bg-navy-700 px-3 py-2 text-xs font-semibold text-white shadow-lg hover:bg-navy-600 print:hidden"
      >
        Dr. ZAM
      </button>
    );
  }

  return (
    <div className="fixed bottom-3 right-3 z-40 flex items-end gap-1 print:hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname + (moodTips[mood] ?? "") + (i % list.length)}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="relative mb-40 hidden max-w-[240px] rounded-2xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-700 shadow-xl sm:block"
        >
          {mood !== "happy" && moodTips[mood] ? moodTips[mood] : list[i % list.length]}
          <button
            onClick={() => setHidden(true)}
            aria-label="Hide assistant"
            className="absolute -right-2 -top-2 rounded-full bg-navy-700 p-1 text-white hover:bg-navy-500"
          >
            <X size={10} />
          </button>
          <span className="absolute -right-1.5 bottom-4 h-3 w-3 rotate-45 border-r border-t border-navy-200 bg-white" />
        </motion.div>
      </AnimatePresence>

      <div
        className="relative hidden h-[260px] w-[170px] cursor-pointer md:block"
        onMouseEnter={() => { hover.current = true; syncAction(); }}
        onMouseLeave={() => { hover.current = false; syncAction(); }}
        onClick={onRun}
        role="img"
        aria-label="Interactive 3D character. Hover to make it walk, click to make it run."
      >
        <Soldier3D action={action} />
      </div>
    </div>
  );
}
