import type { Metadata } from 'next'
import { SITE_URL, siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: `Complete Portfolio | ${siteConfig.name}`,
  description: `Complete portfolio and professional profile of ${siteConfig.name} - Full Stack Engineer with expertise in Next.js, TypeScript, and cloud infrastructure.`,
  alternates: {
    canonical: `${SITE_URL}portfolio`,
  },
  openGraph: {
    title: `${siteConfig.name} Complete Portfolio`,
    description: 'Comprehensive portfolio showcasing projects, experience, skills, and achievements.',
    url: `${SITE_URL}portfolio`,
    type: 'website',
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
