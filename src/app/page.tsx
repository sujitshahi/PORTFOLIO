import TypedText from '@/TypedText/page';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans overflow-x-hidden selection:bg-[#a78bfa]/30">
      <div className="max-w-325 mx-auto px-4 sm:px-8 pt-8 pb-16 relative z-10">
        
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col-reverse md:flex-row items-center gap-12 mb-12">
          
          {/* Left Text Column */}
          <div className="flex-1 animate-[fadeInLeft_0.8s_ease-out_forwards]">
            <div className="bg-white/5 backdrop-blur-md px-4 py-1 rounded-full text-xs font-semibold tracking-wide w-fit border border-white/10 mb-4 animate-[pulse_2s_infinite]">
              ✦ OPEN FOR OPPORTUNITIES
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none bg-linear-to-r from-white via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent mb-4 bg-[length:100%_100%] hover:bg-[length:200%_100%] hover:bg-right transition-all duration-700 ease-in-out">
              Sujit Shahi
            </h1>
            
            <TypedText />
            
            <p className="text-lg text-neutral-400 max-w-125 mb-8 leading-relaxed">
              Front-End Developer with a full-stack foundation, specializing in responsive interfaces using HTML, CSS, and React. Passionate about crafting seamless user experiences.
            </p>
            
            <button className="relative group overflow-hidden bg-linear-to-r from-white to-neutral-200 text-black px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 shadow-[0_4px_15px_rgba(255,255,255,0.1)] hover:shadow-[0_4px_25px_rgba(167,139,250,0.4)] hover:scale-105 active:scale-95 flex items-center gap-2">
              <span className="relative z-10 transition-all duration-300 group-hover:pr-2">View my work →</span>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-black/5 rounded-full transition-all duration-500 ease-out group-hover:w-72 group-hover:h-72" />
            </button>
          </div>

          {/* Right Image Column */}
          <div className="flex-[0.8] flex justify-center relative">
            <div className="absolute w-[320px] h-[320px] bg-gradient-to-tr from-[#a78bfa]/20 to-transparent rounded-full blur-2xl -z-10" />
            
            <div className="relative group p-1.5 bg-gradient-to-br from-[#a78bfa] via-[#60a5fa] to-[#c084fc] rounded-full transition-all duration-500 hover:scale-105">
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

        {/* EDUCATION SECTION */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight flex items-center gap-3 relative before:absolute before:-bottom-2 before:left-0 before:w-32 before:h-[3px] before:bg-gradient-to-r before:from-[#a78bfa] before:to-[#60a5fa]">
            Education <span className="bg-white/5 px-3 py-1 rounded-full text-sm font-normal backdrop-blur-sm border border-white/5">Background</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-900/60 backdrop-blur-xl border border-white/5 rounded-[32px] p-8 transition-all duration-300 ease-out hover:border-[#a78bfa]/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]">
              <div className="text-3xl mb-4">🎓</div>
              <div className="font-semibold text-xl text-[#a78bfa]">NEB +2 - Management</div>
              <div className="text-neutral-300 my-1">Carina International Academy, Kathmandu</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider font-medium mt-2">Graduated: 2016</div>
            </div>

            <div className="bg-neutral-900/60 backdrop-blur-xl border border-white/5 rounded-[32px] p-8 transition-all duration-300 ease-out hover:border-[#a78bfa]/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]">
              <div className="text-3xl mb-4">📚</div>
              <div className="font-semibold text-xl text-[#a78bfa]">SEE</div>
              <div className="text-neutral-300 my-1">Academy Of Sacred Hearts</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider font-medium mt-2">Graduated: 2013</div>
            </div>
          </div>
        </section>

      





        <section className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight flex items-center gap-3 relative before:absolute before:-bottom-2 before:left-0 before:w-32 before:h-[3px] before:bg-gradient-to-r before:from-[#a78bfa] before:to-[#60a5fa]">
          Technical <span className="bg-white/5 px-3 py-1 rounded-full text-sm font-normal backdrop-blur-sm">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Replaced with HTML div */}
  
          <div className="bg-neutral-900/60 backdrop-blur-xl border border-transparent rounded-[32px] p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] hover:border-[#a78bfa]/50">
            <h3 className="text-base font-bold text-[#a78bfa] mb-4 flex items-center gap-2">💻 Languages</h3>
            <div className="flex flex-wrap gap-2.5">
              <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-all duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)]">JavaScript (ES6+)</span>
              <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-all duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)]">HTML5</span>
              <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-all duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)]">CSS3</span>
            </div>
          </div>

          {/* Card 2 - Replaced with HTML div */}
          <div className="bg-neutral-900/60 backdrop-blur-xl border border-transparent rounded-[32px] p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] hover:border-[#a78bfa]/50">
            <h3 className="text-base font-bold text-[#a78bfa] mb-4 flex items-center gap-2">⚡ Frameworks</h3>
            <div className="flex flex-wrap gap-2.5">
              <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-all duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)]">React.js</span>
              <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-all duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)]">Next.js</span>
              <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-all duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)]">Tailwind CSS</span>
            </div>
          </div>

          {/* Card 3 - Replaced with HTML div */}
         <div className="bg-neutral-900/60 backdrop-blur-xl border border-transparent rounded-[32px] p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] hover:border-[#a78bfa]/50">
            <h3 className="text-base font-bold text-[#a78bfa] mb-4 flex items-center gap-2">🛠️ Tools</h3>
            <div className="flex flex-wrap gap-2.5">
              <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-all duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)]">Git & GitHub</span>
              <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-all duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)]">VS Code</span>
              <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-all duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)]">Figma</span>
            </div>
          </div>
        </div>
      </section>

      </div>
    </main>
  );
}