'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { HiOutlineStar, HiOutlineSparkles, HiOutlineCheckBadge, HiOutlineWrenchScrewdriver, HiOutlineArrowLongRight } from 'react-icons/hi2'
import BlurText from '@/components/BlurText'
import { NumberTicker } from '@/components/magicui/number-ticker'

/* ── Animation variants ────────────────────────────────────────────────────── */
const EASE_EXPO = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24, clipPath: 'inset(100% 0 0 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.65, ease: EASE_EXPO, delay },
  },
})

const fadeIn = (delay = 0) => ({
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE_EXPO, delay } },
})

const slideRight = (delay = 0) => ({
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_EXPO, delay } },
})

/* ── Stat item ─────────────────────────────────────────────────────────────── */
function Stat({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
      <span style={{ fontSize: '1.85rem', fontWeight: 500, color: 'var(--fg)', letterSpacing: '-0.03em', lineHeight: 1, display: 'flex', alignItems: 'baseline' }}>
        <NumberTicker value={value} />
        <span style={{ fontSize: '1.2rem', color: 'var(--red)', marginLeft: '1px' }}>{suffix}</span>
      </span>
      <span className="t-label" style={{ color: 'var(--fg-soft)' }}>{label}</span>
    </div>
  )
}

/* ── Red geometric corner accent (SVG) ─────────────────────────────────────── */
function CornerAccent() {
  return (
    <svg
      aria-hidden="true"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      style={{ position: 'absolute', top: '-1px', right: '-1px' }}
    >
      <path d="M0 0 L32 0 L32 32" fill="var(--red)" />
    </svg>
  )
}

