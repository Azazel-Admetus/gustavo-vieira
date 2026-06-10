import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

function AnimatedOrb({ className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Deep layered background */}
      <div className="absolute inset-0 bg-[#0f172a]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#172554]/60 via-[#0f172a] to-[#0f172a]" />

      {/* Animated ambient orbs */}
      <AnimatedOrb
        className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#1e3a5f]/30 blur-[120px] pointer-events-none"
        delay={0}
      />
      <AnimatedOrb
        className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#172554]/40 blur-[140px] pointer-events-none"
        delay={3}
      />
      <AnimatedOrb
        className="absolute top-[30%] left-[40%] w-[400px] h-[400px] rounded-full bg-[#f59e0b]/5 blur-[100px] pointer-events-none"
        delay={1.5}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Golden top-edge accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 w-full pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          {/* ── Text ── */}
          <div className="lg:col-span-7 order-2 lg:order-1">

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/5 text-[#f59e0b] font-mono text-[12px] uppercase tracking-[0.12em]">
                <Sparkles className="w-3.5 h-3.5" />
                Tecnologia&ensp;·&ensp;Liderança&ensp;·&ensp;Propósito
              </span>
            </motion.div>

            {/* Main title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <h1 className="font-heading font-semibold text-[clamp(4rem,10vw,7.5rem)] tracking-[-0.04em] leading-[0.88] text-white">
                Gustavo
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f59e0b]">
                    Vieira
                  </span>
                  {/* Soft glow under the golden letters */}
                  <span className="absolute -inset-2 bg-[#f59e0b]/10 blur-xl rounded-full -z-10" />
                </span>
              </h1>
            </motion.div>

            {/* Body text */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#94a3b8] text-lg md:text-xl leading-[1.75] max-w-lg mb-12"
            >
              Acredito que a tecnologia atinge sua forma mais alta quando resolve
              problemas fundamentais e gera impacto geracional. Minha atuação foca
              na intersecção entre execução técnica rigorosa e visão estratégica de
              longo prazo.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4"
            >
              <a
                href="#filosofia"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full
                  bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]
                  text-[#0f172a] text-sm font-semibold tracking-[-0.01em]
                  hover:shadow-[0_0_28px_rgba(245,158,11,0.35)] transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10">Explorar Visão</span>
                <ArrowDown className="relative z-10 w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-400" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10
                  text-[#94a3b8] text-sm font-medium hover:border-white/20 hover:text-white
                  transition-all duration-400"
              >
                Sobre mim
              </a>
            </motion.div>

          </div>

          {/* ── Portrait ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Multi-layer glow rings */}
              <div className="absolute -inset-6 bg-gradient-to-b from-[#f59e0b]/10 via-[#f59e0b]/5 to-transparent rounded-3xl blur-2xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-[#f59e0b]/20 to-transparent rounded-3xl blur-md" />

              {/* Portrait frame */}
              <div className="relative w-60 h-76 sm:w-72 sm:h-96 lg:w-80 lg:h-[420px] rounded-3xl overflow-hidden border border-white/10"
                style={{ boxShadow: "0 0 0 1px rgba(245,158,11,0.15), 0 32px 80px rgba(0,0,0,0.5)" }}>
                <img
                  src="/assets/images/gustavo.png"
                  alt="Gustavo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/45 via-transparent to-transparent" />
              </div>

              {/* Floating golden accent chip */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -right-4 top-8 px-2.5 py-1 rounded-full bg-[#1e293b] border border-[#f59e0b]/25 shadow-lg"
              >
                <span className="font-mono text-[10px] text-[#f59e0b] tracking-wider">Construindo o futuro</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-[#475569] uppercase tracking-[0.15em]">Rolar</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-[#334155]/60 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-gradient-to-b from-[#f59e0b] to-transparent" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />
    </section>
  );
}
