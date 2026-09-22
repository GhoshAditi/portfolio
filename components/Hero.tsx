'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { 
  HiOutlineStar, 
  HiOutlineArrowLongRight, 
  HiOutlineEnvelope, 
  HiOutlineSparkles 
} from 'react-icons/hi2'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import BlurText from '@/components/BlurText'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section id="home" className="ed-hero-stage">
      {/* ── Background Vertical Grid Lines ── */}
      <div className="ed-grid-guides" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      {/* ── Background Atmospheric Watermark ── */}
      <motion.div 
        className="ed-watermark" 
        aria-hidden="true"
        initial={reduced ? {} : { opacity: 0, x: -30 }}
        animate={reduced ? {} : { opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: EASE }}
      >
        PORTFOLIO
      </motion.div>

      {/* ── Left Rail: Vertical Branding & Socials ── */}
      <motion.div 
        className="ed-left-rail"
        initial={reduced ? {} : { opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
      >
        <span className="ed-rail-text">ENGINEER / DEVELOPER</span>
        <div className="ed-social-dock">
          <motion.a 
            whileHover={{ y: -3, scale: 1.15 }}
            href="mailto:aditighosh668@gmail.com" 
            aria-label="Email" 
            className="ed-dock-icon"
          >
            <HiOutlineEnvelope size={16} />
          </motion.a>
          <motion.a 
            whileHover={{ y: -3, scale: 1.15 }}
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="GitHub" 
            className="ed-dock-icon"
          >
            <FaGithub size={15} />
          </motion.a>
          <motion.a 
            whileHover={{ y: -3, scale: 1.15 }}
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="LinkedIn" 
            className="ed-dock-icon"
          >
            <FaLinkedinIn size={15} />
          </motion.a>
        </div>
      </motion.div>

      {/* ── Right Rail: Minimal Scroll Indicator ── */}
      <motion.div 
        className="ed-right-rail" 
        aria-hidden="true"
        initial={reduced ? {} : { opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
      >
        <div className="ed-scroll-track">
          <motion.div 
            className="ed-scroll-ring"
            animate={reduced ? {} : { scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="ed-scroll-dots">
            <span /><span /><span /><span />
          </div>
        </div>
        <div className="ed-scroll-indicator">
          <span className="ed-scroll-label">SCROLL</span>
          <motion.span 
            className="ed-scroll-line"
            animate={reduced ? {} : { scaleY: [0.6, 1, 0.6], originY: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* ── Main Hero Content ── */}
      <div className="container ed-hero-container">
        <div className="ed-hero-grid">

          {/* Left: Text Column */}
          <div className="ed-text-column">
            
            {/* Status Chip */}
            <motion.div 
              initial={reduced ? {} : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="ed-badge-wrap"
            >
              <span className="chip">
                <HiOutlineSparkles size={14} aria-hidden="true" />
                Available for select collaborations
              </span>
            </motion.div>

            {/* Headline Group */}
            <div className="ed-title-group">
              <div className="ed-name-wrap">
                <BlurText
                  text="Aditi Ghosh"
                  delay={80}
                  animateBy="letters"
                  direction="top"
                  className="t-hero"
                />
              </div>

              <motion.p 
                initial={reduced ? {} : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
                className="ed-subhead"
              >
                Full stack engineer focused on performance, product clarity, and durable UI systems.
              </motion.p>
            </div>

            {/* Concise Bio */}
            <motion.p
              initial={reduced ? {} : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease: EASE }}
              className="t-body"
            >
              I design and ship compact digital products with clean architecture, sharp UX details, and measurable performance.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={reduced ? {} : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35, ease: EASE }}
              className="ed-actions-row"
            >
              <motion.button
                className="ed-primary-link"
                onClick={() => window.open('/Aditi_Ghosh_Resume.pdf', '_blank')}
                aria-label="Open CV"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="ed-accent-dash" />
                <span className="ed-link-label">Open CV</span>
                <HiOutlineStar size={16} className="ed-link-star" />
              </motion.button>

              <motion.a 
                href="#contact" 
                className="cta-ghost" 
                aria-label="Get In Touch"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Get In Touch
                <HiOutlineArrowLongRight size={16} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Portrait Image */}
          <div className="ed-photo-column">
            <motion.div
              initial={reduced ? {} : { opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              whileHover={reduced ? {} : { y: -6, scale: 1.015 }}
              className="ed-photo-frame"
            >
              <div className="ed-photo-glow" />
              <div className="ed-photo-vignette" />
              
              <div className="ed-photo-inner">
                <Image
                  src="https://i.postimg.cc/cJzDL4HQ/pfp.jpg"
                  alt="Aditi Ghosh — Full Stack Engineer"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 420px"
                  priority
                />
              </div>

              <div className="ed-photo-outline" />
            </motion.div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .ed-hero-stage {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 6.5rem 1.5rem 3.5rem;
          background: var(--bg);
        }

        .ed-grid-guides {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          pointer-events: none;
          z-index: 0;
          opacity: 0.1;
        }

        @media (min-width: 768px) {
          .ed-grid-guides {
            grid-template-columns: repeat(5, 1fr);
            opacity: 0.14;
          }
        }

        .ed-grid-guides span {
          border-right: 1px solid var(--border);
          height: 100%;
        }

        .ed-watermark {
          position: absolute;
          bottom: -1vw;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-display);
          font-size: clamp(4.5rem, 16vw, 14rem);
          color: rgba(228, 223, 218, 0.08);
          letter-spacing: -0.03em;
          font-weight: 700;
          pointer-events: none;
          user-select: none;
          z-index: 0;
          line-height: 0.8;
          white-space: nowrap;
        }

        .ed-left-rail {
          position: absolute;
          left: 1.5rem;
          bottom: 3.5rem;
          display: none;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;
          z-index: 10;
        }

        .ed-rail-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-family: var(--font-telemetry);
          font-size: 10px;
          letter-spacing: 0.22em;
          color: var(--steel);
        }

        .ed-social-dock {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ed-dock-icon {
          color: var(--steel);
          transition: color 0.2s ease;
        }

        .ed-dock-icon:hover {
          color: var(--fg);
        }

        .ed-right-rail {
          position: absolute;
          right: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          display: none;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          z-index: 10;
          pointer-events: none;
        }

        .ed-scroll-track {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.65rem;
        }

        .ed-scroll-ring {
          width: 9px;
          height: 9px;
          border: 1px solid var(--steel);
          border-radius: 50%;
        }

        .ed-scroll-dots {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .ed-scroll-dots span {
          width: 3px;
          height: 3px;
          background: var(--steel-dim);
          border-radius: 50%;
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

        .ed-hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .ed-hero-grid {
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          text-align: center;
          gap: 2.5rem;
        }

        .ed-text-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          width: 100%;
        }

        .ed-badge-wrap {
          display: flex;
          justify-content: center;
        }

        .ed-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          align-items: center;
        }

        .ed-name-wrap {
          white-space: nowrap;
        }

        .ed-subhead {
          font-size: clamp(1rem, 2.2vw, 1.35rem);
          line-height: 1.4;
          color: var(--fg-soft);
          max-width: 44ch;
          margin: 0;
        }

        .ed-actions-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 0.5rem;
        }

        .ed-primary-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: transparent;
          border: none;
          color: var(--fg);
          cursor: pointer;
          padding: 0.5rem 0;
          font-family: var(--font-body);
          font-size: 1.05rem;
          font-weight: 500;
          letter-spacing: -0.01em;
          transition: color 0.2s ease;
        }

        .ed-accent-dash {
          width: 28px;
          height: 2px;
          background: var(--fg);
          transition: width 0.3s ease, background 0.3s ease;
        }

        .ed-primary-link:hover .ed-accent-dash {
          width: 40px;
          background: var(--color-rose-quartz-bloom);
        }

        .ed-primary-link:hover {
          color: var(--color-rose-quartz-bloom);
        }

        .ed-link-star {
          transition: transform 0.3s ease;
        }

        .ed-primary-link:hover .ed-link-star {
          transform: rotate(45deg);
        }

        .ed-photo-column {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .ed-photo-frame {
          position: relative;
          width: clamp(260px, 32vw, 400px);
          aspect-ratio: 1 / 1.15;
          transition: transform 0.4s ease;
        }

        .ed-photo-glow {
          position: absolute;
          inset: -10px;
          background: radial-gradient(circle, rgba(245, 194, 200, 0.08) 0%, transparent 70%);
          border-radius: 20px;
          z-index: 0;
          pointer-events: none;
        }

        .ed-photo-inner {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 14px;
          background: var(--surface);
          z-index: 1;
        }

        .ed-photo-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 50%, rgba(18, 19, 15, 0.75) 98%);
          z-index: 2;
          pointer-events: none;
        }

        .ed-photo-outline {
          position: absolute;
          inset: -10px;
          border: 1px solid var(--border);
          border-radius: 18px;
          pointer-events: none;
          z-index: 0;
        }

        @media (min-width: 1024px) {
          .ed-hero-stage {
            padding: 7rem 2rem 4rem;
          }

          .ed-left-rail,
          .ed-right-rail {
            display: flex;
          }

          .ed-watermark {
            left: 3%;
            transform: none;
          }

          .ed-hero-container {
            padding-left: 4.5rem;
            padding-right: 3.5rem;
          }

          .ed-hero-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            column-gap: 4rem;
            align-items: center;
            text-align: left;
          }

          .ed-text-column {
            align-items: flex-start;
          }

          .ed-title-group {
            align-items: flex-start;
          }

          .ed-badge-wrap,
          .ed-actions-row {
            justify-content: flex-start;
          }

          .ed-photo-column {
            justify-content: flex-end;
          }
        }
      `}</style>
    </section>
  )
}