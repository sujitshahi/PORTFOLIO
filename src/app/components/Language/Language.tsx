"use client";

import { m } from 'framer-motion';

export default function Language() {
  return (
    <m.section 
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
      whileHover={{ borderColor: 'rgba(99,102,241,0.6)' }}
      className="bg-zinc-900/50 border border-zinc-800/80 rounded-3xl p-8 text-center backdrop-blur-xl space-y-4 shadow-2xl transition-all"
    >
      <m.h3 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs font-mono uppercase tracking-widest text-zinc-400"
      >
        Languages I Speak
      </m.h3>
      <div className="flex flex-wrap justify-center gap-3">
        {['English', 'Nepali', 'Hindi', 'Newari'].map((lang, idx) => (
          <m.span 
            key={lang}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
            whileHover={{ 
              scale: 1.12, 
              y: -3,
              backgroundColor: 'rgba(99, 102, 241, 0.25)',
              borderColor: 'rgba(99, 102, 241, 0.8)' 
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-zinc-800/70 border border-zinc-700/60 px-6 py-2.5 rounded-full text-sm font-medium text-white shadow-md cursor-pointer transition-colors"
          >
            {lang}
          </m.span>
        ))}
      </div>
    </m.section>
  );
}