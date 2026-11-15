const meteors = [
  { left: "92%", top: "-4%", delay: "0s", dur: "3.2s" },
  { left: "75%", top: "-6%", delay: "1.6s", dur: "4s" },
  { left: "58%", top: "-5%", delay: "3.4s", dur: "3.6s" },
  { left: "100%", top: "18%", delay: "2.4s", dur: "3.8s" },
  { left: "40%", top: "-8%", delay: "5s", dur: "4.4s" },
  { left: "85%", top: "-3%", delay: "6.5s", dur: "3.4s" },
];

export default function Meteors() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {meteors.map((m, i) => (
        <span key={i} className="meteor" style={{ left: m.left, top: m.top, animationDelay: m.delay, animationDuration: m.dur }} />
      ))}
    </div>
  );
}
