import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import lyupLogo from "@/assets/projects/LyUp-Logo.png";

export default function About() {
  const inView = true;

  const experiences = [
    {
      icon: GraduationCap,
      title: "Estudante",
      description: "Formação concluída na Escola Joaquim de Lima Avelino, com participação ativa em projetos acadêmicos e extracurriculares."
    },
    {
      icon: Briefcase,
      title: "Jovem Aprendiz",
      description: "Atuação nas áreas de recepção, administração e Tecnologia da Informação, com contato direto com rotinas institucionais e suporte operacional."
    },
    {
      icon: Heart,
      title: "Voluntário",
      description: "Atuação como Secretário-Geral, colaborando na estruturação estratégica e no planejamento de crescimento da organização."
    }
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-slate-900 relative scroll-mt-28">
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
              className="text-lg text-slate-300 leading-relaxed mb-12 text-justify"
            >
              Sou formado na Escola Joaquim de Lima Avelino e atuei como jovem aprendiz na Câmara Municipal da Estância Turística de Ouro Preto do Oeste/RO. Ao longo dessa trajetória, adquiri experiência no desenvolvimento e na gestão de projetos educacionais, tecnológicos e sociais, com forte atuação no ambiente escolar e institucional. Tenho interesse especial em iniciativas que unem tecnologia, organização e impacto social.
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
                      <p className="text-slate-400 text-sm text-center">{exp.description}</p>
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
                  src={lyupLogo}
                  alt="LyUp Logo" 
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">LyUp Desenvolvimento de Negócios</h3>
                  <p className="text-slate-400">Voluntário</p>
                </div>
              </div>
              <p className="text-slate-300 text-justify">
                Atuo como Secretário-Geral na LyUp Desenvolvimento de Negócios, a primeira empresa de treinamentos corporativos personalizados de Rondônia. Minha atuação envolve o desenvolvimento de projeções estratégicas e o apoio à tomada de decisões voltadas ao crescimento sustentável da empresa. Busco contribuir para a geração de valor real aos clientes, por meio de soluções inovadoras, bem estruturadas e alinhadas às necessidades do mercado.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
