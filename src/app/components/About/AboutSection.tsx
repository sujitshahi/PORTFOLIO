import React from 'react'

export default function AboutSection() {
  return (
    <section
      style={{
        padding: '120px 48px',
        borderTop: '1px solid #1e1e30',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '80px',
        alignItems: 'center',
      }}
    >
      <div>
        <div
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            color: '#7fffb2',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          Background
        </div>
        <h2
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 300,
            color: '#e8e8f0',
            margin: '0 0 24px',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}
        >
          I care about the{' '}
          <em style={{ color: '#7fffb2', fontStyle: 'italic' }}>whole system</em>, not just the UI
          layer.
        </h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#6b6b80', margin: 0 }}>
          I recently completed my software development internship, where I contributed to practical
          projects and strengthened my frontend skills. The experience taught me how to turn ideas
          into clean, responsive interfaces that are easy to use and maintain. I also learned the
          importance of collaboration, clear communication, and thoughtful problem-solving when
          building software as part of a team.
        </p>
      </div>
    </section>
  )
}
