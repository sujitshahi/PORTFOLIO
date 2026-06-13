import TypedText from '@/TypedText/page';
import Image from 'next/image';


export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans overflow-x-hidden selection:bg-[#a78bfa]/30 bg-linear-r transiton-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
      <div className="max-w-325 mx-auto px-4 sm:px-8 pt-8 pb-16 relative z-10">
        
     
        <section className="min-h-[85vh] flex flex-col-reverse md:flex-row items-center gap-12 mb-12">
          
          
          <div className="flex-1 animate-[fadeInLeft_0.8s_ease-out_forwards]">
            <div className="bg-white/5 backdrop-blur-md px-4 py-1 rounded-full text-xs font-semibold tracking-wide w-fit border border-white/10 mb-4 animate-[pulse_2s_infinite]">
              ✦ OPEN FOR OPPORTUNITIES
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none bg-linear-to-r from-white via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent mb-4 bg-size-[200%_100%] hover:bg-size-[200%_100%] hover:bg-right transition-all duration-700 ease-in-out">
              Sujit Shahi
            </h1>
            
            <TypedText />
            
            <p className="text-lg text-neutral-400 max-w-125 mb-8 leading-relaxed">
              Front-End Developer with a full-stack foundation, specializing in responsive interfaces using HTML, CSS, and React. Passionate about crafting seamless user experiences.
            </p>
            
            <button className=" cursor-pointer transition-all duration-300 ease-in-out  bg-white text-black px-8 py-3.5 rounded-full hover:shadow-[0_4px_25px_rgba(167,139,250,0.4)] hover:scale-105">
              View my work →
            </button>
          </div>

     
          <div className="flex-[0.8] flex justify-center relative">
            <div className="absolute w-[320px] h-80 bg-linear-to-tr from-[#a78bfa]/20 to-transparent rounded-full blur-2xl -z-10" />
            
            <div className="relative group p-1.5 bg-linear-to-br from-[#a78bfa] via-[#60a5fa] to-[#c084fc] rounded-full transition-all duration-500 hover:scale-105">
              <Image 
                className="w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-[#0a0a0a]"
                src="/images/sujit-shahi.jpg" 
                alt="Sujit Shahi"
                width={280}
                height={280}
                priority
              />
              <div className="absolute bottom-5 right-7 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0a0a0a]" />
            </div>
          </div>
        </section>


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
            <div className="group bg-neutral-900/60 backdrop-blur-xl border border-white/5 rounded-4xl p-8 transition-all duration-300 ease-out hover:border-[#a78bfa]/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]">
              <div className="text-3xl mb-4">🎓</div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 tracking-wide transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#a78bfa]">NEB +2 - Management</h2>
              <div className="text-neutral-300 my-1">Carina International Academy, Kathmandu</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider font-medium mt-2">Graduated: 2016</div>
            </div>

           
            <div className="group bg-neutral-900/60 backdrop-blur-xl border border-white/5 rounded-4xl p-8 transition-all duration-300 ease-out hover:border-[#a78bfa]/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]">
              <div className="text-3xl mb-4">📚</div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 tracking-wide transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#a78bfa]">SEE</h2>
              <div className="text-neutral-300 my-1">Academy Of Sacred Hearts</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider font-medium mt-2">Graduated: 2013</div>
            </div>
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
        
            <div className="bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-4xl p-8 relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
               hover:border-[#a78bfa]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] group reveal-card animate-in delay-100">
              
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 tracking-wide transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#a78bfa]">
              💻 Languages
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm  duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)] hover:text-[#a78bfa]">JavaScript (ES6+)</span>
                <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)] hover:text-[#a78bfa]">HTML5</span>
                <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm   duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)] hover:text-[#a78bfa]">CSS3</span>
              </div>
            </div>

          
            <div className="bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-4xl p-8 relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
               hover:border-[#a78bfa]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] group reveal-card animate-in delay-100">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 tracking-wide transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#a78bfa]">
                ⚡ Frameworks
              </h3>
              
              <div className="flex flex-wrap gap-2.5">
                {/* <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-all duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)] hover:text-[#a78bfa]">React.js</span> */}
                <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-all duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)] hover:text-[#a78bfa]">Next.js</span>
                <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-all duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)] hover:text-[#a78bfa]">Tailwind CSS</span>
              </div>
            </div>

            
            <div className="bg-[#141414]/40 backdrop-blur-md border border-white/5 rounded-4xl p-8 relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
               hover:border-[#a78bfa]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] group reveal-card animate-in delay-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 tracking-wide transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#a78bfa]">
                🛠️ Tools
              </h3>
             
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-all duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)] hover:text-[#a78bfa]">Git & GitHub</span>
                <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-all duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)] hover:text-[#a78bfa]">VS Code</span>
                <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-4 py-2 rounded-full text-sm text-neutral-200 transition-all duration-300 hover:bg-[#a78bfa]/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(167,139,250,0.2)] hover:text-[#a78bfa]">Figma</span>
              </div>
            </div>
          </div>
        </section>

      </div>






  
    </main>
  );
}