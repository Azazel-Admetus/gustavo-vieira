import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Link } from "react-router-dom";
import projetoCaelumImg from '@/assets/projects/ProjetoCaelumLogo.png';
import odfImg from '@/assets/projects/odf-logo.png';
import narrifyImg from '@/assets/projects/narrify-logo.png';
import engeniumImg from '@/assets/projects/engenium-logo.jpeg';

const MotionLink = motion(Link);

export default function Projects() {
  const inView = true;

  const projects = [
    {
      title: "Projeto Caelum",
      description: "Um robô autônomo e interativo desenvolvido por estudantes, a fim de promover a educação tecnológica e o protagonismo estudantil.",
      image: projetoCaelumImg,
      link: "/projeto-caelum",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Ordem da Física",
      description: "Clube de estudos dedicado a ajudar estudantes a se prepararem para o ENEM e vestibulares, tornando a física acessível e divertida.",
      image: odfImg,
      link: "/ordem-da-fisica",
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      title: "Narrify Versos e Prosa",
      description: "Clube do livro dedicado a jovens leitores, promovendo uma cultura literária e criando uma comunidade nacional de leitores.",
      image: narrifyImg,
      link: "/narrify",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Engenium",
      description: "Clube de robótica voltado ao desenvolvimento de projetos criativos, estimulando raciocínio lógico e inovação.",
      image: engeniumImg,
      link: "/engenium",
      color: "from-red-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="projetos" className="py-20 lg:py-32 bg-slate-900 relative scroll-mt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Meus <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Projetos</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <MotionLink
                key={index}
                to={project.link}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group block"
              >
                <Card className="bg-slate-800/50 border-slate-700 overflow-hidden hover:border-amber-500/50 transition-all duration-300 h-full backdrop-blur-sm hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2">
                  <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-slate-700/50 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                            {project.title}
                          </h3>
                          <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-amber-400 transition-colors" />
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionLink>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
