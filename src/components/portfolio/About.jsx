import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const inView = true;

  const experiences = [
    {
      icon: GraduationCap,
      title: "Estudante",
      description: "3º ano do ensino médio na Escola Joaquim de Lima Avelino"
    },
    {
      icon: Briefcase,
      title: "Jovem Aprendiz",
      description: "Câmara Municipal da Estância Turística de Ouro Preto do Oeste/RO - atuando no setor administrativo"
    },
    {
      icon: Heart,
      title: "Voluntário",
      description: "LyUp Desenvolvimento de Negócios - primeira empresa de treinamentos corporativos personalizados de Rondônia"
    }
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-950/30 to-slate-900"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Sobre <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Mim</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-300 leading-relaxed mb-12 text-center"
            >
              Sou estudante do 3º ano do ensino médio na Escola Joaquim de Lima Avelino e atuo como jovem aprendiz na Câmara Municipal da Estância Turística de Ouro Preto do Oeste/RO. Tenho experiência na criação e desenvolvimento de projetos educacionais, tecnológicos e sociais, especialmente no ambiente escolar.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-all duration-300 h-full backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <exp.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{exp.title}</h3>
                      <p className="text-slate-400 text-sm">{exp.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-slate-800/80 to-blue-900/30 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://gustavovieira.site/image/LyUp-Logo.png" 
                  alt="LyUp Logo" 
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">LyUp Desenvolvimento de Negócios</h3>
                  <p className="text-slate-400">Voluntário</p>
                </div>
              </div>
              <p className="text-slate-300">
                Desenvolvo projetos sociais e tecnológicos na primeira empresa de treinamentos corporativos totalmente personalizados de Rondônia.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}