

// export default function About() {
//   return (
//     <div id="about-page" className="page">
//     <div className="section-title reveal-title">About <span>Myself</span></div>
//     <div className="about-grid">
//       <div className="about-card reveal-card">
//         <h3>👋 Who Am I?</h3>
//         <p>I'm <strong>Sujit Shahi</strong>, a passionate Full-Stack Developer from Chamati, Kathmandu. I specialize in building responsive, user-friendly web applications with modern technologies.</p>
//         <p>My journey in web development started with a curiosity for how websites work, which evolved into a deep passion for creating seamless digital experiences.</p>
//       </div>
//       <div className="about-card reveal-card">
//         <h3>💡 My Approach</h3>
//         <p>I focus on clean code, responsive design, performance optimization, and continuous learning.</p>
//         <div style={{ marginTop: '1rem' }}>
//           <span className="skill-badge">JavaScript (ES6+)</span>
//           <span className="skill-badge">React.js</span>
//           <span className="skill-badge">Next.js</span>
//           <span className="skill-badge">Tailwind CSS</span>
//         </div>
//       </div>
//     </div>
//     <div className="section-title reveal-title">Achievements <span>& Awards</span></div>
//     <div className="achievements-grid">
//       <div className="achievement-card reveal-card"><h3>🏆 Performance Optimization</h3><p>30% speed improvement on Kider Web Clone</p></div>
//       <div className="achievement-card reveal-card"><h3>🎓 Internship Award</h3><p>MindRisers Institute of Technology | 2024</p></div>
//       <div className="achievement-card reveal-card"><h3>📜 Full-Stack Certification</h3><p>JavaScript, React, and Responsive Web Design</p><a href="https://www.mindrisers.com.np/certificate/validate/MR-82006-WD" target="_blank" className="project-link">Verify →</a></div>
//     </div>
//     <div className="section-title reveal-title">Languages <span>I Speak</span></div>
//     <div style={{ textAlign: 'center', margin: '1rem 0' }}>
//       <span className="skill-badge">🇬🇧 English</span>
//       <span className="skill-badge">🇳🇵 Nepali</span>
//       <span className="skill-badge">🇮🇳 Hindi</span>
//       <span className="skill-badge">🗣️ Newari</span>
//     </div>
//   </div>

//   )
// }





// export default function About() {
//   return (
//     <div id="about-page" className="max-w-6xl mx-auto px-4 py-16 text-gray-300 font-sans">
      
//       {/* --- Section: About Myself --- */}
//       <div className="text-3xl md:text-4xl font-bold tracking-tight mt-6 mb-8 text-center text-white reveal-title">
//         About <span className="text-[#00d65c]">Myself</span>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 about-grid">
//         <div className="bg-[#111111] border border-neutral-800 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#00d65c] hover:shadow-[0_10px_30px_-10px_rgba(0,214,92,0.15)] reveal-card">
//           <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">👋 Who Am I?</h3>
//           <p className="text-neutral-400 leading-relaxed mb-4">
//             I'm <strong className="text-white">Sujit Shahi</strong>, a passionate Full-Stack Developer from Chamati, Kathmandu. I specialize in building responsive, user-friendly web applications with modern technologies.
//           </p>
//           <p className="text-neutral-400 leading-relaxed">
//             My journey in web development started with a curiosity for how websites work, which evolved into a deep passion for creating seamless digital experiences.
//           </p>
//         </div>
        
