"use client";

import Image from 'next/image';
import { m } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    category: "INTERNSHIP PROJECT | 2025",
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

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-10 scroll-mt-24">
      <div className="flex items-center gap-4">
        <m.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-white"
        >
          Featured Projects
        </m.h2>
        <m.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px flex-1 bg-liner-to-r from-indigo-500/80 via-purple-500/40 to-transparent origin-left" 
        />
      </div>

      <div className="flex flex-col gap-14">
        {projectsData.map((project, index) => (
          <m.div 
            initial={{ opacity: 0, y: 80, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 70 }}
            whileHover={{ 
              y: -8, 
              transition: { duration: 0.3 } 
            }}
            key={project.id} 
            className={`bg-zinc-900/70 backdrop-blur-2xl border border-white/10 rounded-3xl relative overflow-hidden shadow-2xl hover:border-indigo-500/70 hover:shadow-[0_30px_70px_rgba(99,102,241,0.35)] group flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className="absolute inset-0 bg-liner-to-r from-indigo-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {project.thumbnail && (
              <div className="w-full md:w-1/2 min-h-70 md:min-h-87.5 overflow-hidden bg-zinc-950/80 relative border-b md:border-b-0 md:border-r border-white/5">
                <m.div 
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="object-cover object-top w-full h-full"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </m.div>
                <div className="absolute inset-0 bg-indigo-950/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            )}

            <div className="p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-between space-y-6 relative z-10">
              <div className="space-y-4">
                <m.span 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className="inline-block text-xs font-mono text-indigo-400 tracking-wider uppercase bg-indigo-500/10 border border-indigo-500/30 px-3.5 py-1.5 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                >
                  {project.category}
                </m.span>
                
                <m.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors duration-300"
                >
                  {project.title}
                </m.h3>
         
                <m.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  className="text-zinc-400 text-sm sm:text-base leading-relaxed"
                >
                  {project.desc}
                </m.p>
              </div>
             
              <div className="space-y-6">
                <m.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className="flex flex-wrap gap-2"
                >
                  {project.techStack.map((tech) => (
                    <m.span 
                      key={tech} 
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-zinc-800/90 border border-zinc-700/60 px-3 py-1 rounded-xl text-xs font-medium text-zinc-300 shadow-sm cursor-default"
                    >
                      {tech}
                    </m.span>
                  ))}
                </m.div>

                <m.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.6 }}
                  className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10"
                >
                  <m.a 
                    whileHover={{ x: 6, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white text-sm font-semibold inline-flex items-center gap-1.5 transition-colors hover:text-indigo-400"
                  >
                    {project.linkText}
                  </m.a>

                  {project.liveLink && (
                    <m.a 
                      whileHover={{ x: 6, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-400 text-sm font-semibold inline-flex items-center gap-1.5 transition-colors hover:text-emerald-300"
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
  );
}