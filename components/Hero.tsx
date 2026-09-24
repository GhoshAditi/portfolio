'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { 
  HiOutlineStar, 
  HiOutlineArrowLongRight, 
  HiOutlineEnvelope, 
  HiOutlineSparkles,
  HiOutlineChevronDown
} from 'react-icons/hi2'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import BlurText from '@/components/BlurText'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const reduced = useReducedMotion()

  const scrollToAbout = () => {
    const el = document.getElementById('about')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="hero-curtain-wrapper">
      <section id="home" className="ed-hero-stage">
        {/* ── Background Vertical Grid Lines ── */}
        <div className="ed-grid-guides" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>

        {/* ── Background Atmospheric Watermark ── */}
        <motion.div 
          className="ed-watermark" 
          aria-hidden="true"
          initial={reduced ? {} : { opacity: 0, x: -30 }}
          animate={reduced ? {} : { opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          ADITI GHOSH
        </motion.div>

        {/* ── Left Rail: Vertical Branding & Socials ── */}
        <motion.div 
          className="ed-left-rail"
          initial={reduced ? {} : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        >
          <span className="ed-rail-text">ENGINEER / DEVELOPER</span>
          <div className="ed-social-dock">
            <motion.a 
              whileHover={{ y: -3, scale: 1.15 }}
              href="url?id=16" 
              aria-label="Email" 
              className="ed-dock-icon"
            >
              <HiOutlineEnvelope size={16} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -3, scale: 1.15 }}
              href="https://github.com/aditighosh" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub" 
              className="ed-dock-icon"
            >
              <FaGithub size={15} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -3, scale: 1.15 }}
              href="https://linkedin.com/in/aditi-ghosh" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn" 
              className="ed-dock-icon"
            >
              <FaLinkedinIn size={15} />
            </motion.a>
          </div>
        </motion.div>

        {/* ── Right Rail: Minimal Scroll Indicator ── */}
        <motion.div 
          className="ed-right-rail" 
          initial={reduced ? {} : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        >
          <button 
            onClick={scrollToAbout}
            className="ed-scroll-btn"
            aria-label="Scroll to About section"
          >
            <span className="ed-scroll-label">SCROLL</span>
            <div className="ed-scroll-icon-wrap">
              <HiOutlineChevronDown size={16} />
            </div>
          </button>
        </motion.div>

        {/* ── Main Hero Content ── */}
        <div className="container ed-hero-container">
          <div className="ed-hero-grid">

            {/* Left: Text Column */}
            <div className="ed-text-column">
              
              {/* Status Chip */}
              <motion.div 
                initial={reduced ? {} : { opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="ed-badge-wrap"
              >
                <span className="chip">
                  <HiOutlineSparkles size={14} aria-hidden="true" />
                  Available for select collaborations
                </span>
              </motion.div>

              {/* Headline Group */}
              <div className="ed-title-group">
                <div className="ed-name-box">
                  <BlurText
                    text="Aditi Ghosh"
                    delay={60}
                    animateBy="words"
                    direction="top"
                    className="t-hero"
                  />
                </div>

                <motion.p 
                  initial={reduced ? {} : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
                  className="ed-subhead"
                >
                  Full stack engineer focused on performance, product clarity, and durable UI systems.
                </motion.p>
              </div>

              {/* Concise Bio */}
              <motion.p
                initial={reduced ? {} : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.25, ease: EASE }}
                className="t-body"
              >
                I design and ship compact digital products with clean architecture, sharp UX details, and measurable performance.
              </motion.p>

              {/* Actions */}
              <motion.div
                initial={reduced ? {} : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35, ease: EASE }}
                className="ed-actions-row"
              >
                <motion.button
                  className="ed-primary-link"
                  onClick={() => window.open('/Aditi_Ghosh_Resume.pdf', '_blank')}
                  aria-label="Open CV"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="ed-accent-dash" />
                  <span className="ed-link-label">Open CV</span>
                  <HiOutlineStar size={16} className="ed-link-star" />
                </motion.button>

                <motion.a 
                  href="#contact" 
                  className="cta-ghost" 
                  aria-label="Get In Touch"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Get In Touch
                  <HiOutlineArrowLongRight size={16} />
                </motion.a>
              </motion.div>
            </div>

            {/* Right: Portrait Image (Compact & Framed) */}
            <div className="ed-photo-column">
              <motion.div
                initial={reduced ? {} : { opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                whileHover={reduced ? {} : { y: -6, scale: 1.015 }}
                className="ed-photo-frame"
              >
                <div className="ed-photo-glow" />
                <div className="ed-photo-vignette" />
                
                <div className="ed-photo-inner">
                  <Image
                    src="https://i.postimg.cc/cJzDL4HQ/pfp.jpg"
                    alt="Aditi Ghosh — Full Stack Engineer"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 70vw, (max-width: 1024px) 35vw, 320px"
                    priority
                  />
                </div>

                <div className="ed-photo-outline" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}