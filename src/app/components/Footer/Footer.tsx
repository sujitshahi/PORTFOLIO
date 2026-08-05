"use client";

import { m } from 'framer-motion';

export default function Footer() {
  return (
    <m.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-white/10 bg-zinc-950/50 py-8 mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
        <div>© 2026 Sujit Shahi • Built with Next.js & Tailwind CSS</div>
        <div>Kathmandu, Nepal</div>
      </div>
    </m.footer>
  );
}