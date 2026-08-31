import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sujit Shahi — Frontend Developer',
  description: 'Frontend developer building clean, responsive interfaces with a full-stack foundation.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}