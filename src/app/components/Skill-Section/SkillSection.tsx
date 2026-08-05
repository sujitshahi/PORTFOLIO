"use client";

import { m } from 'framer-motion';

const skillsData = [
  { 
    icon: "💻", 
    title: "Languages", 
    items: ['JavaScript (ES6+)', 'HTML5', 'CSS3'] 
  },
  { 
    icon: "⚡", 
    title: "Frameworks", 
    items: ['Next.js', 'React.js', 'Tailwind CSS'] 
  },
  { 
    icon: "🛠️", 
    title: "Tools", 
    items: ['Git & GitHub', 'VS Code', 'Figma'] 
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="space-y-8 scroll-mt-24">
      <div className="flex items-center gap-4">
        <m.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-white"
        >
          Technical Skills
        </m.h2>
        <m.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px flex-1 bg-liner-to-r from-indigo-500/80 via-purple-500/40 to-transparent origin-left" 
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {skillsData.map((category, idx) => (
          <m.div 
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6, type: "spring", stiffness: 80 }}
            whileHover={{ y: -8, borderColor: 'rgba(99,102,241,0.7)', scale: 1.02 }}
            className="bg-zinc-900/70 border border-zinc-800/80 rounded-3xl p-6 backdrop-blur-xl transition-all shadow-xl hover:shadow-[0_20px_40px_rgba(99,102,241,0.25)]"
          >
            <m.span 
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="text-3xl mb-3 inline-block"
            >
              {category.icon}
            </m.span>
            <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((s, sIdx) => (
                <m.span 
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + sIdx * 0.08 }}
                  whileHover={{ scale: 1.08, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
                  className="bg-zinc-800/80 border border-zinc-700/50 px-3 py-1.5 rounded-xl text-xs text-zinc-300 cursor-default transition-colors"
                >
                  {s}
                </m.span>
              ))}
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}