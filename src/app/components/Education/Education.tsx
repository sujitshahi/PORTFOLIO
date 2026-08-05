"use client";

import { m } from 'framer-motion';

export default function Education() {
  return (
    <section id="credentials" className="space-y-8 scroll-mt-24">
      <div className="flex items-center gap-4">
        <m.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-white"
        >
          Education & Credentials
        </m.h2>
        <m.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px flex-1 bg-liner-to-r from-indigo-500/80 via-purple-500/40 to-transparent origin-left" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education Background */}
        <m.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6, borderColor: 'rgba(99,102,241,0.6)' }}
          className="bg-zinc-900/70 border border-zinc-800/80 rounded-3xl p-6 backdrop-blur-xl space-y-4 shadow-xl hover:shadow-[0_20px_40px_rgba(99,102,241,0.25)] transition-all"
        >
          <h3 className="text-lg font-bold text-white flex items-center gap-2"><span>🎓</span> Education Background</h3>
          <div className="space-y-3">
            <m.div 
              whileHover={{ scale: 1.02, x: 4 }}
              transition={{ duration: 0.2 }}
              className="bg-zinc-950/70 border border-zinc-800/60 p-4 rounded-2xl transition-all"
            >
              <span className="text-xs text-indigo-400 font-mono">Graduated: 2016</span>
              <h4 className="font-semibold text-white mt-0.5">NEB +2 - Management</h4>
              <p className="text-xs text-zinc-400 mt-1">Carina International Academy, Kathmandu</p>
            </m.div>
            <m.div 
              whileHover={{ scale: 1.02, x: 4 }}
              transition={{ duration: 0.2 }}
              className="bg-zinc-950/70 border border-zinc-800/60 p-4 rounded-2xl transition-all"
            >
              <span className="text-xs text-indigo-400 font-mono">Graduated: 2013</span>
              <h4 className="font-semibold text-white mt-0.5">SEE</h4>
              <p className="text-xs text-zinc-400 mt-1">Academy Of Sacred Hearts</p>
            </m.div>
          </div>
        </m.div>

        {/* Achievements & Awards */}
        <m.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6, borderColor: 'rgba(99,102,241,0.6)' }}
          className="bg-zinc-900/70 border border-zinc-800/80 rounded-3xl p-6 backdrop-blur-xl space-y-4 shadow-xl hover:shadow-[0_20px_40px_rgba(99,102,241,0.25)] transition-all"
        >
          <h3 className="text-lg font-bold text-white flex items-center gap-2"><span>🏆</span> Achievements & Awards</h3>
          <div className="space-y-3">
            <m.div 
              whileHover={{ scale: 1.02, x: 4 }}
              transition={{ duration: 0.2 }}
              className="bg-zinc-950/70 border border-zinc-800/60 p-4 rounded-2xl transition-all"
            >
              <h4 className="font-semibold text-white">Performance Optimization</h4>
              <p className="text-xs text-zinc-400 mt-1">30% runtime delivery speed improvement on production builds.</p>
            </m.div>
            <m.div 
              whileHover={{ scale: 1.02, x: 4 }}
              transition={{ duration: 0.2 }}
              className="bg-zinc-950/70 border border-zinc-800/60 p-4 rounded-2xl flex items-center justify-between transition-all"
            >
              <div>
                <h4 className="font-semibold text-white">MindRisers Certification</h4>
                <p className="text-xs text-zinc-400 mt-1">Advanced Full-Stack Training Validation</p>
              </div>
              <m.a 
                whileHover={{ scale: 1.1 }}
                href="https://www.mindrisers.com.np/certificate/validate/MR-82006-WD" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-bold text-indigo-400 hover:underline whitespace-nowrap ml-4"
              >
                Verify →
              </m.a>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}