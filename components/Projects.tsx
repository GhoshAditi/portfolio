import Link from 'next/link'
import { featuredProjects, type Project } from '@/lib/projects'
import { SectionHead, Squiggle } from '@/components/Sketch'
import Doodle from '@/components/Doodle'

const badge: Record<Project['category'], string> = {
  security: '🔒',
  ai: '✨',
  education: '📚',
  'social-impact': '🤝',
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead
          index="02"
          note="Things I've designed, built and shipped — mostly for people who needed them"
          aside={<Doodle name="cat" label="Pet the cat" size={160} says={['meow!', 'purrfect code', 'mrrp?']} />}
        >
          Selected <em>work</em>
        </SectionHead>

        <div className="projects-grid">
          <Squiggle variant="wave" width={300} height={60} style={{ left: '38%', top: '22%' }} />
          <Squiggle variant="curl" width={160} height={104} style={{ left: '44%', top: '62%' }} />

          {featuredProjects.map((p, i) => (
            <article key={p.slug} className="card project-card">
              <div className="project-top">
                <div className="project-thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
                  <span className="badge" aria-hidden="true">
                    {badge[p.category]}
                  </span>
                </div>
                <span className="project-num">{String(i + 1).padStart(2, '0')}</span>
              </div>

              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <div className="tag-cloud">
                {p.technologies.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a className="link" href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                  {p.liveUrl.includes('youtube.com') ? 'Demo ↗' : 'Live ↗'}
                </a>
                {p.githubUrl && (
                  <a className="link" href={p.githubUrl} target="_blank" rel="noopener noreferrer">
                    Code ↗
                  </a>
                )}
                <Link className="link" href={`/projects/${p.slug}`}>
                  Case study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
