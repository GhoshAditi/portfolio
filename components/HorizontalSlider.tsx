'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import About from './About'
import TechStack from './TechStack'
import Services from './Services'

export default function HorizontalSlider() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Smoothly translates 3 panels side-by-side (0% to -66.666%)
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.666%'])

  return (
    <div id="horizontal-slider" ref={containerRef} className="horizontal-scroll-section">
      <div className="horizontal-sticky-viewport">
        {/* Progress bar across the 3 sections */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, zIndex: 50, background: 'rgba(255,255,255,0.06)' }}>
          <motion.div 
            style={{ 
              scaleX: scrollYProgress, 
              transformOrigin: '0%', 
              height: '100%', 
              background: 'var(--color-rose-quartz-bloom)' 
            }} 
          />
        </div>

        <motion.div style={{ x }} className="horizontal-track">
          <div className="horizontal-panel">
            <About />
          </div>
          <div className="horizontal-panel">
            <TechStack />
          </div>
          <div className="horizontal-panel">
            <Services />
          </div>
        </motion.div>
      </div>
    </div>
  )
}