import { motion } from 'framer-motion';
import { Target, FileText, Lightbulb, TrendingUp, ExternalLink, ArrowLeft, Instagram, Github } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import odfLogo from "@/assets/projects/odf-logo.png";
import { useEffect } from "react";
import favicon from "@/assets/favicons/odf.ico";

export default function OrdemDaFisica() {
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
    <div className="min-h-screen bg-gradient-to-br from-[#1a0505] via-[#2d0a0a] to-[#1a0505] text-white">
      {/* Header com gradiente vermelho */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden bg-gradient-to-br from-[#b30000] via-[#e60000] to-[#b30000]"
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                opacity: 0.1
              }}
              animate={{
                y: [null, Math.random() * 100 + '%'],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <motion.button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group cursor-pointer bg-transparent border-none"
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
              <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white p-2 bg-white shadow-2xl">
                <img
                  src={odfLogo}
                  alt="Logo do projeto Ordem da Física"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-4 border border-white/30"
              >
                Clube de Estudos · Física
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}
              >
                Ordem da Física
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl"
              >
                Um clube de estudos sobre física criado para ajudar estudantes a se prepararem para o ENEM, vestibulares e outras provas externas
              </motion.p>
            </div>
          </div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
      </motion.header>

      {/* Main content */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 py-16"
      >
        {/* Motivação */}
        <motion.section
          variants={itemVariants}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-br from-[#2d0a0a]/60 to-[#1a0505]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#e60000]/30 overflow-hidden hover:border-[#e60000]/60 transition-all duration-500 group">
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#e60000]/0 via-[#e60000]/10 to-[#e60000]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#e60000]/20 to-transparent rounded-bl-[100px] opacity-50" />
            
            <div className="relative flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#e60000]/20 rounded-xl border border-[#e60000]/40 shadow-lg shadow-[#e60000]/20">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white flex-1" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}>
                O que nos motivou a criar esse clube?
              </h2>
            </div>
            
            <p className="text-lg text-gray-200 leading-relaxed relative z-10">
              O objetivo do presidente e idealizador do projeto Luiz Henrique Venâncio, era ensinar física de uma maneira descomplicada, mostrando a beleza por detrás dessa ciência, e disseminando o conhecimento sobre tudo que existe e é explicado pela física.
            </p>
          </div>
        </motion.section>

        {/* Atuação */}
        <motion.section
          variants={itemVariants}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-br from-[#2d0a0a]/60 to-[#1a0505]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#e60000]/30 overflow-hidden hover:border-[#e60000]/60 transition-all duration-500 group">
            {/* Decorative element */}
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#e60000]/20 to-transparent rounded-tr-[100px] opacity-50" />
            
            <div className="relative flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#e60000]/20 rounded-xl border border-[#e60000]/40 shadow-lg shadow-[#e60000]/20">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white flex-1" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}>
                Onde atuei neste projeto?
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-200 leading-relaxed relative z-10">
              <p className="text-lg">
                Atuei como responsável pelas questões administrativas do clube. Redigi o Regimento Interno e os ofícios necessários para a criação do clube, além de fazer toda e qualquer documentação do clube. Além das questões administrativas, desenvolvi o site oficial do clube, onde inicialmente era um espaço para postar as ações cotidianas do clube.
              </p>
              <div className="pl-6 border-l-4 border-[#e60000]/50">
                <p className="text-lg italic text-gray-300">
                  Atualmente o site do clube se encontra indisponível, pois está passando por uma atualização. Em breve ela será concluída, e o site terá uma aparência mais moderna e um espaço mais interativo.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projetos */}
        <motion.section
          variants={itemVariants}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-br from-[#2d0a0a]/60 to-[#1a0505]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#e60000]/30 overflow-hidden hover:border-[#e60000]/60 transition-all duration-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#e60000]/20 rounded-xl border border-[#e60000]/40 shadow-lg shadow-[#e60000]/20">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white flex-1" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}>
                Quais projetos desenvolvemos no clube?
              </h2>
            </div>
            
            <p className="text-lg text-gray-200 leading-relaxed">
              O clube ainda está sendo organizado internamente, os objetivos e metas ainda estão sendo discutidas. Mas um dos projetos que pretendemos desenvolver e finalizar ainda neste ano, inclui um treinamento capacitativo com os estudantes da escola. O clube quer mostrar que seu compromisso não é somente com a física, e sim também com a educação estudantil.
            </p>
          </div>
        </motion.section>

        {/* Resultados */}
        <motion.section
          variants={itemVariants}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-br from-[#2d0a0a]/60 to-[#1a0505]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#e60000]/30 overflow-hidden hover:border-[#e60000]/60 transition-all duration-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#e60000]/20 rounded-xl border border-[#e60000]/40 shadow-lg shadow-[#e60000]/20">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white flex-1" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}>
                Quais resultados já alcançamos com esse projeto?
              </h2>
            </div>
            
            <p className="text-lg text-gray-200 leading-relaxed">
              Tivemos uma grande quantidade de estudantes interessados em aprender e melhorar as suas notas em física. Muitos chegaram com o mesmo problema: física é muito difícil. E ao longo das aulas e atividades, aos poucos eles foram desenvolvendo não só um maior gosto pela física, como também uma maior facilidade.
            </p>
          </div>
        </motion.section>

        {/* Call to Action - Instagram */}
        <motion.section
          variants={itemVariants}
        >
          <div className="relative bg-gradient-to-br from-[#e60000]/30 to-[#b30000]/30 backdrop-blur-sm rounded-2xl p-10 border-2 border-white/50 overflow-hidden group">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#e60000]/20 via-[#b30000]/20 to-[#e60000]/20 animate-pulse" />
            
            {/* Glowing orbs */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#e60000]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-4 leading-relaxed" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}>
                O projeto ainda está em desenvolvimento
              </h2>
              <p className="text-center text-white/90 mb-8 text-lg">
                Mais informações sobre o projeto no link <span className="font-bold">abaixo</span>
              </p>

              <div className="flex justify-center">
                <motion.a
                  href="https://www.instagram.com/ordemdafisicajla?utm_source=ig_web_button_share_sheet&igsh=ODE5dWo4MjA1M3Bp"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#b30000] rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300"
                >
                  <ExternalLink className="w-6 h-6" />
                  <span>Veja mais sobre</span>
                </motion.a>
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
        className="bg-gradient-to-br from-[#0a0000] to-[#1a0000] border-t border-[#e60000]/30 py-8"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link
            to="/"
            className="inline-block text-2xl font-bold text-[#e60000] hover:text-white transition-colors mb-3"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}
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
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </div>
  );
}
