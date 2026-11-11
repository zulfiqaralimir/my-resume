"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

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

const mouths: Record<Mood, string> = {
  happy: "M43 69 Q50 76 57 69",
  thinking: "M44 71 Q50 69 56 72",
  surprised: "M47 69 Q50 78 53 69 Q50 66 47 69",
  excited: "M41 67 Q50 82 59 67 Z",
  sleepy: "M45 71 Q50 73 55 71",
  wink: "M43 69 Q50 77 58 68",
  love: "M42 68 Q50 80 58 68",
  angry: "M43 73 Q50 66 57 73",
};

const moodTips: Partial<Record<Mood, string>> = {
  surprised: "Oh! You touched me!",
  love: "Aww, thank you!",
  excited: "Ooh, let's go!",
  wink: "Hehe, I see you!",
  angry: "Hey! Please stop poking me!",
  sleepy: "Zzz... wake me up!",
  thinking: "Hmm, let me think...",
};

export default function Assistant() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [i, setI] = useState(0);
  const [mood, setMood] = useState<Mood>("happy");
  const [poke, setPoke] = useState(0);
  const [jump, setJump] = useState(0);

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

  const reactions: Mood[] = ["surprised", "love", "excited", "wink"];
  function onHover() {
    setMood(reactions[Math.floor(Math.random() * reactions.length)]);
  }
  function onClick() {
    const next = poke + 1;
    setPoke(next);
    setJump((j) => j + 1);
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
          className="relative mb-28 hidden max-w-[240px] rounded-2xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-700 shadow-xl sm:block"
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

      <motion.svg
        viewBox="0 0 100 130"
        className="h-56 w-48 cursor-pointer select-none drop-shadow-lg"
        onHoverStart={onHover}
        onTap={onClick}
        whileHover={{ scale: 1.12, rotate: -4 }}
        whileTap={{ scale: 0.92 }}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.8 }}
        aria-hidden="true"
      >
        <motion.g
          key={jump}
          animate={
            jump
              ? { y: [0, -22, 0, -10, 0], rotate: mood === "angry" ? [0, -6, 6, -6, 0] : [0, 0, 0, 0, 0] }
              : { y: [0, mood === "sleepy" ? -1 : -4, 0] }
          }
          transition={jump ? { duration: 0.7 } : { duration: mood === "sleepy" ? 4 : 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* stethoscope character: binaural tubes + earpieces */}
          <path d="M34 14 C34 36 50 36 50 54" fill="none" stroke="#183463" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M66 14 C66 36 50 36 50 54" fill="none" stroke="#183463" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="34" cy="11" r="4.5" fill="#93a6c9" stroke="#183463" strokeWidth="2" />
          <circle cx="66" cy="11" r="4.5" fill="#93a6c9" stroke="#183463" strokeWidth="2" />
          {/* chestpiece = head */}
          <circle cx="50" cy="80" r="30" fill="#e3e9f3" stroke="#183463" strokeWidth="4" />
          <circle cx="50" cy="80" r="25" fill="none" stroke="#93a6c9" strokeWidth="1.5" />
          <g transform="translate(0 17)">
          {/* eye sockets */}
          <ellipse cx="41" cy="58" rx="8" ry="8.5" fill="#1d2a44" />
          <ellipse cx="59" cy="58" rx="8" ry="8.5" fill="#1d2a44" />
          {/* brows */}
          {mood === "angry" && (
            <>
              <path d="M33 47 L47 52" stroke="#3a2a22" strokeWidth="3" strokeLinecap="round" />
              <path d="M67 47 L53 52" stroke="#3a2a22" strokeWidth="3" strokeLinecap="round" />
            </>
          )}
          {(mood === "surprised" || mood === "thinking") && (
            <>
              <path d="M34 46 Q41 42 48 46" stroke="#3a2a22" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M52 46 Q59 42 66 46" stroke="#3a2a22" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </>
          )}
          {/* eyes */}
          {mood === "sleepy" && (
            <>
              <path d="M36 58 Q41 62 46 58" stroke="#f8f6ee" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M54 58 Q59 62 64 58" stroke="#f8f6ee" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </>
          )}
          {mood === "love" && (
            <>
              <path d="M41 62 C34 57 36 52 41 55 C46 52 48 57 41 62 Z" fill="#e0245e" />
              <path d="M59 62 C52 57 54 52 59 55 C64 52 66 57 59 62 Z" fill="#e0245e" />
            </>
          )}
          {mood === "excited" && (
            <>
              <path d="M41 53 L43 57 L47 57.5 L44 60 L45 64 L41 62 L37 64 L38 60 L35 57.5 L39 57 Z" fill="#e0b341" />
              <path d="M59 53 L61 57 L65 57.5 L62 60 L63 64 L59 62 L55 64 L56 60 L53 57.5 L57 57 Z" fill="#e0b341" />
            </>
          )}
          {mood === "wink" && (
            <>
              <circle cx="41" cy="58" r="2.8" fill="#f8f6ee" />
              <path d="M54 58 Q59 54 64 58" stroke="#f8f6ee" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </>
          )}
          {(mood === "happy" || mood === "thinking" || mood === "surprised" || mood === "angry") && (
            <motion.g
              style={{ originX: "50px", originY: "58px" }}
              animate={
                mood === "thinking"
                  ? { x: [0, 3, 3, 0], y: [0, -2, -2, 0] }
                  : mood === "surprised"
                  ? { scale: [1, 1.5, 1.4] }
                  : { scaleY: [1, 1, 0.1, 1, 1] }
              }
              transition={
                mood === "thinking"
                  ? { duration: 2.5, repeat: Infinity }
                  : mood === "surprised"
                  ? { duration: 0.3 }
                  : { duration: 3.5, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }
              }
            >
              <circle cx="41" cy="58" r="2.8" fill="#f8f6ee" />
              <circle cx="59" cy="58" r="2.8" fill="#f8f6ee" />
            </motion.g>
          )}
          {/* mouth */}
          <path
            d={mouths[mood]}
            stroke="#3b3b3b"
            strokeWidth="2.5"
            fill={mood === "excited" || mood === "surprised" ? "#7a2e1d" : "none"}
            strokeLinecap="round"
          />
          {(mood === "love" || mood === "excited" || mood === "wink") && (
            <>
              <circle cx="33" cy="66" r="4" fill="#f2a8a0" opacity="0.35" />
              <circle cx="67" cy="66" r="4" fill="#f2a8a0" opacity="0.35" />
            </>
          )}
          </g>
          {/* mood extras */}
          {mood === "sleepy" &&
            [0, 1].map((n) => (
              <motion.text
                key={n}
                x={74 + n * 8}
                y={34 - n * 8}
                fontSize={10 + n * 3}
                fontWeight="700"
                fill="#5870a0"
                animate={{ y: [0, -8], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: n * 0.7 }}
              >
                z
              </motion.text>
            ))}
          {mood === "thinking" && (
            <motion.text x="72" y="30" fontSize="18" fontWeight="700" fill="#2f4b82" animate={{ y: [0, -4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
              ?
            </motion.text>
          )}
          {mood === "surprised" && (
            <motion.text x="74" y="30" fontSize="20" fontWeight="700" fill="#c0392b" initial={{ scale: 0 }} animate={{ scale: 1 }}>
              !
            </motion.text>
          )}
          {mood === "angry" && (
            <motion.path
              d="M70 34 L74 28 M74 34 L80 30 M70 40 L77 40"
              stroke="#c0392b"
              strokeWidth="2.5"
              strokeLinecap="round"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          )}
          {mood === "love" &&
            [0, 1].map((n) => (
              <motion.path
                key={n}
                d="M0 6 C-6 0 -4 -5 0 -2 C4 -5 6 0 0 6 Z"
                fill="#e0245e"
                transform={`translate(${72 + n * 8} 36)`}
                animate={{ y: [0, -14], opacity: [1, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: n * 0.5 }}
              />
            ))}
        </motion.g>
      </motion.svg>
    </div>
  );
}
