"use client"

import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'

export default function SkillsSection() {
  const shouldReduceMotion = useReducedMotion()
  const skills: Record<string, string[]> = {
    Frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    // Backend: ['Node.js', 'Go', 'PostgreSQL', 'Redis', 'REST', 'GraphQL'],
    Tooling: ['GitHub Actions', 'Vercel', 'Vitest','Figma'],
  }

  return (
    <LazyMotion features={domAnimation}>
    <section
      id="skills"
      className="border-t border-[#1e1e30] bg-[#0a0a12] px-4 py-20 sm:px-8 md:px-12 md:py-30"
    >
      <m.div
        initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#7fffb2]">
          Expertise
        </div>
        <h2 className="m-0 font-serif text-[clamp(32px,4vw,52px)] font-light tracking-[-0.02em] text-[#e8e8f0]">
          Skills
        </h2>
      </m.div>
      <div className="grid grid-cols-1 gap-px border border-[#1e1e30] bg-[#1e1e30] md:grid-cols-2">
        {Object.entries(skills).map(([category, items], idx) => (
          <m.div
            key={category}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 80, scale: 0.96 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: shouldReduceMotion ? 0 : idx * 0.2 + 0.2, type: 'spring', stiffness: 70 }}
            className="min-w-0 bg-[#0a0a12] p-6 sm:p-10"
          >
            <div className="mb-7 flex items-center gap-2.5">
              <span className="font-mono text-[10px] text-[#2e2e44]">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="font-serif text-xl font-light text-[#e8e8f0]">
                {category}
              </span>
            </div>
            <div className="flex flex-col gap-2.5">
              {items.map((skill) => (
                <div key={skill} className="flex items-center gap-2.5">
                  <div className="h-1 w-1 shrink-0 rounded-full bg-[#7fffb2]" />
                  <span className="text-sm text-[#6b6b80]">{skill}</span>
                </div>
              ))}
            </div>
          </m.div>
        ))}
      </div>
    </section>
    </LazyMotion>
  )
}
