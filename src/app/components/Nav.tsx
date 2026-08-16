'use client'

export default function Nav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '20px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #1e1e30',
        background: 'rgba(7,7,14,0.85)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <span
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '13px',
          color: '#7fffb2',
          letterSpacing: '0.02em',
        }}
      >
        {'Sujit Shahi'}
      </span>
      <div style={{ display: 'flex', gap: '32px' }}>
        {['Work', 'Skills', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: '#6b6b80',
              textDecoration: 'none',
              fontSize: '13px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}