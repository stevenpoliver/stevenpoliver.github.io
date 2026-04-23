import { useEffect, useRef, useState } from "react";

const GENESIS_URL = "https://xeeva.github.io/Genesis/";

export default function PyramidEgg() {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const lit = hover || open;

  const faceBg = lit
    ? "linear-gradient(180deg, rgba(245,197,24,0.95) 0%, rgba(245,197,24,0.35) 100%)"
    : "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 100%)";

  return (
    <div
      ref={wrapRef}
      className="fixed bottom-4 right-4 z-30 flex flex-col items-center gap-2"
    >
      {open && (
        <a
          href={GENESIS_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="px-3 py-1.5 rounded-full text-xs font-medium tracking-wide text-[var(--accent-yellow)] bg-black/70 backdrop-blur-md border border-[var(--accent-yellow)]/40 shadow-[0_4px_20px_rgba(245,197,24,0.25)] hover:bg-[var(--accent-yellow)]/15 hover:border-[var(--accent-yellow)]/70 transition-all"
        >
          Genesis
        </a>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label="Easter egg"
        aria-expanded={open}
        className={`block bg-transparent border-0 p-0 cursor-pointer transition-opacity duration-300 ${
          lit ? "opacity-100" : "opacity-60"
        }`}
        style={{
          perspective: "260px",
          filter: lit
            ? "drop-shadow(0 0 10px rgba(245,197,24,0.55)) drop-shadow(0 0 20px rgba(245,197,24,0.25))"
            : "none",
        }}
      >
        <div
          className="relative w-10 h-10"
          style={{
            transformStyle: "preserve-3d",
            animation: "pyramid-spin 9s linear infinite",
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                background: faceBg,
                border: "1px solid rgba(255,255,255,0.06)",
                transformOrigin: "50% 100%",
                transform: `rotateY(${i * 90}deg) translateZ(20px) rotateX(30deg)`,
                transition: "background 300ms ease",
              }}
            />
          ))}
        </div>
        <style>{`
          @keyframes pyramid-spin {
            from { transform: rotateX(-12deg) rotateY(0deg); }
            to   { transform: rotateX(-12deg) rotateY(360deg); }
          }
        `}</style>
      </button>
    </div>
  );
}
