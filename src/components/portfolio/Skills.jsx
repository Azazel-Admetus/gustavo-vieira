import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, MessageSquare, Target, Puzzle } from 'lucide-react';

export default function Skills() {
  const inView = true;

  const skills = [
    { name: "Liderança de Projetos", icon: Target },
    { name: "Resolução de Problemas", icon: Puzzle },
    { name: "Criatividade", icon: Lightbulb },
    { name: "Comunicação", icon: MessageSquare },
    { name: "Organização", icon: Users }
  ];

  return (
    <section id="habilidades" className="py-20 lg:py-32 bg-gradient-to-b from-slate-900 via-blue-950/20 to-slate-900 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Minhas <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Habilidades</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 backdrop-blur-sm h-full flex flex-col items-center justify-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <skill.icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-white font-medium text-sm">{skill.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}