import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Code2, Rocket, Palette, Cog, Lightbulb } from "lucide-react";

const focusAreas = [
  { icon: Brain, label: "Inteligência Artificial", desc: "Modelos, agentes e sistemas autônomos." },
  { icon: Code2, label: "Engenharia de Software", desc: "Arquitetura, escalabilidade e excelência técnica." },
  { icon: Rocket, label: "Empreendedorismo", desc: "Construir ventures com visão de longo prazo." },
  { icon: Palette, label: "Design de Produtos", desc: "Experiências elegantes centradas no humano." },
  { icon: Cog, label: "Robótica", desc: "Sistemas físicos inteligentes e autônomos." },
  { icon: Lightbulb, label: "Inovação", desc: "Identificar e criar onde outros não veem." },
];

function FocusCard({ area, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col gap-4 p-7 rounded-2xl overflow-hidden
        border border-white/[0.07] bg-[#1e293b]/40
        hover:border-[#f59e0b]/25 hover:bg-[#1e293b]/70
        transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.06)]"
    >
      {/* Top border line that extends on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#f59e0b]/0 via-[#f59e0b]/40 to-[#f59e0b]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="relative w-11 h-11">
        <div className="absolute inset-0 bg-[#f59e0b]/10 rounded-xl blur-sm group-hover:bg-[#f59e0b]/20 transition-all duration-500" />
        <div className="relative w-11 h-11 rounded-xl border border-[#f59e0b]/15 bg-[#0f172a]/50
          flex items-center justify-center group-hover:border-[#f59e0b]/35 transition-all duration-500">
          <area.icon className="w-5 h-5 text-[#f59e0b]/70 group-hover:text-[#f59e0b] stroke-[1.5] transition-colors duration-400" />
        </div>
      </div>

      {/* Label */}
      <div>
        <h3 className="font-heading font-semibold text-[15px] text-white tracking-[-0.01em] mb-1.5">
          {area.label}
        </h3>
        <p className="text-[#64748b] text-[13px] leading-relaxed group-hover:text-[#94a3b8] transition-colors duration-400">
          {area.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function CurrentFocusSection() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="foco" className="py-32 md:py-44 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/20 to-transparent" />

      {/* Ambient left orb */}
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-[#172554]/50 rounded-full blur-[100px] pointer-events-none" />

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
              Foco Atual
            </p>
          </div>
          <h2 className="font-heading font-semibold text-4xl md:text-5xl lg:text-[3.5rem] text-white tracking-[-0.03em] leading-[1.05] mb-5">
            Áreas de exploração.
          </h2>
          <p className="text-[#64748b] text-lg max-w-lg leading-relaxed">
            Os campos que hoje capturam minha atenção e direcionam
            meu investimento de tempo e energia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {focusAreas.map((area, index) => (
            <FocusCard key={area.label} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}