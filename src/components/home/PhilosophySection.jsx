import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Users, Target } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "Tecnologia",
    description: "Construindo soluções digitais e sistemas para transformar ideias em realidade.",
    accent: "from-[#f59e0b]/10 to-transparent",
    glow: "group-hover:shadow-[0_0_40px_rgba(245,158,11,0.08)]",
  },
  {
    icon: Users,
    title: "Liderança",
    description: "Conduzindo iniciativas, pessoas e projetos através da execução e visão estratégica.",
    accent: "from-[#fbbf24]/10 to-transparent",
    glow: "group-hover:shadow-[0_0_40px_rgba(251,191,36,0.08)]",
  },
  {
    icon: Target,
    title: "Propósito",
    description: "Desenvolvendo tecnologia com intenção, responsabilidade e impacto positivo.",
    accent: "from-[#d97706]/10 to-transparent",
    glow: "group-hover:shadow-[0_0_40px_rgba(217,119,6,0.08)]",
  },
];

function PillarCard({ pillar, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative p-8 md:p-10 rounded-2xl overflow-hidden
        border border-white/[0.07] bg-[#1e293b]/50
        hover:border-[#f59e0b]/25 transition-all duration-500 ${pillar.glow}`}
    >
      {/* Top golden gradient accent on hover */}
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${pillar.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/30 to-transparent" />

      {/* Icon container */}
      <div className="mb-8 relative w-12 h-12">
        <div className="absolute inset-0 bg-[#f59e0b]/10 rounded-xl blur-md group-hover:bg-[#f59e0b]/20 transition-all duration-500" />
        <div className="relative w-12 h-12 rounded-xl border border-[#f59e0b]/20 bg-[#0f172a]/60 flex items-center justify-center
          group-hover:border-[#f59e0b]/40 transition-all duration-500">
          <pillar.icon className="w-5 h-5 text-[#f59e0b] stroke-[1.5]" />
        </div>
      </div>

      {/* Title with golden underline */}
      <div className="mb-4">
        <h3 className="font-heading font-semibold text-xl text-white tracking-[-0.02em]">
          {pillar.title}
        </h3>
        <div className="mt-2 h-px w-8 bg-gradient-to-r from-[#f59e0b]/60 to-transparent group-hover:w-16 transition-all duration-500" />
      </div>

      <p className="text-[#94a3b8] text-[15px] leading-[1.7]">
        {pillar.description}
      </p>
    </motion.div>
  );
}

export default function PhilosophySection() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="filosofia"
      className="[content-visibility:auto] [contain-intrinsic-size:1px_900px] py-32 md:py-44 relative"
    >
      {/* Section divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#f59e0b]" />
            <p className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#f59e0b]">
              Filosofia
            </p>
          </div>
          <h2 className="font-heading font-semibold text-4xl md:text-5xl lg:text-[3.5rem] text-white tracking-[-0.03em] leading-[1.05]">
            Os pilares que guiam<br className="hidden sm:block" />
            <span className="text-[#94a3b8]"> cada decisão.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
