import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isSolid, setIsSolid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Projetos', id: 'projetos' },
    { label: 'Habilidades', id: 'habilidades' },
    { label: 'Contato', id: 'contato' }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  useEffect(() => {
    const updateNavbar = () => {
      const aboutSection = document.getElementById('sobre');
      const threshold = aboutSection ? aboutSection.offsetTop - 120 : 120;
      const nextIsSolid = window.scrollY >= threshold;
      setIsSolid(nextIsSolid);
      if (!nextIsSolid) {
        setIsOpen(false);
      }
    };

    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
    window.addEventListener('resize', updateNavbar);

    return () => {
      window.removeEventListener('scroll', updateNavbar);
      window.removeEventListener('resize', updateNavbar);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-6 pt-4">
        <nav
          className={`relative flex items-center rounded-2xl px-4 py-3 transition-all duration-300 ${
            isSolid
              ? 'justify-between border border-slate-700/70 bg-slate-900/70 shadow-lg shadow-slate-950/30 backdrop-blur-md'
              : 'justify-center border border-transparent bg-slate-900/0 shadow-none'
          }`}
        >
          {isSolid && (
            <button
              type="button"
              onClick={() => scrollToSection('inicio')}
              className="text-sm font-semibold text-white tracking-wide"
            >
              Gustavo Vieira
            </button>
          )}

          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  isSolid
                    ? 'text-slate-200 hover:text-white hover:bg-slate-800/70'
                    : 'text-slate-200/90 hover:text-amber-400 hover:bg-slate-800/20'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {isSolid && (
            <Button
              onClick={() => scrollToSection('formulario')}
              className="hidden md:inline-flex bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-2 text-sm rounded-xl shadow-md shadow-amber-500/20"
            >
              Fale comigo
            </Button>
          )}

          {isSolid && (
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              className="md:hidden ml-auto inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 p-2 text-slate-200 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}

          {isSolid && (
            <div
              className={`md:hidden absolute left-0 right-0 top-full mt-3 rounded-2xl border border-slate-700/70 bg-slate-900/90 shadow-lg shadow-slate-950/40 backdrop-blur-md transition-all duration-300 ${
                isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="flex flex-col gap-2 p-4">
                {links.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="w-full rounded-xl px-4 py-3 text-left text-sm text-slate-200 hover:text-white hover:bg-slate-800/70 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection('formulario')}
                  className="mt-2 w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm rounded-xl shadow-md shadow-amber-500/20"
                >
                  Fale comigo
                </Button>
              </div>
            </div>
          )}
        </nav>
      </div>

      {!isSolid && (
        <div className="md:hidden fixed top-6 right-6 z-50">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/50 p-3 text-slate-200 hover:text-amber-400 transition-colors backdrop-blur-md"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div
            className={`absolute right-0 mt-3 w-56 rounded-2xl border border-slate-700/70 bg-slate-900/90 shadow-lg shadow-slate-950/40 backdrop-blur-md transition-all duration-300 ${
              isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <div className="flex flex-col gap-2 p-3">
              {links.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="w-full rounded-xl px-4 py-3 text-left text-sm text-slate-200 hover:text-white hover:bg-slate-800/70 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
