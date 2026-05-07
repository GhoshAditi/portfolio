'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineEnvelope, HiOutlineArrowTopRightOnSquare, HiOutlineCommandLine } from 'react-icons/hi2'

const EASE = [0.16, 1, 0.3, 1] as const

const socialPlatforms = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={22} />,
    url: "https://linkedin.com/in/aditighosh2005",
    description: "Connect with me professionally and stay updated with my career journey, achievements, and industry insights.",
    stats: "Professional networking • Career updates"
  },
  {
    name: "GitHub",
    icon: <FaGithub size={22} />,
    url: "https://github.com/GhoshAditi",
    description: "Explore my open source contributions, personal projects, and collaborative development work.",
    stats: "Open source • Code repositories"
  },
  {
    name: "LeetCode",
    icon: <HiOutlineCommandLine size={22} />,
    url: "https://leetcode.com/u/aditi_ghosh668/",
    description: "Follow my competitive programming journey and algorithmic problem-solving progress.",
    stats: "Algorithms • Problem solving"
  }
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
})

export default function Socials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="socials" ref={ref} className="section">
      <div className="container">
        
        {/* ── Heading ─────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: 'clamp(2.5rem, 8vw, 4.5rem)' }}
        >
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>Connect Online</p>
          <h2 className="t-h2">Connect With Me</h2>
          <p className="t-body" style={{ marginTop: '1.25rem', fontWeight: 400 }}>
            Follow my work across multiple platforms. GitHub for open-source, LinkedIn for industry updates, LeetCode for algorithm challenges.
          </p>
        </motion.div>

        {/* ── Social Platforms Grid ───────────────────────────── */}
        <div className="socials-grid">
          {socialPlatforms.map((platform, i) => (
            <motion.div
              key={i}
              variants={fadeUp(0.1 + i * 0.1)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-lg)',
                background: 'var(--surface)',
                padding: 'clamp(1.5rem, 4vw, 2rem)',
                transition: 'border-color var(--dur-std) var(--ease-out-quart)',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-hi)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <div style={{
                width: '40px',
                height: '40px',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg)',
                color: 'var(--red)',
                marginBottom: '1.25rem',
              }}>
                {platform.icon}
              </div>

              <h3 className="t-h3" style={{ fontSize: 'clamp(1.3rem, 4vw, 1.55rem)', marginBottom: '0.75rem' }}>{platform.name}</h3>
              <p style={{ fontSize: 'clamp(1rem, 3vw, 1.15rem)', color: 'var(--fg-soft)', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1, fontWeight: 400 }}>
                {platform.description}
              </p>
              
              <p className="t-label" style={{ fontSize: '0.75rem', color: 'var(--steel)', marginBottom: '1.5rem', fontWeight: 600 }}>
                {platform.stats}
              </p>

              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-ghost"
                style={{ fontSize: '0.9rem', padding: '0.6rem', fontWeight: 600 }}
              >
                Follow
                <HiOutlineArrowTopRightOnSquare size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* ── Direct Ping CTA ─────────────────────────────────── */}
        <motion.div
          variants={fadeUp(0.6)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            marginTop: 'clamp(2.5rem, 8vw, 3.5rem)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-lg)',
            padding: 'clamp(1.5rem, 5vw, 2.5rem)',
            textAlign: 'center',
            background: 'var(--bg)',
          }}
        >
          <h3 className="t-h3" style={{ marginBottom: '0.75rem', fontSize: 'clamp(1.4rem, 4vw, 1.8rem)' }}>Direct Ping?</h3>
          <p className="t-body" style={{ margin: '0 auto 2rem', fontWeight: 400, fontSize: 'clamp(1rem, 3vw, 1.1rem)' }}>
            Send a direct message for internships, freelance work, or product collaboration.
          </p>
          <a href="mailto:aditighosh668@gmail.com" className="cta-primary" style={{ fontWeight: 600, padding: '0.85rem 2rem', fontSize: '0.9rem' }}>
            <HiOutlineEnvelope size={18} />
            Send Email
          </a>
        </motion.div>
      </div>

      <style>{`
        .socials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1rem, 3vw, 1.5rem);
        }
        @media (min-width: 768px) {
          .socials-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .socials-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>

  )
}