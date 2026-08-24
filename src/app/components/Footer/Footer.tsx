import React from 'react'

export default function Footer() {
   return (
    <footer
      style={{
        padding: '32px 48px',
        borderTop: '1px solid #1e1e30',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
      }}
    >
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#2e2e44' }}>
        {'<sujitshahi />'} · 2026
      </span>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#2e2e44' }}>
        Built with Next.js
      </span>
    </footer>
  )
}
