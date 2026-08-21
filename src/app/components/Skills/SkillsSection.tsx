
export default function SkillsSection() {
  const skills: Record<string, string[]> = {
    Frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    // Backend: ['Node.js', 'Go', 'PostgreSQL', 'Redis', 'REST', 'GraphQL'],
    Tooling: ['GitHub Actions', 'Vercel', 'Vitest'],
  }

  return (
    <section
      id="skills"
      style={{
        padding: '120px 48px',
        borderTop: '1px solid #1e1e30',
        background: '#0a0a12',
      }}
    >
      <div style={{ marginBottom: '64px' }}>
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
          Expertise
        </div>
        <h2
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 300,
            color: '#e8e8f0',
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          Skills
        </h2>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1px',
          background: '#1e1e30',
          border: '1px solid #1e1e30',
        }}
      >
        {Object.entries(skills).map(([category, items], idx) => (
          <div key={category} style={{ background: '#0a0a12', padding: '40px' }}>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}
            >
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '10px',
                  color: '#2e2e44',
                  letterSpacing: '0.1em',
                }}
              >
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: '20px',
                  fontWeight: 300,
                  color: '#e8e8f0',
                }}
              >
                {category}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {items.map((skill) => (
                <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '4px',
                      height: '4px',
                      background: '#7fffb2',
                      borderRadius: '50%',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: '14px', color: '#6b6b80' }}>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
