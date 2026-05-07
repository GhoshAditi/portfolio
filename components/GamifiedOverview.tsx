'use client'

import { motion } from 'framer-motion'
import { HiOutlineFlag, HiOutlineCheckBadge, HiOutlineBolt } from 'react-icons/hi2'
import { NumberTicker } from '@/components/magicui/number-ticker'


const metrics = [
  { label: 'Level',       value: 18,    hint: 'Builder Rank',     suffix: '' },
  { label: 'XP',          value: 12480, hint: 'Engineering XP',   suffix: '' },
  { label: 'Quest Wins',  value: 15,    hint: 'Shipped Projects', suffix: '' },
  { label: 'Streak',      value: 143,   hint: 'Learning Days',    suffix: '' },
]

const achievements = [
  { text: 'Built AI + social-impact apps',    icon: <HiOutlineFlag  size={16} style={{ color: 'var(--red)', flexShrink: 0 }} /> },
  { text: 'Full-stack rapid prototyping',     icon: <HiOutlineCheckBadge  size={16} style={{ color: 'var(--steel)', flexShrink: 0 }} /> },
  { text: 'Performance-first UI execution',   icon: <HiOutlineBolt  size={16} style={{ color: 'var(--steel)', flexShrink: 0 }} /> },
]

export default function GamifiedOverview() {
  return (
    <section style={{ paddingBottom: 'clamp(3rem, 10vw, 5rem)', position: 'relative', zIndex: 20, marginTop: '-3rem' }}>
      <div className="container">
        <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', background: 'var(--surface)', padding: 'clamp(1rem, 4vw, 2.5rem)', backdropFilter: 'blur(10px)' }}>

          {/* ── Header row ─────────────────────────────────────── */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
            <div>
              <p className="t-label" style={{ fontSize: '0.65rem' }}>Player Dashboard</p>
              <h2 style={{ fontSize: 'clamp(1.3rem, 4vw, 1.6rem)', fontWeight: 500, color: 'var(--fg)', letterSpacing: '-0.02em', marginTop: '0.25rem' }}>
                Command Center
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <a href="#projects" className="chip" style={{ fontWeight: 600, fontSize: '0.65rem' }}>Quests</a>
              <a href="#services" className="chip" style={{ fontWeight: 600, fontSize: '0.65rem' }}>Skill Tree</a>
            </div>
          </div>

          {/* ── Metric row ─────────────────────────────────────── */}
          <motion.div 
            className="overview-metrics"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {metrics.map((m) => (
              <motion.div
                key={m.label}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { type: 'spring', stiffness: 100, damping: 15 }
                  }
                }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 400, damping: 12 }
                }}
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-md)',
                  padding: 'clamp(0.75rem, 2vw, 1.25rem)',
                  background: 'var(--bg)',
                  transition: 'border-color 0.3s ease, background-color 0.3s ease',
                  cursor: 'default'
                }}
                className="metric-card"
              >
                <p style={{ fontSize: '0.8rem', color: 'var(--fg-soft)', fontWeight: 400, marginBottom: '0.25rem' }}>{m.label}</p>
                <p style={{ fontSize: 'clamp(1.5rem, 5vw, 1.85rem)', fontWeight: 500, color: 'var(--fg)', letterSpacing: '-0.03em', lineHeight: 1, margin: '0.25rem 0' }}>
                  <NumberTicker value={m.value} />
                  {m.suffix}
                </p>
                <p className="t-label" style={{ fontSize: '0.6rem', marginTop: '0.25rem' }}>{m.hint}</p>
              </motion.div>
            ))}
          </motion.div>

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
              <p className="t-label" style={{ marginBottom: '1rem', fontSize: '0.7rem' }}>Unlocked Achievements</p>
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
                      fontSize: '0.9rem',
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
              <p className="t-label" style={{ marginBottom: '1rem', fontSize: '0.7rem' }}>Current Mission Loadout</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { icon: <HiOutlineFlag size={16} style={{ color: 'var(--red)' }} />,   text: 'Build impactful products'  },
                  { icon: <HiOutlineCheckBadge size={16} style={{ color: 'var(--steel)' }} />, text: 'Ship resilient systems'   },
                  { icon: <HiOutlineBolt size={16} style={{ color: 'var(--steel)' }} />, text: 'Scale with performance'   },
                ].map(r => (
                  <motion.p 
                    key={r.text} 
                    whileHover={{ x: 5 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--fg-soft)', fontWeight: 400, cursor: 'default' }}
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
        .overview-metrics {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(0.5rem, 2vw, 0.75rem);
          margin-bottom: clamp(0.5rem, 2vw, 0.75rem);
        }
        .metric-card:hover {
          border-color: var(--red);
          background: var(--surface-hi);
          transform: translateY(-2px);
        }
        [data-theme="light"] .metric-card:hover {
          background: #fff;
        }
        .overview-bottom {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(0.5rem, 2vw, 0.75rem);
        }
        @media (min-width: 768px) {
          .overview-metrics { grid-template-columns: repeat(4, 1fr); }
          .overview-bottom  { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>

  )
}
