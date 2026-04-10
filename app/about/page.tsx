import type { Metadata } from 'next'
import About from '@/components/About'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: 'Learn about Aditi Ghosh, her engineering journey, education, and developer mission.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutRoutePage() {
  return (
    <main className="min-h-screen pt-16">
      <About />
    </main>
  )
}
