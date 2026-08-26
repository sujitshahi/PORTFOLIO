import Link from 'next/link'
import Projects from './Projects'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 pb-24 pt-4 sm:px-12">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 border border-[#1e1e30] px-4 py-2 font-mono text-xs uppercase tracking-[0.08em] text-[#6b6b80] transition-colors hover:border-[#7fffb2] hover:text-[#7fffb2]"
      >
        <span aria-hidden="true">←</span>
        Back to home
      </Link>
      <Projects />
    </main>
  )
}