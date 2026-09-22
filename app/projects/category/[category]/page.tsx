import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'
import { siteConfig } from '@/lib/site'

type Params = {
  params: {
    category: string
  }
}

const allowedCategories = ['security', 'ai', 'education', 'social-impact'] as const

export function generateStaticParams() {
  return allowedCategories.map((category) => ({ category }))
}

export function generateMetadata({ params }: Params): Metadata {
  const categoryLabel = params.category.replace('-', ' ')

  if (!allowedCategories.includes(params.category as (typeof allowedCategories)[number])) {
    return { title: `Category Not Found | ${siteConfig.name}` }
  }

  return {
    title: `${categoryLabel} Projects | ${siteConfig.name}`,
    description: `Browse ${categoryLabel} project case studies by Aditi Ghosh.`,
    alternates: {
      canonical: `/projects/category/${params.category}`,
    },
  }
}

export default function ProjectCategoryPage({ params }: Params) {
  if (!allowedCategories.includes(params.category as (typeof allowedCategories)[number])) {
    notFound()
  }

  const categoryProjects = projects.filter((project) => project.category === params.category)

  return (
    <main className="portfolio-shell">
      <section className="portfolio-section">
        <div className="section-grid">
          <div className="section-block" style={{ gridColumn: '1 / -1' }}>
            <Link href="/projects" className="inline-link">
              Back to project index
            </Link>
            <span className="section-label">Category</span>
            <h1 className="section-title">{params.category.replace('-', ' ')} projects</h1>
            <p className="section-copy" style={{ maxWidth: '64ch' }}>
              Focused case studies in {params.category.replace('-', ' ')} engineering.
            </p>
          </div>

          <div className="project-grid" style={{ gridColumn: '1 / -1' }}>
            {categoryProjects.map((project) => (
              <article key={project.slug} className="project-item">
                <span className="telemetry">{project.category.replace('-', ' ')}</span>
                <h2 className="display-copy" style={{ fontSize: 'clamp(30px, 4vw, 42px)', lineHeight: 0.8 }}>
                  {project.title}
                </h2>
                <p className="section-copy">{project.description}</p>
                <Link href={`/projects/${project.slug}`} className="inline-link">
                  Read case study
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
