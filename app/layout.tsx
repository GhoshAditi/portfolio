import React from 'react'
import type { Metadata } from 'next'
import { Space_Grotesk, Outfit } from 'next/font/google'
import './globals.css'
import { SITE_URL, siteConfig } from '@/lib/site'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: siteConfig.title,
    description: siteConfig.description,
    locale: siteConfig.locale,
    url: SITE_URL,
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio OG thumbnail`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: SITE_URL,
    jobTitle: 'Full Stack Developer',
    knowsAbout: ['Next.js', 'TypeScript', 'AI engineering', 'UI/UX'],
    sameAs: ['https://github.com/GhoshAditi', 'https://www.linkedin.com/in/aditi-ghosh-180546282/'],
  }

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${outfit.variable} font-sans min-h-screen text-slate-100 antialiased`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </body>
    </html>
  )
}