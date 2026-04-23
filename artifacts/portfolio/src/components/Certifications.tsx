import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "@/config/certifications";
import { useState } from "react";

const getBadgeStyle = (style: string, abbr: string, issuer: string) => {
  switch (style) {
    case "isaca":
      return (
        <div className="relative w-16 h-16 mx-auto flex flex-col items-center justify-center bg-black/40 rounded-xl border-2 border-red-500/20 group-hover:border-[var(--accent-yellow)]/50 transition-colors duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent group-hover:from-[var(--accent-yellow)]/10 transition-colors duration-500" />
          <span className="text-sm font-bold tracking-tight text-white group-hover:text-[var(--accent-yellow)] transition-colors duration-300 z-10">{abbr}</span>
          <span className="text-[0.45rem] font-medium tracking-widest text-muted-foreground mt-0.5 z-10">{issuer}</span>
        </div>
      );
    case "isc2":
      return (
        <div className="relative w-16 h-16 mx-auto flex flex-col items-center justify-center bg-black/40 rounded-full border-2 border-blue-500/20 group-hover:border-[var(--accent-yellow)]/50 transition-colors duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent group-hover:from-[var(--accent-yellow)]/10 transition-colors duration-500" />
          <div className="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 border border-white/5 rounded-full" />
          <span className="text-sm font-bold tracking-tight text-white group-hover:text-[var(--accent-yellow)] transition-colors duration-300 z-10">{abbr}</span>
          <span className="text-[0.45rem] font-medium tracking-widest text-muted-foreground mt-0.5 z-10">{issuer}</span>
        </div>
      );
    case "zero-trust":
      return (
        <div className="relative w-16 h-16 mx-auto flex flex-col items-center justify-center bg-black/40 rounded-lg rotate-45 border-2 border-purple-500/20 group-hover:border-[var(--accent-yellow)]/50 transition-colors duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent group-hover:from-[var(--accent-yellow)]/10 transition-colors duration-500" />
          <div className="flex flex-col items-center justify-center -rotate-45 z-10">
            <span className="text-[0.7rem] font-bold tracking-tight text-white group-hover:text-[var(--accent-yellow)] transition-colors duration-300 leading-tight text-center">{abbr}</span>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default function Certifications() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="glass rounded-2xl p-6 relative overflow-hidden group">
      
      <div className="flex flex-row items-start justify-between gap-4 mb-2">
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className="text-lg font-semibold tracking-tight">Professional Certifications</h3>
          <p className="text-[0.7rem] text-muted-foreground leading-snug">
            Verified credentials across ISC2 and ISACA, reflecting both technical depth and governance-level capability.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-[0.65rem] text-muted-foreground px-2.5 py-1 rounded-full border border-white/5 bg-white/5 whitespace-nowrap shrink-0">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-yellow)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent-yellow)]"></span>
          </span>
          Verified via Credly
          <ExternalLink className="w-3 h-3 opacity-50" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {CERTIFICATIONS.map((cert, index) => (
          <a
            href={cert.credlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            key={cert.id}
            onMouseEnter={() => setHoveredId(cert.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative flex flex-col items-center text-center p-3 hover:-translate-y-1 hover:border-[var(--accent-yellow)]/50 hover:shadow-[0_0_20px_rgba(245,197,24,0.1)] transition-all duration-300 cursor-pointer overflow-hidden rounded-xl border border-transparent hover:bg-white/5"
          >
            <div className="relative mb-3 transform transition-transform duration-500 group-hover:scale-[1.04]">
              {cert.imageUrl ? (
                <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[var(--accent-yellow)]/0 group-hover:bg-[var(--accent-yellow)]/15 blur-xl transition-colors duration-500" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/95 to-white/80 ring-1 ring-white/20 group-hover:ring-[var(--accent-yellow)]/60 shadow-[0_4px_18px_rgba(0,0,0,0.45)] transition-all duration-500" />
                  <img
                    src={cert.imageUrl}
                    alt={`${cert.abbr} badge`}
                    loading="lazy"
                    className="relative w-16 h-16 object-contain"
                  />
                </div>
              ) : (
                getBadgeStyle(cert.style, cert.abbr, cert.issuer)
              )}
            </div>
            
            <h4 className="text-[0.65rem] font-semibold text-foreground leading-tight mb-1 group-hover:text-white transition-colors duration-300">
              {cert.name}
            </h4>
            <p className="text-[0.55rem] font-medium tracking-widest text-muted-foreground uppercase mt-auto">
              {cert.issuer}
            </p>

            <AnimatePresence>
              {hoveredId === cert.id && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/90 to-transparent flex justify-center pointer-events-none"
                >
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black border border-[var(--accent-yellow)]/50 text-[0.55rem] font-medium text-[var(--accent-yellow)] shadow-lg">
                    Verify
                    <ExternalLink className="w-2.5 h-2.5" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </a>
        ))}
      </div>

    </div>
  );
}
