interface ContactLink {
  label: string
  href: string
  value: string
}

const contactStyles = {
  section: {
    padding: '120px 48px',
    borderTop: '1px solid #1e1e30',
    background: '#0a0a12',
    textAlign: 'center',
  },
  eyebrow: {
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '11px',
    color: '#7fffb2',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    marginBottom: '24px',
  },
  title: {
    fontFamily: 'Fraunces, serif',
    fontSize: 'clamp(36px, 6vw, 80px)',
    fontWeight: 300,
    color: '#e8e8f0',
    margin: '0 0 48px',
    letterSpacing: '-0.02em',
    lineHeight: 1.05,
  },
  accent: {
    color: '#7fffb2',
    fontStyle: 'italic',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    flexWrap: 'wrap',
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    textDecoration: 'none',
    padding: '20px 32px',
    border: '1px solid #1e1e30',
  },
  linkLabel: {
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '10px',
    color: '#7fffb2',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  linkValue: {
    fontSize: '13px',
    color: '#6b6b80',
  },
} as const

export default function ContactSection() {
  const links: ContactLink[] = [
    { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=shahisujit9@gmail.com', value: 'shahisujit9@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/sujitshahi', value: 'github.com/sujitshahi' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sujithshahi/', value: 'linkedin.com/in/sujithshahi' },
  ]

  return (
    <section id="contact" style={contactStyles.section}>
      <div style={contactStyles.eyebrow}>
        Let&apos;s Build Something
      </div>
      <h2 style={contactStyles.title}>
        Open to new
        <br />
        <em style={contactStyles.accent}>opportunities</em>
      </h2>
      <div style={contactStyles.links}>
        {links.map(({ label, href, value }) => (
          <a key={label} href={href} style={contactStyles.link}>
            <span style={contactStyles.linkLabel}>{label}</span>
            <span style={contactStyles.linkValue}>{value}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
