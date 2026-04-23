import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    category: "Cyber Security / Consulting",
    status: "Flagship Build · In Progress",
    title: "Security & Governance Accelerators",
    description: "A growing collection of practical tools, concepts, and frameworks aimed at accelerating cyber maturity assessments, design thinking, and delivery consistency.",
    tags: ["Security", "Architecture", "Risk", "Advisory"],
    link: "#",
  },
  {
    category: "Pre-Sales / Delivery Enablement",
    status: "Showcase Project",
    title: "ProposalHub",
    description: "A proposal orchestration platform designed to improve scoping, effort estimation, governance, and delivery outcomes across consulting engagements.",
    tags: ["React", "Workflow", "Commercials", "Governance"],
    link: "#",
  },
  {
    category: "Modern Workplace / Program Delivery",
    status: "Showcase Project",
    title: "SOE Refresh Orchestration Portal",
    description: "A delivery-focused portal built to support large-scale SOE refresh and uplift initiatives with governance, visibility, and execution structure.",
    tags: ["Windows 11", "Modern Desktop", "Program Delivery"],
    link: "#",
  },
];

export default function FeaturedWork() {
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
            Projects that show how I think and build
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl"
          >
            These are examples of platforms and ideas built to solve practical business, delivery, and security challenges.
          </motion.p>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8 md:p-10 group relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 hover:bg-white/[0.04] hover:-translate-y-1 hover:border-[var(--accent-yellow)]/30 hover:shadow-[0_4px_20px_rgba(245,197,24,0.05)] transition-all duration-300"
            >
              <div className="flex-1">
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
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 rounded border border-white/10 text-muted-foreground hover:border-[var(--accent-yellow)]/50 hover:bg-[var(--accent-yellow)]/5 hover:text-[var(--accent-yellow)] transition-colors duration-300 cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="md:pl-8 flex-shrink-0">
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-[var(--accent-yellow)] transition-colors duration-300 group/link"
                >
                  View project
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
