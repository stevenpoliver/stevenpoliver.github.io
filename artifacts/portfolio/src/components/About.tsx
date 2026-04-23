import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-[var(--accent-yellow)] mb-3"
        >
          About Me
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-8"
        >
          A Consultant with Technical and Security depth
        </motion.h2>

        <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            I'm a senior consultant and solution architect with a strong background across cyber security, modern workplace, Microsoft platforms, and enterprise delivery. Over the years I've worked across both strategy and implementation, helping turn complex requirements into real outcomes.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            More recently, I've been building practical tooling and quality platforms that showcase a different way of working: faster concept-to-value, cleaner engagement structures, and solutions that can be iterated and reused.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-foreground font-medium"
          >
            This site exists to make that work visible.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
