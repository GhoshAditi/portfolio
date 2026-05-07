'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa'
import { featuredProjects } from '@/lib/projects'

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay } },
})

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref} className="section">
      <div className="container">
        
        {/* ── Heading ─────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: 'clamp(2.5rem, 8vw, 4.5rem)' }}
        >
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>Quest Board</p>
          <h2 className="t-h2">Featured Work</h2>
          <p className="t-body" style={{ marginTop: '1.25rem', fontWeight: 400 }}>
            Curated selection of production projects spanning full-stack development, cloud architecture, and real-world impact.
          </p>
        </motion.div>

        {/* ── Projects Grid ───────────────────────────────────── */}
        <motion.div 
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
              }
            }
          }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.slug}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.98 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { type: 'spring', stiffness: 70, damping: 14 }
                }
              }}
              whileHover={{ 
                y: -12,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className="project-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-lg)',
                overflow: 'hidden',
                background: 'var(--surface)',
                transition: 'border-color 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease',
                cursor: 'default'
              }}
            >
              {/* Image / Cover */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: 'var(--bg)', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
                <Image
                  src={project.image}
                  alt={`${project.title} cover`}
                  fill
                  className="project-cover"
                  style={{ objectFit: 'cover', opacity: 0.8, transition: 'transform 0.8s var(--ease-out-expo), opacity 0.8s ease' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(2,6,5,0.7))', transition: 'opacity 0.6s ease' }} className="project-overlay" />
              </div>

              {/* Content */}
              <div style={{ padding: 'clamp(1.25rem, 4vw, 2rem)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <p className="t-label" style={{ color: 'var(--red)', marginBottom: '0.75rem', fontSize: '0.75rem' }}>
                    {project.category.replace('-', ' ')}
                  </p>
                  <h3 className="t-h3" style={{ fontSize: 'clamp(1.4rem, 4vw, 1.6rem)', marginBottom: '1rem' }}>{project.title}</h3>
                  <p style={{ fontSize: 'clamp(1rem, 3vw, 1.1rem)', color: 'var(--fg-soft)', lineHeight: 1.6, marginBottom: '1.5rem', fontWeight: 400 }}>
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--fg)',
                        padding: '0.25rem 0.65rem',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--r-sm)',
                        background: 'var(--bg)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer / Links */}
                <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem' }}>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ flex: 1, fontSize: '0.8rem', padding: '0.65rem 0', fontWeight: 600 }}
                  >
                    <HiOutlineArrowTopRightOnSquare size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-ghost"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ flex: 1, fontSize: '0.8rem', padding: '0.65rem 0', fontWeight: 600 }}
                  >
                    <FaGithub size={16} />
                    Source
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.5rem, 5vw, 2.5rem);
        }
        .project-card:hover {
          border-color: var(--red);
          box-shadow: 0 30px 60px -20px rgba(255, 0, 0, 0.15);
          background: var(--surface-hi);
        }
        [data-theme="light"] .project-card:hover {
          background: #fff;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.3);
        }
        .project-card:hover .project-cover {
          transform: scale(1.08);
          opacity: 1;
        }
        .project-card:hover .project-overlay {
          opacity: 0.8;
        }
        @media (min-width: 768px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>

  )
}