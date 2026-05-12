'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineShieldCheck, HiOutlineBolt, HiOutlineFire } from 'react-icons/hi2'

const EASE = [0.16, 1, 0.3, 1] as const

const technologies = [
  { name: 'Next.js',      logo: 'https://skillicons.dev/icons?i=nextjs'    },
  { name: 'React',        logo: 'https://skillicons.dev/icons?i=react'     },
  { name: 'TypeScript',   logo: 'https://skillicons.dev/icons?i=ts'        },
  { name: 'JavaScript',   logo: 'https://skillicons.dev/icons?i=js'        },
  { name: 'Tailwind CSS', logo: 'https://skillicons.dev/icons?i=tailwind'  },
  { name: 'Node.js',      logo: 'https://skillicons.dev/icons?i=nodejs'    },
  { name: 'Express',      logo: 'https://skillicons.dev/icons?i=express'   },
  { name: 'Python',       logo: 'https://skillicons.dev/icons?i=python'    },
  { name: 'Java',         logo: 'https://skillicons.dev/icons?i=java'      },
  { name: 'PostgreSQL',   logo: 'https://skillicons.dev/icons?i=postgres'  },
  { name: 'MongoDB',      logo: 'https://skillicons.dev/icons?i=mongodb'   },
  { name: 'MySQL',        logo: 'https://skillicons.dev/icons?i=mysql'     },
  { name: 'Firebase',     logo: 'https://skillicons.dev/icons?i=firebase'  },
  { name: 'Docker',       logo: 'https://skillicons.dev/icons?i=docker'    },
  { name: 'Azure',        logo: 'https://skillicons.dev/icons?i=azure'     },
  { name: 'AWS',          logo: 'https://skillicons.dev/icons?i=aws'       },
  { name: 'GitHub',       logo: 'https://skillicons.dev/icons?i=github'    },
  { name: 'Vercel',       logo: 'https://skillicons.dev/icons?i=vercel'    },
]

const perkCards = [
  {
    title: 'Performance First',
    text: 'Core Web Vitals focused architecture. Lighthouse-grade optimization across all projects.',
    icon: <HiOutlineBolt size={24} />,
    color: 'var(--red)'
  },
  {
    title: 'Security Hardened',
    text: 'Defense-in-depth practices. Sensitive data handling with industry best practices.',
    icon: <HiOutlineShieldCheck size={24} />,
    color: 'var(--fg)'
  },
  {
    title: 'Rapid Iteration',
    text: 'Clean production deployments. Fast feedback loops with robust error handling.',
    icon: <HiOutlineFire size={24} />,
    color: 'var(--fg)'
  },
]

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="tech" ref={ref} className="section">
      <div className="container">

        {/* ── Heading ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ marginBottom: 'clamp(2.5rem, 8vw, 4rem)' }}
        >
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>Skill Tree</p>
          <h2 className="t-h2">Tech Mastery</h2>
          <p className="t-body" style={{ marginTop: '1.25rem', fontWeight: 400 }}>
            Specialized expertise across modern web development, cloud infrastructure, and full-stack systems. Proven track record shipping production-grade code at scale.
          </p>
        </motion.div>

        {/* ── Tech grid ───────────────────────────────────────── */}
        <div
          style={{
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-lg)',
            padding: 'clamp(1.5rem, 5vw, 3rem)',
            background: 'var(--surface)',
            marginBottom: 'clamp(3rem, 10vw, 4rem)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div 
            className="tech-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {technologies.map((item) => (
              <motion.div
                key={item.name}
                variants={{
                  hidden: { opacity: 0, y: 15, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { type: 'spring', stiffness: 100, damping: 15 }
                  }
                }}
                whileHover={{ 
                  y: -4, 
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(0.5rem, 2vw, 1rem)',
                  padding: 'clamp(0.75rem, 2vw, 1rem) clamp(0.85rem, 2vw, 1.25rem)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-md)',
                  background: 'var(--bg)',
                  cursor: 'default',
                  transition: 'border-color 0.3s ease, background-color 0.3s ease',
                }}
                className="tech-item"
              >
                <img src={item.logo} alt={`${item.name} logo`} width={28} height={28} loading="lazy" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 'clamp(0.98rem, 2vw, 1.15rem)', color: 'var(--fg)', fontWeight: 500 }}>{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Core competencies ───────────────────────────────── */}
        <div>
          <p className="t-label" style={{ marginBottom: '2rem' }}>Core Competencies</p>
          <motion.div 
            className="perk-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4
                }
              }
            }}
          >
            {perkCards.map((perk) => (
              <motion.div
                key={perk.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { type: 'spring', stiffness: 80, damping: 12 }
                  }
                }}
                whileHover={{ 
                  y: -10,
                  transition: { type: 'spring', stiffness: 300, damping: 15 }
                }}
                className="perk-card"
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: '24px',
                  padding: 'clamp(1.5rem, 5vw, 2.5rem)',
                  background: 'var(--surface)',
                  transition: 'border-color 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default'
                }}
              >
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  background: 'var(--bg)', 
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  color: perk.color,
                  marginBottom: '1.5rem',
                  transition: 'all 0.4s ease'
                }} className="perk-icon-box">
                  {perk.icon}
                </div>
                <h4 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.4rem)', fontWeight: 600, color: 'var(--fg)', marginBottom: '1rem' }}>{perk.title}</h4>
                <p style={{ fontSize: 'clamp(1.05rem, 3vw, 1.15rem)', color: 'var(--fg-soft)', lineHeight: 1.6, fontWeight: 400 }}>{perk.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(0.5rem, 2vw, 0.75rem);
        }
        .tech-item:hover {
          background: var(--surface-hi);
          border-color: var(--red);
          transform: translateY(-3px);
        }
        [data-theme="light"] .tech-item:hover {
          background: #fff;
        }
        .perk-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .perk-card:hover {
          border-color: var(--red);
          box-shadow: 0 25px 50px -12px rgba(255, 0, 0, 0.15);
          background: var(--surface-hi);
        }
        [data-theme="light"] .perk-card:hover {
          background: #fff;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.3);
        }
        .perk-card:hover .perk-icon-box {
          border-color: var(--red);
          transform: rotate(5deg) scale(1.1);
          background: var(--bg);
        }
        @media (min-width: 640px) {
          .tech-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1024px) {
          .tech-grid { grid-template-columns: repeat(4, 1fr); }
          .perk-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>

  )
}