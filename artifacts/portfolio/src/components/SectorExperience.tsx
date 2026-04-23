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
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface Sector {
  name: string;
  count: number;
  icon: LucideIcon;
  focus: string[];
  considerations: string;
}

const SECTORS: Sector[] = [
  {
    name: "Government - State / Federal",
    count: 11,
    icon: Landmark,
    focus: ["Essential Eight", "Identity & Access", "Data Protection", "Auditability"],
    considerations:
      "Public sector environments where governance, identity uplift, information protection and Essential Eight alignment underpin trust and service continuity.",
  },
  {
    name: "Local Government",
    count: 4,
    icon: Building2,
    focus: ["Cloud Adoption", "Endpoint Security", "Identity Maturity", "Resilience"],
    considerations:
      "Council environments balancing citizen services with legacy modernisation, cloud uplift, endpoint visibility and operational resilience.",
  },
  {
    name: "Aviation",
    count: 2,
    icon: Plane,
    focus: ["Operational Continuity", "Access Control", "Cyber Assurance"],
    considerations:
      "High-availability operational environments where identity, endpoint security, resilience and access control directly support business continuity.",
  },
  {
    name: "Defence & Aerospace",
    count: 2,
    icon: Shield,
    focus: ["Privileged Access", "Information Protection", "Systems Assurance"],
    considerations:
      "Security-conscious environments with heightened requirements for access control, privileged access governance and information protection.",
  },
  {
    name: "Energy & Utilities",
    count: 3,
    icon: Zap,
    focus: ["SOCI Alignment", "Operational Resilience", "Privileged Access", "Monitoring"],
    considerations:
      "Critical infrastructure environments with operational resilience, identity security, privileged access and SOCI-aligned risk considerations.",
  },
  {
    name: "Mining, Resources & Energy Infrastructure",
    count: 4,
    icon: Pickaxe,
    focus: ["Distributed Endpoints", "Secure Access", "Risk-Based Controls"],
    considerations:
      "Distributed enterprise and operational environments requiring secure access, endpoint visibility, governance and risk-based control alignment.",
  },
  {
    name: "Infrastructure / Ports / Transport",
    count: 2,
    icon: Ship,
    focus: ["Service Continuity", "Asset Protection", "Identity Control"],
    considerations:
      "Operationally critical environments where cyber security supports service continuity, asset protection and identity control.",
  },
  {
    name: "Technology / Data Centres",
    count: 1,
    icon: Server,
    focus: ["Availability", "Access Control", "Monitoring", "Assurance"],
    considerations:
      "Technology and hosting environments with strong requirements for availability, access control, monitoring and security assurance.",
  },
  {
    name: "Construction / Engineering / Industrial",
    count: 2,
    icon: HardHat,
    focus: ["Mobility", "Endpoint Management", "Secure Collaboration"],
    considerations:
      "Industrial and engineering environments balancing mobility, endpoint management, secure collaboration and identity across constrained operating contexts.",
  },
  {
    name: "Financial / Legal / Professional Services",
    count: 3,
    icon: Briefcase,
    focus: ["Data Protection", "Compliance", "Confidentiality", "Auditability"],
    considerations:
      "Highly regulated and commercially sensitive environments with strong focus on data protection, identity, compliance and auditability.",
  },
  {
    name: "Insurance / Automotive",
    count: 2,
    icon: Car,
    focus: ["Privacy", "Endpoint Security", "Regulatory Alignment"],
    considerations:
      "Customer-facing enterprise environments with privacy, identity, endpoint security, regulatory and operational continuity considerations.",
  },
  {
    name: "Healthcare / Medical Research / Pharmaceuticals",
    count: 2,
    icon: Stethoscope,
    focus: ["Sensitive Data", "Information Protection", "Compliance"],
    considerations:
      "Sensitive data environments requiring strong governance, identity, access control, information protection and compliance alignment.",
  },
  {
    name: "Education - Universities & Schools",
    count: 6,
    icon: GraduationCap,
    focus: ["Scalable Identity", "Endpoint Management", "Security Baselines", "Usability"],
    considerations:
      "Large and diverse user environments requiring scalable identity, endpoint management and security baselines that work for staff and students alike.",
  },
  {
    name: "Not-for-Profit / Community Services",
    count: 3,
    icon: HeartHandshake,
    focus: ["Practical Uplift", "Privacy", "Cost-Conscious Design"],
    considerations:
      "Service-driven environments requiring practical security uplift, identity maturity, privacy protection and cost-conscious control design.",
  },
  {
    name: "Hospitality / Entertainment",
    count: 1,
    icon: UtensilsCrossed,
    focus: ["PCI DSS", "Availability", "Privacy"],
    considerations:
      "Customer-facing environments with PCI DSS, identity, endpoint, availability and operational continuity considerations.",
  },
  {
    name: "Property / Retirement Living",
    count: 1,
    icon: Home,
    focus: ["Secure Access", "Privacy", "Reliable Operations"],
    considerations:
      "Community and resident-focused environments requiring secure access, privacy, endpoint management and reliable operational systems.",
  },
  {
    name: "Industrial / Private Enterprise",
    count: 2,
    icon: Factory,
    focus: ["Pragmatic Uplift", "Privileged Access", "Operational Governance"],
    considerations:
      "Private enterprise environments requiring pragmatic cyber uplift across identity, endpoint, cloud, privileged access and governance.",
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
        <div className="mb-8">
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
            className="text-base text-muted-foreground max-w-3xl"
          >
            {totalEngagements}+ enterprise engagements across regulated, critical and operationally complex industries. Hover any sector for the cyber and security lens applied in that environment.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5">
          {SECTORS.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <HoverCard key={sector.name} openDelay={120} closeDelay={80}>
                <HoverCardTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.3, delay: (index % 8) * 0.03 }}
                    tabIndex={0}
                    className="glass rounded-lg px-3 py-2.5 flex items-center gap-2.5 cursor-default border border-white/5 hover:border-[var(--accent-yellow)]/40 hover:bg-white/[0.04] hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(245,197,24,0.07)] focus-visible:outline-none focus-visible:border-[var(--accent-yellow)]/60 transition-all duration-200"
                  >
                    <div className="shrink-0 w-7 h-7 rounded-md flex items-center justify-center bg-[var(--accent-yellow)]/10 border border-[var(--accent-yellow)]/20 text-[var(--accent-yellow)]">
                      <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[0.78rem] font-semibold text-foreground leading-tight truncate">
                        {sector.name}
                      </div>
                      <div className="text-[0.62rem] uppercase tracking-wider text-muted-foreground/80 mt-0.5">
                        {sector.count} {sector.count === 1 ? "engagement" : "engagements"}
                      </div>
                    </div>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent
                  side="top"
                  align="start"
                  sideOffset={8}
                  className="w-80 p-4 bg-black/95 backdrop-blur-md border border-[var(--accent-yellow)]/30 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="shrink-0 w-7 h-7 rounded-md flex items-center justify-center bg-[var(--accent-yellow)]/15 border border-[var(--accent-yellow)]/30 text-[var(--accent-yellow)]">
                      <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-foreground leading-tight">
                        {sector.name}
                      </div>
                      <div className="text-[0.6rem] uppercase tracking-wider text-[var(--accent-yellow)]/90 mt-0.5">
                        {sector.count} {sector.count === 1 ? "engagement" : "engagements"}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed text-muted-foreground mb-3">
                    {sector.considerations}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {sector.focus.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.6rem] font-medium px-2 py-0.5 rounded border border-white/10 bg-white/5 text-foreground/80 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8 glass rounded-2xl p-6 sm:p-7 border border-white/10"
        >
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed max-w-4xl">
            Across these sectors, my work consistently focuses on building secure, resilient and governable technology foundations - aligning identity, endpoint, cloud, privileged access and compliance requirements to the realities of complex enterprise environments.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {FRAMEWORKS.map((label) => (
              <span
                key={label}
                className="text-[0.65rem] font-medium px-2.5 py-1 rounded-full border border-[var(--accent-yellow)]/25 bg-[var(--accent-yellow)]/5 text-[var(--accent-yellow)] uppercase tracking-wider"
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
