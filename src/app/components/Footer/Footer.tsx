"use client"

import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'

export default function Footer() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <LazyMotion features={domAnimation}>
    <m.footer
      initial={shouldReduceMotion ? false : { opacity: 0, y: 80, scale: 0.96 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: shouldReduceMotion ? 0 : 0.2, type: 'spring', stiffness: 70 }}
      className="flex flex-wrap items-center justify-between gap-3 border-t border-[#1e1e30] px-4 py-6 sm:px-8 sm:py-8 md:px-12"
    >
      <span className="font-mono text-[11px] text-[#2e2e44]">
        {'<sujitshahi />'} · 2026
      </span>
      <span className="font-mono text-[11px] text-[#2e2e44]">
        Built with Next.js
      </span>
    </m.footer>
    </LazyMotion>
  )
}
