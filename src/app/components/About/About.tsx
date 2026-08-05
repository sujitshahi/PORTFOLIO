"use client";

import { m } from 'framer-motion';

export default function About() {
  return (
    <m.section 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      id="about" 
      className="space-y-8 scroll-mt-24"
    >
      <div className="flex items-center gap-4">
        <m.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-white"
        >
          About Myself
        </m.h2>
        <m.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px flex-1 bg-liner-to-r from-indigo-500/80 via-purple-500/40 to-transparent origin-left" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <m.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -6, borderColor: 'rgba(99,102,241,0.6)' }}
          className="md:col-span-2 bg-zinc-900/70 border border-zinc-800/80 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(99,102,241,0.25)] transition-all"
        >
          <div>
            <m.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-3 py-1 rounded-md inline-block border border-indigo-500/20 mb-3"
            >
              Who Am I
            </m.span>
            <h3 className="text-xl font-bold text-white mt-1 mb-4">Sujit Shahi • Kathmandu, NP</h3>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base mb-4">
              I am a passionate Front-End Developer with a full-stack foundation based in Kathmandu. I specialize in building highly responsive, interactive interfaces using modern web frameworks.
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              My development approach thrives on solving complex structural problems and turning design constraints into pristine digital experiences.
            </p>
          </div>
        </m.div>

        <m.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -6, borderColor: 'rgba(99,102,241,0.6)' }}
          className="bg-zinc-900/70 border border-zinc-800/80 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(99,102,241,0.25)] transition-all"
        >
          <div>
            <m.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-3 py-1 rounded-md inline-block border border-indigo-500/20 mb-3"
            >
              Core Focus
            </m.span>
            <h3 className="text-xl font-bold text-white mt-1 mb-4">Approach & Philosophy</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Prioritizing clean modular patterns, strict responsive breakpoints, fluid visual feedback, and asset optimization.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript'].map((s, i) => (
              <m.span 
                key={s}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.25)' }}
                className="bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-lg text-xs font-medium text-indigo-200 cursor-default transition-colors"
              >
                {s}
              </m.span>
            ))}
          </div>
        </m.div>
      </div>
    </m.section>
  );
}