//         <div className="bg-[#111111] border border-neutral-800 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#00d65c] hover:shadow-[0_10px_30px_-10px_rgba(0,214,92,0.15)] reveal-card">
//           <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">💡 My Approach</h3>
//           <p className="text-neutral-400 leading-relaxed">
//             I focus on clean code, responsive design, performance optimization, and continuous learning.
//           </p>
//           <div className="mt-6 flex flex-wrap gap-2">
//             <span className="inline-block bg-neutral-900 text-[#00d65c] border border-green-500/20 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[#00d65c] hover:text-black hover:scale-105">JavaScript (ES6+)</span>
//             <span className="inline-block bg-neutral-900 text-[#00d65c] border border-green-500/20 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[#00d65c] hover:text-black hover:scale-105">React.js</span>
//             <span className="inline-block bg-neutral-900 text-[#00d65c] border border-green-500/20 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[#00d65c] hover:text-black hover:scale-105">Next.js</span>
//             <span className="inline-block bg-neutral-900 text-[#00d65c] border border-green-500/20 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[#00d65c] hover:text-black hover:scale-105">Tailwind CSS</span>
//           </div>
//         </div>
//       </div>

//       {/* --- Section: Achievements --- */}
//       <div className="text-3xl md:text-4xl font-bold tracking-tight mt-12 mb-8 text-center text-white reveal-title">
//         Achievements <span className="text-[#00d65c]">& Awards</span>
//       </div>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 achievements-grid">
//         <div className="bg-[#111111] border border-neutral-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00d65c] hover:shadow-[0_10px_30px_-10px_rgba(0,214,92,0.15)] reveal-card">
//           <h3 className="text-lg font-semibold mb-3 text-white">🏆 Performance Optimization</h3>
//           <p className="text-neutral-400 text-sm leading-relaxed">30% speed improvement on Kider Web Clone</p>
//         </div>
        
//         <div className="bg-[#111111] border border-neutral-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00d65c] hover:shadow-[0_10px_30px_-10px_rgba(0,214,92,0.15)] reveal-card">
//           <h3 className="text-lg font-semibold mb-3 text-white">🎓 Internship Award</h3>
//           <p className="text-neutral-400 text-sm leading-relaxed">MindRisers Institute of Technology | 2024</p>
//         </div>
        
//         <div className="bg-[#111111] border border-neutral-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00d65c] hover:shadow-[0_10px_30px_-10px_rgba(0,214,92,0.15)] reveal-card">
//           <h3 className="text-lg font-semibold mb-2 text-white">📜 Full-Stack Certification</h3>
//           <p className="text-neutral-400 text-sm leading-relaxed mb-3">JavaScript, React, and Responsive Web Design</p>
//           <a href="https://www.mindrisers.com.np/certificate/validate/MR-82006-WD" target="_blank" rel="noopener noreferrer" className="inline-block text-[#00d65c] font-semibold text-sm hover:text-[#00b34d] hover:underline transition-colors">
//             Verify →
//           </a>
//         </div>
//       </div>

//       {/* --- Section: Languages --- */}
//       <div className="text-3xl md:text-4xl font-bold tracking-tight mt-12 mb-6 text-center text-white reveal-title">
//         Languages <span className="text-[#00d65c]">I Speak</span>
//       </div>
      
//       <div className="text-center my-4 flex flex-wrap justify-center gap-2">
//         <span className="inline-block bg-neutral-900 text-[#00d65c] border border-green-500/20 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[#00d65c] hover:text-black hover:scale-105">🇬🇧 English</span>
//         <span className="inline-block bg-neutral-900 text-[#00d65c] border border-green-500/20 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[#00d65c] hover:text-black hover:scale-105">🇳🇵 Nepali</span>
//         <span className="inline-block bg-neutral-900 text-[#00d65c] border border-green-500/20 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[#00d65c] hover:text-black hover:scale-105">🇮🇳 Hindi</span>
//         <span className="inline-block bg-neutral-900 text-[#00d65c] border border-green-500/20 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[#00d65c] hover:text-black hover:scale-105">🗣️ Newari</span>
//       </div>
//     </div>
//   );
// }





