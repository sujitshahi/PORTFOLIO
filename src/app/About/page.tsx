


export default function About() {
  return (
    <div id="about-page" className="max-w-325 mx-auto px-8 py-8 md:py-16 text-[#ededed] font-sans overflow-hidden">
      
      {/* =========================================================================
          SECTION TITLE: ABOUT MYSELF
          ========================================================================= */}
      <div className=" text-[2rem] md:text-[2.8rem] font-bold mt-8 mb-12 flex items-center gap-3 relative w-fit
        after:content-[''] after:absolute after:-bottom-2 after:left-0 
        after:h-0.75 after:bg-linear-to-r after:from-[#a78bfa] after:to-[#60a5fa] 
        animate-title after:w-full after:transition-[width] after:duration-1000 after:ease-out after:delay-300">
        About <span className="bg-white/10 px-4 py-1 rounded-[60px] text-[0.9rem] backdrop-blur-xs font-normal border border-white/5 shadow-inner">Myself</span>
      </div>
      
      {/* About Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 about-grid">
        {/* Card 1: Who Am I? */}
        <div className="bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-4xl p-8 relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
          hover:border-[#a78bfa]/40 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(167,139,250,0.15)] group reveal-card animate-in delay-100">
          <div className="absolute -inset-px bg-linear-to-r from-[#a78bfa]/20 to-[#60a5fa]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-4xl blur-sm pointer-events-none -z-10" />
          <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2 tracking-wide transition-transform duration-300 group-hover:translate-x-1">
            👋 Who Am I?
          </h3>
          <p className="text-[#aaa] leading-relaxed mb-4 text-[0.95rem]">
            I'm <strong className="text-white font-medium">Sujit Shahi</strong>, a passionate Front-End Developer with a full-stack foundation based in Kathmandu. I specialize in building highly responsive, interactive interfaces with modern web architectures.
          </p>
          <p className="text-[#aaa] leading-relaxed text-[0.95rem]">
            My journey into system development thrives on solving complex structural problems and turning design constraints into pristine layouts.
          </p>
        </div>
        
        {/* Card 2: My Approach */}
        <div className="bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-4xl p-8 relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
          hover:border-[#60a5fa]/40 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(96,165,250,0.15)] group reveal-card animate-in delay-200">
          <div className="absolute -inset-px bg-linear-to-r from-[#60a5fa]/20 to-[#a78bfa]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-4xl blur-sm pointer-events-none -z-10" />
          <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2 tracking-wide transition-transform duration-300 group-hover:translate-x-1">
            💡 My Approach
          </h3>
          <p className="text-[#aaa] leading-relaxed text-[0.95rem] mb-6">
            I prioritize maintainable clean modules, precise responsive breakpoints, visual feedback, and asset delivery optimization.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {['JavaScript (ES6+)', 'React.js', 'Next.js', 'Tailwind CSS'].map((skill, index) => (
              <span 
                key={index} 
                className="inline-block bg-[#a78bfa]/10 border border-[#a78bfa]/20 px-4 py-1.5 rounded-[40px] text-[0.85rem] font-medium tracking-wide text-[#cbd5e1]
                  transition-all duration-300 ease-out hover:bg-linear-to-r hover:from-[#a78bfa] hover:to-[#60a5fa] hover:text-black hover:border-transparent hover:-translate-y-1 hover:shadow-lg hover:shadow-[#a78bfa]/20 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION TITLE: ACHIEVEMENTS & AWARDS
          ========================================================================= */}
      <div className="section-title text-[2rem] md:text-[2.8rem] font-bold tracking-tight mt-20 mb-12 flex items-center gap-3 relative w-fit select-none reveal-title
        after:content-[''] after:absolute after:-bottom-2 after:left-0 
        after:h-0.75 after:bg-linear-to-r after:from-[#a78bfa] after:to-[#60a5fa] 
        animate-title after:w-full after:transition-[width] after:duration-1000 after:ease-out after:delay-300">
        Achievements <span className="bg-white/10 px-4 py-1 rounded-[60px] text-[0.9rem] backdrop-blur-xs font-normal border border-white/5 shadow-inner">& Awards</span>
      </div>
      
      {/* Achievements Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 achievements-grid">
        <div className="bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-4xl p-8 relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
          hover:border-[#a78bfa]/30 hover:-translate-y-1.5 hover:shadow-xl group reveal-card animate-in delay-100">
          <h3 className="text-lg font-semibold mb-3 text-white tracking-wide group-hover:text-[#a78bfa] transition-colors duration-300">
            🏆 Performance Optimization
          </h3>
          <p className="text-[#aaa] text-[0.9rem] leading-relaxed">30% runtime delivery speed improvement on production builds.</p>
        </div>
        <div className="bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-4xl p-8 relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
          hover:border-[#a78bfa]/30 hover:-translate-y-1.5 hover:shadow-xl group reveal-card animate-in delay-200">
          <h3 className="text-lg font-semibold mb-3 text-white tracking-wide group-hover:text-[#a78bfa] transition-colors duration-300">
            🎓 Industry Training Drive
          </h3>
          <p className="text-[#aaa] text-[0.9rem] leading-relaxed">Advanced Stack Certification | MindRisers Institute.</p>
        </div>
        <div className="bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-4xl p-8 relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
          hover:border-[#a78bfa]/30 hover:-translate-y-1.5 hover:shadow-xl group reveal-card animate-in delay-300">
          <h3 className="text-lg font-semibold mb-2 text-white tracking-wide group-hover:text-[#a78bfa] transition-colors duration-300">
            📜 Full-Stack Certification
          </h3>
          <p className="text-[#aaa] text-[0.9rem] leading-relaxed mb-4">Core validation across systems design & layout engineering blueprints.</p>
          <a href="https://www.mindrisers.com.np/certificate/validate/MR-82006-WD" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#a78bfa] hover:text-white transition-all duration-300 font-medium text-sm group/link">
            Verify Credentials <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* =========================================================================
          SECTION TITLE: LANGUAGES I SPEAK
          ========================================================================= */}
      <div className="section-title text-[2rem] md:text-[2.8rem] font-bold tracking-tight mt-20 mb-12 flex items-center gap-3 relative w-fit select-none reveal-title
        after:content-[''] after:absolute after:-bottom-2 after:left-0 
        after:h-0.75 after:bg-linear-to-r after:from-[#a78bfa] after:to-[#60a5fa] 
        animate-title after:w-full after:transition-[width] after:duration-1000 after:ease-out after:delay-300">
        Languages <span className="bg-white/10 px-4 py-1 rounded-[60px] text-[0.9rem] backdrop-blur-md font-normal border border-white/5 shadow-inner">I Speak</span>
      </div>
      
      {/* Languages Badges */}
      <div className="text-center my-6 flex flex-wrap justify-start sm:justify-center gap-3">
        {[
          { label: 'English', flag: '🇬🇧' },
          { label: 'Nepali', flag: '🇳🇵' },
          { label: 'Hindi', flag: '🇮🇳' },
          { label: 'Newari', flag: '🗣️' }
        ].map((lang, idx) => (
          <span 
            key={idx}
            className="inline-flex items-center gap-2 bg-[#1c1c1e]/60 border border-white/5 px-5 py-2.5 rounded-[40px] text-[0.9rem] tracking-wide text-neutral-300
              transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:bg-[#a78bfa]/10 hover:border-[#a78bfa]/40 hover:-translate-y-1 hover:scale-105 hover:text-white cursor-default select-none shadow-sm"
          >
            <span>{lang.flag}</span>
            <span className="font-medium">{lang.label}</span>
          </span>
        ))}
      </div>

    </div>
  );
}