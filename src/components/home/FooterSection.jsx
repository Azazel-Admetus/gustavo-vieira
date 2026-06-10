import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "mailto:gustavo@arsfinis.com", label: "Email" },
  { icon: Github, href: "https://github.com/gustavovieira-arsfinis", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/gustavo-vieira-arsfinis", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/gustavo.arsfinis", label: "Instagram" },
];

export default function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer id="contato" className="py-24 md:py-32 relative overflow-hidden">
      {/* Top divider with golden tint */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/30 to-transparent" />

      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#f59e0b]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#f59e0b]" />
            <p className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#f59e0b]">
              Contato
            </p>
            <div className="h-px w-8 bg-[#f59e0b]" />
          </div>

          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white tracking-[-0.03em] mb-4">
            Vamos conversar.
          </h2>
          <p className="text-[#64748b] text-base max-w-md mx-auto mb-12 leading-relaxed">
            Aberto a conversas sobre tecnologia, inovação e construção de coisas que importam.
          </p>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-4 mb-16">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative w-12 h-12 rounded-xl border border-white/[0.07] bg-[#1e293b]/40
                  flex items-center justify-center text-[#64748b]
                  hover:text-[#f59e0b] hover:border-[#f59e0b]/30 hover:bg-[#f59e0b]/5
                  hover:shadow-[0_0_20px_rgba(245,158,11,0.1)]
                  transition-all duration-400"
              >
                <link.icon className="w-[18px] h-[18px] stroke-[1.5]" />
              </motion.a>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/[0.06]">
            <p className="font-mono text-[11px] text-[#334155] tracking-[0.08em]">
              Gustavo © {new Date().getFullYear()} — Tecnologia, Liderança, Propósito.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}