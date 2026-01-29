import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const inView = true;

  return (
    <section id="contato" className="py-20 lg:py-32 bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Vamos <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Trabalhar Juntos</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Tem um projeto em mente? Vamos conversar sobre como posso ajudar!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">WhatsApp</h3>
                    <p className="text-slate-400 text-sm">Resposta rápida</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/5569992226657"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors"
                >
                  +55 69 99222-6657
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Localização</h3>
                    <p className="text-slate-400 text-sm">Rondônia, Brasil</p>
                  </div>
                </div>
                <p className="text-slate-300">
                  Ouro Preto do Oeste/RO
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <a
                href="https://wa.me/5569992226657"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-12 py-6 text-lg rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicite meus serviços
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-20 pt-12 border-t border-slate-800"
      >
        <p className="text-slate-500">
          © 2026 Gustavo Vieira. Desenvolvedor e Estrategista de Projetos.
        </p>
      </motion.div>
    </section>
  );
}