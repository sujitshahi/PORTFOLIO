import React from 'react'

export default function AboutSection() {
 const stats = [
    { label: 'Projects shipped', value: '18+' },
    { label: 'Open source stars', value: '3.4k' },
    { label: 'Years of experience', value: '4' },
    { label: 'Countries deployed to', value: '12' },
  ]

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
          4 years building products end-to-end. I started on the backend — Go APIs, schema design,
          deployment pipelines — and moved toward frontend as I became obsessed with interaction
          quality. That dual foundation means I design with real constraints in mind.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#1e1e30' }}>
        {stats.map(({ label, value }) => (
          <div
            key={label}
            style={{
              background: '#07070e',
              padding: '24px 32px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '13px', color: '#6b6b80' }}>{label}</span>
            <span
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: '28px',
                fontWeight: 300,
                color: '#7fffb2',
              }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
