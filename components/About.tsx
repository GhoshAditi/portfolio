'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineAcademicCap, HiOutlineUser, HiOutlineCalendarDays } from 'react-icons/hi2'
import { TextHighlighter } from '@/components/fancy/text/text-highlighter'

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
})

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech) — Computer Science and Engineering',
    institution: 'RCC Institute of Information Technology, Kolkata',
    year: '2023 — 2027',
    description: 'Focused on software engineering, algorithms, and web development.',
    grade: 'CGPA: 8.84 / 10',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = useReducedMotion()

  return (
    <section id="about" ref={ref} className="ed-about-stage section">
      {/* ── Background Vertical Grid Lines ── */}
      <div className="ed-grid-guides" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      {/* ── Background Watermark ── */}
      <div className="ed-watermark ed-about-watermark" aria-hidden="true">
        ABOUT
      </div>

      {/* ── Left Rail: Section Index ── */}
      <div className="ed-left-rail" aria-hidden="true">
        <span className="ed-rail-text">CHAPTER // 02 • ABOUT</span>
      </div>

      {/* ── Right Rail: Coordinate Line ── */}
      <div className="ed-right-rail" aria-hidden="true">
        <div className="ed-scroll-indicator">
          <span className="ed-scroll-label">PROFILE</span>
          <span className="ed-scroll-line" />
        </div>
      </div>

      <div className="container ed-about-container">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="about-header"
        >
          <div className="about-badge-wrap">
            <span className="chip about-chip">
              Origin Story
            </span>
          </div>
          <h2 className="t-h2 about-heading">
            About <span className="about-heading-accent">Me</span>
          </h2>
        </motion.div>

        {/* ── Two Column Content ── */}
        <div className="about-grid">
          {/* ── Left Column: Character Profile ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.15,
                },
              },
            }}
            className="about-profile-col"
          >
            <motion.div variants={fadeUp(0)} className="about-subtitle-wrap">
              <div className="about-icon-badge">
                <HiOutlineUser size={18} className="icon-badge-symbol" aria-hidden="true" />
              </div>
              <h3 className="about-section-title">
                Character Profile
              </h3>
            </motion.div>

            <div className="about-bio-text">
              <motion.p variants={fadeUp(0)} className="about-copy">
                I am a{' '}
                <TextHighlighter highlightColor="#0d0e0b" className="text-highlight">
                  full-stack developer
                </TextHighlighter>{' '}
                obsessed with building products that are{' '}
                <TextHighlighter highlightColor="#0d0e0b" className="text-highlight">
                  beautiful, useful, and technically sharp.
                </TextHighlighter>
              </motion.p>
              <motion.p variants={fadeUp(0)} className="about-copy">
                From frontend interactions to backend architecture, I enjoy owning the{' '}
                <TextHighlighter highlightColor="#0d0e0b" className="text-highlight">
                  full game board.
                </TextHighlighter>{' '}
                I care deeply about speed, code quality, and product clarity.
              </motion.p>
              <motion.p variants={fadeUp(0)} className="about-copy">
                Outside projects, I invest in{' '}
                <TextHighlighter highlightColor="#0d0e0b" className="text-highlight">
                  open-source, community work,
                </TextHighlighter>{' '}
                and continuous learning to keep leveling up.
              </motion.p>
            </div>

            {/* Stat pair */}
            <motion.div 
              variants={fadeUp(0)}
              style={{ display: 'flex', gap: 'clamp(1.5rem, 5vw, 3rem)', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}
            >
              <motion.div whileHover={{ scale: 1.05 }} style={{ cursor: 'default' }}>
                <p style={{ fontSize: 'clamp(1.75rem, 6vw, 2.35rem)', fontWeight: 500, color: 'var(--fg)', letterSpacing: '-0.03em', lineHeight: 1 }}>8+</p>
                <p className="t-label" style={{ marginTop: '0.3rem' }}>Projects Completed</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} style={{ cursor: 'default' }}>
                <p style={{ fontSize: 'clamp(1.75rem, 6vw, 2.35rem)', fontWeight: 500, color: 'var(--fg)', letterSpacing: '-0.03em', lineHeight: 1 }}>2+</p>
                <p className="t-label" style={{ marginTop: '0.3rem' }}>Years Experience</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Academy Card ── */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="about-academy-col"
          >
            <div className="about-subtitle-wrap">
              <div className="about-icon-badge">
                <HiOutlineAcademicCap size={18} className="icon-badge-symbol" aria-hidden="true" />
              </div>
              <h3 className="about-section-title">
                Academy
              </h3>
            </div>

            {education.map((edu) => (
              <motion.div 
                key={edu.degree}
                whileHover={reduced ? {} : { y: -4 }}
                transition={{ duration: 0.3 }}
                className="academy-card"
              >
                <div className="academy-header-flex">
                  <div className="academy-icon-box">
                    <HiOutlineCalendarDays size={18} style={{ color: 'var(--fg)' }} aria-hidden="true" />
                  </div>
                  <div className="academy-meta">
                    <span className="academy-year-pill">{edu.year}</span>
                    <span className="academy-grade-badge">{edu.grade}</span>
                  </div>
                </div>

                <div className="academy-info">
                  <h4 className="academy-degree">{edu.degree}</h4>
                  <p className="academy-institution">{edu.institution}</p>
                  <p className="academy-desc">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .ed-about-stage {
          position: relative;
          overflow: hidden;
          background: #1f201c;
          border-top: 1px solid rgba(60, 60, 56, 0.5);
          border-bottom: 1px solid rgba(60, 60, 56, 0.5);
          padding-top: clamp(4.5rem, 9vw, 7rem);
          padding-bottom: clamp(4.5rem, 9vw, 7rem);
        }

        /* ── Background Guides ── */
        .ed-about-stage .ed-grid-guides {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          pointer-events: none;
          z-index: 0;
          opacity: 0.12;
        }

        @media (min-width: 768px) {
          .ed-about-stage .ed-grid-guides {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        .ed-about-stage .ed-grid-guides span {
          border-right: 1px solid rgba(228, 223, 218, 0.2);
          height: 100%;
        }

        /* ── Watermark in Grey Background ── */
        .ed-about-watermark {
          position: absolute;
          bottom: 2%;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-display);
          font-size: clamp(6rem, 20vw, 18rem);
          color: rgba(0, 0, 0, 0.2);
          letter-spacing: -0.04em;
          font-weight: 700;
          pointer-events: none;
          user-select: none;
          z-index: 0;
          line-height: 0.8;
          white-space: nowrap;
        }

        @media (min-width: 1024px) {
          .ed-about-watermark {
            left: 2%;
            transform: none;
          }
        }

        /* ── Side Rails ── */
        .ed-about-stage .ed-left-rail {
          position: absolute;
          left: 1.5rem;
          bottom: 3.5rem;
          display: none;
          flex-direction: column;
          align-items: center;
          z-index: 5;
        }

        .ed-about-stage .ed-rail-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-family: var(--font-telemetry);
          font-size: 10px;
          letter-spacing: 0.22em;
          color: var(--steel);
        }

        .ed-about-stage .ed-right-rail {
          position: absolute;
          right: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          display: none;
          flex-direction: column;
          align-items: center;
          z-index: 5;
          pointer-events: none;
        }

        .ed-about-stage .ed-scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .ed-about-stage .ed-scroll-label {
          writing-mode: vertical-rl;
          font-family: var(--font-telemetry);
          font-size: 10px;
          letter-spacing: 0.2em;
          color: var(--steel);
        }

        .ed-about-stage .ed-scroll-line {
          width: 1px;
          height: 38px;
          background: var(--fg);
        }

        /* ── Content Layout ── */
        .ed-about-container {
          position: relative;
          z-index: 2;
        }

        .about-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: clamp(2.5rem, 6vw, 4rem);
        }

        .about-badge-wrap {
          margin-bottom: 0.75rem;
        }

        .about-chip {
          border-color: rgba(228, 223, 218, 0.25);
          color: var(--fg);
          background: #141511;
        }

        .about-heading {
          color: var(--fg);
        }

        .about-heading-accent {
          color: var(--fg);
          text-decoration: underline;
          text-decoration-thickness: 3px;
          text-underline-offset: 6px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        .about-profile-col,
        .about-academy-col {
          display: flex;
          flex-direction: column;
        }

        .about-subtitle-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .about-section-title {
          font-family: var(--font-display);
          font-weight: 500;
          color: var(--fg);
          margin: 0;
          font-size: clamp(1.2rem, 3vw, 1.5rem);
        }

        .about-icon-badge {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: #12130f;
          border: 1px solid var(--border);
        }

        .icon-badge-symbol {
          color: var(--color-bone-glow);
        }

        .about-bio-text {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .about-copy {
          font-size: clamp(1rem, 2.2vw, 1.15rem);
          line-height: 1.65;
          color: var(--fg-soft);
        }

        .text-highlight {
          color: #ffffff !important;
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: inline-block;
        }

        /* ── Stats Strip ── */
        .about-stats-strip {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-top: 2.5rem;
          padding-top: 1.75rem;
          border-top: 1px solid rgba(60, 60, 56, 0.8);
        }

        .about-stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .stat-value-row {
          display: flex;
          align-items: baseline;
          gap: 0.15rem;
        }

        .stat-number {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5vw, 3.2rem);
          font-weight: 500;
          color: var(--fg);
          line-height: 0.9;
          letter-spacing: -0.03em;
        }

        .stat-plus {
          font-family: var(--font-display);
          font-size: 1.6rem;
          color: var(--steel);
          font-weight: 600;
        }

        .stat-label {
          font-size: 11px;
          color: var(--steel);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-family: var(--font-telemetry);
        }

        .stat-separator {
          width: 1px;
          height: 2.5rem;
          background: rgba(60, 60, 56, 0.8);
        }

        /* ── Academy Card (Black Grounding) ── */
        .academy-card {
          position: relative;
          background: #12130f;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: clamp(1.5rem, 4vw, 2.25rem);
          overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }

        .academy-card:hover {
          border-color: rgba(228, 223, 218, 0.4);
          box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.7);
        }

        .academy-header-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .academy-icon-box {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1c1d19;
          border: 1px solid var(--border);
          border-radius: 8px;
        }

        .academy-meta {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .academy-year-pill {
          font-family: var(--font-telemetry);
          font-size: 11px;
          color: var(--steel);
          padding: 0.25rem 0.65rem;
          background: #1c1d19;
          border: 1px solid var(--border);
          border-radius: 9999px;
        }

        .academy-grade-badge {
          font-family: var(--font-telemetry);
          font-size: 11px;
          color: var(--fg);
          background: #252621;
          border: 1px solid var(--border-hi);
          font-weight: 500;
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
        }

        .academy-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .academy-degree {
          font-family: var(--font-body);
          font-size: clamp(1.1rem, 2.5vw, 1.35rem);
          font-weight: 500;
          color: var(--fg);
          line-height: 1.35;
          margin: 0;
        }

        .academy-institution {
          font-size: 0.95rem;
          color: var(--steel);
          font-weight: 400;
          margin: 0;
        }

        .academy-desc {
          font-size: 0.9rem;
          color: var(--fg-soft);
          line-height: 1.5;
          margin: 0.35rem 0 0 0;
        }

        /* ── Responsive Grid ── */
        @media (min-width: 1024px) {
          .ed-about-stage .ed-left-rail,
          .ed-about-stage .ed-right-rail {
            display: flex;
          }

          .ed-about-container {
            padding-left: 3.5rem;
            padding-right: 3rem;
          }

          .about-header {
            align-items: flex-start;
            text-align: left;
          }

          .about-grid {
            grid-template-columns: 1.25fr 0.95fr;
            column-gap: 4rem;
          }
        }
      `}</style>
    </section>
  )
}