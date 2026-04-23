import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { LINKS } from "@/config/links";

export default function Connect() {
  return (
    <section id="connect" className="py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-6"><div className="max-w-4xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[500px] bg-blue-500/20 blur-[100px] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[var(--accent-yellow)] mb-3 text-center relative z-10"
          >
            Let's Connect
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground relative z-10">
            Want to explore the work, collaborate, or see what I'm building next?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 relative z-10">
            Use this page as a launch point into my GitHub projects, practical solution builds, and the ideas shaping where I'm heading next.
          </p>

          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a 
              href={LINKS.GITHUB}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:bg-white/90 hover:border-[var(--accent-yellow)] border border-transparent transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              Visit GitHub
            </a>
            <a 
              href={LINKS.LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium border border-white/10 hover:border-[var(--accent-yellow)] hover:bg-[var(--accent-yellow)]/5 transition-all duration-300 text-foreground"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </motion.div>

      </div></div>
    </section>
  );
}
