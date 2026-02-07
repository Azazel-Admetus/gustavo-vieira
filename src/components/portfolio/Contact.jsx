import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, MapPin, Mail, Linkedin, Github, Instagram, Send } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // idle | loading | success | error
  const formEndpoint = 'https://formspree.io/f/mreagleo';
  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gustavo-vieira-azazeladmetus',
      icon: Linkedin
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Azazel-Admetus',
      icon: Github
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/dev_admetus/',
      icon: Instagram
    }
  ];

  return (
    <section id="contato" className="py-20 lg:py-32 bg-slate-900 relative scroll-mt-28">
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

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-slate-400 text-sm">Resposta em até 24h</p>
                  </div>
                </div>
                <a
                  href="mailto:gustavodsv7184@gmail.com?subject=Contato%20pelo%20site&body=Ol%C3%A1,%20vim%20pelo%20seu%20site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors break-all"
                >
                  gustavodsv7184@gmail.com
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
              id="formulario"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm mb-12 scroll-mt-28"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Formulário rápido</h3>
                  <p className="text-slate-400 text-sm">Me envie sua mensagem direto por aqui</p>
                </div>
              </div>

              <form
                className="grid gap-4"
                onSubmit={async (event) => {
                  event.preventDefault();
                  if (formStatus === 'loading') return;
                  setFormStatus('loading');

                  const form = event.currentTarget;
                  const formData = new FormData(form);
                  const delay = new Promise((resolve) => setTimeout(resolve, 3000));

                  try {
                    const response = await Promise.all([
                      fetch(formEndpoint, {
                        method: 'POST',
                        headers: { Accept: 'application/json' },
                        body: formData
                      }),
                      delay
                    ]);

                    const result = response[0];
                    if (result.ok) {
                      form.reset();
                      setFormStatus('success');
                    } else {
                      setFormStatus('error');
                    }
                  } catch (error) {
                    setFormStatus('error');
                  }
                }}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="text-sm text-slate-300">
                    Nome
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Seu nome"
                      className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-500/70 focus:outline-none"
                    />
                  </label>
                  <label className="text-sm text-slate-300">
                    Email
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="voce@email.com"
                      className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-500/70 focus:outline-none"
                    />
                  </label>
                </div>

                <label className="text-sm text-slate-300">
                  Assunto
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Qual o assunto?"
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-500/70 focus:outline-none"
                  />
                </label>

                <label className="text-sm text-slate-300">
                  Mensagem
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Conte um pouco sobre o que você precisa"
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-500/70 focus:outline-none"
                  ></textarea>
                </label>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <p className="text-xs text-slate-500">
                    Ao enviar, você concorda em receber resposta por email.
                  </p>
                  <Button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 text-sm rounded-xl shadow-md shadow-amber-500/20 disabled:opacity-60"
                  >
                    {formStatus === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
                  </Button>
                </div>

                <div aria-live="polite" className="text-sm">
                  {formStatus === 'success' && (
                    <p className="text-emerald-400">
                      Mensagem enviada com sucesso! Já já eu te respondo.
                    </p>
                  )}
                  {formStatus === 'error' && (
                    <p className="text-amber-300">
                      Ops, algo deu errado. Tente novamente ou me chame pelo WhatsApp.
                    </p>
                  )}
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
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

              <div className="mt-10">
                <p className="text-slate-400 mb-4">Me acompanhe nas redes</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 bg-slate-800/50 text-slate-200 hover:text-white hover:border-amber-400/60 hover:bg-slate-800 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-amber-400" />
                      <span className="text-sm font-medium">{label}</span>
                    </a>
                  ))}
                </div>
              </div>
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
