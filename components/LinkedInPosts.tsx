'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import dynamic from 'next/dynamic'
import socialMediaAnimation from '@/public/social-media.json'
import { HiOutlineHeart, HiOutlineChatBubbleLeftRight, HiOutlineShare, HiOutlineEye, HiOutlineSpeakerWave, HiOutlineTrophy } from 'react-icons/hi2'
import { FaLinkedin } from 'react-icons/fa'

const Lottie = dynamic(() => import('lottie-react').then((mod) => mod.Lottie), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '200px' }} />,
})

const EASE = [0.16, 1, 0.3, 1] as const

const linkedinPosts = [
  {
    icon: <HiOutlineSpeakerWave size={18} style={{ color: 'var(--red)', flexShrink: 0 }} />,
    content: "Had the wonderful opportunity to be a speaker at RCCIIT WEBVERSE 1.0! Introduced juniors to Web Development alongside Rivu Chatterjee and Rishi Paul. My first speaking session and it was an incredible experience conducting hands-on sessions and seeing the energy from students. Grateful for this opportunity to grow and contribute! #webdevelopment #gdg #rcciit #speakerjourney",
    likes: 541,
    comments: 2,
    shares: 2,
    date: '2 months ago',
    featured: true,
  },
  {
    icon: <HiOutlineTrophy size={18} style={{ color: 'var(--red)', flexShrink: 0 }} />,
    content: "Thrilled to announce that The Hack-ators successfully boarded the ship for offline hackathon participation with StatusCode2! Our project VVote - a Decentralized Voting Application built using Ethereum Blockchain. Worked on front-end development and AI Chatbot implementation. Big thanks to my amazing team and all sponsors including Avalanche, GitHub, and others! #hackathon #blockchain #ethereum #web3 #teamwork",
    likes: 236,
    comments: 10,
    shares: 2,
    date: '2 years ago',
    featured: true,
  },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
})

export default function LinkedInPosts() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="linkedin" ref={ref} className="ed-community-stage section">
      <div className="ed-grid-guides" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      <div className="ed-left-rail" aria-hidden="true">
        <span className="ed-rail-text">CHAPTER // 07 • COMMUNITY</span>
      </div>

      <div className="ed-right-rail" aria-hidden="true">
        <div className="ed-scroll-indicator">
          <span className="ed-scroll-label">UPDATES</span>
          <span className="ed-scroll-line" />
        </div>
      </div>

      <div className="container ed-community-container">
        <div className="community-hero-grid">
          <motion.div
            className="community-lottie-wrap"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            <Lottie src={socialMediaAnimation} loop autoplay />
          </motion.div>

          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="community-header"
          >
            <div className="community-badge-wrap">
              <span className="chip">Community Engagement</span>
            </div>
            <h2 className="t-h2">Social Highlights</h2>
            <p className="t-body" style={{ marginTop: '1.25rem', fontWeight: 400 }}>
              Featured insights and achievements from community engagement across platforms. Real-time campaign updates from events, speaking sessions, and hackathons.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="posts-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
        >
          {linkedinPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 56, scaleY: 0.86 }}
              whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
              whileHover={{ y: -5, transition: { type: 'spring', stiffness: 400, damping: 15 } }}
              className="community-card"
              style={{ transformOrigin: 'top center' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: 'var(--r-md)',
                    background: 'var(--red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#fff',
                    flexShrink: 0,
                  }}
                >
                  AG
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--fg)', lineHeight: 1.2 }}>Aditi Ghosh</h3>
                  <p className="t-label" style={{ marginTop: '0.15rem', fontSize: '10px' }}>{post.date}</p>
                </div>
                <FaLinkedin size={16} style={{ color: 'var(--red)' }} />
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', marginBottom: '1.5rem', flex: 1 }}>
                <div style={{ marginTop: '0.2rem' }}>{post.icon}</div>
                <p style={{ fontSize: '0.92rem', color: 'var(--fg-soft)', lineHeight: 1.55, fontWeight: 400 }}>
                  {post.content}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--fg-soft)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem' }}>
                    <HiOutlineHeart size={14} /> {post.likes}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem' }}>
                    <HiOutlineChatBubbleLeftRight size={14} /> {post.comments}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem' }}>
                    <HiOutlineShare size={14} /> {post.shares}
                  </span>
                </div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--red)', textDecoration: 'none' }}
                >
                  <HiOutlineEye size={14} /> View
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .ed-community-stage {
          position: sticky;
          top: 0;
          z-index: 20;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: center;
          background: #151612;
          border-top: 1px solid rgba(60, 60, 56, 0.4);
          border-bottom: 1px solid rgba(60, 60, 56, 0.4);
          padding-top: clamp(2rem, 4vw, 3rem);
          padding-bottom: clamp(2rem, 4vw, 3rem);
          box-sizing: border-box;
          overflow: hidden;
        }

        .ed-community-container {
          position: relative;
          z-index: 2;
          max-width: 1080px;
          margin: 0 auto;
          width: 100%;
        }

        .community-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
          margin-bottom: clamp(1.25rem, 3vw, 2rem);
        }

        @media (min-width: 900px) {
          .community-hero-grid {
            grid-template-columns: 0.65fr 1.35fr;
          }
        }

        .community-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .community-badge-wrap {
          margin-bottom: 0.75rem;
        }

        .community-lottie-wrap {
          width: 100%;
          max-width: 170px;
          margin: 0 auto;
        }

        .community-card {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          background: #1a1b16;
          padding: 1.15rem;
          transition: border-color var(--dur-std) var(--ease-out-quart), background-color var(--dur-std) var(--ease-out-quart);
          cursor: default;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
          transform-origin: top center;
          will-change: transform, opacity;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(0.75rem, 2vw, 1rem);
          perspective: 1200px;
        }

        @media (min-width: 1024px) {
          .ed-community-stage {
            min-height: 100svh;
            height: 100svh;
          }

          .community-header .t-body {
            font-size: 0.9rem;
            line-height: 1.4;
          }

          .community-card p {
            font-size: 0.82rem !important;
            line-height: 1.4 !important;
          }

          .posts-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .ed-community-stage .ed-left-rail,
          .ed-community-stage .ed-right-rail {
            display: flex;
          }
          .ed-community-container {
            padding-left: 3.5rem;
            padding-right: 3rem;
          }
        }
      `}</style>
    </section>
  )
}