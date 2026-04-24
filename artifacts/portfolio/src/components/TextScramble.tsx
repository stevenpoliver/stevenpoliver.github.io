import { useEffect, useRef, useState } from "react";

export interface ScrambleSegment {
  text: string;
  className?: string;
}

interface TextScrambleProps {
  segments: ScrambleSegment[];
  duration?: number;
  startDelay?: number;
  scrambleChars?: string;
  headWindow?: number;
  settleWindow?: number;
  className?: string;
}

const DEFAULT_CHARS =
  "!<>-_\\/[]{}=+*^?#ABCDEF0123456789@$%&abcdef";

export default function TextScramble({
  segments,
  duration = 4800,
  startDelay = 450,
  scrambleChars = DEFAULT_CHARS,
  headWindow = 20,
  settleWindow = 8,
  className,
}: TextScrambleProps) {
  const flatChars = segments.flatMap((seg, segIdx) =>
    Array.from(seg.text).map((ch) => ({ ch, segIdx, className: seg.className })),
  );
  const total = flatChars.length;

  const [revealCount, setRevealCount] = useState(0);
  const [tick, setTick] = useState(0);
  const [done, setDone] = useState(false);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setRevealCount(total);
      setDone(true);
      return;
    }

    const animate = (t: number) => {
      if (startRef.current === null) startRef.current = t;
      const elapsed = t - startRef.current - startDelay;
      if (elapsed < 0) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      const eased = Math.sin((progress * Math.PI) / 2);
      setRevealCount(Math.floor(eased * total));
      setTick((x) => x + 1);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setRevealCount(total);
        setDone(true);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [total, duration, startDelay]);

  return (
    <span className={className} aria-label={segments.map((s) => s.text).join("")}>
      {flatChars.map((c, i) => {
        if (done) {
          return (
            <span key={i} className={c.className}>
              {c.ch}
            </span>
          );
        }
        if (i < revealCount) {
          const ageFromHead = revealCount - i;
          if (ageFromHead < settleWindow) {
            const t = ageFromHead / settleWindow;
            return (
              <span
                key={i}
                className={c.className}
                style={{
                  textShadow: `0 0 ${(1 - t) * 10}px rgba(245,197,24,${(1 - t) * 0.55})`,
                  filter: `brightness(${1 + (1 - t) * 0.25})`,
                }}
              >
                {c.ch}
              </span>
            );
          }
          return (
            <span key={i} className={c.className}>
              {c.ch}
            </span>
          );
        }
        if (c.ch === " " || c.ch === "\n") {
          return <span key={i}>{c.ch}</span>;
        }
        const distFromHead = i - revealCount;
        if (distFromHead < headWindow) {
          const r = Math.abs(i * 7919 + tick * 131) % scrambleChars.length;
          const ch = scrambleChars[r];
          const fade = 1 - distFromHead / headWindow;
          const isLeading = distFromHead < 4;
          return (
            <span
              key={i}
              className="text-[var(--accent-yellow)]"
              style={{
                opacity: 0.25 + fade * 0.7,
                textShadow: isLeading
                  ? `0 0 ${10 - distFromHead * 1.5}px rgba(245,197,24,${0.7 - distFromHead * 0.1})`
                  : "none",
              }}
            >
              {ch}
            </span>
          );
        }
        return (
          <span key={i} className="opacity-0" aria-hidden="true">
            {c.ch}
          </span>
        );
      })}
    </span>
  );
}
