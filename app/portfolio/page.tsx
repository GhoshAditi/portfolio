'use client'

import Link from 'next/link'
import { featuredProjects } from '@/lib/projects'
import { siteConfig } from '@/lib/site'

export default function PortfolioPage() {
  const portfolioLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: 'https://aditi-ghosh.vercel.app',
    jobTitle: 'Full Stack Engineer',
  }

  return (
    <main className="portfolio-shell">
      <section className="portfolio-section">
        <div className="section-grid">
          <div className="section-block" style={{ gridColumn: '1 / -1' }}>
            <Link href="/" className="inline-link">
              Home
            </Link>
            <span className="section-label">Portfolio</span>
            <h1 className="section-title">{siteConfig.name}</h1>
            <p className="section-copy" style={{ maxWidth: '68ch' }}>
              A compact overview of featured work, experience, and technical focus.
            </p>
          </div>

          <div className="project-grid" style={{ gridColumn: '1 / -1' }}>
            {featuredProjects.slice(0, 3).map((project) => (
              <article className="project-item" key={project.slug}>
                <span className="telemetry">{project.category.replace('-', ' ')}</span>
                <h2 className="display-copy" style={{ fontSize: 'clamp(30px, 4vw, 42px)', lineHeight: 0.8 }}>
                  {project.title}
                </h2>
                <p className="section-copy">{project.description}</p>
                <Link href={`/projects/${project.slug}`} className="inline-link">
                  Open case study
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioLd) }} />
    </main>
  )
}
