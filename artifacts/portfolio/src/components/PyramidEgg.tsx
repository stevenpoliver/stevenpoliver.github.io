import { useState } from "react";

interface PyramidEggProps {
  href?: string;
}

export default function PyramidEgg({ href }: PyramidEggProps) {
  const [hover, setHover] = useState(false);

  const faceBg = hover
    ? "linear-gradient(180deg, rgba(245,197,24,0.95) 0%, rgba(245,197,24,0.35) 100%)"
    : "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 100%)";

  const content = (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-hidden="true"
      className="w-10 h-10"
      style={{
        perspective: "260px",
        filter: hover
          ? "drop-shadow(0 0 10px rgba(245,197,24,0.55)) drop-shadow(0 0 20px rgba(245,197,24,0.25))"
          : "none",
        transition: "filter 300ms ease",
      }}
    >
      <div
        className="relative w-full h-full"
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
              transform: `rotateY(${i * 90}deg) translateZ(20px) rotateX(-22deg)`,
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
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Easter egg"
        className="fixed bottom-4 right-4 z-30 block opacity-60 hover:opacity-100 transition-opacity duration-300"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-30 opacity-60 hover:opacity-100 transition-opacity duration-300">
      {content}
    </div>
  );
}
