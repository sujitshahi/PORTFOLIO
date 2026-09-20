"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

const projectsData = [
  {
    id: 1,
    category: "INTERNSHIP PROJECT | 2026",
    title: "Kider - Modern Kindergarten Website Redesign & Optimization",
    desc: "A high-fidelity, responsive frontend clone built with a clean code architecture. Features optimized image handling and lazy loading structures, resulting in a 30% page speed performance boost.",
    techStack: ["Next.js", "Tailwind CSS", "Optimization"],
    link: "https://github.com/sujitshahi/INTERN-PROJECT",
    linkText: "View on GitHub →",
    liveLink: "https://kider-garden.vercel.app",
    liveLinkText: "Live Demo ⚡",
    thumbnail: "/school.png"
  },
  {
    id: 2,
    category: "PROJECT FOR CERTIFICATE | 2025",
    title: "E-commerce Website - E-Market",
    desc: "A frontend storefront that consumes product data via API to simulate a retail environment. Implemented client-side filtering and sorting algorithms alongside local state management for the shopping cart and checkout simulation.",
    techStack: ["Next.js", "Tailwind CSS", "Component Libraries"],
    link: "https://github.com/sujitshahi/E-market",
    linkText: "View on GitHub →",
    liveLink: "https://e-market123.vercel.app",
    liveLinkText: "Live Demo ⚡",
    thumbnail: "/e-market.png"
  },
  {
    id: 3,
    category: "PROJECT | 2026",
    title: "Gantabya-Mobility - Transit Platform",
    desc: "A modern, high-performance transit and mobility web platform featuring a sleek, mobile-first user interface with modular design, optimized asset delivery.",
    techStack: ["Next.js", "Tailwind CSS", "Component Libraries"],
    link: "https://github.com/sujitshahi/gantabya-mobility",
    linkText: "View on GitHub →",
    liveLink: "https://gantabya-mobility-123.vercel.app",
    liveLinkText: "Live Demo ⚡",
    thumbnail: "/gantabya1.png"
  },
];

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section id="projects" className="">
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

        <div className="grid grid-cols-1 gap-px border border-[#1e1e30] bg-[#1e1e30]">
          {projectsData.map((project, index) => (
            <m.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 80, scale: 0.96 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: shouldReduceMotion ? 0 : index * 0.2, type: "spring", stiffness: 70 }}
              whileHover={shouldReduceMotion ? {} : { 
                y: -8, 
                transition: { duration: 0.3 } 
              }}
              key={project.id} 
              className="group flex min-w-0 flex-col gap-5 bg-[#07070e] p-6 transition-colors duration-200 hover:bg-[#0f0f1a] sm:p-10"
            >
              {project.thumbnail && (
                <div className="relative -mx-10 -mt-10 h-56 overflow-hidden border-b border-[#1e1e30] bg-[#07070e]">
                  <m.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </m.div>
                </div>
              )}

              <div className="flex flex-1 flex-col gap-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <m.span
                    initial={shouldReduceMotion ? false : { opacity: 0, x: -10 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: shouldReduceMotion ? 0 : index * 0.2 + 0.2 }}
                    className="inline-flex max-w-full items-center gap-1.5 border border-[#7fffb2]/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[#7fffb2]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7fffb2]" />
                    {project.category}
                  </m.span>
                  <span className="font-mono text-[11px] text-[#2e2e44]">2026</span>
                </div>

                <div>
                  <m.h3
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: shouldReduceMotion ? 0 : index * 0.2 + 0.3 }}
                    className="m-0 mb-3 font-serif text-[28px] font-light tracking-[-0.01em] text-[#e8e8f0] transition-colors duration-200 group-hover:text-[#7fffb2]"
                  >
                    {project.title}
                  </m.h3>
         
                  <m.p 
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: shouldReduceMotion ? 0 : index * 0.2 + 0.4 }}
                    className="m-0 text-sm leading-[1.7] text-[#6b6b80]"
                  >
                    {project.desc}
                  </m.p>
                </div>

                <div className="mt-auto">
                  <m.div 
                    initial={shouldReduceMotion ? false : { opacity: 0 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: shouldReduceMotion ? 0 : index * 0.2 + 0.5 }}
                    className="mt-auto flex flex-wrap gap-1.5"
                  >
                    {project.techStack.map((tech) => (
                      <m.span 
                        key={tech} 
                        whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="border border-[#1e1e30] px-2 py-0.5 font-mono text-[10px] tracking-[0.06em] text-[#2e2e44]"
                      >
                        {tech}
                      </m.span>
                    ))}
                  </m.div>

                  <m.div 
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: shouldReduceMotion ? 0 : index * 0.2 + 0.6 }}
                    className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2"
                  >
                    <m.a 
                      whileHover={shouldReduceMotion ? {} : { x: 6, scale: 1.05 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.04em] text-[#6b6b80] transition-colors hover:text-[#7fffb2]"
                    >
                      {project.linkText}
                    </m.a>

                    {project.liveLink && (
                      <m.a 
                        whileHover={shouldReduceMotion ? {} : { x: 6, scale: 1.05 }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.04em] text-[#6b6b80] transition-colors hover:text-[#7fffb2]"
                      >
                        {project.liveLinkText}
                      </m.a>
                    )}
                  </m.div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </section>
    </LazyMotion>
  );
}