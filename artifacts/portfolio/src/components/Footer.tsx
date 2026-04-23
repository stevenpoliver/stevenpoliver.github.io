import { LINKS } from "@/config/links";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 relative z-10 bg-background">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col text-center md:text-left">
          <span className="font-bold text-foreground">Steven Oliver</span>
          <span className="text-sm text-muted-foreground">Solutions Architect • Cyber Security • Modern Workplace</span>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href={LINKS.GITHUB} target="_blank" rel="noreferrer" className="hover:text-[var(--accent-yellow)] transition-colors duration-300">
            GitHub
          </a>
          <a href={LINKS.LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-[var(--accent-yellow)] transition-colors duration-300">
            LinkedIn
          </a>
        </div>

        <div className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Steven Oliver. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
