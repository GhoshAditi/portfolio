import React from 'react'
import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono, VT323 } from 'next/font/google'
import './globals.css'
import { SITE_URL, siteConfig } from '@/lib/site'
import LenisProvider from '@/components/LenisProvider'

const arbeitContrast = Inter({
  subsets: ['latin'],
  variable: '--font-arbeit-contrast',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const arbeitTechnik = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-arbeit-technik',
  weight: ['400'],
  display: 'swap',
})

const inlineVf = VT323({
  subsets: ['latin'],
  variable: '--font-inline-vf',
  weight: ['400'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  category: 'technology',
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
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
        url: `${SITE_URL}/og-image.png`,
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
    creator: '@aditighosh2005',
    images: [`${SITE_URL}/og-image.png`],
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
    <html lang="en" className="scroll-smooth" data-theme="dark">
      <body
        className={`${arbeitContrast.variable} ${arbeitTechnik.variable} ${inlineVf.variable} antialiased`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </body>
    </html>
  )
}