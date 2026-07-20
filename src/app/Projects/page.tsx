
const projectsData = [
  {
    id: 1,
    category: "INTERNSHIP PROJECT | 2025",
    title: "Kider - Kindergarden Website Reconfiguration",
    desc: "A high-fidelity, responsive frontend clone built with a clean code architecture. Features optimized image handling and lazy loading structures, resulting in a 30% page speed performance boost.",
    techStack: ["Next.js", "Tailwind CSS", "Optimization"],
    link: "https://github.com/sujitshahi/INTERN-PROJECT",
    linkText: "View on GitHub →",
    liveLink: "https://kider-garden.vercel.app",
    liveLinkText: "Live Demo ⚡",
    thumbnail: "/kider-garden.png"
  },
  // {
  //   id: 2,
  //   category: "PROJECT FOR CERTIFICATE | 2025",
  //   title: "E-commerce Website - E-Market",
  //   desc: "A frontend storefront that consumes product data via API to simulate a retail environment. Implemented client-side filtering and sorting algorithms alongside local state management for the shopping cart and checkout simulation.",
  //   techStack: ["Next.js", "Tailwind CSS", "Component Libraries"],
  //   link: "https://github.com/sujitshahi/E-market",
  //   linkText: "View on GitHub →",
  //   liveLink: "https://e-market-123.vercel.app/",
  //   liveLinkText: "Live Demo ⚡",
  //   thumbnail: "/e-market.png"
  // },
  {
    id: 3,
    category: "PROJECT | 2026",
    title: "Gantabya-Mobility - Transit Platform",
    desc: "A modern, high-performance transit and mobility web platform featuring a sleek, mobile-first user interface with modular design, optimized asset delivery.",
    techStack: ["Next.js", "Tailwind CSS", "Component Libraries"],
    link: "https://github.com/sujitshahi/gantabya-mobility",
    linkText: "View on GitHub →",
    liveLink: "https://gantabya-mobility-sujitshahi.vercel.app",
    liveLinkText: "Live Demo ⚡",
    thumbnail: "/gantabya.png"
  },

  
];

export default function Projects() {
  return (
    <div id="projects-page" className="block min-h-screen bg-[#0a0a0a] text-[#ededed] p-8">
      
      <div className="text-5xl h-20 my-8 w-fit font-medium bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent ">
        My Projects
      </div>
  
      <div className="projects-grid flex flex-col gap-12 my-8">
        
        {projectsData.map((project, index) => (
          <div 
            key={project.id} 
            className={`bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-4xl relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
              hover:border-[#a78bfa]/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] group reveal-card animate-in delay-100
              flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} 
              
          >
          
            {project.thumbnail && (
              <div className="w-full md:w-1/2 h-64 md:h-auto min-h-75 overflow-hidden bg-white/5 relative">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 absolute inset-0"
                  loading="lazy"
                />
              </div>
            )}

         
            <div className="p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-center">
              <h1 className="project-category text-xs text-purple-400 mb-2 tracking-widest font-medium uppercase">
                {project.category}
              </h1>
              
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
                  className="project-link text-white no-underline font-medium inline-flex items-center gap-1.5 transition-all duration-300 hover:gap-2.5 hover:text-[#a78bfa]"
                >
                  {project.linkText}
                </a>

                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-live-link text-emerald-500 no-underline font-medium inline-flex items-center gap-1.5 transition-all duration-300 hover:gap-2.5 hover:text-emerald-300 drop-shadow-[0_0_0px_rgba(110,231,183,0)] hover:drop-shadow-[0_4px_10px_rgba(110,231,183,0.2)]"
                  >
                    {project.liveLinkText}
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
        
      </div>
    </div>
  );
}