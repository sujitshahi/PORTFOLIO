'use client'

import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'ShopStream',
    tag: 'Full Stack',
    year: '2024',
    description:
      'E-commerce platform with real-time inventory sync, Stripe checkout, and a React storefront backed by a Node.js/PostgreSQL API. Handles 10k+ SKUs with sub-50ms search.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    link: '#',
    accent: '#7fffb2',
  },
  {
    id: 2,
    title: 'Logboard',
    tag: 'Frontend',
    year: '2024',
    description:
      'Analytics dashboard for monitoring distributed microservice logs. Built with React Query for streaming updates, Recharts for time-series data, and a custom filtering DSL.',
    stack: ['React', 'TypeScript', 'React Query', 'Recharts', 'WebSockets'],
    link: '#',
    accent: '#7fb4ff',
  },
  {
    id: 3,
    title: 'Collab.md',
    tag: 'Full Stack',
    year: '2023',
    description:
      'Multiplayer markdown editor with operational-transform conflict resolution, real-time cursors, and GitHub Gist export. Zero-dependency OT engine written from scratch.',
    stack: ['Next.js', 'Go', 'WebSockets', 'SQLite', 'GitHub API'],
    link: '#',
    accent: '#ffb87f',
  },
  {
    id: 4,
    title: 'Fastrout',
    tag: 'Library',
    year: '2023',
    description:
      'Zero-dependency client-side router for React. Hash and history modes, nested routes, lazy loading, and typed params — 2.4 kB gzipped. 1.2k GitHub stars.',
    stack: ['TypeScript', 'React', 'Vite', 'Vitest'],
    link: '#',
    accent: '#d87fff',
  },
]

type FilterKey = 'All' | 'Frontend' | 'Full Stack' | 'Library'
const filters: FilterKey[] = ['All', 'Full Stack', 'Frontend', 'Library']

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filtered =
    activeFilter === 'All' ? projects : projects.filter((p) => p.tag === activeFilter)

  return (
    <section id="work" style={{ padding: '120px 48px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '64px',
          flexWrap: 'wrap',
          gap: '24px',
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
            Selected Work
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
            Projects
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '6px 16px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                border: '1px solid',
                borderColor: activeFilter === f ? '#7fffb2' : '#1e1e30',
                background: activeFilter === f ? 'rgba(127,255,178,0.08)' : 'transparent',
                color: activeFilter === f ? '#7fffb2' : '#6b6b80',
                cursor: 'pointer',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
          gap: '1px',
          background: '#1e1e30',
          border: '1px solid #1e1e30',
        }}
      >
        {filtered.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{
              background: hoveredProject === project.id ? '#0f0f1a' : '#07070e',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              transition: 'background 0.2s',
              cursor: 'pointer',
            }}
          >
            <div
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  border: `1px solid ${project.accent}22`,
                  borderRadius: '2px',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: project.accent,
                    display: 'inline-block',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    color: project.accent,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {project.tag}
                </span>
              </div>
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  color: '#2e2e44',
                }}
              >
                {project.year}
              </span>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: '28px',
                  fontWeight: 300,
                  color: '#e8e8f0',
                  margin: '0 0 12px',
                  letterSpacing: '-0.01em',
                }}
              >
                {project.title}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#6b6b80', margin: 0 }}>
                {project.description}
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    color: '#2e2e44',
                    letterSpacing: '0.06em',
                    padding: '3px 8px',
                    border: '1px solid #1e1e30',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                color: hoveredProject === project.id ? project.accent : '#2e2e44',
                transition: 'color 0.2s',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              View Case Study <span style={{ fontSize: '14px' }}>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}