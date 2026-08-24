export default function Hero() {
  return (
    <section className="relative flex min-h-205 flex-col justify-end overflow-hidden px-4 pb-12 sm:px-8 sm:pb-20 md:min-h-screen md:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(127,255,178,0.06)_0%,transparent_60%),radial-gradient(ellipse_40%_40%_at_20%_70%,rgba(127,180,255,0.04)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(30,30,48,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(30,30,48,0.4)_1px,transparent_1px)] bg-size[64px_64px]" />
      <div className="relative max-w-225">
        <div className="mb-6 font-mono text-xs uppercase tracking-widest text-[#7fffb2]">
          Available for work · 2026
        </div>
        <h1 className="m-0 mb-6 font-serif text-[clamp(52px,8vw,108px)] font-light leading-none tracking-[-0.02em] text-[#e8e8f0]">
          Sujit Shahi
          <br />
          <em className="font-light italic text-[#7fffb2]">Frontend</em>{' '}
          Developer
        </h1>
        <p className="mb-12 max-w-130 text-[17px] leading-[1.7] text-[#6b6b80]">
          I spend my time building frontend interfaces and continuously learning more about full-stack development.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#work" className="inline-flex items-center gap-2 bg-[#7fffb2] px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.04em] text-[#07070e] no-underline">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center border border-[#1e1e30] px-7 py-3 text-[13px] uppercase tracking-[0.04em] text-[#6b6b80] no-underline">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="absolute bottom-20 right-12 hidden flex-col items-center gap-2 md:flex">
        <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#2e2e44] [writing-mode:vertical-rl]">
          Scroll
        </div>
        <div className="h-12 w-px bg-linear-to-b from-[#2e2e44] to-transparent" />
      </div>
    </section>
  )
}