/* ── Component ─────────────────────────────────────────────────────────────── */
export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      id="home"
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(5rem + 100px)',
        paddingBottom: '4rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Faint red glow in background ─────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '40vw',
          height: '40vw',
          maxWidth: '600px',
          maxHeight: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,19,19,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Two-column grid ──────────────────────────────────── */}
        <div className="hero-grid">
          {/* Eyebrow */}
          <div className="hero-area-eyebrow">
            <motion.div
              variants={reduced ? {} : fadeIn(0.05)}
              initial="hidden"
              animate="visible"
            >
              <span className="chip">
                <HiOutlineSparkles size={14} aria-hidden="true" />
                Open To Build
              </span>
            </motion.div>
          </div>

          {/* Headline group */}
          <div className="hero-area-headline">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <BlurText
                text="Aditi Ghosh"
                delay={100}
                animateBy="letters"
                direction="top"
                className="t-hero"
                style={{ justifyContent: 'inherit' }} // Inherits center from parent grid on mobile
              />

              <BlurText
                text="Full Stack Engineer with strong product and performance instincts"
                delay={50}
                animateBy="words"
                direction="top"
                className="t-body"
                stepDuration={0.4}
                style={{
                  fontSize: 'clamp(1.15rem, 3vw, 1.7rem)',
                  fontWeight: 400,
                  lineHeight: 1.3,
                  letterSpacing: '-0.01em',
                  color: 'var(--fg-soft)',
                  maxWidth: '48ch',
                  justifyContent: 'inherit',
                }}
              />
            </div>
          </div>

          {/* Body copy */}
          <div className="hero-area-body">
            <motion.p
              variants={reduced ? {} : fadeUp(0.3)}
              initial="hidden"
              animate="visible"
              className="t-body"
              style={{ fontWeight: 400 }}
            >
              I design and ship immersive digital products with clean architecture, sharp UX details, and measurable outcomes.
            </motion.p>
          </div>

          {/* ── Right: Photo frame ───────────────────────────── */}
          <div className="hero-area-photo">
            <motion.div
              variants={reduced ? {} : slideRight(0.2)}
              initial="hidden"
              animate="visible"
              className="hero-photo-wrapper"
            >
              <div
                style={{
                  position: 'relative',
                  width: 'clamp(240px, 80vw, 420px)',
                  aspectRatio: '1 / 1',
                }}
              >
                {/* Outer structural frame */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-14px',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--r-lg)',
                    pointerEvents: 'none',
                    zIndex: 0,
                  }}
                />

                {/* Red corner accent (top-right) */}
                <div style={{ position: 'absolute', top: '-14px', right: '-14px', zIndex: 2, overflow: 'hidden', width: '40px', height: '40px', borderRadius: '0 var(--r-lg) 0 0' }}>
                  <CornerAccent />
                </div>

                {/* Photo container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'var(--r-lg)',
                    overflow: 'hidden',
                    border: '1px solid var(--border)',
                    background: 'var(--surface)',
                    zIndex: 1,
                  }}
                >
                  <Image
                    src="https://i.postimg.cc/cJzDL4HQ/pfp.jpg"
                    alt="Aditi Ghosh — Full Stack Engineer"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 1024px) 100vw, 420px"
                    priority
                  />
                </div>

                {/* Bottom-left structural dot */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-22px',
                    left: '-22px',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: 'var(--red)',
                    zIndex: 2,
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <div className="hero-area-stats">
            <motion.div
              variants={reduced ? {} : fadeIn(0.38)}
              initial="hidden"
              animate="visible"
              className="hero-stats-row"
            >
              <Stat value={15} label="Projects" suffix="+" />
              <div className="hero-stat-sep" aria-hidden="true" />
              <Stat value={2} label="Experience" suffix="+ yrs" />
              <div className="hero-stat-sep" aria-hidden="true" />
              <Stat value={94} label="Win Rate" suffix="%" />
            </motion.div>
          </div>

          {/* CTAs */}
          <div className="hero-area-cta">
            <motion.div
              variants={reduced ? {} : fadeIn(0.45)}
              initial="hidden"
              animate="visible"
              className="hero-cta-group"
            >
              <button
                className="cta-primary"
                onClick={() => window.open('/Aditi_Ghosh_Resume.pdf', '_blank')}
                aria-label="Open Aditi Ghosh's CV in a new tab"
                style={{ fontWeight: 600 }}
              >
                <HiOutlineStar size={16} aria-hidden="true" />
                Open CV
              </button>

              <a href="#contact" className="cta-ghost" aria-label="Go to contact section" style={{ fontWeight: 600 }}>
                Get In Touch
                <HiOutlineArrowLongRight size={16} aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* Credential badges */}
          <div className="hero-area-badges">
            <motion.div
              variants={reduced ? {} : fadeIn(0.52)}
              initial="hidden"
              animate="visible"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'inherit' }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 500, color: 'var(--fg-soft)' }}>
                <HiOutlineCheckBadge size={16} style={{ color: 'var(--red)' }} aria-hidden="true" />
                Hackathon Finalist
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 500, color: 'var(--fg-soft)' }}>
                <HiOutlineWrenchScrewdriver size={16} style={{ color: 'var(--red)' }} aria-hidden="true" />
                Performance Optimizer
              </span>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── Responsive grid styles ───────────────────────────── */}
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-areas: 
            "eyebrow"
            "headline"
            "body"
            "photo"
            "stats"
            "cta"
            "badges";
          gap: 2.5rem;
          text-align: center;
          align-items: center;
        }

        .hero-area-eyebrow { grid-area: eyebrow; display: flex; justify-content: center; }
        .hero-area-headline { grid-area: headline; }
        .hero-area-body { grid-area: body; }
        .hero-area-photo { grid-area: photo; display: flex; justify-content: center; margin: 1.5rem 0; }
        .hero-area-stats { grid-area: stats; }
        .hero-area-cta { grid-area: cta; }
        .hero-area-badges { grid-area: badges; display: flex; justify-content: center; }

        .hero-stats-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(1rem, 4vw, 2.5rem);
          width: 100%;
        }
        .hero-stat-sep { width: 1px; height: 1.5rem; background: var(--border); }
        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-areas: 
              "eyebrow photo"
              "headline photo"
              "body photo"
              "stats photo"
              "cta photo"
              "badges photo";
            grid-template-columns: 1.2fr 0.8fr;
            text-align: left;
            column-gap: 5rem;
            row-gap: 1.5rem;
          }
          .hero-area-eyebrow { justify-content: flex-start; }
          .hero-area-photo { justify-content: flex-end; margin: 0; grid-row: 1 / span 6; }
          .hero-stats-row { justify-content: flex-start; }
          .hero-cta-group { justify-content: flex-start; }
          .hero-area-badges { justify-content: flex-start; }
        }
      `}</style>

    </section>
  )
}
