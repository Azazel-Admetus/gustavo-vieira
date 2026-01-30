import { motion } from 'framer-motion';
import { BookOpen, Users, Globe, Sparkles, ArrowLeft, Instagram, Github } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import narrifyLogo from "@/assets/projects/narrify-logo.png";
import { useEffect } from "react";
import favicon from "@/assets/favicons/narrify.ico";

export default function Narrify() {
    useEffect(() => {
    let link = document.querySelector("link[rel='icon']");

    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    link.type = "image/x-icon";
    link.href = favicon;
  }, []);

  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8d8c4] via-[#f0e6d8] to-[#dcccb3]">
      {/* Header com gradiente azul literário */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden bg-gradient-to-br from-[#002147] via-[#003366] to-[#004080]"
      >
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="books" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <text x="10" y="30" fontSize="40" fill="white" opacity="0.3">📚</text>
              <text x="60" y="80" fontSize="30" fill="white" opacity="0.2">✍️</text>
            </pattern>
            <rect width="100%" height="100%" fill="url(#books)" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <motion.button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-[#dcccb3] hover:text-white transition-colors mb-8 group cursor-pointer bg-transparent border-none"
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Voltar</span>
          </motion.button>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#dcccb3] rounded-full blur-2xl opacity-40 animate-pulse" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white p-2 bg-white shadow-2xl">
                <img
                  src={narrifyLogo}
                  alt="Logo do projeto Narrify"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-[#dcccb3] text-sm font-semibold mb-4 border border-white/30"
              >
                Clube Literário · Comunidade Nacional
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Narrify - Versos e Prosa
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl"
              >
                Um clube feito para leitores e amantes de literatura nacional e internacional. O objetivo é promover a cultura literária e criar uma comunidade de leitores nacionais extremamente unida e forte.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Decorative wave at bottom */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1200 100" preserveAspectRatio="none" style={{ height: '60px' }}>
          <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,100 L0,100 Z" fill="#e8d8c4" opacity="1" />
        </svg>
      </motion.header>

      {/* Main content */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 py-16"
      >
        {/* Problemática */}
        <motion.section
          variants={itemVariants}
          className="mb-12"
        >
          <div className="relative bg-white rounded-2xl p-8 shadow-xl border-l-8 border-[#004080] overflow-hidden group hover:shadow-2xl transition-all duration-500">
            {/* Decorative corner element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#004080]/10 to-transparent rounded-bl-[100px]" />
            
            {/* Quote decoration */}
            <div className="absolute top-4 left-4 text-8xl text-[#004080]/5 font-serif leading-none">"</div>
            
            <div className="relative flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#004080]/10 rounded-xl border border-[#004080]/20">
                <BookOpen className="w-6 h-6 text-[#002147]" />
              </div>
              <h2 className="text-3xl font-bold text-[#002147] flex-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                Qual a problemática deste projeto?
              </h2>
            </div>
            
            <div className="space-y-4 text-[#1c3a57] leading-relaxed relative z-10">
              <p className="text-lg">
                O clube já havia sido criado em meados de 2023. Na época o clube era dirigido por uma professora, que no ano seguinte, em 2024 mudou-se de escola. O clube então passou a ser administrado por alunos, sendo composto por duas líderes, uma do terceiro ano e outra do segundo ano.
              </p>
              <p className="text-lg">
                Eu concorri para a vaga de líder do segundo ano, todavia eu perdi a eleição. Mas no ano seguinte, em 2025, a líder que ficou não conseguiu dar continuidade no projeto.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Atuação - Featured section */}
        <motion.section
          variants={itemVariants}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-br from-[#002147] to-[#004080] rounded-2xl p-8 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#dcccb3]/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <Users className="w-6 h-6 text-[#dcccb3]" />
                </div>
                <h2 className="text-3xl font-bold text-white flex-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Mas onde eu entro nessa história toda?
                </h2>
              </div>
              
              <div className="space-y-6 text-white/90 leading-relaxed">
                <p className="text-lg">
                  Eu assumo o dever deste projeto e reformo ele totalmente. Definimos um nome, uma identidade visual (logo, cores, slogan), definimos objetivos mais claros e uma estrutura interna mais definida. Seguindo o modelo que implementei na Ordem da Física, eu criei um Conselho Deliberativo composto por Presidente, Vice-Presidente, Conselheiro e, ao contrário da Ordem, eu criei o cargo de Líder.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-lg font-semibold text-[#dcccb3] mb-3">
                    Transformação do Clube
                  </p>
                  <p className="text-lg">
                    O clube agora deixou de ser um espaço para os leitores da escola, e passou a se tornar um espaço para leitores de todo o Brasil. Esse é o objetivo do clube. Criar uma comunidade de leitores nacionais.
                  </p>
                </div>
                
                <p className="text-lg">
                  Por meio do site oficial do clube, os leitores se reunirão para postarem suas resenhas, recomendarem livros, e dialogarem com outros leitores que tenham os mesmos gostos literários.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Visão - Cards horizontais */}
        <motion.section
          variants={itemVariants}
          className="mb-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#004080] hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#004080]/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-[#002147]" />
              </div>
              <h3 className="text-xl font-bold text-[#002147] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Alcance Nacional
              </h3>
              <p className="text-[#1c3a57]">
                Expandimos de um clube escolar para uma plataforma que conecta leitores de todo o Brasil
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#004080] hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#004080]/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#002147]" />
              </div>
              <h3 className="text-xl font-bold text-[#002147] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Comunidade Forte
              </h3>
              <p className="text-[#1c3a57]">
                Criamos uma comunidade unida onde leitores compartilham experiências e descobertas
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#004080] hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#004080]/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-[#002147]" />
              </div>
              <h3 className="text-xl font-bold text-[#002147] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Cultura Literária
              </h3>
              <p className="text-[#1c3a57]">
                Promovemos a literatura nacional e internacional através de resenhas e discussões
              </p>
            </div>
          </div>
        </motion.section>

        {/* Status - Destaque especial */}
        <motion.section
          variants={itemVariants}
        >
          <div className="relative bg-gradient-to-r from-[#dcccb3] to-[#e8d8c4] rounded-2xl p-10 shadow-xl overflow-hidden border-2 border-[#004080]/20">
            {/* Decorative book icons */}
            <div className="absolute top-4 right-4 text-6xl opacity-10">📖</div>
            <div className="absolute bottom-4 left-4 text-6xl opacity-10">✍️</div>
            
            {/* Animated glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#004080]/10 to-transparent"
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#004080] rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-[#004080] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-[#004080] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-center text-[#002147] leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
                O projeto ainda está em desenvolvimento
              </h2>
              
              <p className="text-center text-[#1c3a57] mt-4 text-lg">
                O site no momento está offline porque está passando por manutenções, está previsto o retorno na primeira semana de outubro.
              </p>
              
              {/* Progress indicator */}
              <div className="mt-8 max-w-md mx-auto">
                <div className="h-2 bg-white/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#002147] to-[#004080] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  />
                </div>
                <p className="text-center text-[#1c3a57] text-sm mt-3 font-medium">
                  Em desenvolvimento - 75% concluído
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="bg-gradient-to-br from-[#002147] to-[#001a3a] border-t border-[#004080]/30 py-8 mt-16"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link
            to="/"
            className="inline-block text-2xl font-bold text-[#dcccb3] hover:text-white transition-colors mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            GUSTAVO VIEIRA
          </Link>
          <p className="text-gray-400">
            Todos os códigos estão disponíveis no meu repositório do GitHub, acesse pelo link na página principal.
          </p>
        </div>
      </motion.footer>

      {/* Global Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&display=swap');
      `}</style>
    </div>
  );
}
