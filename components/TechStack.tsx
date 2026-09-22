'use client'
import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  HiOutlineShieldCheck,
  HiOutlineBolt,
  HiOutlineFire,
  HiOutlineCommandLine,
  HiOutlineSparkles,
  HiOutlineCircleStack,
  HiOutlineCloud,
  HiOutlineWrenchScrewdriver,
} from 'react-icons/hi2'

const EASE = [0.16, 1, 0.3, 1] as const

type CategoryKey = 'languages' | 'frontend' | 'backend' | 'cloud' | 'tools'

interface TechItem {
  name: string
  logo: string
}

const techCategories: {
  key: CategoryKey
  label: string
  icon: React.ReactNode
  skills: TechItem[]
}[] = [
  {
    key: 'languages',
    label: 'Languages',
    icon: <HiOutlineCommandLine size={16} />,
    skills: [
      { name: 'JavaScript', logo: 'https://skillicons.dev/icons?i=js' },
      { name: 'TypeScript', logo: 'https://skillicons.dev/icons?i=ts' },
      { name: 'Python',     logo: 'https://skillicons.dev/icons?i=python' },
      { name: 'Java',       logo: 'https://skillicons.dev/icons?i=java' },
      { name: 'C',          logo: 'https://skillicons.dev/icons?i=c' },
      { name: 'C++',        logo: 'https://skillicons.dev/icons?i=cpp' },
      { name: 'Go',         logo: 'https://skillicons.dev/icons?i=go' },
    ],
  },
  {
    key: 'frontend',
    label: 'Frontend',
    icon: <HiOutlineSparkles size={16} />,
    skills: [
      { name: 'React.js',     logo: 'https://skillicons.dev/icons?i=react' },
      { name: 'Next.js',      logo: 'https://skillicons.dev/icons?i=nextjs' },
      { name: 'Tailwind CSS', logo: 'https://skillicons.dev/icons?i=tailwind' },
      { name: 'ThreeJS',      logo: 'https://skillicons.dev/icons?i=threejs' },
      { name: 'HTML5',        logo: 'https://skillicons.dev/icons?i=html' },
      { name: 'CSS3',         logo: 'https://skillicons.dev/icons?i=css' },
    ],
  },
  {
    key: 'backend',
    label: 'Backend & DB',
    icon: <HiOutlineCircleStack size={16} />,
    skills: [
      { name: 'Node.js',    logo: 'https://skillicons.dev/icons?i=nodejs' },
      { name: 'Express.js', logo: 'https://skillicons.dev/icons?i=express' },
      { name: 'Flask',      logo: 'https://skillicons.dev/icons?i=flask' },
      { name: 'Django',     logo: 'https://skillicons.dev/icons?i=django' },
      { name: 'PostgreSQL', logo: 'https://skillicons.dev/icons?i=postgres' },
      { name: 'MySQL',      logo: 'https://skillicons.dev/icons?i=mysql' },
      { name: 'MongoDB',    logo: 'https://skillicons.dev/icons?i=mongodb' },
      { name: 'Supabase',   logo: 'https://skillicons.dev/icons?i=supabase' },
    ],
  },
  {
    key: 'cloud',
    label: 'Cloud & DevOps',
    icon: <HiOutlineCloud size={16} />,
    skills: [
      { name: 'AWS',      logo: 'https://skillicons.dev/icons?i=aws' },
      { name: 'GCP',      logo: 'https://skillicons.dev/icons?i=gcp' },
      { name: 'Azure',    logo: 'https://skillicons.dev/icons?i=azure' },
      { name: 'Docker',   logo: 'https://skillicons.dev/icons?i=docker' },
      { name: 'Firebase', logo: 'https://skillicons.dev/icons?i=firebase' },
      { name: 'Vercel',   logo: 'https://skillicons.dev/icons?i=vercel' },
    ],
  },
  {
    key: 'tools',
    label: 'Tooling',
    icon: <HiOutlineWrenchScrewdriver size={16} />,
    skills: [
      { name: 'Git',     logo: 'https://skillicons.dev/icons?i=git' },
      { name: 'GitHub',  logo: 'https://skillicons.dev/icons?i=github' },
      { name: 'Postman', logo: 'https://skillicons.dev/icons?i=postman' },
    ],
  },
]

