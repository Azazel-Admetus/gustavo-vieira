import { motion } from 'framer-motion';
import { Target, Zap, Brain, Rocket, Code, ArrowLeft, Github, Instagram } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import engeniumLogo from "@/assets/projects/engenium-logo.jpeg";
import { useEffect } from "react";
import favicon from "@/assets/favicons/engenium.ico";

export default function Engenium() {
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

  const skills = [
    { icon: Brain, label: "Raciocínio Lógico" },
    { icon: Zap, label: "Criatividade" },
    { icon: Rocket, label: "Resiliência" },
    { icon: Code, label: "Liderança" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1811] via-[#1a2920] to-[#0f1811] text-white">
      {/* Header com gradiente verde tecnológico */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden bg-gradient-to-br from-[#2b3d2f] via-[#4a8f5d] to-[#3a5240]"
      >
        {/* Tech grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(74, 143, 93, 0.3) 1px, transparent 1px),
              linear-gradient(rgba(74, 143, 93, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }} />
        </div>

        {/* Circuit lines animation */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,50 Q250,20 500,50 T1000,50"
            stroke="#dbcdac"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,150 Q250,120 500,150 T1000,150"
            stroke="#dbcdac"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
          />
        </svg>

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <motion.button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-[#dbcdac] hover:text-white transition-colors mb-8 group cursor-pointer bg-transparent border-none"
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
              <motion.div
                className="absolute inset-0 bg-[#4a8f5d] rounded-full blur-2xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#dbcdac] p-2 bg-white shadow-2xl">
                <img
                  src={engeniumLogo}
                  alt="Logo do projeto Engenium"
                  className="w-full h-full object-contain rounded-full"
              />
              </div>
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-block px-4 py-1.5 bg-[#dbcdac]/20 backdrop-blur-sm rounded-full text-[#dbcdac] text-sm font-semibold mb-4 border border-[#dbcdac]/30"
              >
                Clube de Robótica · Inovação Tecnológica
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#dbcdac] to-white bg-clip-text text-transparent"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Engenium
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="text-2xl font-semibold text-[#dbcdac] mb-4"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Tecnologia, Inovação e Criatividade
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl"
              >
                Um espaço feito para tirarem os estudantes da zona de conforto. Aqui, no clube Engenium, os estudantes irão criar e desenvolver seus próprios projetos, com uma pequena regra: <span className="font-bold text-[#dbcdac]">não poderá ser um projeto fácil.</span>
              </motion.p>
            </div>
          </div>
        </div>

        {/* Decorative gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#dbcdac] to-transparent" />
      </motion.header>

      {/* Main content */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 py-16"
      >
        {/* Skills Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-[#2b3d2f]/40 to-[#1a2920]/40 backdrop-blur-sm rounded-xl p-6 border border-[#4a8f5d]/30 hover:border-[#dbcdac]/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-[#4a8f5d]/20 rounded-lg group-hover:bg-[#4a8f5d]/30 transition-colors">
                  <skill.icon className="w-6 h-6 text-[#dbcdac]" />
                </div>
                <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                  {skill.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Problemática */}
        <motion.section
          variants={itemVariants}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-br from-[#2b3d2f]/40 to-[#1a2920]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#4a8f5d]/30 overflow-hidden hover:border-[#4a8f5d]/60 transition-all duration-500 group">
            {/* Animated grid overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(90deg, #4a8f5d 1px, transparent 1px),
                  linear-gradient(#4a8f5d 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }} />
            </div>

            {/* Glowing corner effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#4a8f5d]/20 to-transparent rounded-bl-full" />
            
            <div className="relative flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#4a8f5d]/20 rounded-xl border border-[#4a8f5d]/30 shadow-lg shadow-[#4a8f5d]/10">
                <Target className="w-6 h-6 text-[#dbcdac]" />
              </div>
              <h2 className="text-3xl font-bold text-[#dbcdac] flex-1" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                Qual a problemática deste projeto?
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed relative z-10">
              Essa ideia nasceu do Projeto Caelum. A ideia do Projeto Caelum é servir como inspiração para que os jovens se arrisquem mais e desenvolva coisas mais complexas, para que assim pudesse se tornar cada vez mais capazes. O clube Engenium atuará como o espaço para que esses estudantes desenvolvam projetos. A ideia é trabalhar as habilidades que o mercado futuro requisita. Iremos trabalhar o raciocínio lógico, criatividade, resiliência, trabalho em equipe, e o melhor, liderança. Iremos desenvolver líderes que pensam e perfomam.
            </p>
          </div>
        </motion.section>

        {/* Atuação - Destaque especial */}
        <motion.section
          variants={itemVariants}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-br from-[#4a8f5d]/30 to-[#2b3d2f]/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#4a8f5d]/50 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#dbcdac]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4a8f5d]/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#4a8f5d]/20 rounded-xl border border-[#4a8f5d]/40 shadow-lg shadow-[#4a8f5d]/10">
                  <Brain className="w-6 h-6 text-[#dbcdac]" />
                </div>
                <h2 className="text-3xl font-bold text-[#dbcdac] flex-1" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  Onde atuo neste projeto?
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Eu sou o idealizador e principal desenvolvedor deste projeto. E futuramente, ensinarei a esses estudantes, robótica e programação, além de supervisionar e auxiliar no trabalho. Mas eu não farei nada nos projetos dos estudantes, porque essa é a ideia. O estudante deve idealizar o projeto, e conforme for planejando e trabalhando nele, ele irá se deparar com diversos problemas, alguns dos quais deixarão eles sem dormir, mas será dever deles resolverem esses problemas. Eles irão quebrar a cabeça, irão ficar cansados, irão me odiar por não ajudar, mas no fim eles resolverão o problema. E terão se tornado pessoas mais capazes e resilientes.
                </p>
                
                {/* Quote box */}
                <div className="relative bg-[#2b3d2f]/50 backdrop-blur-sm border-l-4 border-[#dbcdac] rounded-r-xl p-6 mt-6">
                  <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                    <div className="w-12 h-12 bg-[#4a8f5d] rounded-full flex items-center justify-center border-4 border-[#1a2920]">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="text-xl font-bold text-[#dbcdac] italic pl-8">
                    "Essa é a essência deste projeto. Formar pessoas verdadeiramente capazes."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Metodologia - Cards interativos */}
        <motion.section
          variants={itemVariants}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center text-[#dbcdac] mb-8" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Nossa Metodologia
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-[#2b3d2f]/40 to-[#1a2920]/40 backdrop-blur-sm rounded-xl p-6 border border-[#4a8f5d]/30 hover:border-[#dbcdac]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#4a8f5d]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#dbcdac]">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Idealização</h3>
              <p className="text-gray-400">
                Estudantes criam seus próprios projetos complexos desde o conceito inicial
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-[#2b3d2f]/40 to-[#1a2920]/40 backdrop-blur-sm rounded-xl p-6 border border-[#4a8f5d]/30 hover:border-[#dbcdac]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#4a8f5d]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#dbcdac]">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Desafio</h3>
              <p className="text-gray-400">
                Enfrentam problemas reais que exigem criatividade e resiliência para resolver
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-[#2b3d2f]/40 to-[#1a2920]/40 backdrop-blur-sm rounded-xl p-6 border border-[#4a8f5d]/30 hover:border-[#dbcdac]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#4a8f5d]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#dbcdac]">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Crescimento</h3>
              <p className="text-gray-400">
                Desenvolvem habilidades práticas e se tornam profissionais mais capazes
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Status final */}
        <motion.section
          variants={itemVariants}
        >
          <div className="relative bg-gradient-to-r from-[#dbcdac]/20 to-[#4a8f5d]/20 backdrop-blur-sm rounded-2xl p-10 border-2 border-[#dbcdac]/50 overflow-hidden">
            {/* Animated background pulse */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#4a8f5d]/10 via-transparent to-[#dbcdac]/10"
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Tech decorations */}
            <div className="absolute top-4 right-4 opacity-10">
              <Code className="w-24 h-24 text-[#dbcdac]" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-10">
              <Rocket className="w-24 h-24 text-[#4a8f5d]" />
            </div>
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#4a8f5d]/20 rounded-full border border-[#4a8f5d]/30 mb-6"
              >
                <div className="w-2 h-2 bg-[#dbcdac] rounded-full animate-pulse" />
                <span className="text-[#dbcdac] font-semibold text-sm">EM DESENVOLVIMENTO</span>
              </motion.div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                O projeto ainda está em desenvolvimento
              </h2>
              
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                A previsão de lançamento está para 2026, ou final de 2025.
              </p>
              
              {/* Timeline indicator */}
              <div className="mt-8 max-w-md mx-auto">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span>2024</span>
                  <span className="text-[#dbcdac] font-semibold">Desenvolvimento</span>
                  <span>2026</span>
                </div>
                <div className="h-2 bg-[#2b3d2f]/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#4a8f5d] to-[#dbcdac]"
                    initial={{ width: 0 }}
                    animate={{ width: '60%' }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                  />
                </div>
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
        className="bg-gradient-to-br from-[#0f1511] to-[#0a0f0c] border-t border-[#4a8f5d]/30 py-8 mt-16"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link
            to="/"
            className="inline-block text-2xl font-bold text-[#dbcdac] hover:text-white transition-colors mb-3"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
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
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
      `}</style>
    </div>
  );
}
