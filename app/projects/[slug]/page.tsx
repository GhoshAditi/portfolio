import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug, projects } from '@/lib/projects'
import { siteConfig } from '@/lib/site'
import { SectionHead, Squiggle } from '@/components/Sketch'
import Doodle from '@/components/Doodle'
import { FeatureExplorer, FlowSteps, LanguageBar, VideoFacade } from '@/components/ProjectDetail'

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

  const i = projects.indexOf(project)
  const prev = projects[(i - 1 + projects.length) % projects.length]
  const next = projects[(i + 1) % projects.length]
  const isVideoOnly = project.liveUrl.includes('youtube.com')

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
    <main className="portfolio-shell case">
      <section className="case-hero">
        <div className="container">
          <Link href="/#projects" className="link case-back">
            ← All work
          </Link>
          <p className="caption">
            {String(i + 1).padStart(2, '0')} · {project.category.replace('-', ' ')} · {project.context}
          </p>
          <h1 className="case-title">{project.title}</h1>
          <p className="case-tagline">{project.tagline}</p>

          <div className="case-hero-grid">
            <div className="card case-shot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={`${project.title} screenshot`} />
            </div>
            <div className="case-aside">
              <p>{project.description}</p>
              <div className="tag-cloud">
                {project.technologies.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="hero-actions" style={{ justifyContent: 'flex-start', marginTop: 8 }}>
                {!isVideoOnly && (
                  <a className="pill pill--ink" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Visit live ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a className="pill" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    Source ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <Squiggle variant="swoop" width={400} height={160} style={{ right: '-40px', top: '90px' }} />
      </section>

      <section className="section">
        <div className="container">
          <SectionHead index="01">
            The <em>problem</em>
          </SectionHead>
          <p className="about-copy case-problem">{project.problem}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead index="02" note="Tap through what it can do">
            What it <em>does</em>
          </SectionHead>
          <FeatureExplorer features={project.features} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead index="03" note="Click a step to follow the journey">
            How it <em>works</em>
          </SectionHead>
          <FlowSteps flow={project.flow} />
        </div>
      </section>

      {project.videoId && (
        <section className="section">
          <div className="container">
            <SectionHead index="04">
              See it <em>in action</em>
            </SectionHead>
            <VideoFacade id={project.videoId} title={project.title} />
          </div>
        </section>
      )}

      {(project.languages || project.team || project.next) && (
        <section className="section">
          <div className="container case-facts">
            {project.languages && (
              <div>
                <span className="caption">Code, by language (GitHub)</span>
                <LanguageBar languages={project.languages} />
              </div>
            )}
            {project.team && (
              <div>
                <span className="caption">Made with</span>
                <p className="case-list">{project.team.join(' · ')}</p>
              </div>
            )}
            {project.next && (
              <div>
                <span className="caption">On the roadmap</span>
                <p className="case-list">{project.next.join(' · ')}</p>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="section">
        <div className="container case-next">
          <Doodle name="astronaut" label="Boop the astronaut" size={150} says={['more projects this way!', 'to infinity!', 'wheee!']} />
          <div className="case-pager">
            <Link href={`/projects/${prev.slug}`} className="card case-pager-card">
              <span className="caption">← Previous</span>
              <b>{prev.title}</b>
            </Link>
            <Link href={`/projects/${next.slug}`} className="card case-pager-card">
              <span className="caption">Next →</span>
              <b>{next.title}</b>
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectLd) }} />
    </main>
  )
}
