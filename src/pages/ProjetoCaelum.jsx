import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Instagram, Target, Users, Cpu, Trophy, TrendingUp, ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function ProjetoCaelum() {
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

  const achievements = [
    {
      title: "Segundo lugar na Feira Maker 2024",
      description: "Com direito a vaga para a Primeira EXPOCITEC de Rondônia"
    },
    {
      title: "Terceiro lugar no V SEMINÁRIO",
      description: "V SEMINÁRIO DE TECNOLOGIA, INOVAÇÃO E CIÊNCIA NA EDUCAÇÃO"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f1c] via-[#2b3d2f] to-[#1a2920] text-white">
      {/* Header com gradiente verde escuro */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden bg-gradient-to-br from-[#2b3d2f] via-[#3a5240] to-[#2b3d2f] border-b border-[#4a8f5d]/30"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

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
              <div className="absolute inset-0 bg-[#dbcdac] rounded-full blur-xl opacity-20 animate-pulse" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#dbcdac] p-2 bg-white shadow-2xl">
                {/* Placeholder for logo - replace with actual image */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2b3d2f] to-[#4a8f5d] flex items-center justify-center">
                  <Cpu className="w-16 h-16 text-[#dbcdac]" />
                </div>
              </div>
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-block px-4 py-1.5 bg-[#dbcdac]/20 backdrop-blur-sm rounded-full text-[#dbcdac] text-sm font-semibold mb-4 border border-[#dbcdac]/30"
              >
                Robótica & Inteligência Artificial
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#dbcdac] to-white bg-clip-text text-transparent"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Projeto Caelum
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl"
              >
                O projeto visa a criação de um robô feito por estudantes capaz de andar e falar usando inteligência artificial, servindo como motivação e estopim para uma geração apaixonada por tecnologia
              </motion.p>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#dbcdac] to-transparent" />
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
          className="mb-12 group"
        >
          <div className="relative bg-gradient-to-br from-[#2b3d2f]/40 to-[#1a2920]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#4a8f5d]/30 overflow-hidden hover:border-[#4a8f5d]/60 transition-all duration-500">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4a8f5d]/20 to-transparent rounded-bl-full" />
            
            <div className="relative flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#4a8f5d]/20 rounded-xl border border-[#4a8f5d]/30">
                <Target className="w-6 h-6 text-[#dbcdac]" />
              </div>
              <h2 className="text-3xl font-bold text-[#dbcdac] flex-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Qual seria a problemática deste projeto?
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                A ideia do projeto era servir como inspiração para os jovens criarem projetos mais complexos, trabalhando o raciocínio lógico, criatividade, resiliência, liderança e trabalho em equipe.
              </p>
              <p className="text-lg">
                O Projeto foi aprimorado e agora serve como peça principal para um outro projeto em desenvolvimento.{' '}
                <Link 
                  to="/engenium" 
                  className="text-[#dbcdac] hover:text-white underline decoration-[#dbcdac]/50 hover:decoration-white transition-all font-semibold"
                >
                  Conheça mais sobre o que será o clube de robótica Engenium
                </Link>
              </p>
            </div>
          </div>
        </motion.section>

        {/* Participação */}
        <motion.section
          variants={itemVariants}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-br from-[#2b3d2f]/40 to-[#1a2920]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#4a8f5d]/30 overflow-hidden hover:border-[#4a8f5d]/60 transition-all duration-500">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#4a8f5d]/20 to-transparent rounded-tr-full" />
            
            <div className="relative flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#4a8f5d]/20 rounded-xl border border-[#4a8f5d]/30">
                <Users className="w-6 h-6 text-[#dbcdac]" />
              </div>
              <h2 className="text-3xl font-bold text-[#dbcdac] flex-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Onde atuei neste projeto?
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Sou o idealizador deste projeto e principal desenvolvedor, além de líder da equipe. Atuei na parte da robótica e programação, decidindo quais peças iríamos usar e como iríamos montá-la, além de trabalhar no avanço do algoritmo de interação. Além disso, fiz o repasse de deveres aos membros da equipe, bem como o acompanhamento durante as etapas.
            </p>
          </div>
        </motion.section>

        {/* Tecnologias */}
        <motion.section
          variants={itemVariants}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-br from-[#2b3d2f]/40 to-[#1a2920]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#4a8f5d]/30 overflow-hidden hover:border-[#4a8f5d]/60 transition-all duration-500">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#4a8f5d]/20 rounded-xl border border-[#4a8f5d]/30">
                <Cpu className="w-6 h-6 text-[#dbcdac]" />
              </div>
              <h2 className="text-3xl font-bold text-[#dbcdac]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Quais tecnologias utilizamos?
              </h2>
            </div>
          </div>
        </motion.section>

        {/* Resultados */}
        <motion.section
          variants={itemVariants}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-br from-[#2b3d2f]/40 to-[#1a2920]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#4a8f5d]/30 overflow-hidden">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-[#4a8f5d]/20 rounded-xl border border-[#4a8f5d]/30">
                <Trophy className="w-6 h-6 text-[#dbcdac]" />
              </div>
              <h2 className="text-3xl font-bold text-[#dbcdac]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Quais resultados já alcançamos?
              </h2>
            </div>

            {/* Achievements */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="relative bg-gradient-to-br from-[#4a8f5d]/20 to-[#2b3d2f]/20 rounded-xl p-6 border border-[#4a8f5d]/30 hover:border-[#dbcdac]/50 transition-all duration-300 group"
                >
                  <div className="absolute top-4 right-4 text-6xl font-bold text-[#4a8f5d]/10 group-hover:text-[#4a8f5d]/20 transition-colors">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#dbcdac] mb-3 relative z-10">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 relative z-10">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Apresentação */}
            <div className="space-y-6 pt-6 border-t border-[#4a8f5d]/30">
              <h3 className="text-2xl font-bold text-[#dbcdac]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                O que apresentamos neste ano?
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                <p>
                  Apresentamos os nossos avanços na modelagem 3D, mesmo que amadora, mostrando a capacidade de aprendizagem dos estudantes desenvolvedores. E como diferencial, apresentamos o SolumChat. Um algoritmo baseado em perguntas pré-prontas, feito para ser capaz de responder as perguntas sobre física clássica teórica, com integração de voz na resposta. Devido a falta de recursos financeiros, somos incapazes de implementar qualquer modelo de inteligência artificial.
                </p>
                <p>
                  Entretanto, esse problema não é visto como um final, e sim, mais um simples obstáculo que temos que enfrentar e vencer. Usando a criatividade os estudantes pensam em uma solução que possa entregar uma experiência parecida se fosse usado um modelo de inteligência artificial.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Metas */}
        <motion.section
          variants={itemVariants}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-br from-[#2b3d2f]/40 to-[#1a2920]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#4a8f5d]/30 overflow-hidden hover:border-[#4a8f5d]/60 transition-all duration-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#4a8f5d]/20 rounded-xl border border-[#4a8f5d]/30">
                <TrendingUp className="w-6 h-6 text-[#dbcdac]" />
              </div>
              <h2 className="text-3xl font-bold text-[#dbcdac]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Quais são as nossas próximas metas?
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              A nossa próxima meta é entregar um protótipo real e completo, com uma carcaça finalizada, além de melhoria na parte robótica e programacional. Além disso, pretendemos fazer testes com os alunos para captar dados sobre a experiência com o projeto. Temos como meta também, inscrever o projeto para participar de exposições de robótica e tecnologia.
            </p>
          </div>
        </motion.section>

        {/* Social Links */}
        <motion.section
          variants={itemVariants}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-br from-[#4a8f5d]/30 to-[#2b3d2f]/30 backdrop-blur-sm rounded-2xl p-8 border border-[#dbcdac]/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#dbcdac]/5 to-transparent" />
            
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6 relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Se interessou no projeto? Acompanhe as redes sociais ou o repositório do GitHub
            </h2>
            <p className="text-center text-[#dbcdac] mb-8 relative z-10 text-lg">
              Em breve novidades serão reveladas!
            </p>

            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <motion.a
                href="https://www.instagram.com/dev_admetus"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4a8f5d] to-[#3a5240] text-white rounded-xl font-semibold shadow-lg hover:shadow-[#4a8f5d]/50 transition-all duration-300 border border-[#dbcdac]/30"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </motion.a>

              <motion.a
                href="https://github.com/Azazel-Admetus/projeto_caelum"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2b3d2f] to-[#1a2920] text-white rounded-xl font-semibold shadow-lg hover:shadow-[#2b3d2f]/50 transition-all duration-300 border border-[#dbcdac]/30"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>
            </div>
          </div>
        </motion.section>

        {/* Status */}
        <motion.section
          variants={itemVariants}
        >
          <div className="relative bg-gradient-to-r from-[#dbcdac]/20 to-[#4a8f5d]/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#dbcdac]/50 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#dbcdac]/10 via-transparent to-[#4a8f5d]/10 animate-pulse" />
            
            <h2 className="text-xl md:text-2xl font-bold text-white relative z-10 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              O projeto ainda continua em desenvolvimento. É previsto a finalização do protótipo final até dezembro de 2025.
            </h2>
          </div>
        </motion.section>
      </motion.main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="bg-gradient-to-br from-[#1a2920] to-[#0f1511] border-t border-[#4a8f5d]/30 py-8"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link
            to="/"
            className="inline-block text-2xl font-bold text-[#dbcdac] hover:text-white transition-colors mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            GUSTAVO VIEIRA
          </Link>
          <p className="text-gray-400">
            Todos os códigos estão disponíveis no meu repositório do GitHub.
          </p>
        </div>
      </motion.footer>

      {/* Global Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}
