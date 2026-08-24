"use client";

import { LazyMotion, domAnimation, m } from 'framer-motion';

export default function Education() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="credentials" className="scroll-mt-24 space-y-8 border-t border-[#1e1e30] px-4 py-20 sm:px-8 md:px-12 md:py-30">
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
            className="h-px origin-left flex-1 bg-linear-to-r from-[#7fffb2]/80 via-[#7fffb2]/40 to-transparent" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Background */}
          <m.div 
            initial={{ opacity: 0, y: 80, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 70 }}
            className="rounded-3xl border border-zinc-800/80 bg-zinc-900/70 p-6 backdrop-blur-xl shadow-xl"
          >
            <h3 className="text-lg font-bold text-white flex items-center gap-2"><span>🎓</span> Education Background</h3>
            <div className="space-y-3">
              <div 
                className="rounded-2xl border border-zinc-800/60 bg-zinc-950/70 p-4"
              >
                <span className="font-mono text-xs text-[#7fffb2]">Graduated: 2016</span>
                <h4 className="font-semibold text-white mt-0.5">NEB +2 - Management</h4>
                <p className="text-xs text-zinc-400 mt-1">Carina International Academy, Kathmandu</p>
              </div>
              <div 
                className="rounded-2xl border border-zinc-800/60 bg-zinc-950/70 p-4"
              >
                <span className="font-mono text-xs text-[#7fffb2]">Graduated: 2013</span>
                <h4 className="font-semibold text-white mt-0.5">SEE</h4>
                <p className="text-xs text-zinc-400 mt-1">Academy Of Sacred Hearts</p>
              </div>
            </div>
          </m.div>

          {/* Achievements & Awards */}
          <m.div 
            initial={{ opacity: 0, y: 80, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 70 }}
            className="rounded-3xl border border-zinc-800/80 bg-zinc-900/70 p-6 backdrop-blur-xl shadow-xl"
          >
            <h3 className="text-lg font-bold text-white flex items-center gap-2"><span>🏆</span> Achievements & Awards</h3>
            <div className="space-y-3">
              <div 
                className="rounded-2xl border border-zinc-800/60 bg-zinc-950/70 p-4"
              >
                <h4 className="font-semibold text-white">Performance Optimization</h4>
                <p className="text-xs text-zinc-400 mt-1">Improving performance, usability, and frontend delivery quality.</p>
              </div>
              <div 
                className="flex items-center justify-between rounded-2xl border border-zinc-800/60 bg-zinc-950/70 p-4"
              >
                <div>
                  <h4 className="font-semibold text-white">MindRisers Certification</h4>
                  <p className="text-xs text-zinc-400 mt-1">Advanced Full-Stack Training Validation</p>
                </div>
                <m.a 
                  href="https://www.mindrisers.com.np/certificate/validate/MR-82006-WD" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ml-4 whitespace-nowrap text-xs font-bold text-[#7fffb2] hover:underline"
                >
                  Verify →
                </m.a>
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}