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
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setLastScrollY(currentScrollY);

      // Determine active section
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-7 left-1/2 -translate-x-1/2 z-50"
        >
          {/* Golden top accent line on the dock */}
          <div className="relative">
            <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent rounded-full" />

            <div className="flex items-center gap-0.5 px-2.5 py-2 rounded-2xl bg-[#0f172a]/90 border border-white/[0.09] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="group relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300"
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
                      className={`relative z-10 w-[17px] h-[17px] stroke-[1.5] transition-all duration-300
                        ${isActive ? "text-[#f59e0b]" : "text-[#475569] group-hover:text-[#94a3b8]"}`}
                    />

                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1.5 rounded-lg
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