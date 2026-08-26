
'use client'

import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Kider-garden',
    tag: 'Front-End',
    year: '2026',
    description:
      'A high-fidelity, responsive frontend clone built with a clean code architecture. Features optimized image handling and lazy loading structures, resulting in a 30% page speed performance boost.',
    stack: ["Next.js", "Tailwind CSS", "Optimization"],
    link: "https://github.com/sujitshahi/INTERN-PROJECT",
    linkText: "View on GitHub",
    liveLink: "https://kider-garden.vercel.app",
    liveLinkText: "Live Demo",
    accent: '#7fffb2',
  },
  {
    id: 2,
    title: 'Gantabya-Mobility',
    tag: 'Front-end',
    year: '2026',
    description:
      'A modern, high-performance transit and mobility web platform featuring a sleek, mobile-first user interface with modular design, optimized asset delivery.',
    stack: ["Next.js", "Tailwind CSS", "Component Libraries"],
    link: 'https://github.com/sujitshahi/gantabya-mobility',
    linkText: "View on GitHub",
    liveLink: 'https://gantabya-mobility-123.vercel.app',
    liveLinkText: "Live Demo",
    accent: '#7fb4ff',
  },
]

export default function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <LazyMotion features={domAnimation}>
    <section id="work" className="px-4 py-20 sm:px-8 md:px-12 md:py-30">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#7fffb2]">
            Selected Work
          </div>
          <m.h2
            initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="m-0 font-serif text-[clamp(32px,4vw,52px)] font-light tracking-[-0.02em] text-[#e8e8f0]"
          >
            Projects
          </m.h2>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,480px),1fr))] gap-px border border-[#1e1e30] bg-[#07070e]">
        {projects.map((project, index) => (
          <m.div
            key={project.id}
            initial={shouldReduceMotion ? false : { y: 80, scale: 0.96 }}
            whileInView={shouldReduceMotion ? {} : { y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: shouldReduceMotion ? 0 : index * 0.2 + 0.2, type: 'spring', stiffness: 70 }}
            className="flex min-w-0 flex-col gap-5 bg-[#07070e] p-6 transition-colors duration-200 hover:bg-[#0f0f1a] sm:p-10"
          >
            <div className="flex items-start justify-between">
              <div
                className={`inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] ${
                  project.id === 1
                    ? 'border-[#7fffb2]/15 text-[#7fffb2]'
                    : 'border-[#7fb4ff]/15 text-[#7fb4ff]'
                }`}
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
                <span>{project.tag}</span>
              </div>
              <span className="font-mono text-[11px] text-[#2e2e44]">{project.year}</span>
            </div>

            <div>
              <h3 className="m-0 mb-3 font-serif text-[28px] font-light tracking-[-0.01em] text-[#e8e8f0]">
                {project.title}
              </h3>
              <p className="m-0 text-sm leading-[1.7] text-[#6b6b80]">{project.description}</p>
            </div>

            <div className="mt-auto flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-[#1e1e30] px-2 py-0.5 font-mono text-[10px] tracking-[0.06em] text-[#2e2e44]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-5">
              {project.link && project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.04em] text-[#6b6b80] no-underline transition-colors hover:text-[#7fffb2]"
                >
                  {project.linkText} <span className="text-sm">→</span>
                </a>
              )}

              {project.liveLink && project.liveLink !== '#' && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.04em] text-[#6b6b80] no-underline transition-colors hover:text-[#7fffb2]"
                >
                  {project.liveLinkText} <span className="text-sm">⚡</span>
                </a>
              )}
            </div>
          </m.div>
        ))}
      </div>
    </section>
    </LazyMotion>
  )
}