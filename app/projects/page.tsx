import type { Metadata } from 'next'
import Link from 'next/link'
import { featuredProjects } from '@/lib/projects'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: `Projects | ${siteConfig.name}`,
  description: 'Explore detailed project builds, case studies, and technology stacks from Aditi Ghosh.',
  alternates: {
    canonical: '/projects',
  },
}

export default function ProjectsIndexPage() {
  const categories = ['security', 'ai', 'education', 'social-impact']

  return (
    <main className="portfolio-shell">
      <section className="portfolio-section">
        <div className="section-grid">
          <div className="section-block" style={{ gridColumn: '1 / -1' }}>
            <Link href="/" className="inline-link">
              Home
            </Link>
            <span className="section-label">Project Index</span>
            <h1 className="section-title">Build Quests</h1>
            <p className="section-copy" style={{ maxWidth: '72ch' }}>
              Explore technical work across security, AI, education, and social impact.
            </p>

            <div className="button-row">
              {categories.map((category) => (
                <Link key={category} href={`/projects/category/${category}`} className="inline-link">
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <div className="project-grid" style={{ gridColumn: '1 / -1' }}>
            {featuredProjects.map((project) => (
              <article className="project-item" key={project.slug}>
                <span className="telemetry">{project.category.replace('-', ' ')}</span>
                <h2 className="display-copy" style={{ fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: 0.8 }}>
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
    </main>
  )
}