export default function About() {
  return (
    <div id="about-page" className="max-w-[1300px] mx-auto px-8 py-8 md:py-16 text-[#ededed] font-sans">
      
      {/* Section Title: About Myself */}
      <div className="section-title text-[2rem] md:text-[2.8rem] font-bold tracking-tight mt-8 mb-8 flex items-center gap-3 relative w-fit after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:height-[3px] after:bg-gradient-to-r after:from-[#a78bfa] after:to-[#60a5fa] reveal-title animate-title">
        About <span className="bg-white/10 px-3 py-1 rounded-[60px] text-[0.9rem] backdrop-blur-[4px] font-normal">Myself</span>
      </div>
      
      {/* About Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 about-grid">
        {/* Card 1 */}
        <div className="bg-[#141414]/60 backdrop-blur-[12px] border border-white/5 rounded-[32px] p-8 relative overflow-hidden transition-all duration-400 cubic-bezier(0.2,0.9,0.4,1.2) hover:border-[#a78bfa]/50 hover:-translate-y-2 hover:shadow-[0_25px_45px_-12px_rgba(0,0,0,0.6)] group reveal-card animate-in">
          {/* Subtle radial inner gradient flare on hover */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <h3 className="text-xl font-semibold mb-4 text-white">👋 Who Am I?</h3>
          <p className="text-[#aaa] leading-relaxed mb-4">
            I'm <strong className="text-white">Sujit Shahi</strong>, a passionate Full-Stack Developer from Chamati, Kathmandu. I specialize in building responsive, user-friendly web applications with modern technologies.
          </p>
          <p className="text-[#aaa] leading-relaxed">
            My journey in web development started with a curiosity for how websites work, which evolved into a deep passion for creating seamless digital experiences.
          </p>
        </div>
        
        {/* Card 2 */}
        <div className="bg-[#141414]/60 backdrop-blur-[12px] border border-white/5 rounded-[32px] p-8 relative overflow-hidden transition-all duration-400 cubic-bezier(0.2,0.9,0.4,1.2) hover:border-[#a78bfa]/50 hover:-translate-y-2 hover:shadow-[0_25px_45px_-12px_rgba(0,0,0,0.6)] group reveal-card animate-in">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <h3 className="text-xl font-semibold mb-4 text-white">💡 My Approach</h3>
          <p className="text-[#aaa] leading-relaxed">
            I focus on clean code, responsive design, performance optimization, and continuous learning.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-block bg-[#a78bfa]/20 border border-[#a78bfa]/30 px-5 py-2 rounded-[40px] text-[0.9rem] transition-all duration-300 hover:bg-[#a78bfa]/40 hover:-translate-y-0.5 hover:rotate-2">JavaScript (ES6+)</span>
            <span className="inline-block bg-[#a78bfa]/20 border border-[#a78bfa]/30 px-5 py-2 rounded-[40px] text-[0.9rem] transition-all duration-300 hover:bg-[#a78bfa]/40 hover:-translate-y-0.5 hover:rotate-2">React.js</span>
            <span className="inline-block bg-[#a78bfa]/20 border border-[#a78bfa]/30 px-5 py-2 rounded-[40px] text-[0.9rem] transition-all duration-300 hover:bg-[#a78bfa]/40 hover:-translate-y-0.5 hover:rotate-2">Next.js</span>
            <span className="inline-block bg-[#a78bfa]/20 border border-[#a78bfa]/30 px-5 py-2 rounded-[40px] text-[0.9rem] transition-all duration-300 hover:bg-[#a78bfa]/40 hover:-translate-y-0.5 hover:rotate-2">Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* Section Title: Achievements */}
      <div className="section-title text-[2rem] md:text-[2.8rem] font-bold tracking-tight mt-16 mb-8 flex items-center gap-3 relative w-fit after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:height-[3px] after:bg-gradient-to-r after:from-[#a78bfa] after:to-[#60a5fa] reveal-title animate-title">
        Achievements <span className="bg-white/10 px-3 py-1 rounded-[60px] text-[0.9rem] backdrop-blur-[4px] font-normal">& Awards</span>
      </div>
      
      {/* Achievements Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8 achievements-grid">
        <div className="bg-[#141414]/60 backdrop-blur-[12px] border border-white/5 rounded-[32px] p-8 relative overflow-hidden transition-all duration-400 cubic-bezier(0.2,0.9,0.4,1.2) hover:border-[#a78bfa]/50 hover:-translate-y-2 hover:shadow-[0_25px_45px_-12px_rgba(0,0,0,0.6)] group reveal-card animate-in">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <h3 className="text-lg font-semibold mb-3 text-white">🏆 Performance Optimization</h3>
          <p className="text-[#aaa] text-sm leading-relaxed">30% speed improvement on Kider Web Clone</p>
        </div>
        
        <div className="bg-[#141414]/60 backdrop-blur-[12px] border border-white/5 rounded-[32px] p-8 relative overflow-hidden transition-all duration-400 cubic-bezier(0.2,0.9,0.4,1.2) hover:border-[#a78bfa]/50 hover:-translate-y-2 hover:shadow-[0_25px_45px_-12px_rgba(0,0,0,0.6)] group reveal-card animate-in">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <h3 className="text-lg font-semibold mb-3 text-white">🎓 Internship Award</h3>
          <p className="text-[#aaa] text-sm leading-relaxed">MindRisers Institute of Technology | 2024</p>
        </div>
        
        <div className="bg-[#141414]/60 backdrop-blur-[12px] border border-white/5 rounded-[32px] p-8 relative overflow-hidden transition-all duration-400 cubic-bezier(0.2,0.9,0.4,1.2) hover:border-[#a78bfa]/50 hover:-translate-y-2 hover:shadow-[0_25px_45px_-12px_rgba(0,0,0,0.6)] group reveal-card animate-in">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <h3 className="text-lg font-semibold mb-2 text-white">📜 Full-Stack Certification</h3>
          <p className="text-[#aaa] text-sm leading-relaxed mb-4">JavaScript, React, and Responsive Web Design</p>
          <a href="https://www.mindrisers.com.np/certificate/validate/MR-82006-WD" target="_blank" rel="noopener noreferrer" className="inline-block text-[#a78bfa] hover:text-white transition-colors duration-200 font-medium text-sm">
            Verify →
          </a>
        </div>
      </div>

      {/* Section Title: Languages I Speak */}
      <div className="section-title text-[2rem] md:text-[2.8rem] font-bold tracking-tight mt-16 mb-8 flex items-center gap-3 relative w-fit after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:height-[3px] after:bg-gradient-to-r after:from-[#a78bfa] after:to-[#60a5fa] reveal-title animate-title">
        Languages <span className="bg-white/10 px-3 py-1 rounded-[60px] text-[0.9rem] backdrop-blur-[4px] font-normal">I Speak</span>
      </div>
      
      {/* Language Badges Container */}
      <div className="text-center my-6 flex flex-wrap justify-start sm:justify-center gap-1">
        <span className="inline-block bg-[#a78bfa]/20 border border-[#a78bfa]/30 px-5 py-2 rounded-[40px] text-[0.9rem] transition-all duration-300 hover:bg-[#a78bfa]/40 hover:-translate-y-0.5 hover:rotate-2">🇬🇧 English</span>
        <span className="inline-block bg-[#a78bfa]/20 border border-[#a78bfa]/30 px-5 py-2 rounded-[40px] text-[0.9rem] transition-all duration-300 hover:bg-[#a78bfa]/40 hover:-translate-y-0.5 hover:rotate-2">🇳🇵 Nepali</span>
        <span className="inline-block bg-[#a78bfa]/20 border border-[#a78bfa]/30 px-5 py-2 rounded-[40px] text-[0.9rem] transition-all duration-300 hover:bg-[#a78bfa]/40 hover:-translate-y-0.5 hover:rotate-2">🇮🇳 Hindi</span>
        <span className="inline-block bg-[#a78bfa]/20 border border-[#a78bfa]/30 px-5 py-2 rounded-[40px] text-[0.9rem] transition-all duration-300 hover:bg-[#a78bfa]/40 hover:-translate-y-0.5 hover:rotate-2">🗣️ Newari</span>
      </div>

    </div>
  );
}