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
  HiOutlineArrowLongRight,
  HiOutlineCheckCircle
} from 'react-icons/hi2'

const EASE = [0.16, 1, 0.3, 1] as const

const services = [
  {
    icon: <HiOutlineCodeBracket size={30} />,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js. Focus on performance, scalability, and user experience.",
    features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatibility"]
  },
  {
    icon: <HiOutlineSwatch size={30} />,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces with attention to detail, accessibility, and modern design principles.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    icon: <HiOutlineDevicePhoneMobile size={30} />,
    title: "Full Stack Systems",
    description: "End-to-end development of web applications, including frontend, backend, and database management using technologies like MERN stack.",
    features: ["Frontend Development", "Backend Development", "Database Management", "API Integration"]
  },
  {
    icon: <HiOutlineCloud size={30} />,
    title: "Cloud Solutions",
    description: "Deployment and management of applications on cloud platforms like AWS, Google Cloud, and Azure with focus on scalability.",
    features: ["Auto-scaling", "Load Balancing", "Database Management", "Security"]
  },
  {
    icon: <HiOutlineMagnifyingGlass size={30} />,
    title: "SEO Strategy",
    description: "Improving website visibility and search engine rankings through technical SEO, content optimization, and performance improvements.",
    features: ["Technical SEO", "Content Strategy", "Analytics Setup", "Performance Audit"]
  },
  {
    icon: <HiOutlineBolt size={30} />,
    title: "Performance",
    description: "Analyzing and improving website performance, reducing load times, and enhancing user experience through various techniques.",
    features: ["Code Splitting", "Image Optimization", "Caching Strategies", "Bundle Analysis"]
  }
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
})

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState(0)
  const reduced = useReducedMotion()

  return (
    <section id="services" ref={ref} className="ed-services-stage section">
      {/* ── Background Vertical Guides ── */}
      <div className="ed-grid-guides" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      {/* ── Atmospheric Watermark ── */}
      <div className="ed-watermark ed-services-watermark" aria-hidden="true">
        SERVICES
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
        
        {/* ── Heading ─────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="services-header"
        >
          <div className="services-badge-wrap">
            <span className="chip">
              Service Menu
            </span>
          </div>
          <h2 className="t-h2">
            What I <span style={{ color: 'var(--red)' }}>Build</span>
          </h2>
          <p className="t-body" style={{ marginTop: '0.85rem' }}>
            End-to-end solutions spanning modern web development, cloud infrastructure, and performance optimization. Custom execution for every project stage.
          </p>
        </motion.div>

        {/* ── Mobile Accordion / Desktop Tabs ───────────────── */}
        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="services-interactive-area"
        >
          {/* ── MOBILE ACCORDION (Visible on Mobile) ────────── */}
          <div className="mobile-accordion-view">
            {services.map((service, index) => {
              const isOpen = activeTab === index
              return (
                <div 
                  key={service.title} 
                  className={`accordion-item ${isOpen ? 'active' : ''}`}
                >
                  <button
                    onClick={() => setActiveTab(isOpen ? -1 : index)}
                    className="accordion-trigger"
                    aria-expanded={isOpen}
                  >
                    <div className="accordion-label-left">
                      <span className="accordion-icon">
                        {React.cloneElement(service.icon as React.ReactElement, { size: 20 })}
                      </span>
                      <h3 className="accordion-title">{service.title}</h3>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="accordion-arrow"
                    >
                      <HiOutlineArrowLongRight size={18} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="accordion-content">
                          <p className="accordion-desc">
                            {service.description}
                          </p>
                          <div className="features-list-mobile">
                            <p className="features-subhead">
                              Operational Focus
                            </p>
                            <div className="features-items-group">
                              {service.features.map((feature) => (
                                <div key={feature} className="feature-row">
                                  <HiOutlineCheckCircle size={15} className="feature-check" />
                                  <span className="feature-name">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* ── DESKTOP TABS (Visible on Desktop) ───────────── */}
          <div className="desktop-tabs-view">
            
            {/* Horizontal Tab Rail */}
            <div className="tabs-header-rail">
              {services.map((service, index) => {
                const isActive = activeTab === index
                return (
                  <button
                    key={service.title}
                    onClick={() => setActiveTab(index)}
                    className={`service-tab-btn ${isActive ? 'active' : ''}`}
                  >
                    <span>{service.title}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeServiceIndicator"
                        className="service-tab-indicator"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                      />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Service Details Card */}
            <div className="service-details-card">
              <div className="service-card-glow" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: EASE }}
                  className="service-content-pad"
                >
                  <div className="service-content-grid">
                    <div className="service-main-info">
                      <div className="service-headline-row">
                        <div className="service-icon-box">
                          {services[activeTab === -1 ? 0 : activeTab]?.icon}
                        </div>
                        <h3 className="service-card-title">
                          {services[activeTab === -1 ? 0 : activeTab]?.title}
                        </h3>
                      </div>
                      <p className="service-card-description">
                        {services[activeTab === -1 ? 0 : activeTab]?.description}
                      </p>
                    </div>

                    <div className="features-list-panel">
                      <p className="features-subhead">
                        Operational Focus
                      </p>
                      <div className="features-items-group">
                        {services[activeTab === -1 ? 0 : activeTab]?.features.map((feature) => (
                          <div key={feature} className="feature-row">
                            <HiOutlineCheckCircle size={16} className="feature-check" />
                            <span className="feature-name">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* ── Footer CTA ──────────────────────────────────────── */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="services-footer-cta"
        >
          <h3 className="t-h3" style={{ marginBottom: '0.65rem' }}>Ready To Launch?</h3>
          <p className="t-body" style={{ margin: '0 auto 2rem', textAlign: 'center' }}>
            Let&apos;s select your build path and ship a standout product with speed and precision.
          </p>
          <motion.a 
            href="#contact" 
            className="cta-primary" 
            whileHover={reduced ? {} : { scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
          >
            Start Mission
            <HiOutlineArrowLongRight size={16} />
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        .ed-services-stage {
          position: relative;
          overflow: hidden;
          background: 
            radial-gradient(ellipse at 85% 25%, rgba(245, 194, 200, 0.04) 0%, transparent 60%),
            radial-gradient(ellipse at 15% 75%, rgba(228, 223, 218, 0.03) 0%, transparent 60%),
            var(--bg);
          padding-top: clamp(4.5rem, 8vw, 7rem);
          padding-bottom: clamp(4.5rem, 8vw, 7rem);
        }

        .ed-services-container {
          position: relative;
          z-index: 2;
        }

        .ed-services-watermark {
          position: absolute;
          bottom: -1vw;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-display);
          font-size: clamp(5rem, 18vw, 15rem);
          color: rgba(228, 223, 218, 0.03);
          letter-spacing: -0.04em;
          font-weight: 700;
          pointer-events: none;
          user-select: none;
          z-index: 0;
          line-height: 0.8;
          white-space: nowrap;
        }

        @media (min-width: 1024px) {
          .ed-services-watermark {
            left: 3%;
            transform: none;
          }
        }

        .services-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: clamp(2.5rem, 6vw, 4rem);
        }

        .services-badge-wrap {
          margin-bottom: 0.75rem;
        }

        .services-interactive-area {
          position: relative;
          width: 100%;
          max-width: 980px;
          margin: 0 auto;
        }

        /* ── Mobile Accordion ── */
        .mobile-accordion-view {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .accordion-item {
          border: 1px solid var(--border);
          border-radius: 12px;
          background: rgba(22, 23, 19, 0.85);
          overflow: hidden;
          transition: border-color 0.25s ease, background 0.25s ease;
        }

        .accordion-item.active {
          border-color: rgba(228, 223, 218, 0.35);
          background: rgba(28, 29, 24, 0.95);
        }

        .accordion-trigger {
          width: 100%;
          padding: 1.15rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          border: none;
          cursor: pointer;
          outline: none;
        }

        .accordion-label-left {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .accordion-icon {
          color: var(--fg);
          display: flex;
          align-items: center;
        }

        .accordion-title {
          font-family: var(--font-body);
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--fg);
          margin: 0;
        }

        .accordion-arrow {
          color: var(--steel);
          display: flex;
        }

        .accordion-content {
          padding: 0 1.25rem 1.5rem 1.25rem;
        }

        .accordion-desc {
          font-size: 0.92rem;
          line-height: 1.55;
          color: var(--fg-soft);
          margin: 0 0 1.25rem 0;
        }

        /* ── Desktop Tabs View ── */
        .desktop-tabs-view {
          display: none;
        }

        @media (min-width: 1024px) {
          .mobile-accordion-view { display: none; }
          .desktop-tabs-view { display: block; }
        }

        .tabs-header-rail {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(18, 19, 15, 0.6);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 0.4rem;
          margin-bottom: 1rem;
        }

        .service-tab-btn {
          position: relative;
          flex: 1;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.75rem 0.5rem;
          outline: none;
          font-family: var(--font-telemetry);
          font-size: 11px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--steel);
          transition: color 0.25s ease;
          border-radius: 8px;
        }

        .service-tab-btn:hover {
          color: var(--fg);
        }

        .service-tab-btn.active {
          color: var(--fg);
          font-weight: 600;
        }

        .service-tab-indicator {
          position: absolute;
          inset: 0;
          border-radius: 8px;
          background: rgba(228, 223, 218, 0.1);
          border: 1px solid rgba(228, 223, 218, 0.3);
          z-index: 0;
        }

        .service-tab-btn span {
          position: relative;
          z-index: 1;
        }

        /* Service Details Card (Dark Glass) */
        .service-details-card {
          position: relative;
          background: rgba(20, 21, 17, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
          min-height: 280px;
        }

        .service-card-glow {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245, 194, 200, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .service-content-pad {
          padding: clamp(2rem, 4vw, 3rem);
        }

        .service-content-grid {
          display: flex;
          align-items: flex-start;
          gap: 3rem;
        }

        .service-main-info {
          flex: 1;
        }

        .service-headline-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .service-icon-box {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 10px;
          color: var(--fg);
        }

        .service-card-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          font-weight: 500;
          color: var(--fg);
          margin: 0;
          letter-spacing: -0.03em;
        }

        .service-card-description {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--fg-soft);
          margin: 0;
          max-width: 52ch;
        }

        .features-list-panel {
          flex-shrink: 0;
          width: 280px;
          border-left: 1px solid var(--border);
          padding-left: 2.5rem;
        }

        .features-subhead {
          font-family: var(--font-telemetry);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--steel);
          margin: 0 0 1rem 0;
          font-weight: 600;
        }

        .features-items-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .feature-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .feature-check {
          color: var(--fg);
          flex-shrink: 0;
        }

        .feature-name {
          font-size: 0.92rem;
          color: var(--fg-soft);
          font-weight: 400;
        }

        /* ── Footer CTA ── */
        .services-footer-cta {
          margin-top: clamp(3.5rem, 8vw, 5.5rem);
          text-align: center;
          border-top: 1px solid var(--border);
          padding-top: 3.5rem;
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

          .services-header {
            align-items: flex-start;
            text-align: left;
          }
        }
      `}</style>
    </section>
  )
}