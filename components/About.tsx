'use client'

import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { TextHighlighter } from '@/components/fancy/text/text-highlighter'

// Client-safe dynamic player using the installed dotlottie package
const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  { ssr: false }
)

const EASE = [0.16, 1, 0.3, 1] as const

const slideFromRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.65, ease: EASE, delay } 
  },
})

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: false, amount: 0.25 })
  const reduced = useReducedMotion()

  return (
    <section id="about" ref={ref} className="ed-about-stage">
      {/* ── Background Vertical Grid Lines ── */}
      <div className="ed-grid-guides" aria-hidden="true">
        <span /><span /><span /><span /><span />
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
        {/* ── Header ── */}
        <motion.div
          variants={slideFromRight(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="about-header"
        >
          <div className="about-badge-wrap">
            <span className="chip about-chip">Origin Story</span>
          </div>
          <h2 className="t-h2 about-heading">
            About <span className="about-heading-accent">Me</span>
          </h2>
        </motion.div>

        {/* ── Two Column Grid ── */}
        <div className="about-grid">
          {/* ── Left Column: Bio & Side-by-Side Stats ── */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="about-profile-col"
          >
            <div className="about-bio-text">
              <motion.p variants={slideFromRight(0.08)} className="about-copy">
                I am a{' '}
                <TextHighlighter highlightColor="rgba(245, 194, 200, 0.18)" className="text-highlight">
                  full-stack developer
                </TextHighlighter>{' '}
                obsessed with building products that are{' '}
                <TextHighlighter highlightColor="rgba(245, 194, 200, 0.18)" className="text-highlight">
                  beautiful, useful, and technically sharp.
                </TextHighlighter>
              </motion.p>

              <motion.p variants={slideFromRight(0.14)} className="about-copy">
                From frontend interactions to backend architecture, I enjoy owning the{' '}
                <TextHighlighter highlightColor="rgba(128, 82, 255, 0.22)" className="text-highlight">
                  full game board.
                </TextHighlighter>{' '}
                I care deeply about speed, code quality, and product clarity.
              </motion.p>

              <motion.p variants={slideFromRight(0.2)} className="about-copy">
                Outside projects, I invest in{' '}
                <TextHighlighter highlightColor="rgba(245, 194, 200, 0.18)" className="text-highlight">
                  open-source, community work,
                </TextHighlighter>{' '}
                and continuous learning to keep leveling up.
              </motion.p>
            </div>

            {/* ── Side-by-Side Stats (Horizontal) ── */}
            <motion.div 
              variants={slideFromRight(0.26)}
              className="about-stats-row"
            >
              <motion.div whileHover={reduced ? {} : { scale: 1.05 }} className="stat-unit">
                <span className="stat-number">5+</span>
                <span className="stat-label">PROJECTS COMPLETED</span>
              </motion.div>

              <div className="stat-divider" />

              <motion.div whileHover={reduced ? {} : { scale: 1.05 }} className="stat-unit">
                <span className="stat-number">2+</span>
                <span className="stat-label">YEARS EXPERIENCE</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Large Animated Lottie Character ── */}
          <motion.div
            variants={slideFromRight(0.32)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="about-visual-col"
          >
            <div className="lottie-character-container">
              <DotLottieReact
                src="/coding-genius.json"
                loop
                autoplay
                className="lottie-canvas-player"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .ed-about-stage {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #1f201c;
          border-top: 1px solid rgba(60, 60, 56, 0.5);
          border-bottom: 1px solid rgba(60, 60, 56, 0.5);
          padding-top: max(5.5rem, 9vh);
          padding-bottom: 3.5rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          box-sizing: border-box;
        }

        /* ── Background Vertical Grid ── */
        .ed-grid-guides {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          pointer-events: none;
          z-index: 0;
          opacity: 0.12;
        }

        @media (min-width: 768px) {
          .ed-grid-guides {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        .ed-grid-guides span {
          border-right: 1px solid rgba(228, 223, 218, 0.2);
          height: 100%;
        }

        /* ── Rails ── */
        .ed-left-rail {
          position: absolute;
          left: 1.5rem;
          bottom: 3.5rem;
          display: none;
          flex-direction: column;
          align-items: center;
          z-index: 5;
        }

        .ed-rail-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-family: var(--font-telemetry);
          font-size: 10px;
          letter-spacing: 0.22em;
          color: var(--steel);
        }

        .ed-right-rail {
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

        .ed-scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .ed-scroll-label {
          writing-mode: vertical-rl;
          font-family: var(--font-telemetry);
          font-size: 10px;
          letter-spacing: 0.2em;
          color: var(--steel);
        }

        .ed-scroll-line {
          width: 1px;
          height: 38px;
          background: var(--fg);
        }

        /* ── Container ── */
        .ed-about-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
        }

        .about-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          margin-bottom: clamp(1rem, 2.5vh, 2rem);
        }

        .about-badge-wrap {
          margin-bottom: 0.4rem;
        }

        .about-chip {
          border-color: rgba(228, 223, 218, 0.25);
          color: var(--fg);
          background: #141511;
        }

        .about-heading {
          color: var(--fg);
          margin: 0;
          font-size: clamp(2.4rem, 4.4vw, 3.8rem);
          font-family: var(--font-display);
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .about-heading-accent {
          color: var(--fg);
          text-decoration: underline;
          text-decoration-thickness: 4px;
          text-underline-offset: 8px;
          text-decoration-color: orangered;
        }

        /* ── Content Grid ── */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1.15fr 0.85fr;
            column-gap: 3.5rem;
          }
        }

        .about-profile-col {
          display: flex;
          flex-direction: column;
        }

        .about-bio-text {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .about-copy {
          font-size: clamp(0.95rem, 1.6vw, 1.12rem);
          line-height: 1.65;
          color: var(--fg-soft);
          margin: 0;
        }

        .text-highlight {
          color: #ffffff !important;
          background: rgba(245, 194, 200, 0.16) !important;
          border: 1px solid rgba(245, 194, 200, 0.25);
          font-weight: 500;
          padding: 0.1rem 0.35rem;
          border-radius: 4px;
          display: inline;
        }

        /* ── Horizontal Stats Row ── */
        .about-stats-row {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          gap: clamp(2rem, 4vw, 3.5rem) !important;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
          width: fit-content;
        }

        .stat-unit {
          display: flex;
          flex-direction: column;
          cursor: default;
        }

        .stat-number {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 4.5vw, 3.2rem);
          font-weight: 700;
          color: var(--fg);
          letter-spacing: -0.03em;
          line-height: 1;
        }

        .stat-label {
          font-family: var(--font-telemetry);
          font-size: 11px;
          color: var(--steel);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 0.4rem;
          white-space: nowrap;
        }

        .stat-divider {
          width: 1px;
          height: 42px;
          background: var(--border);
        }

        /* ── Right Column Lottie Size & Position ── */
        .about-visual-col {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .lottie-character-container {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: -1.5rem;
        }

        :global(.lottie-canvas-player) {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain;
        }

        @media (min-width: 1024px) {
          .ed-left-rail,
          .ed-right-rail {
            display: flex;
          }

          .ed-about-container {
            padding-left: 3.5rem;
            padding-right: 3rem;
          }
        }
      `}</style>
    </section>
  )
}