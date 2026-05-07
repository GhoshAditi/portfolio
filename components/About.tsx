'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineAcademicCap, HiOutlineUser, HiOutlineCalendarDays } from 'react-icons/hi2'
import { TextHighlighter } from '@/components/fancy/text/text-highlighter'
const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
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

  return (
    <section id="about" ref={ref} className="section" style={{ paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}>
      <div className="container">

        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: 'clamp(2.5rem, 8vw, 4rem)' }}
        >
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>Origin Story</p>
          <h2 className="t-h2">About Me</h2>
        </motion.div>

        <div className="about-grid">

          {/* ── Left: Bio ───────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <motion.div 
              variants={fadeUp(0)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}
            >
              <HiOutlineUser size={20} style={{ color: 'var(--red)' }} aria-hidden="true" />
              <h3 className="t-h3" style={{ fontWeight: 500 }}>Character Profile</h3>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <motion.p 
                variants={fadeUp(0)}
                className="t-body" 
                style={{ fontWeight: 400, fontSize: 'clamp(1.1rem, 3vw, 1.25rem)' }}
              >
                I am a <TextHighlighter>full-stack developer</TextHighlighter> obsessed with building products that are <TextHighlighter highlightColor="rgba(255,19,19,0.15)">beautiful, useful, and technically sharp.</TextHighlighter>
              </motion.p>
              <motion.p 
                variants={fadeUp(0)}
                className="t-body" 
                style={{ fontWeight: 400, fontSize: 'clamp(1.1rem, 3vw, 1.25rem)' }}
              >
                From frontend interactions to backend architecture, I enjoy owning the <TextHighlighter>full game board.</TextHighlighter> I care deeply about speed, code quality, and product clarity.
              </motion.p>
              <motion.p 
                variants={fadeUp(0)}
                className="t-body" 
                style={{ fontWeight: 400, fontSize: 'clamp(1.1rem, 3vw, 1.25rem)' }}
              >
                Outside projects, I invest in <TextHighlighter highlightColor="rgba(70,70,70,0.1)">open-source, community work,</TextHighlighter> and continuous learning to keep leveling up.
              </motion.p>
            </div>

            {/* Stat pair */}
            <motion.div 
              variants={fadeUp(0)}
              style={{ display: 'flex', gap: 'clamp(1.5rem, 5vw, 3rem)', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}
            >
              <motion.div whileHover={{ scale: 1.05 }} style={{ cursor: 'default' }}>
                <p style={{ fontSize: 'clamp(1.75rem, 6vw, 2.35rem)', fontWeight: 500, color: 'var(--fg)', letterSpacing: '-0.03em', lineHeight: 1 }}>8+</p>
                <p className="t-label" style={{ marginTop: '0.3rem', fontSize: '0.7rem' }}>Projects Completed</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} style={{ cursor: 'default' }}>
                <p style={{ fontSize: 'clamp(1.75rem, 6vw, 2.35rem)', fontWeight: 500, color: 'var(--fg)', letterSpacing: '-0.03em', lineHeight: 1 }}>2+</p>
                <p className="t-label" style={{ marginTop: '0.3rem', fontSize: '0.7rem' }}>Years Experience</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Right: Education ────────────────────────────────── */}
          <motion.div
            variants={fadeUp(0.18)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <HiOutlineAcademicCap size={20} style={{ color: 'var(--red)' }} aria-hidden="true" />
              <h3 className="t-h3" style={{ fontWeight: 500 }}>Academy</h3>
            </div>

            {education.map((edu) => (
              <div key={edu.degree} style={{ border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 'clamp(1.25rem, 4vw, 1.75rem)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    flexShrink: 0,
                    width: '36px',
                    height: '36px',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--r-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--surface)',
                  }}>
                    <HiOutlineCalendarDays size={18} style={{ color: 'var(--steel)' }} aria-hidden="true" />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: 'clamp(1.1rem, 4vw, 1.3rem)', fontWeight: 500, color: 'var(--fg)', lineHeight: 1.4, marginBottom: '0.4rem' }}>
                      {edu.degree}
                    </h4>
                    <p style={{ fontSize: '1.05rem', color: 'var(--red)', marginBottom: '0.3rem', fontWeight: 400 }}>
                      {edu.institution}
                    </p>
                    <p className="t-label" style={{ marginBottom: '0.75rem', fontSize: '0.65rem' }}>{edu.year}</p>
                    <p style={{ fontSize: '1rem', color: 'var(--fg-soft)', marginBottom: '0.75rem', fontWeight: 400, lineHeight: 1.5 }}>
                      {edu.description}
                    </p>
                    <span style={{
                      display: 'inline-block',
                      padding: '0.2rem 0.65rem',
                      border: '1px solid var(--border)',
                      borderRadius: '9999px',
                      fontSize: '0.9rem',
                      color: 'var(--fg)',
                      background: 'var(--surface)',
                      fontWeight: 500,
                    }}>
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
        }
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 5rem;
          }
        }
      `}</style>
    </section>
  )
}