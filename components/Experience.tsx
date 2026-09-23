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
            transition={{ duration: 1.2, ease: EASE }}
            className="exp-spine-line" 
          />

          <div className="exp-entries-flow">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 90 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: EASE }}
                className="exp-row"
              >
                {/* Timeline Dot Node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.12, type: 'spring', stiffness: 220 }}
                  className={`exp-dot ${exp.current ? 'is-current' : ''}`}
                />

                {/* Main Card */}
                <motion.div 
                  whileHover={reduced ? {} : { y: -6, scale: 1.01 }}
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
                            whileHover={reduced ? {} : { x: 4 }}
                            className="exp-achievement-item"
                          >
                            <span className="exp-bullet-dot" />
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
          </div>
        </div>
      </div>

      <style>{`
        .ed-exp-stage {
          position: relative;
          overflow: hidden;
          background: 
            radial-gradient(ellipse at 10% 20%, rgba(224, 101, 96, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, rgba(228, 223, 218, 0.04) 0%, transparent 50%),
            var(--bg);
          padding-top: clamp(4.5rem, 8vw, 7rem);
          padding-bottom: clamp(4.5rem, 8vw, 7rem);
        }

        .ed-exp-container {
          position: relative;
          z-index: 2;
          max-width: 940px;
          margin: 0 auto;
        }

        .exp-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          margin-bottom: clamp(2.5rem, 6vw, 4rem);
        }

        .exp-badge-wrap {
          margin-bottom: 0.75rem;
        }

        /* ── Timeline Track ── */
        .exp-timeline-wrapper {
          position: relative;
        }

        .exp-spine-line {
          position: absolute;
          left: 6px;
          top: 0.8rem;
          bottom: 1.5rem;
          width: 2px;
          background: linear-gradient(180deg, var(--red) 0%, rgba(60, 60, 56, 0.4) 100%);
          transform-origin: top;
        }

        .exp-entries-flow {
          display: flex;
          flex-direction: column;
          gap: clamp(1.75rem, 4vw, 2.75rem);
        }

        .exp-row {
          position: relative;
          padding-left: clamp(2rem, 4.5vw, 2.75rem);
        }

        .exp-dot {
          position: absolute;
          left: 6px;
          top: 1.8rem;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--bg);
          border: 2px solid var(--steel);
          transform: translateX(-50%);
          z-index: 2;
          box-shadow: 0 0 0 4px rgba(228, 223, 218, 0.04);
        }

        .exp-dot.is-current {
          background: var(--red);
          border-color: #fff;
          box-shadow: 0 0 16px rgba(224, 101, 96, 0.8), 0 0 0 4px rgba(224, 101, 96, 0.2);
        }

        /* ── Premium Card Styling ── */
        .experience-card {
          position: relative;
          border: 1px solid rgba(228, 223, 218, 0.14);
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(26, 27, 22, 0.95) 0%, rgba(18, 19, 15, 0.98) 100%);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          padding: clamp(1.5rem, 3.8vw, 2.5rem);
          box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.65);
          transition: border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }

        .experience-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3.5px;
          background: rgba(228, 223, 218, 0.2);
          transition: background 0.3s ease;
        }

        .experience-card:hover {
          border-color: rgba(228, 223, 218, 0.38);
          box-shadow: 0 24px 50px -12px rgba(0, 0, 0, 0.85), 0 0 25px rgba(224, 101, 96, 0.08);
        }

        .experience-card:hover::before {
          background: var(--red);
        }

        .exp-card-glow {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(224, 101, 96, 0.12) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0.4;
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
          font-size: clamp(1.2rem, 3vw, 1.5rem);
          font-weight: 600;
          color: var(--fg);
          line-name: 1.25;
          margin: 0;
        }

        .exp-duration-tag {
          font-family: var(--font-telemetry);
          font-size: 11px;
          color: var(--fg);
          padding: 0.25rem 0.75rem;
          background: rgba(228, 223, 218, 0.08);
          border: 1px solid rgba(228, 223, 218, 0.2);
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
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-rose-quartz-bloom, #f5c2c8);
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
          background: rgba(14, 15, 11, 0.75);
          border: 1px solid rgba(60, 60, 56, 0.8);
          border-radius: 12px;
          padding: 1rem 1.25rem;
        }

        .exp-rewards-heading {
          font-family: var(--font-telemetry);
          font-size: 11px;
          color: var(--fg);
          margin: 0 0 0.85rem 0;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 600;
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
          font-size: 0.9rem;
          color: var(--fg-soft);
          line-height: 1.55;
          transition: transform 0.2s ease;
        }

        .exp-bullet-dot {
          width: 6px;
          height: 6px;
          background: var(--red);
          border-radius: 50%;
          margin-top: 0.45rem;
          flex-shrink: 0;
          box-shadow: 0 0 6px var(--red);
        }

        /* ── Technology Tags ── */
        .exp-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: auto;
          padding-top: 0.5rem;
        }

        .exp-tech-tag {
          font-family: var(--font-telemetry);
          font-size: 10.5px;
          font-weight: 500;
          color: var(--fg);
          padding: 0.25rem 0.65rem;
          border: 1px solid rgba(228, 223, 218, 0.18);
          border-radius: 6px;
          background: rgba(22, 23, 18, 0.9);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
        }

        .experience-card:hover .exp-tech-tag {
          border-color: rgba(224, 101, 96, 0.4);
          background: rgba(30, 31, 25, 0.95);
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