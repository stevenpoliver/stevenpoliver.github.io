import { motion } from "framer-motion";
import { LINKS } from "@/config/links";
import { Github, Linkedin } from "lucide-react";

export default function Header() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5 bg-background/50"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-bold text-lg tracking-tight">Steven Oliver</span>
          <span className="text-xs text-muted-foreground hidden md:block">
            Solutions Architect • Cyber Security • Modern Workplace
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <button onClick={() => scrollTo("projects")} className="relative group hover:text-foreground transition-colors">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-yellow)] transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollTo("capability")} className="relative group hover:text-foreground transition-colors">
            Capability
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-yellow)] transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollTo("about")} className="relative group hover:text-foreground transition-colors">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-yellow)] transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollTo("connect")} className="relative group hover:text-foreground transition-colors">
            Connect
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-yellow)] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href={LINKS.GITHUB} 
            target="_blank" 
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:text-foreground hover:ring-1 hover:ring-[var(--accent-yellow)] transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href={LINKS.LINKEDIN} 
            target="_blank" 
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:text-foreground hover:ring-1 hover:ring-[var(--accent-yellow)] transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <button 
            onClick={() => scrollTo("projects")}
            className="bg-[var(--accent-yellow)] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[var(--accent-yellow)]/90 hover:shadow-[0_0_15px_rgba(245,197,24,0.4)] transition-all duration-300"
          >
            View Projects
          </button>
        </div>
      </div>
    </motion.header>
  );
}
