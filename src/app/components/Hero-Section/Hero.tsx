"use client";

import Image from 'next/image';
import TypedText from '@/TypedText/page';
import { m } from 'framer-motion';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <m.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:col-span-7 space-y-6"
      >
        <m.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.03 }}
          className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] cursor-default"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
          Open for Front-End Opportunities
        </m.div>
        
        <m.h1 
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, type: "spring", stiffness: 80 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
        >
          Sujit Shahi
        </m.h1>
        
        <m.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-xl sm:text-2xl font-semibold text-indigo-300 h-10 flex items-center"
        >
          <TypedText />
        </m.div>
        
        <m.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl"
        >
          Front-End Developer specializing in responsive, high-performance web interfaces with modern architectures. Passionate about crafting seamless user experiences.
        </m.p>
        
        <m.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-wrap gap-4 pt-2"
        >
          <m.a 
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="bg-liner-to-r from-indigo-500 to-purple-600 text-white font-medium px-8 py-3.5 rounded-xl transition-all shadow-xl shadow-indigo-500/30 flex items-center gap-2 text-sm"
          >
            View Projects <span>↓</span>
          </m.a>
          <m.a 
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="#about" 
            className="bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 text-zinc-300 font-medium px-8 py-3.5 rounded-xl transition-all text-sm shadow-lg"
          >
            About Myself
          </m.a>
        </m.div>
      </m.div>

      {/* Floating Profile Image with Staggered Entrance */}
      <m.div 
        initial={{ opacity: 0, scale: 0.8, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3, type: "spring", stiffness: 80 }}
        className="lg:col-span-5 flex justify-center"
      >
        <m.div 
          animate={{ y: [0, -15, 0], rotate: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.03 }}
          className="relative group p-3 bg-liner-to-br from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl backdrop-blur-md shadow-[0_25px_60px_rgba(99,102,241,0.3)] border border-white/10"
        >
          <Image 
            className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover border border-zinc-800 transition-transform duration-700 group-hover:scale-105"
            src="/photo3.jpg" 
            alt="Sujit Shahi"
            width={320}
            height={320}
            priority
          />
          <div className="absolute bottom-6 right-6 w-5 h-5 bg-emerald-500 rounded-full border-4 border-[#09090b] shadow-[0_0_15px_rgba(16,185,129,0.9)] animate-pulse" />
        </m.div>
      </m.div>
    </section>
  );
}