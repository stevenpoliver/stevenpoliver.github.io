import { motion } from "framer-motion";

const capabilities = [
  "Microsoft 365 / Intune / Autopilot",
  "Cyber Security Architecture",
  "Privileged Access Management",
  "Modern Device Management",
  "Delivery Enablement Platforms",
  "Governance-Aligned Solution Design"
];

export default function CapabilityList() {
  return (
    <section className="py-16 relative z-10 bg-black/20 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          <div className="md:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-[var(--accent-yellow)] mb-3"
            >
              Expertise & Focus
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight mb-4"
            >
              Bridging architecture, security, and delivery execution
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              My work typically sits at the intersection of strategy and execution. I enjoy turning broad initiatives into workable structures, practical platforms, and clearer delivery paths.
            </motion.p>
          </div>

          <div className="md:col-span-7 flex flex-wrap gap-3">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-5 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-foreground hover:bg-[var(--accent-yellow)]/10 hover:border-[var(--accent-yellow)]/30 hover:text-white hover:scale-[1.02] transition-all duration-300"
              >
                {item}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
