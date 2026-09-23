'use client'

import { motion, useInView, AnimatePresence, useReducedMotion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { 
  HiOutlineCodeBracket, 
  HiOutlineSwatch, 
  HiOutlineDevicePhoneMobile, 
  HiOutlineCloud, 
  HiOutlineMagnifyingGlass, 
  HiOutlineBolt, 
  HiOutlineCheckCircle
} from 'react-icons/hi2'

const EASE = [0.16, 1, 0.3, 1] as const

const services = [
  {
    icon: <HiOutlineCodeBracket size={28} />,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js. Focus on performance, scalability, and user experience.",
    features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatibility"]
  },
  {
    icon: <HiOutlineSwatch size={28} />,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces with attention to detail, accessibility, and modern design principles.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    icon: <HiOutlineDevicePhoneMobile size={28} />,
    title: "Full Stack Systems",
    description: "End-to-end development of web applications, including frontend, backend, and database management using technologies like MERN stack.",
    features: ["Frontend Development", "Backend Development", "Database Management", "API Integration"]
  },
  {
    icon: <HiOutlineCloud size={28} />,
    title: "Cloud Solutions",
    description: "Deployment and management of applications on cloud platforms like AWS, Google Cloud, and Azure with focus on scalability.",
    features: ["Auto-scaling", "Load Balancing", "Database Management", "Security"]
  },
  {
    icon: <HiOutlineMagnifyingGlass size={28} />,
    title: "SEO Strategy",
    description: "Improving website visibility and search engine rankings through technical SEO, content optimization, and performance improvements.",
    features: ["Technical SEO", "Content Strategy", "Analytics Setup", "Performance Audit"]
  },
  {
    icon: <HiOutlineBolt size={28} />,
    title: "Performance",
    description: "Analyzing and improving website performance, reducing load times, and enhancing user experience through various techniques.",
    features: ["Code Splitting", "Image Optimization", "Caching Strategies", "Bundle Analysis"]
  }
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
})

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [activeTab, setActiveTab] = useState(0)
  const reduced = useReducedMotion()

  return (
    <section id="services" ref={ref} className="ed-services-stage">
      {/* ── Background Vertical Guides ── */}
      <div className="ed-grid-guides" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      {/* ── Left Rail: Section Index ── */}
      <div className="ed-left-rail" aria-hidden="true">
        <span className="ed-rail-text">CHAPTER // 06 • CAPABILITIES</span>
      </div>

      {/* ── Right Rail: Service Counter ── */}
      <div className="ed-right-rail" aria-hidden="true">
        <div className="ed-scroll-indicator">
          <span className="ed-scroll-label">ACTIVE: 0{services.length}</span>
          <span className="ed-scroll-line" />
        </div>
      </div>

      <div className="container ed-services-container">
        
        {/* ── Heading ── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="services-header"
        >
          <div className="services-badge-wrap">
            <span className="chip">Service Menu</span>
          </div>
          <h2 className="t-h2">
            What I <span style={{ color: 'orangered' }}>Build</span>
          </h2>
        </motion.div>

        {/* ── Desktop Tabs & Interactive Area ── */}
        <motion.div
          variants={fadeUp(0.12)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="services-interactive-area"
        >
          {/* Horizontal Tab Rail */}
          <div className="tabs-header-rail">
            {services.map((service, index) => {
              const isActive = activeTab === index
              return (
                <motion.button
                  key={service.title}
                  onClick={() => setActiveTab(index)}
                  className={`service-tab-btn ${isActive ? 'active' : ''}`}
                  type="button"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.04, ease: EASE }}
                  whileHover={reduced ? {} : { y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>{service.title}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceIndicator"
                      className="service-tab-indicator"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* Animated Service Details Card */}
          <motion.div 
            className="service-details-card"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          >
            <div className="service-card-glow" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.97, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.97, filter: 'blur(4px)' }}
                transition={{ duration: 0.3, ease: EASE }}
                className="service-content-pad"
              >
                <div className="service-content-grid">
                  <div className="service-main-info">
                    <div className="service-headline-row">
                      <motion.div 
                        className="service-icon-box"
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        {services[activeTab]?.icon}
                      </motion.div>
                      <h3 className="service-card-title">
                        {services[activeTab]?.title}
                      </h3>
                    </div>
                    <p className="service-card-description">
                      {services[activeTab]?.description}
                    </p>
                  </div>

                  <div className="features-list-panel">
                    <p className="features-subhead">Operational Focus</p>
                    <div className="features-items-group">
                      {services[activeTab]?.features.map((feature, idx) => (
                        <motion.div 
                          key={feature} 
                          className="feature-row"
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.08 + idx * 0.06, ease: EASE }}
                        >
                          <HiOutlineCheckCircle size={16} className="feature-check" />
                          <span className="feature-name">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

      </div>

      <style jsx>{`
        .ed-services-stage {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #151612;
          border-top: 1px solid rgba(60, 60, 56, 0.4);
          border-bottom: 1px solid rgba(60, 60, 56, 0.4);
          padding: 5.5rem 1.5rem 2.5rem;
          box-sizing: border-box;
        }

        .ed-services-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1140px;
          margin: 0 auto;
        }

        .services-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          margin-bottom: 1.25rem;
        }

        .services-badge-wrap {
          margin-bottom: 0.4rem;
        }

        .services-interactive-area {
          position: relative;
          width: 100%;
        }

        /* ── Tabs Header Rail ── */
        .tabs-header-rail {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.45rem;
          background: rgba(18, 19, 15, 0.75);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 0.4rem;
          margin-bottom: 1.2rem;
        }

        .service-tab-btn {
          position: relative;
          flex: 1;
          min-width: 135px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.75rem 0.85rem;
          outline: none;
          font-family: var(--font-telemetry);
          font-size: 11.5px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #ffffff; /* Bright white text for all tab options */
          transition: color 0.25s ease;
          border-radius: 9px;
          text-align: center;
        }

        .service-tab-btn:hover {
          color: var(--color-rose-quartz-bloom);
        }

        .service-tab-btn.active {
          color: #ffffff;
          font-weight: 600;
        }

        .service-tab-indicator {
          position: absolute;
          inset: 0;
          border-radius: 9px;
          background: rgba(228, 223, 218, 0.12);
          border: 1px solid rgba(228, 223, 218, 0.35);
          z-index: 0;
        }

        .service-tab-btn span {
          position: relative;
          z-index: 1;
        }

        /* ── Service Details Card ── */
        .service-details-card {
          position: relative;
          background: rgba(20, 21, 17, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(60, 60, 56, 0.9);
          border-radius: 20px;
          overflow: hidden;
          min-height: 310px;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.7);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .service-details-card:hover {
          border-color: rgba(228, 223, 218, 0.3);
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.85);
        }

        .service-card-glow {
          position: absolute;
          top: -40px;
          right: -40px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245, 194, 200, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .service-content-pad {
          padding: clamp(2.2rem, 4.5vw, 3.4rem);
        }

        .service-content-grid {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        @media (min-width: 850px) {
          .service-content-grid {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 4rem;
          }
        }

        .service-main-info {
          flex: 1;
        }

        .service-headline-row {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          margin-bottom: 1.25rem;
        }

        .service-icon-box {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 14px;
          color: var(--fg);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .service-card-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3.2vw, 2.2rem);
          font-weight: 600;
          color: var(--fg);
          margin: 0;
          letter-spacing: -0.03em;
        }

        .service-card-description {
          font-size: 1.02rem;
          line-height: 1.65;
          color: var(--fg-soft);
          margin: 0;
          max-width: 52ch;
        }

        .features-list-panel {
          flex-shrink: 0;
          width: 100%;
          border-top: 1px solid var(--border);
          padding-top: 1.5rem;
        }

        @media (min-width: 850px) {
          .features-list-panel {
            width: 300px;
            border-top: none;
            border-left: 1px solid var(--border);
            padding-top: 0;
            padding-left: 2.75rem;
          }
        }

        .features-subhead {
          font-family: var(--font-telemetry);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--steel);
          margin: 0 0 1rem 0;
          font-weight: 600;
        }

        .features-items-group {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .feature-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .feature-check {
          color: var(--fg);
          flex-shrink: 0;
          opacity: 0.9;
        }

        .feature-name {
          font-size: 0.9rem;
          color: var(--fg-soft);
          font-weight: 400;
        }

        @media (min-width: 1024px) {
          .ed-services-stage .ed-left-rail,
          .ed-services-stage .ed-right-rail {
            display: flex;
          }

          .ed-services-container {
            padding-left: 3.5rem;
            padding-right: 3rem;
          }
        }
      `}</style>
    </section>
  )
}