'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import LinkedInPosts from '@/components/LinkedInPosts'
import Socials from '@/components/Socials'
import Contact from '@/components/Contact'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const deckRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: deckProgress } = useScroll({
    target: deckRef,
    offset: ['start start', 'end end'],
  })

  // Smooth translation for the 3 horizontal sections: 0% to -66.666%
  const x = useTransform(deckProgress, [0, 1], ['0%', '-66.666%'])

  return (
    <main className="portfolio-shell">
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'var(--color-rose-quartz-bloom)',
          transformOrigin: '0%',
          zIndex: 1000,
        }}
      />

      <Header />
      <Hero />

      {/* ── Horizontal Scroll Section Wrapper ── */}
      <div ref={deckRef} className="horizontal-deck-wrapper">
        <div className="horizontal-deck-sticky">
          <motion.div style={{ x }} className="horizontal-deck-track">
            <div className="horizontal-slide">
              <About />
            </div>
            <div className="horizontal-slide">
              <TechStack />
            </div>
            <div className="horizontal-slide">
              <Services />
            </div>
          </motion.div>
        </div>
      </div>

      <Projects />
      <Experience />
      <LinkedInPosts />
      <Socials />
      <Contact />

      <style jsx>{`
        .horizontal-deck-wrapper {
          position: relative;
          height: 300vh;
          z-index: 20;
          background: var(--bg);
        }

        .horizontal-deck-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          height: 100svh;
          width: 100vw;
          overflow: hidden;
          display: flex;
          align-items: center;
          border-top-left-radius: 40px;
          border-top-right-radius: 40px;
          border-top: 1px solid var(--border-hi);
          box-shadow: 0 -35px 80px rgba(0, 0, 0, 0.95);
          background: var(--bg);
        }

        .horizontal-deck-track {
          display: flex;
          height: 100%;
          width: 300vw;
          will-change: transform;
        }

        .horizontal-slide {
          width: 100vw;
          height: 100vh;
          height: 100svh;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </main>
  )
}