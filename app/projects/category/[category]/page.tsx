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
    <main className="min-h-screen px-6 py-24 im-section">
      <section className="container mx-auto max-w-6xl">
        <Link href="/projects" className="text-accent-cyan font-semibold hover:text-orange-300 transition-colors">
          ← Back to project index
        </Link>

        <h1 className="im-heading text-slate-100 mt-6 mb-4 capitalize">
          {params.category.replace('-', ' ')} projects
        </h1>
        <p className="text-slate-300 text-lg mb-10 max-w-2xl">
          Focused case studies in {params.category.replace('-', ' ')} engineering.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {categoryProjects.map((project) => (
            <article key={project.slug} className="im-card p-6">
              <h2 className="text-3xl font-bold text-slate-100 mb-3">{project.title}</h2>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <Link href={`/projects/${project.slug}`} className="text-accent-cyan font-semibold hover:text-orange-300">
                Read case study →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
