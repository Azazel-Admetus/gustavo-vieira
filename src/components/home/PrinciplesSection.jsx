import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const principles = [
  { number: "01", text: "Construir com intenção." },
  { number: "02", text: "Pensar no longo prazo." },
  { number: "03", text: "Liderar pelo exemplo." },
  { number: "04", text: "A tecnologia deve servir às pessoas." },
];

function PrincipleCard({ principle, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-9 md:p-11 rounded-2xl overflow-hidden
        border border-white/[0.07] bg-[#1e293b]/30
        hover:border-[#f59e0b]/20 hover:bg-[#1e293b]/60
        transition-all duration-500"
    >
      {/* Subtle corner accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#f59e0b]/0 via-[#f59e0b]/20 to-[#f59e0b]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Number with golden glow */}
      <div className="mb-7 flex items-center gap-3">
        <span className="font-mono text-[13px] text-[#f59e0b] tracking-wider">
          {principle.number}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-[#f59e0b]/30 to-transparent max-w-[3rem] group-hover:max-w-[6rem] transition-all duration-500" />
      </div>

      <p className="font-heading font-semibold text-xl md:text-2xl text-white tracking-[-0.02em] leading-snug">
        {principle.text}
      </p>
    </motion.div>
  );
}

export default function PrinciplesSection() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="principios" className="py-32 md:py-44 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/20 to-transparent" />

      {/* Right ambient orb */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#172554]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
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
              Princípios
            </p>
          </div>
          <h2 className="font-heading font-semibold text-4xl md:text-5xl lg:text-[3.5rem] text-white tracking-[-0.03em] leading-[1.05]">
            Convicções que<br className="hidden sm:block" />
            <span className="text-[#94a3b8]"> não mudam.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {principles.map((principle, index) => (
            <PrincipleCard key={principle.number} principle={principle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}