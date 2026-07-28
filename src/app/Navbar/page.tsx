'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


interface NavItemProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode; 
}

function NavItem({ href, children, icon }: NavItemProps) {
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
   
      {icon && <span className="text-current">{icon}</span>}
      <span>{children}</span>
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex flex-col md:flex-row md:items-center md:justify-between px-10 py-4 bg-[#0a0a0a] backdrop-blur-md border-b border-white/10">
      
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1 className="text-4xl font-bold tracking-wide bg-clip-text text-transparent bg-linear-to-r from-violet-400 to-blue-400">
          SUJIT SHAHI
        </h1>


        <button type="button"  aria-label="Toggle Menu"
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
        
       
        
        <NavItem 
          href="/" 
          
         
          icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
        >
          About
        </NavItem>    

        
        
        <NavItem 
          href="/Projects" 
          icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
        >
          Projects
        </NavItem>
        
        <NavItem 
          href="/Contact" 
          icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
        >
          Contact
        </NavItem>
        
      </div>
    </nav>
  );
}
