"use client";

import { useState } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import ProjectsSection from './Projects/page';
import SkillsSection from './components/Skill-Section/SkillSection';
import Footer from './components/Footer/Footer';
import Education from './components/Education/Education';
import Hero from './components/Hero-Section/Hero';
import About from './components/About/About';
import Language from './components/Language/Language';


export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LazyMotion features={domAnimation}>
      <m.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-[#09090b] text-[#f8fafc] font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden"
      >
        
        {/* Animated Background Ambient Glow Effects */}
        <m.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            x: ['-50%', '-45%', '-50%']
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 bg-liner-to-tr from-indigo-500/25 via-purple-500/25 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" 
        />

        <div className="max-w-6xl mx-auto px-6 py-20 mt-20 md:py-20 space-y-28">
          <Hero />
          <About />
          <ProjectsSection />
          <SkillsSection />
          <Education/>
          <Language />
        </div>

        <Footer />
      </m.main>
    </LazyMotion>
  );
}