'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { 
  HiOutlineStar, 
  HiOutlineArrowLongRight, 
  HiOutlineEnvelope, 
  HiOutlineSparkles 
} from 'react-icons/hi2'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import BlurText from '@/components/BlurText'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const reduced = useReducedMotion()

  return (
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
        PORTFOLIO
      </motion.div>

      {/* ── Left Rail: Vertical Branding & Socials (Desktop only) ── */}
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
            href="mailto:aditighosh668@gmail.com" 
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

      {/* ── Right Rail: Minimal Scroll Indicator (Desktop only) ── */}
      <motion.div 
        className="ed-right-rail" 
        aria-hidden="true"
        initial={reduced ? {} : { opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
      >
        <div className="ed-scroll-track">
          <motion.div 
            className="ed-scroll-ring"
            animate={reduced ? {} : { scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="ed-scroll-dots">
            <span /><span /><span /><span />
          </div>
        </div>
        <div className="ed-scroll-indicator">
          <span className="ed-scroll-label">SCROLL</span>
          <motion.span 
            className="ed-scroll-line"
            animate={reduced ? {} : { scaleY: [0.6, 1, 0.6], originY: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* ── Main Hero Content ── */}
      <div className="container ed-hero-container">
        <div className="ed-hero-grid">

          {/* Text Column */}
          <div className="ed-text-column">
            
            {/* Status chip */}
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
              <BlurText
                text="Aditi Ghosh"
                delay={100}
                animateBy="letters"
                direction="top"
                className="t-hero"
              />

              <motion.p 
                initial={reduced ? {} : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
                className="ed-subhead"
              >
                Full stack engineer focused on performance, product clarity, and durable UI systems.
              </motion.p>
            </div>

            {/* Body Description */}
            <motion.p
              initial={reduced ? {} : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease: EASE }}
              className="t-body"
            >
              I design and ship compact digital products with clean architecture, sharp UX details, and measurable performance.
            </motion.p>

            {/* Call to Actions */}
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

          {/* Portrait Image */}
          <div className="ed-photo-column">
            <motion.div
              initial={reduced ? {} : { opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              whileHover={reduced ? {} : { y: -6, scale: 1.015 }}
              className="ed-photo-frame"
            >
              {/* Glow backlight */}
              <div className="ed-photo-glow" />

              {/* Edge fade vignette */}
              <div className="ed-photo-vignette" />
              
              {/* Image */}
              <div className="ed-photo-inner">
                <Image
                  src="https://i.postimg.cc/cJzDL4HQ/pfp.jpg"
                  alt="Aditi Ghosh — Full Stack Engineer"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 420px"
                  priority
                />
              </div>

              {/* Outline Frame */}
              <div className="ed-photo-outline" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}