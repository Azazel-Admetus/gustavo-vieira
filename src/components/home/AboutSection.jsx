import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const traits = ["Curiosidade", "Execução", "Visão", "Impacto"];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="sobre"
      className="[content-visibility:auto] [contain-intrinsic-size:1px_1100px] py-32 md:py-44 relative overflow-hidden"
    >
      {/* Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/20 to-transparent" />

      {/* Ambient bg accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block w-[500px] h-[500px] bg-[#172554]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#f59e0b]" />
            <p className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#f59e0b]">
              Sobre
            </p>
          </div>
          <h2 className="font-heading font-semibold text-4xl md:text-5xl lg:text-[3.5rem] text-white tracking-[-0.03em] leading-[1.05]">
            Quem eu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]">sou?</span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left column – paragraphs */}
          <div className="lg:col-span-7 space-y-7">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#cbd5e1] text-lg leading-[1.8]"
            >
              Movido por uma curiosidade profunda sobre como a tecnologia pode
              transformar a maneira como vivemos e trabalhamos, construo na
              intersecção entre inovação técnica e visão estratégica.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#cbd5e1] text-lg leading-[1.8]"
            >
              Minha trajetória é marcada pela execução disciplinada, pelo
              aprendizado contínuo e pela busca constante por criar coisas que
              geram valor real. Acredito que o empreendedorismo tecnológico é
              uma das forças mais poderosas para impacto positivo.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#94a3b8] text-[15px] leading-[1.8]"
            >
              Não me defino por títulos ou ferramentas específicas, mas pela
              capacidade de identificar problemas complexos e construir soluções
              elegantes. Cada projeto é uma oportunidade de aprender, liderar e
              contribuir para algo maior.
            </motion.p>
          </div>

          {/* Right column – callout + traits */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Quote block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-7 rounded-2xl border border-white/[0.07] bg-[#1e293b]/40 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#f59e0b]/50 to-transparent" />
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#f59e0b]/60 to-transparent" />
              <p className="text-[#cbd5e1] text-base leading-[1.8] italic">
                "A verdadeira inovação não está apenas na tecnologia em si, mas
                na intenção com que ela é aplicada e no impacto que ela gera
                ao longo do tempo."
              </p>
            </motion.div>

            {/* Trait badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3"
            >
              {traits.map((t) => (
                <span
                  key={t}
                  className="px-4 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/5
                    text-[#f59e0b] font-mono text-[12px] uppercase tracking-[0.1em]"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
