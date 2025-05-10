import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ScriptCraft - Master the Art of Script Writing',
  description: 'Learn and improve your script writing skills with ScriptCraft. Tutorials, tips, and tools for aspiring and professional scriptwriters.',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>{children}</body>
    </html>
  )
}

