import type { Metadata } from 'next'
import Services from '@/components/Services'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: `Services | ${siteConfig.name}`,
  description: 'Explore full-stack development, UI/UX, and performance optimization services by Aditi Ghosh.',
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesRoutePage() {
  return (
    <main className="min-h-screen pt-16">
      <Services />
    </main>
  )
}
