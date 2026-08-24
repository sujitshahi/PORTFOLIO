'use client'

import Link from 'next/link'

interface NavItem {
  label: string
  href: string
}

export default function Nav() {
  const navItems: NavItem[] = [
    { label: 'More Work', href: '/Projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-[#1e1e30] bg-[rgba(7,7,14,0.85)] px-4 py-5 backdrop-blur-md sm:px-8 md:px-12">
      <span className="font-mono text-[13px] tracking-[0.02em] text-[#7fffb2]">
        Sujit Shahi
      </span>
      <div className="flex flex-wrap justify-end gap-x-4 gap-y-2 sm:gap-8">
        {navItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="text-[13px] uppercase tracking-[0.06em] text-[#6b6b80] no-underline"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}