import Nav from './components/Nav'
import Hero from './components/Hero/Hero'
import ProjectsSection from './Projects/ProjectsSection'
import SkillsSection from './components/Skills/SkillsSection'
import AboutSection from './components/About/AboutSection'
import Education from './components/Education/Education'
import ContactSection from './components/Contact/ContactSection'
import Footer from './components/Footer/Footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#07070e] font-sans">
      <Nav />
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <Education />
      <ContactSection />
      <Footer />
    </div>
  )
}

