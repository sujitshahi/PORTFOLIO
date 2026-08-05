"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <m.header 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 left-0 right-0 z-50 px-4 flex justify-center"
      >
        <div className={`w-full max-w-5xl transition-all duration-500 rounded-3xl backdrop-blur-2xl px-6 py-3.5 flex items-center justify-between border ${
          scrolled 
            ? 'bg-zinc-950/85 border-indigo-500/40 shadow-[0_20px_50px_rgba(99,102,241,0.2)]' 
            : 'bg-zinc-900/60 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
        }`}>
          
          {/* Brand Logo with Glow Box */}
          <Link href="/">
            <m.div 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative w-8 h-8 rounded-xl bg-linear-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center group-hover:border-indigo-500/60 transition-colors">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-ping absolute" />
                <div className="w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                  Sujit Shahi
                </span>
                <span className="text-[10px] text-zinc-400 font-mono">Front-End Dev</span>
              </div>
            </m.div>
          </Link>
          
          {/* Desktop Nav Links in pill container */}
          <nav className="hidden md:flex items-center gap-1 bg-white/3border border-white/5 p-1.5 rounded-2xl">
            {[
              { name: 'About', href: '/#about' },
              { name: 'Projects', href: '/#projects' },
              { name: 'Skills', href: '/#skills' },
              { name: 'Credentials', href: '/#credentials' },
            ].map((item) => (
              <m.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {item.name}
              </m.a>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/Contact"
                className="bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium px-5 py-2.5 rounded-xl text-xs shadow-lg shadow-indigo-500/30 border border-white/15 transition-all flex items-center gap-2 hover:shadow-indigo-500/50"
              >
                <span>Let's Talk</span>
                <span>→</span>
              </Link>
            </m.div>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <m.button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-zinc-300 hover:text-white focus:outline-none cursor-pointer p-2.5 bg-zinc-900/90 border border-zinc-800 rounded-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </m.button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <m.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-20 left-4 right-4 md:hidden bg-zinc-950/95 backdrop-blur-2xl border border-indigo-500/30 rounded-3xl p-6 space-y-3 flex flex-col shadow-2xl overflow-hidden"
          >
            {[
              { name: 'About', href: '/#about' },
              { name: 'Projects', href: '/#projects' },
              { name: 'Skills', href: '/#skills' },
              { name: 'Credentials', href: '/#credentials' },
            ].map((item, idx) => (
              <m.a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="text-sm font-medium text-zinc-300 hover:text-indigo-300 transition-colors py-2 px-3 rounded-xl hover:bg-white/5 border-b border-white/5 last:border-none"
              >
                {item.name}
              </m.a>
            ))}
            <div className="pt-2">
              <Link 
                href="/Contact"
                onClick={closeMenu}
                className="block w-full text-center bg-linear-to-r from-indigo-500 to-purple-600 text-white font-semibold px-4 py-3 rounded-xl text-xs shadow-lg shadow-indigo-500/30 transition-all"
              >
                Let's Talk →
              </Link>
            </div>
          </m.div>
        )}
      </m.header>
    </LazyMotion>
  );
}