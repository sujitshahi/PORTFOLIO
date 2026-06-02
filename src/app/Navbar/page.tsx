'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-5 py-2 rounded-full text-sm font-medium transition duration-200 flex items-center gap-1.5 cursor-pointer w-full md:w-auto justify-center ${
        isActive
          ? 'bg-violet-500 border border-violet-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.25)]'
          : 'bg-transparent border border-transparent text-gray-300 hover:text-white hover:bg-white/5'
      }`}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex flex-col md:flex-row md:items-center md:justify-between px-10 py-4 bg-[#0a0a0a]/50 backdrop-blur-md border-b border-white/10">
      
     
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="text-xl font-bold tracking-wide bg-clip-text text-transparent bg-linear-to-r from-violet-400 to-blue-400">
          SUJIT SHAHI
        </div>

       
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white focus:outline-none cursor-pointer p-1"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

    
      <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-2 mt-4 md:mt-0 w-full md:w-auto`}>
        <NavItem href="/">Home</NavItem>    
        <NavItem href="/About">About</NavItem>    
        <NavItem href="/Projects">Projects</NavItem>
        <NavItem href="/Contact">Contact</NavItem>
      </div>
    </nav>
  );
}