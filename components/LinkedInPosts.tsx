'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineHeart, HiOutlineChatBubbleLeftRight, HiOutlineShare, HiOutlineEye, HiOutlineSpeakerWave, HiOutlineTrophy } from 'react-icons/hi2'
import { FaLinkedin } from 'react-icons/fa'

const EASE = [0.16, 1, 0.3, 1] as const

const linkedinPosts = [
  {
    icon: <HiOutlineSpeakerWave size={18} style={{ color: 'var(--red)', flexShrink: 0 }} />,
    content: "Had the wonderful opportunity to be a speaker at RCCIIT WEBVERSE 1.0! Introduced juniors to Web Development alongside Rivu Chatterjee and Rishi Paul. My first speaking session and it was an incredible experience conducting hands-on sessions and seeing the energy from students. Grateful for this opportunity to grow and contribute! #webdevelopment #gdg #rcciit #speakerjourney",
    likes: 541,
    comments: 2,
    shares: 2,
    date: "2 months ago",
    image: null,
    featured: true
  },
  {
    icon: <HiOutlineTrophy size={18} style={{ color: 'var(--red)', flexShrink: 0 }} />,
    content: "Thrilled to announce that The Hack-ators successfully boarded the ship for offline hackathon participation with StatusCode2! Our project VVote - a Decentralized Voting Application built using Ethereum Blockchain. Worked on front-end development and AI Chatbot implementation. Big thanks to my amazing team and all sponsors including Avalanche, GitHub, and others! #hackathon #blockchain #ethereum #web3 #teamwork",
    likes: 236,
    comments: 10,
    shares: 2,
    date: "2 years ago",
    image: null,
    featured: true
  }
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
})

export default function LinkedInPosts() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="linkedin" ref={ref} className="section">
      <div className="container">
        
        {/* ── Heading ─────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: 'clamp(2.5rem, 8vw, 4.5rem)' }}
        >
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>Community Engagement</p>
          <h2 className="t-h2">Social Highlights</h2>
          <p className="t-body" style={{ marginTop: '1.25rem', fontWeight: 400 }}>
            Featured insights and achievements from community engagement across platforms. Real-time campaign updates from events, speaking sessions, and hackathons.
          </p>
        </motion.div>

        {/* ── Posts Grid ──────────────────────────────────────── */}
        <motion.div 
          className="posts-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          {linkedinPosts.map((post, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.98 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { type: 'spring', stiffness: 80, damping: 12 }
                }
              }}
              whileHover={{ 
                y: -6,
                transition: { type: 'spring', stiffness: 400, damping: 15 }
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-lg)',
                background: 'var(--surface)',
                padding: 'clamp(1.25rem, 4vw, 2rem)',
                transition: 'border-color var(--dur-std) var(--ease-out-quart), background-color var(--dur-std) var(--ease-out-quart)',
                cursor: 'default'
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-hi)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--r-md)',
                    background: 'var(--red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#fff',
                    flexShrink: 0,
                  }}
                >
                  AG
                </motion.div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', fontWeight: 500, color: 'var(--fg)', lineHeight: 1.2 }}>Aditi Ghosh</h3>
                  <p className="t-label" style={{ marginTop: '0.2rem' }}>{post.date}</p>
                </div>
                <FaLinkedin size={18} style={{ color: 'var(--red)' }} />
              </div>

              {/* Content */}
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flex: 1 }}>
                <div style={{ marginTop: '0.25rem' }}>{post.icon}</div>
                <p style={{ fontSize: 'clamp(1rem, 3vw, 1.15rem)', color: 'var(--fg-soft)', lineHeight: 1.6, fontWeight: 400 }}>
                  {post.content}
                </p>
              </div>

              {/* Footer / Stats */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.75rem, 2vw, 1.25rem)', color: 'var(--fg-soft)' }}>
                  <motion.div whileHover={{ scale: 1.2, color: 'var(--red)' }} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '1rem', cursor: 'pointer' }}>
                    <HiOutlineHeart size={14} /> {post.likes}
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, color: 'var(--fg)' }} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '1rem', cursor: 'pointer' }}>
                    <HiOutlineChatBubbleLeftRight size={14} /> {post.comments}
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, color: 'var(--fg)' }} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '1rem', cursor: 'pointer' }}>
                    <HiOutlineShare size={14} /> {post.shares}
                  </motion.div>
                </div>
                <motion.a
                  href="https://linkedin.com/in/aditighosh2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '1rem', fontWeight: 600, color: 'var(--red)', textDecoration: 'none' }}
                >
                  <HiOutlineEye size={16} /> View
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .posts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1rem, 3vw, 1.5rem);
        }
        @media (min-width: 1024px) {
          .posts-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>

  )
}
