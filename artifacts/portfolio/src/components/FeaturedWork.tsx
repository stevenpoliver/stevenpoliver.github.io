import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { PROJECTS, Project, hasShowcaseMedia } from "@/config/projects";
import ShowcaseModal from "./ShowcaseModal";

export default function FeaturedWork() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[var(--accent-yellow)] mb-3"
          >
            Featured Projects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Projects that reflect how I design and deliver solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl"
          >
            Bespoke platforms and concepts built to address real business and security challenges.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-xs text-[var(--accent-yellow)]/80 mt-3 italic"
          >
            (Note: these are personal concept projects. All branding, screens and data shown are illustrative only and do not represent any client, employer or production system.)
          </motion.p>
        </div>

        <div className="flex flex-col gap-6">
          {PROJECTS.map((project, index) => {
            const ready = hasShowcaseMedia(project);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 sm:p-8 md:p-10 group relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 hover:bg-white/[0.04] hover:-translate-y-1 hover:border-[var(--accent-yellow)]/30 hover:shadow-[0_4px_20px_rgba(245,197,24,0.05)] transition-all duration-300"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-foreground">
                      {project.category}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded border border-[var(--accent-yellow)]/30 bg-[var(--accent-yellow)]/10 text-[var(--accent-yellow)] uppercase tracking-wider">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 max-w-3xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2 py-1 rounded border border-white/10 text-muted-foreground hover:border-[var(--accent-yellow)]/50 hover:bg-[var(--accent-yellow)]/5 hover:text-[var(--accent-yellow)] transition-colors duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:pl-8 flex-shrink-0">
                  <button
                    onClick={() => setActiveProject(project)}
                    className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 group/link ${
                      ready
                        ? "text-foreground hover:text-[var(--accent-yellow)]"
                        : "text-muted-foreground hover:text-[var(--accent-yellow)]/80"
                    }`}
                  >
                    {ready ? (
                      <>
                        View showcase
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </>
                    ) : (
                      <>
                        <Clock className="w-4 h-4" />
                        Preview coming soon
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ShowcaseModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
