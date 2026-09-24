'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import dynamic from 'next/dynamic'
import connectAnimation from '@/public/Connect.json'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineEnvelope, HiOutlineArrowTopRightOnSquare, HiOutlineCommandLine } from 'react-icons/hi2'

// Dynamically import Lottie to prevent SSR hydration errors
const Lottie = dynamic(() => import('lottie-react').then((mod) => mod.Lottie), { 
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100px' }} />
})

const EASE = [0.16, 1, 0.3, 1] as const

const socialPlatforms = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={32} style={{ color: '#0a66c2' }} />,
    url: "https://linkedin.com/in/aditighosh2005",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={32} style={{ color: '#e4edf1' }} />,
    url: "https://github.com/GhoshAditi",
  },
  {
    name: "LeetCode",
    icon: <HiOutlineCommandLine size={32} style={{ color: '#ffa116' }} />,
    url: "http://localhost:3000/#tech5",
  },
  {
    name: "Email",
    icon: <HiOutlineEnvelope size={32} style={{ color: 'var(--red)' }} />,
    url: "mailto:aditighosh668@gmail.com",
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
    <section id="socials" ref={ref} className="ed-connect-stage section">
      {/* ── Background Vertical Grid Guides ── */}
      <div className="ed-grid-guides" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      {/* ── Left Rail: Section Index ── */}
      <div className="ed-left-rail" aria-hidden="true">
        <span className="ed-rail-text">CHAPTER // 08 • NETWORK</span>
      </div>

      {/* ── Right Rail: Status Indicator ── */}
      <div className="ed-right-rail" aria-hidden="true">
        <div className="ed-scroll-indicator">
          <span className="ed-scroll-label">CONNECT</span>
          <span className="ed-scroll-line" />
        </div>
      </div>

      <div className="container ed-connect-container">
        
        {/* ── Main Curtain Layout: Let's + Lottie on Left, 2x2 Square Grid on Right ── */}
        <div className="connect-split-grid">
          
          {/* Left Column: Big "Let's" + Lottie Animation */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="connect-left-col"
          >
            <div className="connect-badge-wrap">
              <span className="chip">Connect Online</span>
            </div>

            <div className="connect-heading-wrapper">
              <h2 className="t-h2 connect-title-text">
                Let&apos;s
              </h2>
              <div className="connect-lottie-inline">
                <Lottie src={connectAnimation} loop autoplay />
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Square Grid of Glowing Buttons */}
          <div className="connect-right-col">
            <div className="socials-square-grid">
              {socialPlatforms.map((platform, i) => (
                <motion.a
                  key={i}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp(0.1 + i * 0.1)}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    transition: { type: 'spring', stiffness: 400, damping: 15 }
                  }}
                  className="connect-square-card"
                >
                  <div className="connect-card-glow" />
                  <div className="connect-card-inner">
                    <div className="connect-icon-box">
                      {platform.icon}
                    </div>
                    <div className="connect-card-bottom">
                      <h3 className="connect-card-title">{platform.name}</h3>
                      <HiOutlineArrowTopRightOnSquare size={18} className="connect-external-icon" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .ed-connect-stage {
          position: sticky;
          top: 0;
          z-index: 20;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: center;
          background: 
            radial-gradient(circle at 10% 20%, rgba(224, 101, 96, 0.06) 0%, transparent 45%),
            radial-gradient(circle at 90% 85%, rgba(228, 223, 218, 0.05) 0%, transparent 45%),
            linear-gradient(135deg, #131410 0%, #1a1b16 50%, #12130f 100%);
          border-top: 1px solid rgba(60, 60, 56, 0.5);
          border-bottom: 1px solid rgba(60, 60, 56, 0.5);
          padding-top: 0;
          padding-bottom: 0;
          box-sizing: border-box;
          overflow: hidden;
        }

        .ed-connect-container {
          position: relative;
          z-index: 2;
          max-width: 1160px;
          margin: 0 auto;
          width: 100%;
        }

        .connect-split-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: stretch;
          min-height: 100vh;
          min-height: 100svh;
        }

        @media (min-width: 960px) {
          .connect-split-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 4rem;
          }
        }

        .connect-left-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
          text-align: left;
          width: 100%;
          padding-bottom: clamp(2rem, 5vw, 5rem);
        }

        .connect-badge-wrap {
          margin-bottom: 0.75rem;
        }

        .connect-heading-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .connect-title-text {
          font-size: clamp(4.5rem, 9vw, 8rem) !important;
          line-height: 0.95 !important;
          margin: 0 !important;
          letter-spacing: -0.04em;
          font-weight: 700;
        }

        .connect-lottie-inline {
          width: 440px;
          max-width: 90vw;
          display: block;
          margin-left: -0.75rem;
          margin-top: -0.25rem;
        }

        .connect-right-col {
          display: flex;
          flex-direction: column;
        }

        /* Keep two social links on each row at the top of the right column. */
        .socials-square-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
          align-content: start;
          padding-top: clamp(2rem, 6vw, 6rem);
        }

        .connect-square-card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 150px;
          border: 1px solid rgba(228, 223, 218, 0.15);
          border-radius: 20px;
          background: rgba(26, 27, 22, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 1.25rem;
          text-decoration: none;
          overflow: hidden;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.6);
          transition: border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .connect-square-card:hover {
          border-color: rgba(224, 101, 96, 0.4);
          background: rgba(32, 33, 27, 0.98);
          box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(224, 101, 96, 0.1);
        }

        .connect-card-glow {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(224, 101, 96, 0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .connect-card-inner {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          position: relative;
          z-index: 2;
        }

        .connect-icon-box {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-shrink: 0;
          padding-top: 0.25rem;
        }

        .connect-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .connect-card-title {
          font-family: var(--font-body);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--fg);
          margin: 0;
        }

        .connect-external-icon {
          color: var(--steel);
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .connect-square-card:hover .connect-external-icon {
          color: var(--red);
          transform: translate(2px, -2px);
        }

        @media (max-width: 750px) {
          .ed-connect-stage {
            position: relative;
            min-height: auto;
            height: auto;
            align-items: stretch;
            padding: 2.5rem 0 3rem;
          }

          .connect-split-grid {
            min-height: auto;
            gap: 2rem;
          }

          .connect-left-col {
            justify-content: flex-start;
            padding-bottom: 0;
          }

          .connect-title-text {
            font-size: clamp(3.5rem, 17vw, 5rem) !important;
          }

          .connect-lottie-inline {
            width: 100%;
            max-width: 100%;
            margin-left: -0.35rem;
          }

          .socials-square-grid {
            gap: 0.75rem;
            padding-top: 0;
          }

          .connect-square-card {
            min-height: 130px;
            padding: 1rem;
            border-radius: 16px;
          }

          .connect-card-title {
            font-size: 1rem;
          }
        }

        @media (min-width: 1024px) {
          .ed-connect-stage .ed-left-rail,
          .ed-connect-stage .ed-right-rail {
            display: flex;
          }

          .ed-connect-container {
            padding-left: 3.5rem;
            padding-right: 3rem;
          }
        }
      `}</style>
    </section>
  )
}