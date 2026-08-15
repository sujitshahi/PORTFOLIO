// "use client";

// import { useState } from 'react';
// import { LazyMotion, domAnimation, m } from 'framer-motion';
// import ProjectsSection from './Projects/page';
// import SkillsSection from './components/Skill-Section/SkillSection';
// import Footer from './components/Footer/Footer';
// import Education from './components/Education/Education';
// import Hero from './components/Hero-Section/Hero';
// import About from './components/About/About';
// import Language from './components/Language/Language';


// export default function Page() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <LazyMotion features={domAnimation}>
//       <m.main 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="min-h-screen bg-[#09090b] text-[#f8fafc] font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden"
//       >
        
//         {/* Animated Background Ambient Glow Effects */}
//         <m.div 
//           animate={{ 
//             scale: [1, 1.2, 1],
//             opacity: [0.15, 0.3, 0.15],
//             x: ['-50%', '-45%', '-50%']
//           }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 bg-liner-to-tr from-indigo-500/25 via-purple-500/25 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" 
//         />

//         <div className="max-w-6xl mx-auto px-6 py-20 mt-20 md:py-20 space-y-28">
//           <Hero />
//           <About />
//           <ProjectsSection />
//           <SkillsSection />
//           <Education/>
//           <Language />
//         </div>

//         <Footer />
//       </m.main>
//     </LazyMotion>
//   );
// }









import ProjectsSection from './components/ProjectsSection'
import Nav from './components/Nav'

export default function Page() {
  return (
    <div style={{ background: '#07070e', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <Nav />
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 48px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 50% at 70% 40%, rgba(127,255,178,0.06) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 20% 70%, rgba(127,180,255,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(30,30,48,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30,30,48,0.4) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', maxWidth: '900px' }}>
        <div
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '12px',
            color: '#7fffb2',
            letterSpacing: '0.1em',
            marginBottom: '24px',
            textTransform: 'uppercase',
          }}
        >
          Available for work · 2026
        </div>
        <h1
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 'clamp(52px, 8vw, 108px)',
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: '#e8e8f0',
            margin: '0 0 24px',
          }}
        >
          Alex Rivera
          <br />
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#7fffb2' }}>Frontend</em>{' '}
          Developer
        </h1>
        <p
          style={{
            fontSize: '17px',
            lineHeight: 1.7,
            color: '#6b6b80',
            maxWidth: '520px',
            margin: '0 0 48px',
          }}
        >
          I build interfaces that feel fast and precise. Full-stack foundation — Node, Go,
          PostgreSQL — so I own the whole feature, not just the pixels.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href="#work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 28px',
              background: '#7fffb2',
              color: '#07070e',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 28px',
              border: '1px solid #1e1e30',
              color: '#6b6b80',
              textDecoration: 'none',
              fontSize: '13px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          right: '48px',
          bottom: '80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <div
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            color: '#2e2e44',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </div>
        <div
          style={{
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, #2e2e44, transparent)',
          }}
        />
      </div>
    </section>
  )
}

function SkillsSection() {
  const skills: Record<string, string[]> = {
    Frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'WebSockets'],
    Backend: ['Node.js', 'Go', 'PostgreSQL', 'Redis', 'REST', 'GraphQL'],
    Tooling: ['Vite', 'Docker', 'GitHub Actions', 'Vercel', 'AWS S3', 'Vitest'],
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

function AboutSection() {
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

function ContactSection() {
  const links = [
    { label: 'Email', href: 'mailto:alex@example.com', value: 'alex@example.com' },
    { label: 'GitHub', href: 'https://github.com/alexrivera', value: 'github.com/alexrivera' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/alexrivera', value: 'linkedin.com/in/alexrivera' },
  ]

  return (
    <section
      id="contact"
      style={{
        padding: '120px 48px',
        borderTop: '1px solid #1e1e30',
        background: '#0a0a12',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          color: '#7fffb2',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}
      >
        Let&apos;s Build Something
      </div>
      <h2
        style={{
          fontFamily: 'Fraunces, serif',
          fontSize: 'clamp(36px, 6vw, 80px)',
          fontWeight: 300,
          color: '#e8e8f0',
          margin: '0 0 48px',
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
        }}
      >
        Open to new
        <br />
        <em style={{ color: '#7fffb2', fontStyle: 'italic' }}>opportunities</em>
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
        {links.map(({ label, href, value }) => (
          <a
            key={label}
            href={href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              textDecoration: 'none',
              padding: '20px 32px',
              border: '1px solid #1e1e30',
            }}
          >
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px',
                color: '#7fffb2',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {label}
            </span>
            <span style={{ fontSize: '13px', color: '#6b6b80' }}>{value}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

function Footer() {
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
        {'<alex.dev />'} · 2026
      </span>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#2e2e44' }}>
        Built with Next.js
      </span>
    </footer>
  )
}