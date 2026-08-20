import Nav from './components/Nav'
import Hero from './components/Hero/Hero'
import ProjectsSection from './Projects/ProjectsSection'
import SkillsSection from './components/Skills/SkillsSection'
import AboutSection from './components/About/AboutSection'
import ContactSection from './components/Contact/ContactSection'
import Footer from './components/Footer/Footer'

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

