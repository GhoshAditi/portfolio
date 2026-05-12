'use client'

import { motion } from 'framer-motion'
import { HiOutlineFlag, HiOutlineCheckBadge, HiOutlineBolt } from 'react-icons/hi2'

const achievements = [
  { text: 'Built AI + social-impact apps',    icon: <HiOutlineFlag  size={16} style={{ color: 'var(--red)', flexShrink: 0 }} /> },
  { text: 'Full-stack rapid prototyping',     icon: <HiOutlineCheckBadge  size={16} style={{ color: 'var(--fg-soft)', flexShrink: 0 }} /> },
  { text: 'Performance-first UI execution',   icon: <HiOutlineBolt  size={16} style={{ color: 'var(--fg-soft)', flexShrink: 0 }} /> },
]

export default function GamifiedOverview() {
  return (
    <section style={{ paddingBottom: 'clamp(3rem, 10vw, 5rem)', position: 'relative', zIndex: 20, marginTop: '-3rem' }}>
      <div className="container">
        <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', background: 'var(--surface)', padding: 'clamp(1rem, 4vw, 2.5rem)', backdropFilter: 'blur(10px)' }}>

          {/* ── Header row ─────────────────────────────────────── */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
            <div>
              <p className="t-label">Player Dashboard</p>
              <h2 style={{ fontSize: 'clamp(1.3rem, 4vw, 1.6rem)', fontWeight: 500, color: 'var(--fg)', letterSpacing: '-0.02em', marginTop: '0.25rem' }}>
                Command Center
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <a href="#projects" className="chip" style={{ fontWeight: 600 }}>Quests</a>
              <a href="#services" className="chip" style={{ fontWeight: 600 }}>Skill Tree</a>
            </div>
          </div>

          {/* ── Bottom row ─────────────────────────────────────── */}
          <div className="overview-bottom">

            {/* Achievements */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 80 }}
              style={{ border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: 'clamp(1rem, 3vw, 1.5rem)' }}
            >
              <p className="t-label" style={{ marginBottom: '1rem' }}>Unlocked Achievements</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {achievements.map((a) => (
                  <motion.div 
                    key={a.text} 
                    whileHover={{ x: 5, backgroundColor: 'var(--surface-hi)' }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.6rem',
                      padding: '0.5rem 0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--r-sm)',
                      background: 'var(--surface)',
                      fontSize: '1rem',
                      color: 'var(--fg)',
                      fontWeight: 400,
                      transition: 'all 0.3s ease'
                    }} className="achievement-item">
                    {a.icon}
                    {a.text}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mission loadout */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 80 }}
              style={{ border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: 'clamp(1rem, 3vw, 1.5rem)' }}
            >
              <p className="t-label" style={{ marginBottom: '1rem' }}>Current Mission Loadout</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { icon: <HiOutlineFlag size={16} style={{ color: 'var(--red)' }} />,   text: 'Build impactful products'  },
                  { icon: <HiOutlineCheckBadge size={16} style={{ color: 'var(--fg-soft)' }} />, text: 'Ship resilient systems'   },
                  { icon: <HiOutlineBolt size={16} style={{ color: 'var(--fg-soft)' }} />, text: 'Scale with performance'   },
                ].map(r => (
                  <motion.p 
                    key={r.text} 
                    whileHover={{ x: 5 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontSize: '1rem', color: 'var(--fg)', fontWeight: 400, cursor: 'default' }}
                  >
                    {r.icon}{r.text}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .overview-bottom {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(0.5rem, 2vw, 0.75rem);
        }
        @media (min-width: 768px) {
          .overview-bottom  { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>

  )
}
