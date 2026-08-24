interface ContactLink {
  label: string
  href: string
  value: string
}

export default function ContactSection() {
  const links: ContactLink[] = [
    { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=shahisujit9@gmail.com', value: 'shahisujit9@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/sujitshahi', value: 'github.com/sujitshahi' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sujithshahi/', value: 'linkedin.com/in/sujithshahi' },
  ]

  return (
    <section id="contact" className="border-t border-[#1e1e30] bg-[#0a0a12] px-4 py-20 text-center sm:px-8 md:px-12 md:py-30">
      <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.12em] text-[#7fffb2]">
        Let&apos;s Build Something
      </div>
      <h2 className="m-0 mb-12 font-serif text-[clamp(36px,6vw,80px)] font-light leading-[1.05] tracking-[-0.02em] text-[#e8e8f0]">
        Open to new
        <br />
        <em className="italic text-[#7fffb2]">opportunities</em>
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {links.map(({ label, href, value }) => (
          <a key={label} href={href} className="flex w-full min-w-0 flex-col gap-1 border border-[#1e1e30] p-5 no-underline sm:w-auto sm:min-w-70 sm:px-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#7fffb2]">{label}</span>
            <span className="text-[13px] text-[#6b6b80]">{value}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
