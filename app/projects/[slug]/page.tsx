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
    <main className="min-h-screen px-6 py-24 im-section">
      <section className="container mx-auto max-w-5xl">
        <Link href="/projects" className="text-accent-cyan font-semibold hover:text-accent-orange transition-colors">
          ← Back to all projects
        </Link>

        <article className="im-card mt-8 p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.22em] text-accent-orange mb-4">{project.category}</p>
          <h1 className="text-5xl md:text-6xl font-black text-slate-100 mb-6">{project.title}</h1>
          <p className="text-slate-300 leading-relaxed text-xl mb-8">{project.description}</p>

          <div className="mb-8">
            <h2 className="text-2xl text-slate-100 font-semibold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-accent-cyan/40 bg-accent-cyan/10 px-4 py-1.5 text-base text-accent-cyan"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent-cyan px-6 py-3 font-bold text-slate-950 hover:bg-accent-orange transition-colors"
            >
              View Live
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-500 px-6 py-3 font-semibold text-slate-200 hover:border-accent-cyan hover:text-accent-cyan transition-colors"
            >
              View Source
            </a>
          </div>
        </article>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectLd) }}
      />
    </main>
  )
}
