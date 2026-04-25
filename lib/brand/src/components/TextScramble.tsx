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
  crossfadeWindow?: number;
  settleWindow?: number;
  scrambleIntervalMs?: number;
  className?: string;
}

const DEFAULT_CHARS =
  "!<>-_\\/[]{}=+*^?#ABCDEF0123456789@$%&abcdef";

export default function TextScramble({
  segments,
  duration = 4800,
  startDelay = 450,
  scrambleChars = DEFAULT_CHARS,
  headWindow = 22,
  crossfadeWindow = 6,
  settleWindow = 8,
  scrambleIntervalMs = 140,
  className,
}: TextScrambleProps) {
  const flatChars = segments.flatMap((seg, segIdx) =>
    Array.from(seg.text).map((ch) => ({ ch, segIdx, className: seg.className })),
  );
  const total = flatChars.length;

  const [revealCount, setRevealCount] = useState(0);
  const [scrambleSeed, setScrambleSeed] = useState(0);
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

  useEffect(() => {
    if (done) return;
    const id = window.setInterval(() => {
      setScrambleSeed((x) => x + 1);
    }, scrambleIntervalMs);
    return () => window.clearInterval(id);
  }, [done, scrambleIntervalMs]);

  if (done) {
    return (
      <span className={className}>
        {segments.map((seg, idx) => (
          <span key={idx} className={seg.className}>
            {seg.text}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={className} aria-label={segments.map((s) => s.text).join("")}>
      {flatChars.map((c, i) => {
        if (c.ch === " " || c.ch === "\n") {
          return <span key={i}>{c.ch}</span>;
        }

        const d = i - revealCount;

        if (d >= headWindow) {
          return (
            <span key={i} className="opacity-0" aria-hidden="true">
              {c.ch}
            </span>
          );
        }

        let realOpacity = 0;
        let scrambleOpacity = 0;
        let settleT = 0;

        if (d < -settleWindow) {
          realOpacity = 1;
        } else if (d < 0) {
          realOpacity = 1;
          settleT = -d / settleWindow;
        } else if (d < crossfadeWindow) {
          const cf = d / crossfadeWindow;
          realOpacity = 1 - cf;
          scrambleOpacity = cf * 0.85;
        } else {
          const edgeFade =
            1 - (d - crossfadeWindow) / (headWindow - crossfadeWindow);
          scrambleOpacity = 0.18 + edgeFade * 0.45;
        }

        const r = Math.abs(i * 7919 + scrambleSeed * 131) % scrambleChars.length;
        const scrambleCh = scrambleChars[r];

        const glowAlpha = (1 - settleT) * (settleT > 0 ? 0.35 : 0);
        const glowBlur = (1 - settleT) * 6;

        return (
          <span
            key={i}
            style={{
              position: "relative",
              display: "inline-block",
              whiteSpace: "pre",
            }}
          >
            <span style={{ visibility: "hidden" }} aria-hidden="true">
              {c.ch}
            </span>
            {scrambleOpacity > 0 && (
              <span
                aria-hidden="true"
                className="text-[var(--accent-yellow)]"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  opacity: scrambleOpacity,
                  transition: "opacity 160ms linear",
                }}
              >
                {scrambleCh}
              </span>
            )}
            {realOpacity > 0 && (
              <span
                className={c.className}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  opacity: realOpacity,
                  textShadow:
                    glowAlpha > 0.01
                      ? `0 0 ${glowBlur}px rgba(245,197,24,${glowAlpha})`
                      : undefined,
                  transition: "opacity 160ms linear",
                }}
              >
                {c.ch}
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}
