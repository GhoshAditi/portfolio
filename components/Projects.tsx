'use client'

import Image from 'next/image'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa6'
import { featuredProjects } from '@/lib/projects'

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
})

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = useReducedMotion()

  return (
    <section id="projects" ref={ref} className="ed-projects-stage section">
      {/* ── Background Vertical Grid Lines ── */}
      <div className="ed-grid-guides" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      {/* ── Atmospheric Background Watermark ── */}
      <div className="ed-watermark ed-projects-watermark" aria-hidden="true">
        WORKS
      </div>

      {/* ── Left Rail: Section Index ── */}
      <div className="ed-left-rail" aria-hidden="true">
        <span className="ed-rail-text">CHAPTER // 04 • PORTFOLIO</span>
      </div>

      {/* ── Right Rail: Counter Track ── */}
      <div className="ed-right-rail" aria-hidden="true">
        <div className="ed-scroll-indicator">
          <span className="ed-scroll-label">INDEX: 0{featuredProjects.length}</span>
          <span className="ed-scroll-line" />
        </div>
      </div>

      <div className="container ed-projects-container">
        {/* ── Heading ── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="projects-header"
        >
          <div className="projects-badge-wrap">
            <span className="chip">
              Quest Board
            </span>
          </div>
          <h2 className="t-h2">
            Featured <span style={{ color: 'var(--red)' }}>Work</span>
          </h2>
          <p className="t-body" style={{ marginTop: '0.85rem' }}>
            Curated selection of production projects spanning full-stack development, cloud architecture, and real-world impact.
          </p>
        </motion.div>

        {/* ── Projects Grid ── */}
        <motion.div 
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
              }
            }
          }}
        >
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              variants={{
                hidden: { opacity: 0, y: 28, scale: 0.96 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { type: 'spring', stiffness: 80, damping: 15 }
                }
              }}
              whileHover={reduced ? {} : { y: -8 }}
              className="project-card"
            >
              {/* Outer Glow on hover */}
              <div className="project-card-glow" />

              {/* Cover Image Frame */}
              <div className="project-cover-frame">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="project-cover-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="project-cover-vignette" />
                <span className="project-index-tag">0{idx + 1}</span>
              </div>

              {/* Card Body */}
              <div className="project-content">
                <div className="project-meta-row">
                  <span className="project-category-label">
                    {project.category.replace('-', ' ')}
                  </span>
                </div>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="project-tags-wrap">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions / CTA Links */}
                <div className="project-actions-row">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Live Demo</span>
                    <HiOutlineArrowTopRightOnSquare size={15} />
                  </motion.a>

                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn-ghost"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub size={15} />
                    <span>Source</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .ed-projects-stage {
          position: relative;
          overflow: hidden;
          background: 
            radial-gradient(ellipse at 80% 15%, rgba(245, 194, 200, 0.04) 0%, transparent 60%),
            radial-gradient(ellipse at 20% 85%, rgba(228, 223, 218, 0.03) 0%, transparent 60%),
            var(--bg);
          padding-top: clamp(4.5rem, 8vw, 7rem);
          padding-bottom: clamp(4.5rem, 8vw, 7rem);
        }

        .ed-projects-container {
          position: relative;
          z-index: 2;
        }

        /* ── Watermark ── */
        .ed-projects-watermark {
          position: absolute;
          bottom: -1.5vw;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-display);
          font-size: clamp(6rem, 20vw, 18rem);
          color: rgba(228, 223, 218, 0.03);
          letter-spacing: -0.04em;
          font-weight: 700;
          pointer-events: none;
          user-select: none;
          z-index: 0;
          line-height: 0.8;
          white-space: nowrap;
        }

        @media (min-width: 1024px) {
          .ed-projects-watermark {
            left: 3%;
            transform: none;
          }
        }

        /* ── Header ── */
        .projects-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: clamp(2.5rem, 6vw, 4rem);
        }

        .projects-badge-wrap {
          margin-bottom: 0.75rem;
        }

        /* ── Projects Grid ── */
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 720px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.75rem;
          }
        }

        @media (min-width: 1100px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }

        /* ── Project Card ── */
        .project-card {
          position: relative;
          display: flex;
          flex-direction: column;
          background: rgba(20, 21, 17, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          border-color: rgba(228, 223, 218, 0.4);
          background: rgba(28, 29, 24, 0.95);
          box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.7);
        }

        .project-card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(245, 194, 200, 0.08) 0%, transparent 70%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }

        .project-card:hover .project-card-glow {
          opacity: 1;
        }

        /* Cover Image */
        .project-cover-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9.5;
          background: #0d0e0b;
          border-bottom: 1px solid var(--border);
          overflow: hidden;
        }

        .project-cover-img {
          object-fit: cover;
          opacity: 0.85;
          transition: transform 0.6s var(--ease-out-expo), opacity 0.4s ease;
        }

        .project-card:hover .project-cover-img {
          transform: scale(1.06);
          opacity: 1;
        }

        .project-cover-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(18, 19, 15, 0.1) 0%, rgba(18, 19, 15, 0.8) 100%);
          pointer-events: none;
        }

        .project-index-tag {
          position: absolute;
          top: 0.85rem;
          right: 0.85rem;
          font-family: var(--font-telemetry);
          font-size: 11px;
          color: var(--fg);
          background: rgba(18, 19, 15, 0.75);
          backdrop-filter: blur(6px);
          border: 1px solid var(--border);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }

        /* Content Area */
        .project-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: clamp(1.25rem, 3vw, 1.65rem);
        }

        .project-meta-row {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .project-category-label {
          font-family: var(--font-telemetry);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--steel);
        }

        .project-title {
          font-family: var(--font-display);
          font-size: clamp(1.35rem, 2.5vw, 1.6rem);
          font-weight: 500;
          color: var(--fg);
          line-height: 1.2;
          margin: 0 0 0.75rem 0;
          letter-spacing: -0.02em;
        }

        .project-description {
          font-size: 0.92rem;
          line-height: 1.55;
          color: var(--fg-soft);
          margin: 0 0 1.25rem 0;
        }

        /* Tech Pills */
        .project-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.75rem;
        }

        .project-tech-pill {
          font-family: var(--font-telemetry);
          font-size: 10px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--steel);
          background: rgba(228, 223, 218, 0.04);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 0.2rem 0.55rem;
        }

        /* Actions */
        .project-actions-row {
          display: flex;
          gap: 0.65rem;
          margin-top: auto;
        }

        .project-btn-primary,
        .project-btn-ghost {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          padding: 0.65rem 0.75rem;
          font-size: 0.85rem;
          font-weight: 500;
          border-radius: var(--radius-buttons);
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .project-btn-primary {
          background: var(--fg);
          color: var(--bg);
          border: 1px solid var(--fg);
        }

        .project-btn-primary:hover {
          background: transparent;
          color: var(--fg);
        }

        .project-btn-ghost {
          background: transparent;
          color: var(--fg);
          border: 1px solid var(--border);
        }

        .project-btn-ghost:hover {
          border-color: var(--fg);
        }

        /* ── Responsive Desktop Adjustments ── */
        @media (min-width: 1024px) {
          .ed-projects-stage .ed-left-rail,
          .ed-projects-stage .ed-right-rail {
            display: flex;
          }

          .ed-projects-container {
            padding-left: 3.5rem;
            padding-right: 3rem;
          }

          .projects-header {
            align-items: flex-start;
            text-align: left;
          }
        }
      `}</style>
    </section>
  )
}