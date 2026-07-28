import { cn } from "@/lib/utils";
import TypedText from '@/TypedText/page';
import Image from 'next/image';

export default function page() {
  return (
    <main className="max-w-325 px-8 py-8 md:py-16 text-[#ededed] font-sans overflow-hidden bg-[#0a0a0a]">

      <section className="flex flex-col-reverse md:flex-row items-center gap-12 mb-12">
        <div className="flex-1 animate-[fadeInLeft_0.8s_ease-out_forwards]">
          <div className="bg-white/5 backdrop-blur-md px-4 py-1 rounded-full text-xs font-semibold tracking-wide w-fit border border-white/10 mb-4 animate-[pulse_2s_infinite]">
            ✦ OPEN FOR OPPORTUNITIES
          </div>
            
        <h1 className="h-22 text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 bg-linear-to-r from-violet-400 to-blue-400 inline-block bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 ease-in-out">
          Sujit Shahi
        </h1>
          
          <TypedText />
          
          <p className="text-lg text-neutral-400 max-w-125 mb-8 leading-relaxed">
            Front-End Developer with a full-stack foundation, specializing in responsive interfaces using HTML, CSS, and React. Passionate about crafting seamless user experiences.
          </p>
          
          <button type="button" className="cursor-pointer transition-shadow duration-300 ease-in-out bg-white text-black px-8 py-3.5 rounded-full hover:shadow-[0_4px_25px_rgba(167,139,250,0.4)] hover:scale-105">
            View my work →
          </button>
        </div>

        <div className="flex-[0.8] flex justify-center relative">
          <div className="absolute w-[320px] h-80 bg-linear-to-tr from-[#a78bfa]/20 to-transparent rounded-full blur-2xl -z-10" />
          
          <div className="relative group p-1.5 bg-linear-to-br from-[#a78bfa] via-[#60a5fa] to-[#c084fc] rounded-full transition-transform duration-500 hover:scale-105">
            <Image 
              className="w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-[#0a0a0a]"
              src="/photo3.jpg" 
              alt="Sujit Shahi"
              width={280}
              height={280}
              priority
            />
            <div className="absolute bottom-5 right-7 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0a0a0a]" />
          </div>
        </div>
      </section>

      <div className="text-[2rem] md:text-[2.8rem] font-bold mt-8 mb-12 flex items-center gap-3 relative w-fit
        after:absolute after:-bottom-2 after:left-0 
        after:h-0.75 after:bg-linear-to-r after:from-[#a78bfa] after:to-[#60a5fa] 
        after:w-full">
        <h1 className="bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          About
        </h1>

        <h1 className="bg-white/10 px-4 py-1 rounded-[60px] text-[0.9rem] text-white backdrop-blur-xs font-normal border border-white/5 shadow-inner">
          Myself
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 about-grid">
        <div className="bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-4xl p-8 relative overflow-hidden transition-shadow duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
          hover:border-[#a78bfa]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] group reveal-card animate-in delay-100">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 tracking-wide transition-colors duration-300 group-hover:translate-x-1 group-hover:text-[#a78bfa]">
            👋 Who Am I?
          </h3>
          <p className="text-[#aaa] leading-relaxed mb-4 text-[0.95rem]">
            I'm <strong className="text-white font-medium">Sujit Shahi</strong>, a passionate Front-End Developer with a full-stack foundation based in Kathmandu. I specialize in building highly responsive, interactive interfaces with modern web architectures.
          </p>
          <p className="text-[#aaa] leading-relaxed text-[0.95rem]">
            My journey into system development thrives on solving complex structural problems and turning design constraints into pristine layouts.
          </p>
        </div>
        
        <div className="bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-4xl p-8 relative overflow-hidden transition-colors  duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
          hover:border-[#a78bfa]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] group reveal-card animate-in delay-100">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 tracking-wide transition-colors duration-300 group-hover:translate-x-1 group-hover:text-[#a78bfa]">
            💡 My Approach
          </h3>
          <p className="text-[#aaa] leading-relaxed text-[0.95rem] mb-6">
            I prioritize maintainable clean modules, precise responsive breakpoints, visual feedback, and asset delivery optimization.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {['JavaScript (ES6+)', 'React.js', 'Next.js', 'Tailwind CSS'].map((skill) => (
              <span 
                key={skill} 
                className="inline-block bg-[#a78bfa]/10 border border-[#a78bfa]/20 px-4 py-1.5 rounded-[40px] text-[0.85rem] font-medium tracking-wide text-[#cbd5e1]
                  transition-colors  duration-300 ease-out hover:bg-linear-to-r hover:border-transparent hover:-translate-y-1 hover:shadow-lg hover:shadow-[#a78bfa]/20 cursor-default hover:text-[#a78bfa]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="mb-16">
        <div className="text-[2rem] md:text-[2.8rem] font-bold mt-8 mb-12 flex items-center gap-3 relative w-fit
          after:absolute after:-bottom-2 after:left-0 
          after:h-0.75 after:bg-linear-to-r after:from-[#a78bfa] after:to-[#60a5fa] 
          after:w-full">
          
          <h2 className="bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>

          <span className="bg-white/10 px-4 py-1 rounded-[60px] text-[0.9rem] text-white backdrop-blur-xs font-normal border border-white/5 shadow-inner">
            background
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-neutral-900/60 backdrop-blur-xl border border-white/5 rounded-4xl p-8 transition-colors  duration-300 ease-out hover:border-[#a78bfa]/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]">
            <h1 className="text-3xl mb-4">🎓</h1>
            <h1 className="text-xl font-semibold mb-4 flex items-center gap-2 tracking-wide transition-colors duration-300 group-hover:translate-x-1 group-hover:text-[#a78bfa]">NEB +2 - Management</h1>
            <h1 className="text-neutral-300 my-1">Carina International Academy, Kathmandu</h1>
            <h1 className="text-xs text-neutral-500 uppercase tracking-wider font-medium mt-2">Graduated: 2016</h1>
          </div>

          <div className="group bg-neutral-900/60 backdrop-blur-xl border border-white/5 rounded-4xl p-8 transition-colors duration-300 ease-out hover:border-[#a78bfa]/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]">
            <div className="text-3xl mb-4">📚</div>
            <h1 className="text-xl font-semibold mb-4 flex items-center gap-2 tracking-wide transition-colors duration-300 group-hover:translate-x-1 group-hover:text-[#a78bfa]">SEE</h1>
            <h1 className="text-neutral-300 my-1">Academy Of Sacred Hearts</h1>
            <h1 className="text-xs text-neutral-500 uppercase tracking-wider font-medium mt-2">Graduated: 2013</h1>
          </div>
        </div>
      </section>

      <section className="section-title text-[2rem] md:text-[2.8rem] font-bold tracking-tight mt-20 mb-12 flex items-center gap-3 relative w-fit select-none reveal-title
        after:content-[''] after:absolute after:-bottom-2 after:left-0 
        after:h-0.75 after:bg-linear-to-r after:from-[#a78bfa] after:to-[#60a5fa] 
        animate-title after:w-full after:transition-[width] after:duration-1000 after:ease-out after:delay-300">
        
        <h1 className="bg-linear-to-r from-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
          Achievements
        </h1>

        <h1 className="bg-white/10 px-4 py-1 rounded-[60px] text-[0.9rem] text-white backdrop-blur-xs font-normal border border-white/5 shadow-inner">
          & Awards
        </h1>
      </section>
      
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        <div className="bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-4xl p-8 relative overflow-hidden transition-colors  duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
          hover:border-[#a78bfa]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] group reveal-card animate-in delay-100">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 tracking-wide  transition-colors duration-300 group-hover:translate-x-1 group-hover:text-[#a78bfa]">
            🏆 Performance Optimization
          </h3>
          <p className="text-[#aaa] text-[0.9rem] leading-relaxed">30% runtime delivery speed improvement on production builds.</p>
        </div>

        <div className="bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-4xl p-8 relative overflow-hidden transition-colors  duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
          hover:border-[#a78bfa]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] group reveal-card animate-in delay-100">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 tracking-wide transition-colors duration-300 group-hover:translate-x-1 group-hover:text-[#a78bfa]">
            🎓 Industry Training Drive
          </h3>
          <p className="text-[#aaa] text-[0.9rem] leading-relaxed">Advanced Stack Certification | MindRisers Institute.</p>
        </div>

        <div className="bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-4xl p-8 relative overflow-hidden transition-colors  duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
          hover:border-[#a78bfa]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] group reveal-card animate-in delay-100">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 tracking-wide  transition-colors duration-300 group-hover:translate-x-1 group-hover:text-[#a78bfa]">
            📜 Full-Stack Certification
          </h3>
          <p className="text-[#aaa] text-[0.9rem] leading-relaxed mb-4">Core validation across systems design & layout engineering blueprints.</p>
          <a href="https://www.mindrisers.com.np/certificate/validate/MR-82006-WD" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-white hover:text-[#a78bfa] transition-colors duration-300 font-medium text-sm group/link">
            Verify Credentials <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
          </a>
        </div>
      </section>

      <section className="mb-16">
        <div className="text-[2rem] md:text-[2.8rem] font-bold mt-8 mb-12 flex items-center gap-3 relative w-fit
          after:absolute after:-bottom-2 after:left-0 
          after:h-0.75 after:bg-linear-to-r after:from-[#a78bfa] after:to-[#60a5fa] 
          after:w-full">
          
          <h2 className="bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Technical
          </h2>

          <span className="bg-white/10 px-4 py-1 rounded-[60px] text-[0.9rem] text-white backdrop-blur-xs font-normal border border-white/5 shadow-inner">
            Skills
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-4xl p-8 relative overflow-hidden transition-colors  duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
              hover:border-[#a78bfa]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] group reveal-card animate-in delay-100">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 tracking-wide  transition-colors duration-300 group-hover:translate-x-1 group-hover:text-[#a78bfa]">
              💻 Languages
            </h3>
            <div className="flex flex-wrap gap-2.5">
              <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm transition-colors  duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)] hover:text-[#a78bfa]">JavaScript (ES6+)</span>
              <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm transition-colors duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)] hover:text-[#a78bfa]">HTML5</span>
              <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm transition-colors  duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)] hover:text-[#a78bfa]">CSS3</span>
            </div>
          </div>

          <div className="bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-4xl p-8 relative overflow-hidden transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
              hover:border-[#a78bfa]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] group reveal-card animate-in delay-100">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 tracking-wide transition-colors duration-300 group-hover:translate-x-1 group-hover:text-[#a78bfa]">
              ⚡ Frameworks
            </h3>
            <div className="flex flex-wrap gap-2.5">
              <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-colors  duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)] hover:text-[#a78bfa]">Next.js</span>
              <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-colors  duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)] hover:text-[#a78bfa]">Tailwind CSS</span>
            </div>
          </div>

          <div className="bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-4xl p-8 relative overflow-hidden transition-colors  duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
              hover:border-[#a78bfa]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] group reveal-card animate-in delay-100">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 tracking-wide  transition-colors duration-300 group-hover:translate-x-1 group-hover:text-[#a78bfa]">
              🛠️ Tools
            </h3>
            <div className="flex flex-wrap gap-2.5">
              <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-colors duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)] hover:text-[#a78bfa]">Git & GitHub</span>
              <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-colors  duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)] hover:text-[#a78bfa]">VS Code</span>
              <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-colors  duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)] hover:text-[#a78bfa]">Figma</span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-title text-[2rem] md:text-[2.8rem] font-bold tracking-tight mt-20 mb-12 flex items-center gap-3 relative w-fit select-none reveal-title
            after:content-[''] after:absolute after:-bottom-2 after:left-0 
            after:h-0.75 after:bg-linear-to-r after:from-[#a78bfa] after:to-[#60a5fa] bg-linear-to-r from-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent
            animate-title after:w-full after:transition-[width] after:duration-1000 after:ease-out after:delay-300">
        Languages<span className="bg-white/10 px-4 py-1 rounded-[60px] text-[0.9rem] backdrop-blur-md font-normal border border-white/5 shadow-inner text-white">I Speak</span>
      </div>

      <div className="text-center my-6 flex flex-wrap justify-start sm:justify-center gap-3">
        {[
          { label: 'English' },
          { label: 'Nepali' },
          { label: 'Hindi' },
          { label: 'Newari' },
        ].map((lang) => (
          <span 
            key={lang.label}
            className="inline-flex items-center gap-2 bg-[#1c1c1e]/60 border border-white/5 px-5 py-2.5 rounded-[40px] text-[0.9rem] tracking-wide text-neutral-300 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]
              transition-colors duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:bg-[#a78bfa]/10 hover:border-[#a78bfa]/40 hover:-translate-y-1 hover:scale-105 hover:text-white cursor-default select-none shadow-sm"
          >
            <span className="font-medium hover:text-[#a78bfa]">{lang.label}</span>
          </span>
        ))}
      </div>

    </main>
  );
}