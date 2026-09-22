import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug, projects } from '@/lib/projects'
import { siteConfig } from '@/lib/site'

type Params = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: `Project Not Found | ${siteConfig.name}`,
    }
  }

  return {
    title: `${project.title} Case Study | ${siteConfig.name}`,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} Case Study`,
      description: project.description,
      type: 'article',
      images: [project.image],
    },
  }
}

export default function ProjectDetailPage({ params }: Params) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const projectLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: project.image,
    genre: project.category,
    creator: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    url: `/projects/${project.slug}`,
  }

  return (
    <main className="portfolio-shell">
      <section className="portfolio-section">
        <div className="section-grid">
          <div className="section-block" style={{ gridColumn: '1 / -1' }}>
            <Link href="/projects" className="inline-link">
              Back to projects
            </Link>
            <span className="section-label">{project.category.replace('-', ' ')}</span>
            <h1 className="section-title">{project.title}</h1>
            <p className="section-copy" style={{ maxWidth: '72ch' }}>
              {project.description}
            </p>
          </div>

          <article className="project-item" style={{ gridColumn: '1 / -1' }}>
            <span className="telemetry">Tech Stack</span>
            <div className="tag-cloud">
              {project.technologies.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="button-row">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-link">
                View live
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-link">
                View source
              </a>
            </div>
          </article>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectLd) }}
      />
    </main>
  )
}
