

const projectsData = [
  {
    id: 1,
    category: "INTERNSHIP PROJECT | 2025",
    title: "🏫 Kider - Kindergarten Website Clone",
    desc: "A high-fidelity, responsive frontend clone built with a clean code architecture. Features optimized image handling and lazy loading structures, resulting in a 30% page speed performance boost.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Optimization"],
    link: "https://github.com/sujitshahi/INTERN-PROJECT",
    linkText: "View on GitHub →"
  },
  {
    id: 2,
    category: "MAJOR PROJECT | 2025",
    title: "🚗 Gantabya-Mobility - Transit Platform",
    desc: "A modern, high-performance transit and mobility web platform featuring a sleek, mobile-first user interface with modular design, optimized asset delivery.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Component Libraries"],
    link: "https://github.com/sujitshahi/gantabya-mobility",
    linkText: "View on GitHub →",
    liveLink: "https://gantabya-mobility-sujitshahi.vercel.app/",
    liveLinkText: "Live Demo ⚡"
  }
];

export default function Projects() {
  return (
    <div id="projects-page" className="block min-h-screen bg-[#0a0a0a] text-[#ededed] p-8 font-sans anticipate-fade-in">
      
     
      <div className="reveal-title text-5xl my-8 tracking-tight flex items-center gap-3 relative w-fit font-medium bg-linear-to-r from-violet-400  to-blue-400 bg-clip-text text-transparent">
        My Projects
      </div>
      
  
      <div className="projects-grid grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 my-8">
        
     
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-4xl p-8 relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
          hover:border-[#a78bfa]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] group reveal-card animate-in delay-100">
          
      
            <div className="project-category text-xs text-purple-400 mb-2 tracking-widest font-medium uppercase">
              {project.category}
            </div>
            
     
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 tracking-wide transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#a78bfa]">
              {project.title}
            </h3>
      
            <p className="project-desc text-gray-400 text-base leading-relaxed mb-6">
              {project.desc}
            </p>
           
            <div className="tech-stack flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech, index) => (
                <span 
                  key={index} 
                  className="tech bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full text-xs font-medium text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </div>
   
            <div className="flex gap-6 items-center">
     
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link text-purple-400 no-underline font-medium inline-flex items-center gap-1.5 transition-all duration-300 hover:gap-2.5 hover:text-purple-300"
              >
                {project.linkText}
              </a>

          
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-live-link text-emerald-400 no-underline font-medium inline-flex items-center gap-1.5 transition-all duration-300 hover:gap-2.5 hover:text-emerald-300 drop-shadow-[0_0_0px_rgba(110,231,183,0)] hover:drop-shadow-[0_4px_10px_rgba(110,231,183,0.2)]"
                >
                  {project.liveLinkText}
                </a>
              )}
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}