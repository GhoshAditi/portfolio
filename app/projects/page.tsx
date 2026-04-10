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
    <main className="min-h-screen px-6 py-24 im-section">
      <section className="container mx-auto max-w-6xl">
        <p className="im-kicker mb-4">Project Index</p>
        <h1 className="im-heading text-slate-100 mb-5">Build Quests</h1>
        <p className="text-slate-300 max-w-3xl mb-10">
          Explore technical deep-dives, architecture, and outcomes from projects across security, AI, and social impact.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <Link key={category} href={`/projects/category/${category}`} className="chip-link">
              {category}
            </Link>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              className="im-card p-6 hover:border-accent-cyan/50 transition-colors"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-accent-orange mb-3">{project.category}</p>
              <h2 className="text-xl text-slate-100 font-bold mb-3">{project.title}</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">{project.description}</p>
              <Link
                href={`/projects/${project.slug}`}
                className="text-sm font-semibold text-accent-cyan hover:text-accent-orange transition-colors"
              >
                Open case study →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
