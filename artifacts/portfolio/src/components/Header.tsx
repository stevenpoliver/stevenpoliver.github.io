import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LINKS } from "@/config/links";
import { Github, Linkedin, Menu, X } from "lucide-react";

function ReplitIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Top-left block */}
      <rect x="3" y="2" width="9.5" height="8" rx="2.5" />
      {/* Middle-right block */}
      <rect x="11.5" y="9" width="9.5" height="6" rx="2.5" />
      {/* Bottom-left block */}
      <rect x="3" y="14" width="9.5" height="8" rx="2.5" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navItems: Array<{ id: string; label: string }> = [
    { id: "projects", label: "Projects" },
    { id: "capability", label: "Capability" },
    { id: "about", label: "About" },
    { id: "connect", label: "Connect" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5 bg-background/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex flex-col min-w-0">
          <span className="font-bold text-base sm:text-lg tracking-tight truncate">Steven Oliver</span>
          <span className="text-xs text-muted-foreground hidden md:block">
            Solutions Architect • Cyber Security • Modern Workplace
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative group hover:text-foreground transition-colors"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-yellow)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={LINKS.GITHUB}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:text-foreground hover:ring-1 hover:ring-[var(--accent-yellow)] transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={LINKS.REPLIT}
            target="_blank"
            rel="noreferrer"
            aria-label="Replit"
            className="flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:text-foreground hover:ring-1 hover:ring-[var(--accent-yellow)] transition-all duration-300"
          >
            <ReplitIcon className="w-5 h-5" />
          </a>
          <a
            href={LINKS.LINKEDIN}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:text-foreground hover:ring-1 hover:ring-[var(--accent-yellow)] transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <button
            onClick={() => scrollTo("projects")}
            className="hidden sm:inline-flex bg-[var(--accent-yellow)] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[var(--accent-yellow)]/90 hover:shadow-[0_0_15px_rgba(245,197,24,0.4)] transition-all duration-300"
          >
            View Projects
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-foreground hover:bg-white/5 transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl"
          >
            <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-base font-medium text-foreground py-3 px-2 rounded-lg hover:bg-white/5 hover:text-[var(--accent-yellow)] transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("projects")}
                className="mt-3 bg-[var(--accent-yellow)] text-black px-5 py-3 rounded-full text-sm font-semibold hover:bg-[var(--accent-yellow)]/90 transition-all"
              >
                View Projects
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
