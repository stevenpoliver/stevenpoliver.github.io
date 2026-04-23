import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Shield, Rocket, Users } from "lucide-react";
import { LINKS } from "@/config/links";
import SnapshotCard from "./SnapshotCard";
import LatestInsight from "./LatestInsight";
import Certifications from "./Certifications";
import QuoteCard from "./QuoteCard";

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex items-start pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden isolate">
      {/* Layer 1: Deep base wash (near-black navy) */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, #0c0820 0%, #070312 55%, #04020a 100%)",
        }}
      />

      {/* Layer 2: Left-side cool blue/violet orb */}
      <div
        className="absolute -z-10 pointer-events-none"
        style={{
          top: "10%",
          left: "-12%",
          width: "640px",
          height: "640px",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(79,70,229,0.32) 0%, rgba(59,130,246,0.18) 30%, rgba(59,130,246,0) 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Layer 3: Subtle violet glow upper-mid */}
      <div
        className="absolute -z-10 pointer-events-none"
        style={{
          top: "-8%",
          left: "30%",
          width: "520px",
          height: "520px",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0) 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Layer 4: Soft central blue haze behind hero content */}
      <div
        className="absolute -z-10 pointer-events-none"
        style={{
          top: "30%",
          left: "30%",
          width: "640px",
          height: "420px",
          borderRadius: "9999px",
          background:
            "radial-gradient(ellipse at center, rgba(56,89,178,0.18) 0%, rgba(56,89,178,0) 70%)",
          filter: "blur(120px)",
          opacity: 0.7,
        }}
      />

      {/* Layer 5: Right-side warm amber flare */}
      <div
        className="absolute -z-10 pointer-events-none"
        style={{
          top: "8%",
          right: "-14%",
          width: "720px",
          height: "720px",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(255,196,64,0.30) 0%, rgba(245,197,24,0.12) 35%, rgba(245,197,24,0) 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Layer 6: Subtle film grain / noise overlay */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none mix-blend-overlay"
        style={{
          opacity: 0.18,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Layer 7: Edge vignette */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Decorative left lens-flare ring */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "-30px",
          width: "120px",
          height: "120px",
          borderRadius: "9999px",
          border: "1px solid rgba(147,197,253,0.30)",
          boxShadow:
            "inset 0 0 20px rgba(147,197,253,0.22), 0 0 40px rgba(99,102,241,0.22)",
          opacity: 0.55,
        }}
      />

      {/* Right-edge gold lens-flare beam */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft wide halo */}
        <div
          className="absolute"
          style={{
            top: "18%",
            right: "-220px",
            width: "780px",
            height: "260px",
            transform: "rotate(-18deg)",
            transformOrigin: "right center",
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(255,196,64,0.35) 0%, rgba(245,197,24,0.18) 25%, rgba(245,197,24,0.06) 50%, rgba(245,197,24,0) 75%)",
            filter: "blur(28px)",
          }}
        />
        {/* Bright hot core */}
        <div
          className="absolute"
          style={{
            top: "26%",
            right: "-60px",
            width: "260px",
            height: "260px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(255,224,130,0.55) 0%, rgba(255,196,64,0.25) 30%, rgba(245,197,24,0) 70%)",
            filter: "blur(8px)",
          }}
        />
        {/* Crisp beam line */}
        <div
          className="absolute h-[1.5px] origin-right"
          style={{
            top: "32%",
            right: "-40px",
            width: "560px",
            transform: "rotate(-18deg)",
            background:
              "linear-gradient(90deg, rgba(245,197,24,0) 0%, rgba(245,197,24,0.25) 25%, rgba(255,224,130,0.95) 70%, rgba(255,255,255,0.9) 92%, rgba(255,224,130,0) 100%)",
            boxShadow:
              "0 0 12px rgba(255,196,64,0.7), 0 0 32px rgba(245,197,24,0.45)",
          }}
        />
        {/* Tiny bright tip */}
        <div
          className="absolute"
          style={{
            top: "calc(32% - 4px)",
            right: "-30px",
            width: "10px",
            height: "10px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,224,130,0.6) 50%, rgba(245,197,24,0) 100%)",
            filter: "blur(1px)",
          }}
        />
      </div>
      
      {/* Subtle yellow dotted curve background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none opacity-40 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-none stroke-[var(--accent-yellow)]" strokeWidth="2" strokeDasharray="4 8">
          <path d="M0,80 C300,120 600,0 1200,80" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-12 gap-10 lg:gap-16 items-start z-10">
        
        {/* Left Column (55%) */}
        <div className="lg:col-span-6 xl:col-span-7 min-w-0 w-full flex flex-col items-start z-10 lg:pt-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--accent-yellow)]/30 bg-[var(--accent-yellow)]/5 text-[0.6rem] sm:text-xs font-bold tracking-widest text-[var(--accent-yellow)] uppercase mb-6 sm:mb-8 leading-snug max-w-full overflow-hidden"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-yellow)] shrink-0" />
            <span className="truncate">
              <span className="sm:hidden">STRATEGY-LED · BUILT FOR OUTCOMES</span>
              <span className="hidden sm:inline">STRATEGY-LED. DELIVERY-DRIVEN. BUILT FOR REAL OUTCOMES.</span>
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[1.75rem] sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.15] sm:leading-[1.1] mb-6 break-words"
          >
            I'm an IT Consultant with deep technical expertise across Microsoft environments, combining hands-on <span className="text-[var(--accent-yellow)]">technical capability</span> with <span className="text-[var(--accent-yellow)]">solution architecture</span> and <span className="text-[var(--accent-yellow)]">cyber security</span> expertise.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8"
          >
            I bring a practical, delivery-focused approach - balancing technical depth with commercial awareness to turn complex challenges into best-practice aligned solutions that deliver real client outcomes.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-10 w-full"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--accent-yellow)]/10 text-[var(--accent-yellow)]">
                <Shield className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">Security-first design</span>
                <span className="text-xs text-muted-foreground">Risk-aligned, Zero Trust–informed architectures</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--accent-yellow)]/10 text-[var(--accent-yellow)]">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">Built for real-world delivery</span>
                <span className="text-xs text-muted-foreground">Practical, usable and supportable solutions</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--accent-yellow)]/10 text-[var(--accent-yellow)]">
                <Users className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">Outcome-driven execution</span>
                <span className="text-xs text-muted-foreground">Solutions that create measurable business value</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button 
              onClick={scrollToProjects}
              className="group flex items-center gap-2 bg-[var(--accent-yellow)] text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-[var(--accent-yellow)]/90 hover:shadow-[0_0_20px_rgba(245,197,24,0.4)] transition-all duration-300"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href={LINKS.LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-white/10 hover:border-[var(--accent-yellow)]/50 hover:bg-white/5 transition-all duration-300"
            >
              Connect on LinkedIn
              <Linkedin className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Right Column (45%) */}
        <div className="lg:col-span-6 xl:col-span-5 min-w-0 z-10 w-full relative flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SnapshotCard />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Certifications />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <LatestInsight />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <QuoteCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
