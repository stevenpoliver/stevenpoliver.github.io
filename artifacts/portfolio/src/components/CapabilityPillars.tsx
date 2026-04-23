import { motion } from "framer-motion";
import { Shield, MonitorSmartphone, LayoutTemplate, Zap } from "lucide-react";

const pillars = [
  {
    title: "Cyber Security",
    description: "Security architecture, Zero Trust thinking, governance uplift, privileged access, endpoint security, and practical risk-aligned delivery.",
    icon: Shield,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Modern Workplace",
    description: "Microsoft 365, Intune, Autopilot, Windows 11 transformation, endpoint management, and scalable operating environment uplift.",
    icon: MonitorSmartphone,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Solution Architecture",
    description: "Turning ideas into structured, usable, delivery-ready solutions that balance business outcomes, technical quality, and governance.",
    icon: LayoutTemplate,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    title: "Vibe-Coded Tooling",
    description: "Rapid creation of practical internal platforms, portals, and accelerators to improve project execution, repeatability, and client outcomes.",
    icon: Zap,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
];

export default function CapabilityPillars() {
  return (
    <section id="capability" className="py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-[var(--accent-yellow)] mb-3 text-center"
        >
          Core Capabilities
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 relative group overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-[var(--accent-yellow)] transition-all duration-300 group-hover:w-full" />
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent`} />
              
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${pillar.bg} group-hover:bg-[var(--accent-yellow)]/10 transition-colors duration-300`}>
                <pillar.icon className={`w-6 h-6 ${pillar.color} group-hover:text-[var(--accent-yellow)] transition-colors duration-300`} />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                {pillar.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
