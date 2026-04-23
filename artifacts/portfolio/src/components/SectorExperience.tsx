import { motion } from "framer-motion";
import {
  Landmark,
  Building2,
  Plane,
  Shield,
  Zap,
  Pickaxe,
  Ship,
  Server,
  HardHat,
  Briefcase,
  Car,
  Stethoscope,
  GraduationCap,
  HeartHandshake,
  UtensilsCrossed,
  Home,
  Factory,
  type LucideIcon,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Sector {
  name: string;
  count: number;
  icon: LucideIcon;
  tooltip: string;
}

const SECTORS: Sector[] = [
  {
    name: "Government - State / Federal",
    count: 11,
    icon: Landmark,
    tooltip:
      "Public sector environments with strong governance, identity, data protection, Essential Eight, auditability and public service continuity considerations.",
  },
  {
    name: "Local Government",
    count: 4,
    icon: Building2,
    tooltip:
      "Council environments balancing citizen services, legacy systems, cloud adoption, endpoint security, identity maturity and operational resilience.",
  },
  {
    name: "Aviation",
    count: 2,
    icon: Plane,
    tooltip:
      "High-availability operational environments where identity, endpoint security, resilience, access control and cyber assurance directly support business continuity.",
  },
  {
    name: "Defence & Aerospace",
    count: 2,
    icon: Shield,
    tooltip:
      "Security-conscious environments with heightened requirements for access control, privileged access, information protection and systems assurance.",
  },
  {
    name: "Energy & Utilities",
    count: 3,
    icon: Zap,
    tooltip:
      "Critical infrastructure environments with operational resilience, identity security, privileged access, monitoring and SOCI-aligned risk considerations.",
  },
  {
    name: "Mining, Resources & Energy Infrastructure",
    count: 4,
    icon: Pickaxe,
    tooltip:
      "Distributed enterprise and operational environments requiring secure access, endpoint visibility, resilience, governance and risk-based control alignment.",
  },
  {
    name: "Infrastructure / Ports / Transport",
    count: 2,
    icon: Ship,
    tooltip:
      "Operationally critical environments where cyber security supports service continuity, asset protection, identity control and resilience.",
  },
  {
    name: "Technology / Data Centres",
    count: 1,
    icon: Server,
    tooltip:
      "Technology and hosting environments with strong requirements for availability, access control, monitoring, resilience and security assurance.",
  },
  {
    name: "Construction / Engineering / Industrial",
    count: 2,
    icon: HardHat,
    tooltip:
      "Industrial and engineering environments balancing mobility, endpoint management, secure collaboration, identity and operational constraints.",
  },
  {
    name: "Financial / Legal / Professional Services",
    count: 3,
    icon: Briefcase,
    tooltip:
      "Highly regulated and commercially sensitive environments with strong focus on data protection, identity, compliance, confidentiality and auditability.",
  },
  {
    name: "Insurance / Automotive",
    count: 2,
    icon: Car,
    tooltip:
      "Customer-facing enterprise environments with privacy, identity, endpoint security, regulatory and operational continuity considerations.",
  },
  {
    name: "Healthcare / Medical Research / Pharmaceuticals",
    count: 2,
    icon: Stethoscope,
    tooltip:
      "Sensitive data environments requiring strong governance, identity, access control, information protection, resilience and compliance alignment.",
  },
  {
    name: "Education - Universities & Schools",
    count: 6,
    icon: GraduationCap,
    tooltip:
      "Large and diverse user environments requiring scalable identity, endpoint management, student/staff access controls, security baselines and usability.",
  },
  {
    name: "Not-for-Profit / Community Services",
    count: 3,
    icon: HeartHandshake,
    tooltip:
      "Service-driven environments requiring practical security uplift, identity maturity, privacy protection, resilience and cost-conscious control design.",
  },
  {
    name: "Hospitality / Entertainment",
    count: 1,
    icon: UtensilsCrossed,
    tooltip:
      "Customer-facing environments with PCI DSS, identity, endpoint, availability, privacy and operational continuity considerations.",
  },
  {
    name: "Property / Retirement Living",
    count: 1,
    icon: Home,
    tooltip:
      "Community and resident-focused environments requiring secure access, privacy, endpoint management and reliable operational systems.",
  },
  {
    name: "Industrial / Private Enterprise",
    count: 2,
    icon: Factory,
    tooltip:
      "Private enterprise environments requiring pragmatic cyber uplift across identity, endpoint, cloud, privileged access and operational governance.",
  },
];

const FRAMEWORKS = [
  "Essential Eight",
  "Zero Trust",
  "PCI DSS",
  "SOCI",
  "NIST",
  "Privileged Access",
  "Cloud Security",
  "Endpoint Security",
];

export default function SectorExperience() {
  const totalEngagements = SECTORS.reduce((sum, s) => sum + s.count, 0);

  return (
    <section id="sectors" className="py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[var(--accent-yellow)] mb-3"
          >
            Sector Experience
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Experience Across Regulated and High-Consequence Sectors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl"
          >
            {totalEngagements}+ enterprise engagements delivered across regulated, critical and operationally complex industries. Hover any sector for the cyber and security lens applied in that environment.
          </motion.p>
        </div>

        <TooltipProvider delayDuration={150}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {SECTORS.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Tooltip key={sector.name}>
                  <TooltipTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.35, delay: (index % 6) * 0.04 }}
                      tabIndex={0}
                      className="glass rounded-xl p-4 sm:p-5 flex items-start gap-3 cursor-default border border-white/5 hover:border-[var(--accent-yellow)]/30 hover:bg-white/[0.04] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(245,197,24,0.06)] focus-visible:outline-none focus-visible:border-[var(--accent-yellow)]/50 transition-all duration-300"
                    >
                      <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--accent-yellow)]/10 border border-[var(--accent-yellow)]/20 text-[var(--accent-yellow)]">
                        <Icon className="w-4 h-4" strokeWidth={2} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold text-foreground leading-snug">
                          {sector.name}
                        </div>
                        <div className="text-[0.7rem] uppercase tracking-wider text-muted-foreground mt-1">
                          {sector.count} {sector.count === 1 ? "engagement" : "engagements"}
                        </div>
                      </div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="max-w-xs text-xs leading-relaxed bg-black/90 border border-[var(--accent-yellow)]/30 text-foreground"
                  >
                    {sector.tooltip}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </TooltipProvider>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10 glass rounded-2xl p-6 sm:p-8 border border-white/10"
        >
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed max-w-4xl">
            Across these sectors, my work consistently focuses on building secure, resilient and governable technology foundations - aligning identity, endpoint, cloud, privileged access and compliance requirements to the realities of complex enterprise environments.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {FRAMEWORKS.map((label) => (
              <span
                key={label}
                className="text-[0.7rem] font-medium px-2.5 py-1 rounded-full border border-[var(--accent-yellow)]/25 bg-[var(--accent-yellow)]/5 text-[var(--accent-yellow)] uppercase tracking-wider"
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
