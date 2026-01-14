import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Your Name',
  description: 'Professional portfolio showcasing my work and experience',
  keywords: ['portfolio', 'developer', 'web development', 'projects'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-beige-50 to-beige-100 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}