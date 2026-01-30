import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from "@/assets/profile/gustavo.jpeg";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-amber-500/10 rounded-full blur-3xl top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-20 -right-20 animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium border border-amber-500/30">
                Desenvolvedor & Líder de Projetos
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Gustavo
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"> Vieira</span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-300 mb-4 max-w-2xl">
              Tecnologia, Liderança e Propósito
            </p>

            <p className="text-lg text-slate-400 mb-8 max-w-2xl">
              Desenvolvedor e Estrategista de Projetos Educacionais, Tecnológicos e Sociais
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('projetos')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-amber-500/20"
              >
                Ver Projetos
              </Button>
              <Button
                onClick={() => scrollToSection('contato')}
                variant="outline"
                className="border-2 border-amber-500/50 text-amber-400 hover:bg-amber-500/10 px-8 py-6 text-lg rounded-xl"
               
              >
                Entrar em Contato
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 mt-8 justify-center lg:justify-start"
            >
              <a href="mailto:gustavodsv7184@gmail.com?subject=Contato pelo site&body=Olá,%20vim%20pelo%20seu%20site" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={profileImage}
                alt="Foto de Gustavo Vieira"
                className="relative w-64 h-64 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-amber-500/50 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('sobre')}
            className="text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}