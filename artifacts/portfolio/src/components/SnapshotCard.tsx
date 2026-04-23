import { motion } from "framer-motion";
import { CalendarDays, Building2, Shield, Award } from "lucide-react";

export default function SnapshotCard() {
  return (
    <div className="glass rounded-2xl p-6 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-semibold tracking-tight">What I Bring</h3>
        <div className="px-3 py-1 rounded-full bg-[var(--accent-yellow)]/10 text-[var(--accent-yellow)] text-xs font-medium border border-[var(--accent-yellow)]/20">
          Strategy + Delivery
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-5 mb-6">
        <div className="flex flex-col min-w-0">
          <CalendarDays className="w-5 h-5 text-[var(--accent-yellow)] mb-2" />
          <div className="text-xl lg:text-2xl font-bold text-[var(--accent-yellow)] mb-1 leading-tight">22+</div>
          <div className="text-[0.65rem] uppercase tracking-wider text-muted-foreground font-medium">Years in IT</div>
        </div>
        <div className="flex flex-col min-w-0">
          <Building2 className="w-5 h-5 text-[var(--accent-yellow)] mb-2" />
          <div className="text-base lg:text-lg font-bold text-[var(--accent-yellow)] mb-1 leading-tight">Enterprise</div>
          <div className="text-[0.65rem] uppercase tracking-wider text-muted-foreground font-medium">Delivery Focus</div>
        </div>
        <div className="flex flex-col min-w-0">
          <Shield className="w-5 h-5 text-[var(--accent-yellow)] mb-2" />
          <div className="text-base lg:text-lg font-bold text-[var(--accent-yellow)] mb-1 leading-tight">Security</div>
          <div className="text-[0.65rem] uppercase tracking-wider text-muted-foreground font-medium">Architecture Mindset</div>
        </div>
        <div className="flex flex-col min-w-0">
          <Award className="w-5 h-5 text-[var(--accent-yellow)] mb-2" />
          <div className="text-base lg:text-lg font-bold text-[var(--accent-yellow)] mb-1 leading-tight">Certified</div>
          <div className="text-[0.65rem] uppercase tracking-wider text-muted-foreground font-medium">Industry Credentials</div>
        </div>
      </div>

      <div className="pt-4 border-t border-white/10">
        <p className="text-[0.8rem] text-muted-foreground leading-relaxed">
          I bring together architecture, security and delivery experience - pairing technical depth with commercial judgement to shape solutions that are secure, supportable and built around real business outcomes.
        </p>
      </div>
    </div>
  );
}
