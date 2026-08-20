import React from 'react'

const heroStyles = {
  section: {
    minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
    padding: '0 48px 80px', position: 'relative', overflow: 'hidden',
  },
  glow: {
    position: 'absolute', inset: 0,
    background: 'radial-gradient(ellipse 60% 50% at 70% 40%, rgba(127,255,178,0.06) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 20% 70%, rgba(127,180,255,0.04) 0%, transparent 60%)',
    pointerEvents: 'none',
  },
  grid: {
    position: 'absolute', inset: 0,
    backgroundImage: 'linear-gradient(rgba(30,30,48,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30,30,48,0.4) 1px, transparent 1px)',
    backgroundSize: '64px 64px', pointerEvents: 'none',
  },
  content: { position: 'relative', maxWidth: '900px' },
  availability: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#7fffb2',
    letterSpacing: '0.1em', marginBottom: '24px', textTransform: 'uppercase',
  },
  title: {
    fontFamily: 'Fraunces, serif', fontSize: 'clamp(52px, 8vw, 108px)', fontWeight: 300,
    lineHeight: 1.0, letterSpacing: '-0.02em', color: '#e8e8f0', margin: '0 0 24px',
  },
  accent: { fontStyle: 'italic', fontWeight: 300, color: '#7fffb2' },
  description: {
    fontSize: '17px', lineHeight: 1.7, color: '#6b6b80', maxWidth: '520px', margin: '0 0 48px',
  },
  actions: { display: 'flex', gap: '16px', flexWrap: 'wrap' },
  primaryAction: {
    display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px',
    background: '#7fffb2', color: '#07070e', textDecoration: 'none', fontSize: '13px',
    fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase',
  },
  secondaryAction: {
    display: 'inline-flex', alignItems: 'center', padding: '12px 28px',
    border: '1px solid #1e1e30', color: '#6b6b80', textDecoration: 'none',
    fontSize: '13px', letterSpacing: '0.04em', textTransform: 'uppercase',
  },
  scrollIndicator: {
    position: 'absolute', right: '48px', bottom: '80px', display: 'flex',
    flexDirection: 'column', alignItems: 'center', gap: '8px',
  },
  scrollLabel: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#2e2e44',
    letterSpacing: '0.12em', textTransform: 'uppercase', writingMode: 'vertical-rl',
  },
  scrollLine: {
    width: '1px', height: '48px', background: 'linear-gradient(to bottom, #2e2e44, transparent)',
  },
} satisfies Record<string, React.CSSProperties>

export default function Hero() {
  return (
    <section style={heroStyles.section}>
      <div style={heroStyles.glow} />
      <div style={heroStyles.grid} />
      <div style={heroStyles.content}>
        <div style={heroStyles.availability}>
          Available for work · 2026
        </div>
        <h1 style={heroStyles.title}>
          Sujit Shahi
          <br />
          <em style={heroStyles.accent}>Frontend</em>{' '}
          Developer
        </h1>
        <p style={heroStyles.description}>
          I spend my time building frontend interfaces and continuously learning more about full-stack development.
        </p>
        <div style={heroStyles.actions}>
          <a href="#work" style={heroStyles.primaryAction}>
            View Projects
          </a>
          <a href="#contact" style={heroStyles.secondaryAction}>
            Get in Touch
          </a>
        </div>
      </div>
      <div style={heroStyles.scrollIndicator}>
        <div style={heroStyles.scrollLabel}>
          Scroll
        </div>
        <div style={heroStyles.scrollLine} />
      </div>
    </section>
  )
}
