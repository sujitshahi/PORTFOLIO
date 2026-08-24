import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alex Rivera — Frontend Developer',
  description: 'Frontend developer with full-stack foundation. Building fast, precise interfaces.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  )
}