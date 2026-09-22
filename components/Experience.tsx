'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineBriefcase, HiOutlineMapPin, HiOutlineCheckBadge } from 'react-icons/hi2'

const EASE = [0.16, 1, 0.3, 1] as const

const experiences = [
  {
    position: "Software Development Engineer Intern",
    company: "GoAvo AI (DevrelSquad)",
    location: "Remote",
    duration: "Feb 2026 — Jun 2026",
    type: "Full-time",
    description: "Built scalable backend services, AI-driven product features, and performance-focused infrastructure using Next.js, Node.js, and cloud platforms.",
    achievements: [
      "Architected an automated outreach pipeline with MongoDB Vector Search for semantic lead discovery and AWS SES for bulk delivery",
      "Engineered a tiered usage-limits and paywall service with trigger-based quota enforcement in TypeScript and Node.js to support monetization",
      "Drove a 2x surge in organic users (6k → 13k+) in 2 months by overhauling technical SEO, schema metadata, and Core Web Vitals",
      "Co-developed generative AI features by integrating context-aware LLM endpoints to enhance real-time user workflows",
      "Spearheaded modular refactoring of 5,000+ line legacy files into decoupled components and centralized configurations to boost delivery velocity",
      "Resolved critical production link-unfurling issues by fixing Azure Blob storage path mismatches with zero downtime"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "AWS", "Azure", "Docker"],
    current: true
  },
  {
    position: "Web Developer Intern",
    company: "PayZoll",
    location: "Remote",
    duration: "Feb 2025 — Apr 2025",
    type: "Full-time",
    description: "Leading the development of modern web applications using React, Node.js, and cloud technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Identified performance bottlenecks in the legacy interface utilizing older templates that hindered user retention",
      "Targeted the specific need to modernize the frontend architecture for better type safety and maintainability",
      "Migrated template components written in Octo SDK into a Next.js environment using TypeScript, maintaining proper typing",
      "Reduced load times by 40% and increased Google Lighthouse scores to 95+, significantly improving Quality Assurance metrics"
    ],
    technologies: ["React", "Node.js", "TypeScript", "Next.js", "MongoDB"],
    current: false
  },
  {
    position: "Open Source Contributor",
    company: "JGEC Winter of Code",
    location: "Remote",
    duration: "Dec 2024 — Jan 2025",
    type: "Open Source Program",
    description: "Contributed to multiple open source projects during the winter program, focusing on meaningful contributions to various repositories and collaborating with developers worldwide.",
    achievements: [
      "Ranked in top 20 out of 1000+ participants",
      "Collaborated with maintainers and fellow contributors globally",
      "Enhanced skills in open source development workflows"
    ],
    technologies: ["React", "Node.js", "TypeScript", "Git", "GitHub", "JavaScript"],
    current: false
  },
  {
    position: "Web Development Lead",
    company: "GDG RCCIIT",
    location: "Kolkata, India",
    duration: "Aug 2025 — Present",
    type: "Leadership Role",
    description: "Led web development initiatives for Google Developer Group RCCIIT, organizing workshops, managing development projects, and mentoring junior developers.",
    achievements: [
      "Organized technical workshops and coding sessions",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Git"],
    current: false
  },
  {
    position: "Tech Lead",
    company: "ACM RCCIIT",
    location: "Kolkata, India",
    duration: "Jan 2026 — Present",
    type: "Leadership Role",
    description: "Serving as Tech Lead for ACM RCCIIT chapter, coordinating technical events, managing web projects, and fostering a community of developers.",
    achievements: [],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "MongoDB", "Express.js"],
    current: false
  },
  {
    position: "Tech Member",
    company: "Student Welfare Committee RCCIIT",
    location: "Kolkata, India",
    duration: "Year 2025",
    type: "Tech Role",
    description: "Served as a Tech Member for SWC RCCIIT chapter, contributing to technical initiatives and supporting the development of web projects.",
    achievements: [
      "Contributed to the website development of the official college events like Techtrix, GOT & Regalia, enhancing its functionality and user experience",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "MongoDB", "Express.js"],
    current: false
  }
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
})

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = useReducedMotion()

  return (
    <section id="experience" ref={ref} className="ed-exp-stage section">
      {/* ── Background Vertical Grid Guides ── */}
      <div className="ed-grid-guides" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      {/* ── Background Atmospheric Watermark ── */}
      <div className="ed-watermark ed-exp-watermark" aria-hidden="true">
        TIMELINE
      </div>

      {/* ── Left Rail: Section Index ── */}
      <div className="ed-left-rail" aria-hidden="true">
        <span className="ed-rail-text">CHAPTER // 05 • CAREER</span>
      </div>

      {/* ── Right Rail: Status Indicator ── */}
      <div className="ed-right-rail" aria-hidden="true">
        <div className="ed-scroll-indicator">
          <span className="ed-scroll-label">ROLES: 0{experiences.length}</span>
          <span className="ed-scroll-line" />
        </div>
      </div>

      <div className="container ed-exp-container">
        {/* ── Heading ── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="exp-header"
        >
          <div className="exp-badge-wrap">
            <span className="chip">
              Career Timeline
            </span>
          </div>
          <h2 className="t-h2">
            Professional <span style={{ color: 'var(--red)' }}>Journey</span>
          </h2>
          <p className="t-body" style={{ marginTop: '0.85rem' }}>
            Diverse roles spanning web development, cloud infrastructure, and cross-functional collaborations across startups and open-source communities.
          </p>
        </motion.div>

        {/* ── Timeline Container ── */}
        <div className="exp-timeline-wrapper">
          {/* Vertical Track Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            className="exp-spine-line" 
          />

          <motion.div 
            className="exp-entries-flow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.15
                }
              }
            }}
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { type: 'spring', stiffness: 80, damping: 15 }
                  }
                }}
                className="exp-row"
              >
                {/* Timeline Dot Node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 220 }}
                  className={`exp-dot ${exp.current ? 'is-current' : ''}`}
                />

                {/* Main Card */}
                <motion.div 
                  whileHover={reduced ? {} : { y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="experience-card"
                >
                  <div className="exp-card-glow" />

                  {/* Header Row */}
                  <div className="exp-card-header">
                    <div className="exp-title-row">
                      <h3 className="exp-position">{exp.position}</h3>
                      <span className="exp-duration-tag">{exp.duration}</span>
                    </div>

                    <div className="exp-company-sub">
                      <span className="exp-company-name">{exp.company}</span>
                      <div className="exp-meta-badges">
                        <span className="exp-meta-item">
                          <HiOutlineMapPin size={14} /> {exp.location}
                        </span>
                        <span className="exp-meta-item">
                          <HiOutlineBriefcase size={14} /> {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="exp-description">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  {exp.achievements.length > 0 && (
                    <div className="exp-achievements-block">
                      <p className="exp-rewards-heading">
                        <HiOutlineCheckBadge size={16} style={{ color: 'var(--red)' }} />
                        Quest Highlights
                      </p>
                      <ul className="exp-achievements-list">
                        {exp.achievements.map((ach, ai) => (
                          <motion.li 
                            key={ai} 
                            whileHover={reduced ? {} : { x: 3 }}
                            className="exp-achievement-item"
                          >
                            <span className="exp-bullet-dash" />
                            <span>{ach}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills / Tech stack */}
                  <div className="exp-tech-row">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="exp-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .ed-exp-stage {
          position: relative;
          overflow: hidden;
          background: 
            radial-gradient(ellipse at 15% 20%, rgba(245, 194, 200, 0.04) 0%, transparent 60%),
            radial-gradient(ellipse at 85% 80%, rgba(228, 223, 218, 0.03) 0%, transparent 60%),
            var(--bg);
          padding-top: clamp(4.5rem, 8vw, 7rem);
          padding-bottom: clamp(4.5rem, 8vw, 7rem);
        }

        .ed-exp-container {
          position: relative;
          z-index: 2;
        }

        .ed-exp-watermark {
          position: absolute;
          bottom: -1vw;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-display);
          font-size: clamp(5.5rem, 18vw, 16rem);
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
          .ed-exp-watermark {
            left: 3%;
            transform: none;
          }
        }

        .exp-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: clamp(2.5rem, 6vw, 4rem);
        }

        .exp-badge-wrap {
          margin-bottom: 0.75rem;
        }

        /* ── Timeline Track ── */
        .exp-timeline-wrapper {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .exp-spine-line {
          position: absolute;
          left: 6px;
          top: 0.8rem;
          bottom: 1.5rem;
          width: 1px;
          background: rgba(60, 60, 56, 0.7);
          transform-origin: top;
        }

        .exp-entries-flow {
          display: flex;
          flex-direction: column;
          gap: clamp(1.75rem, 4vw, 2.75rem);
        }

        .exp-row {
          position: relative;
          padding-left: clamp(1.75rem, 4vw, 2.5rem);
        }

        .exp-dot {
          position: absolute;
          left: 6px;
          top: 1.8rem;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--bg);
          border: 2px solid var(--steel);
          transform: translateX(-50%);
          z-index: 2;
        }

        .exp-dot.is-current {
          background: var(--red);
          border-color: var(--red);
          box-shadow: 0 0 10px rgba(228, 223, 218, 0.4);
        }

        /* ── Card Styling ── */
        .experience-card {
          position: relative;
          border: 1px solid var(--border);
          border-radius: 16px;
          background: rgba(20, 21, 17, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: clamp(1.25rem, 3.5vw, 2.25rem);
          transition: border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }

        .experience-card:hover {
          border-color: rgba(228, 223, 218, 0.4);
          background: rgba(28, 29, 24, 0.95);
          box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.7);
        }

        .exp-card-glow {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245, 194, 200, 0.08) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .experience-card:hover .exp-card-glow {
          opacity: 1;
        }

        .exp-card-header {
          margin-bottom: 1.25rem;
        }

        .exp-title-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 0.65rem;
        }

        .exp-position {
          font-family: var(--font-body);
          font-size: clamp(1.2rem, 3vw, 1.45rem);
          font-weight: 600;
          color: var(--fg);
          line-height: 1.25;
          margin: 0;
        }

        .exp-duration-tag {
          font-family: var(--font-telemetry);
          font-size: 11px;
          color: var(--steel);
          padding: 0.2rem 0.6rem;
          background: rgba(228, 223, 218, 0.05);
          border: 1px solid var(--border);
          border-radius: 9999px;
          letter-spacing: 0.04em;
        }

        .exp-company-sub {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem 1.25rem;
          align-items: center;
        }

        .exp-company-name {
          font-size: 1rem;
          font-weight: 500;
          color: var(--fg);
        }

        .exp-meta-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
        }

        .exp-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.85rem;
          color: var(--steel);
        }

        .exp-description {
          font-size: 0.95rem;
          color: var(--fg-soft);
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }

        /* ── Quest Highlights ── */
        .exp-achievements-block {
          margin-bottom: 1.5rem;
        }

        .exp-rewards-heading {
          font-family: var(--font-telemetry);
          font-size: 11px;
          color: var(--steel);
          margin: 0 0 0.85rem 0;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .exp-achievements-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .exp-achievement-item {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.92rem;
          color: var(--fg-soft);
          line-height: 1.55;
          transition: transform 0.2s ease;
        }

        .exp-bullet-dash {
          width: 8px;
          height: 1px;
          background: var(--steel);
          margin-top: 0.6rem;
          flex-shrink: 0;
        }

        /* ── Technology Tags ── */
        .exp-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
          padding-top: 0.5rem;
        }

        .exp-tech-tag {
          font-family: var(--font-telemetry);
          font-size: 10px;
          font-weight: 500;
          color: var(--steel);
          padding: 0.25rem 0.6rem;
          border: 1px solid var(--border);
          border-radius: 4px;
          background: var(--bg);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: border-color 0.2s ease;
        }

        .experience-card:hover .exp-tech-tag {
          border-color: rgba(228, 223, 218, 0.25);
        }

        /* ── Responsive Viewports ── */
        @media (min-width: 1024px) {
          .ed-exp-stage .ed-left-rail,
          .ed-exp-stage .ed-right-rail {
            display: flex;
          }

          .ed-exp-container {
            padding-left: 3.5rem;
            padding-right: 3rem;
          }

          .exp-header {
            align-items: flex-start;
            text-align: left;
          }
        }
      `}</style>
    </section>
  )
}