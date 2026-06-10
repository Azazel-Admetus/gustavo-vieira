import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Compass, User, Crosshair, Shield, Mail } from "lucide-react";

const navItems = [
  { icon: Home, href: "#inicio", label: "Início" },
  { icon: Compass, href: "#filosofia", label: "Filosofia" },
  { icon: User, href: "#sobre", label: "Sobre" },
  { icon: Crosshair, href: "#foco", label: "Foco" },
  { icon: Shield, href: "#principios", label: "Princípios" },
  { icon: Mail, href: "#contato", label: "Contato" },
];

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY > 400);

      const activeLine = currentScrollY + window.innerHeight * 0.45;
      const sections = navItems.map((item) => item.href.replace("#", ""));

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (!el) continue;

        const sectionTop = el.offsetTop;
        const sectionBottom = sectionTop + el.offsetHeight;
        const isLastSection = i === sections.length - 1;

        if ((activeLine >= sectionTop && activeLine < sectionBottom) || (isLastSection && activeLine >= sectionTop)) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 sm:bottom-7 sm:left-1/2 sm:-translate-x-1/2 z-50 origin-bottom scale-90 sm:scale-100"
        >
          {/* Golden top accent line on the dock */}
          <div className="relative">
            <div className="absolute -top-px left-4 right-4 sm:left-6 sm:right-6 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent rounded-full" />

            <div className="flex items-center gap-0.5 px-2 py-1.5 sm:px-2.5 sm:py-2 rounded-2xl bg-[#0f172a]/90 border border-white/[0.09] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setActiveSection(item.href.replace("#", ""))}
                    aria-label={item.label}
                    className="group relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl transition-all duration-300"
                  >
                    {/* Active/hover bg */}
                    {isActive && (
                      <motion.div
                        layoutId="navActive"
                        className="absolute inset-0 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    <item.icon
                      className={`relative z-10 w-3.5 h-3.5 sm:w-[17px] sm:h-[17px] stroke-[1.5] transition-all duration-300
                        ${isActive ? "text-[#f59e0b]" : "text-[#475569] group-hover:text-[#94a3b8]"}`}
                    />

                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 hidden sm:block px-2.5 py-1.5 rounded-lg
                      bg-[#1e293b] border border-white/[0.08] text-[11px] font-mono text-[#cbd5e1]
                      opacity-0 group-hover:opacity-100 pointer-events-none
                      transition-opacity duration-200 whitespace-nowrap shadow-xl">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