const perkCards = [
  {
    title: 'Performance First',
    text: 'Core Web Vitals focused architecture. Lighthouse-grade optimization across all projects.',
    icon: <HiOutlineBolt size={22} />,
    color: 'var(--red)',
  },
  {
    title: 'Security Hardened',
    text: 'Defense-in-depth practices. Sensitive data handling with industry best practices.',
    icon: <HiOutlineShieldCheck size={22} />,
    color: 'var(--steel)',
  },
  {
    title: 'Rapid Iteration',
    text: 'Clean production deployments. Fast feedback loops with robust error handling.',
    icon: <HiOutlineFire size={22} />,
    color: 'var(--steel)',
  },
]

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('languages')
  const reduced = useReducedMotion()

  const currentCategory = techCategories.find((cat) => cat.key === activeCategory) || techCategories[0]

  return (
    <section id="stack" className="ed-tech-stage section">
      {/* ── Background Vertical Guides ── */}
      <div className="ed-grid-guides" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      {/* ── Large Atmospheric Watermark ── */}
      <div className="ed-watermark ed-tech-watermark" aria-hidden="true">
        STACK
      </div>

      {/* ── Left Rail: Section Index ── */}
      <div className="ed-left-rail" aria-hidden="true">
        <span className="ed-rail-text">CHAPTER // 03 • TECH ARSENAL</span>
      </div>

      {/* ── Right Rail: Node Counter Indicator ── */}
      <div className="ed-right-rail" aria-hidden="true">
        <div className="ed-scroll-indicator">
          <span className="ed-scroll-label">NODES: 28</span>
          <span className="ed-scroll-line" />
        </div>
      </div>

      <div className="container ed-tech-container">
        
        {/* ── Heading ── */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          className="tech-heading-block"
        >
          <div className="tech-badge-wrap">
            <span className="chip">
              Skill Tree
            </span>
          </div>
          <h2 className="t-h2">
            Tech <span style={{ color: 'var(--red)' }}>Mastery</span>
          </h2>
          <p className="t-body" style={{ marginTop: '0.85rem' }}>
            Specialized expertise across modern web development, cloud infrastructure, and full-stack systems. Proven track record shipping production-grade code at scale.
          </p>
        </motion.div>

        {/* ── Category Tabs ── */}
        <div className="tab-pill-bar">
          {techCategories.map((cat) => {
            const isActive = activeCategory === cat.key
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`tab-pill-btn ${isActive ? 'active' : ''}`}
              >
                {cat.icon}
                <span>{cat.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTechTabIndicator"
                    className="tab-pill-indicator"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* ── Card Display Panel ── */}
        <div className="tech-display-frame">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="cards-grid"
            >
              {currentCategory.skills.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={reduced ? {} : { opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: idx * 0.03,
                    ease: EASE,
                  }}
                  whileHover={reduced ? {} : { y: -6, scale: 1.03 }}
                  className="skill-card"
                >
                  <div className="card-ambient-glow" />
                  <div className="skill-logo-wrap">
                    <img
                      src={item.logo}
                      alt={item.name}
                      width={52}
                      height={52}
                      loading="lazy"
                      className="skill-logo-img"
                    />
                  </div>
                  <span className="skill-card-name">{item.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Core Competencies ── */}
        <div className="tech-competencies-wrap">
          <p className="t-label" style={{ marginBottom: '1.25rem' }}>Core Competencies</p>
          <div className="perk-grid">
            {perkCards.map((perk, idx) => (
              <motion.div
                key={perk.title}
                initial={reduced ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: EASE }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="perk-card"
              >
                <div className="perk-icon-box" style={{ color: perk.color }}>
                  {perk.icon}
                </div>
                <h4 className="perk-title">{perk.title}</h4>
                <p className="perk-desc">{perk.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .ed-tech-stage {
          position: relative;
          overflow: hidden;
          background: 
            radial-gradient(ellipse at 85% 20%, rgba(245, 194, 200, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 15% 80%, rgba(228, 223, 218, 0.03) 0%, transparent 50%),
            #151612; /* Distinct deep obsidian tone */
          border-top: 1px solid rgba(60, 60, 56, 0.4);
          border-bottom: 1px solid rgba(60, 60, 56, 0.4);
          padding-top: clamp(4.5rem, 8vw, 7rem);
          padding-bottom: clamp(4.5rem, 8vw, 7rem);
        }

        .ed-tech-container {
          position: relative;
          z-index: 2;
        }

        .ed-tech-watermark {
          position: absolute;
          bottom: -1vw;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-display);
          font-size: clamp(6rem, 20vw, 18rem);
          color: rgba(228, 223, 218, 0.04);
          letter-spacing: -0.04em;
          font-weight: 700;
          pointer-events: none;
          user-select: none;
          z-index: 0;
          line-height: 0.8;
          white-space: nowrap;
        }

        @media (min-width: 1024px) {
          .ed-tech-watermark {
            left: 3%;
            transform: none;
          }
        }

        .tech-heading-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: clamp(2rem, 5vw, 3rem);
        }

        .tech-badge-wrap {
          margin-bottom: 0.75rem;
        }

        /* ── Tabs bar ── */
        .tab-pill-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.75rem;
          justify-content: center;
        }

        .tab-pill-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1.15rem;
          background: rgba(22, 23, 19, 0.65);
          border: 1px solid var(--border);
          border-radius: var(--radius-buttons);
          color: var(--fg-soft);
          font-family: var(--font-telemetry);
          font-size: 13px;
          cursor: pointer;
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        .tab-pill-btn:hover {
          color: var(--fg);
          border-color: var(--border-hi);
        }

        .tab-pill-btn.active {
          color: var(--fg);
          border-color: var(--border-hi);
        }

        .tab-pill-indicator {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-buttons);
          background: rgba(228, 223, 218, 0.1);
          border: 1px solid rgba(228, 223, 218, 0.35);
          pointer-events: none;
        }

        /* ── Display Box ── */
        .tech-display-frame {
          position: relative;
          min-height: 240px;
          border: 1px solid rgba(60, 60, 56, 0.8);
          border-radius: 18px;
          padding: clamp(1.25rem, 3.5vw, 2.5rem);
          background: rgba(18, 19, 15, 0.55);
          backdrop-filter: blur(8px);
        }

        .cards-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (min-width: 520px) {
          .cards-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.25rem;
          }
        }

        @media (min-width: 800px) {
          .cards-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.25rem;
          }
        }

        @media (min-width: 1100px) {
          .cards-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: 1.5rem;
          }
        }

        /* ── Skill Cards ── */
        .skill-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.85rem 1rem;
          background: rgba(26, 27, 23, 0.85);
          border: 1px solid var(--border);
          border-radius: 14px;
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
        }

        .skill-card:hover {
          border-color: rgba(228, 223, 218, 0.45);
          background: rgba(33, 34, 29, 0.95);
          box-shadow: 0 14px 32px -10px rgba(0, 0, 0, 0.7);
        }

        .card-ambient-glow {
          position: absolute;
          width: 70px;
          height: 70px;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(245, 194, 200, 0.12) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .skill-card:hover .card-ambient-glow {
          opacity: 1;
        }

        .skill-logo-wrap {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .skill-logo-img {
          width: 48px;
          height: 48px;
          object-fit: contain;
          transition: transform 0.25s ease;
        }

        .skill-card:hover .skill-logo-img {
          transform: scale(1.08);
        }

        .skill-card-name {
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--fg);
          text-align: center;
          letter-spacing: -0.01em;
        }

        /* ── Core Competencies ── */
        .tech-competencies-wrap {
          margin-top: clamp(3rem, 7vw, 4.5rem);
        }

        .perk-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        .perk-card {
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          padding: 1.5rem;
          background: rgba(22, 23, 19, 0.65);
          backdrop-filter: blur(8px);
          transition: border-color 0.25s ease, background-color 0.25s ease;
        }

        .perk-card:hover {
          border-color: var(--border-hi);
          background: var(--surface-hi);
        }

        .perk-icon-box {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: var(--r-sm);
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }

        .perk-card:hover .perk-icon-box {
          transform: scale(1.08);
        }

        .perk-title {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--fg);
          margin: 0 0 0.5rem 0;
        }

        .perk-desc {
          font-size: 0.9rem;
          color: var(--fg-soft);
          line-height: 1.55;
          margin: 0;
        }

        @media (min-width: 900px) {
          .perk-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .ed-tech-stage .ed-left-rail,
          .ed-tech-stage .ed-right-rail {
            display: flex;
          }

          .ed-tech-container {
            padding-left: 3.5rem;
            padding-right: 3rem;
          }

          .tech-heading-block {
            align-items: flex-start;
            text-align: left;
          }

          .tab-pill-bar {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  )
}