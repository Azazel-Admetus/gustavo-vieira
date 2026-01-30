import React from 'react';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Projects from '../components/portfolio/Projects';
import Skills from '../components/portfolio/Skills';
import Contact from '../components/portfolio/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}