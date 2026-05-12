'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import React, { useRef, useState, useEffect } from 'react'
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
    icon: <HiOutlineCodeBracket size={32} />,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js. Focus on performance, scalability, and user experience.",
    features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatibility"]
  },
  {
    icon: <HiOutlineSwatch size={32} />,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces with attention to detail, accessibility, and modern design principles.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    icon: <HiOutlineDevicePhoneMobile size={32} />,
    title: "Full Stack Systems",
    description: "End-to-end development of web applications, including frontend, backend, and database management using technologies like MERN stack.",
    features: ["Frontend Development", "Backend Development", "Database Management", "API Integration"]
  },
  {
    icon: <HiOutlineCloud size={32} />,
    title: "Cloud Solutions",
    description: "Deployment and management of applications on cloud platforms like AWS, Google Cloud, and Azure with focus on scalability.",
    features: ["Auto-scaling", "Load Balancing", "Database Management", "Security"]
  },
  {
    icon: <HiOutlineMagnifyingGlass size={32} />,
    title: "SEO Strategy",
    description: "Improving website visibility and search engine rankings through technical SEO, content optimization, and performance improvements.",
    features: ["Technical SEO", "Content Strategy", "Analytics Setup", "Performance Audit"]
  },
  {
    icon: <HiOutlineBolt size={32} />,
    title: "Performance",
    description: "Analyzing and improving website performance, reducing load times, and enhancing user experience through various techniques.",
    features: ["Code Splitting", "Image Optimization", "Caching Strategies", "Bundle Analysis"]
  }
]

function GooeySvgFilter({ id, strength }: { id: string; strength: number }) {
  return (
    <svg aria-hidden="true" width="0" height="0" style={{ position: "absolute" }}>
      <filter id={id} x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB">
        <feGaussianBlur in="SourceGraphic" stdDeviation={strength} result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
          result="gooey"
        />
        <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
      </filter>
    </svg>
  )
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
})

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState(0)
  const [blurStrength, setBlurStrength] = useState(12)



  useEffect(() => {
    const updateStrength = () => {
      setBlurStrength(window.innerWidth < 768 ? 8 : 14)
    }
    updateStrength()
    window.addEventListener("resize", updateStrength)
    return () => window.removeEventListener("resize", updateStrength)
  }, [])

  return (
    <section id="services" ref={ref} className="section" style={{ paddingBottom: 'clamp(5rem, 15vw, 10rem)' }}>
      <div className="container">
        
        {/* ── Heading ─────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: 'clamp(2.5rem, 8vw, 4.5rem)' }}
        >
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>Service Menu</p>
          <h2 className="t-h2">What I Build</h2>
          <p className="t-body" style={{ marginTop: '1.25rem', fontWeight: 400 }}>
            End-to-end solutions spanning modern web development, cloud infrastructure, and performance optimization. Custom execution for every project stage.
          </p>
        </motion.div>

        {/* ── Mobile Accordion / Desktop Tabs ───────────────── */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="services-interactive-area"
        >
          {/* ── MOBILE ACCORDION (Visible on Mobile) ────────── */}
          <div className="mobile-accordion-view">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`accordion-item ${activeTab === index ? 'active' : ''}`}
                style={{ padding: activeTab === index ? '0 1.25rem' : '0 1rem' }}
              >
                <button
                  onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                  style={{
                    width: '100%',
                    padding: '1.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ color: 'var(--red)', display: 'flex' }}>
                      {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
                    </span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--fg)' }}>{service.title}</h3>
                  </div>
                  <motion.span
                    animate={{ rotate: activeTab === index ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: 'var(--fg-soft)' }}
                  >
                    <HiOutlineArrowLongRight size={20} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeTab === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ paddingBottom: '2rem' }}>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--fg-soft)', marginBottom: '1.5rem' }}>
                          {service.description}
                        </p>
                        <div className="features-list-mobile">
                          <p style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem', color: 'var(--red)', fontWeight: 700 }}>
                            Operational Focus
                          </p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {service.features.map((feature, i) => (
                              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <HiOutlineCheckCircle size={16} style={{ color: 'var(--red)', flexShrink: 0 }} />
                                <span style={{ fontSize: '0.95rem', fontWeight: 400 }}>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* ── DESKTOP TABS (Visible on Desktop) ───────────── */}
          <div className="desktop-tabs-view">
            <GooeySvgFilter id="service-gooey" strength={blurStrength} />
            
            {/* Service Tabs */}
            <div 
              style={{ 
                position: "relative", 
                zIndex: 10, 
                overflowX: 'auto', 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                borderBottom: '1px solid var(--border)'
              }} 
              className="no-scrollbar"
            >
              <div style={{ display: 'flex', minWidth: 'max-content' }}>
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      position: 'relative', 
                      minWidth: 'clamp(140px, 15vw, 200px)',
                      height: '64px'
                    }}
                  >
                    {activeTab === index && (
                      <motion.div
                        layoutId="active-tab-bg-desktop"
                        style={{
                          position: 'absolute',
                          inset: '0',
                          background: 'var(--active-bg)',
                          borderRadius: '16px 16px 0 0',
                          zIndex: 1,
                          filter: blurStrength > 10 ? "url(#service-gooey)" : "none"
                        }}
                        transition={{ type: 'spring', bounce: 0.1, duration: 0.4 }}
                      />
                    )}

                    <button
                      onClick={() => setActiveTab(index)}
                      style={{
                        position: 'relative',
                        zIndex: 2,
                        width: '100%',
                        height: '100%',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0 1rem',
                        outline: 'none',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: activeTab === index ? 'var(--active-fg)' : 'var(--fg-soft)',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {service.title}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Details Area */}
            <div
              className="service-details-card"
              style={{ position: 'relative', zIndex: 5 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  style={{ padding: "clamp(2rem, 5vw, 4rem)" }}
                >
                  <div className="service-content-grid">
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                        <div style={{ color: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {services[activeTab === -1 ? 0 : activeTab]?.icon}
                        </div>
                        <h3 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 500, letterSpacing: '-0.04em' }}>
                          {services[activeTab === -1 ? 0 : activeTab]?.title}
                        </h3>
                      </div>
                      <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.35rem)', lineHeight: 1.5, opacity: 0.9, fontWeight: 400, maxWidth: '600px' }}>
                        {services[activeTab === -1 ? 0 : activeTab]?.description}
                      </p>
                    </div>

                    <div className="features-list">
                      <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', opacity: 0.5, fontWeight: 700 }}>
                        Operational Focus
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {services[activeTab === -1 ? 0 : activeTab]?.features.map((feature, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <HiOutlineCheckCircle size={18} style={{ color: 'var(--red)', flexShrink: 0 }} />
                            <span style={{ fontSize: '1.05rem', fontWeight: 400 }}>{feature}</span>
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
          variants={fadeUp(0.8)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginTop: 'clamp(4rem, 12vw, 8rem)', textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '4rem' }}
        >
          <h3 className="t-h3" style={{ marginBottom: '1rem' }}>Ready To Launch?</h3>
          <p className="t-body" style={{ margin: '0 auto 2.5rem', fontWeight: 400 }}>
            Let&apos;s select your build path and ship a standout product with speed and precision.
          </p>
          <motion.a 
            href="#contact" 
            className="cta-primary" 
            whileHover={{ 
              scale: 1.05,
              transition: { type: 'spring', stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
            style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
          >
            Start Mission
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <HiOutlineArrowLongRight size={16} />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        .services-interactive-area {
          position: relative;
          width: 100%;
          --active-bg: #FFFFFF;
          --active-fg: #000000;
          --card-bg: #FFFFFF;
          --card-fg: #000000;
          --card-border: rgba(0,0,0,0.08);
          --card-shadow: 0 30px 60px -15px rgba(0,0,0,0.1);
        }

        [data-theme="light"] .services-interactive-area {
          --active-bg: #1A1A1A;
          --active-fg: #FFFFFF;
          --card-bg: #1A1A1A;
          --card-fg: #FFFFFF;
          --card-border: rgba(255,255,255,0.08);
          --card-shadow: 0 30px 60px -15px rgba(0,0,0,0.3);
        }

        .mobile-accordion-view {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .accordion-item {
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .accordion-item.active {
          background: var(--card-bg);
          border-color: var(--card-border);
          box-shadow: var(--card-shadow);
        }

        .accordion-item.active h3, 
        .accordion-item.active p,
        .accordion-item.active span {
          color: var(--card-fg) !important;
        }

        .desktop-tabs-view {
          display: none;
        }

        @media (min-width: 1024px) {
          .mobile-accordion-view { display: none; }
          .desktop-tabs-view { display: block; }
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .service-details-card {
          width: 100%;
          min-height: auto;
          background: var(--card-bg);
          color: var(--card-fg);
          border-radius: 0 0 20px 20px;
          box-shadow: var(--card-shadow);
          overflow: hidden;
          border: 1px solid var(--card-border);
          border-top: none;
        }

        .service-content-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .features-list {
          flex-shrink: 0;
          width: 100%;
          padding-top: 2rem;
          border-top: 1px solid var(--card-border);
          opacity: 0.8;
        }

        @media (min-width: 1024px) {
          .service-details-card {
            min-height: 480px;
            border-radius: 0 0 32px 32px;
          }
          .service-content-grid {
            flex-direction: row;
            align-items: flex-start;
            gap: 2.5rem;
          }
          .features-list {
            width: 320px;
            padding-top: 0;
            border-top: none;
            padding-left: 3rem;
            border-left: 1px solid var(--card-border);
          }
        }

        @media (max-width: 768px) {
          .tab-title-text {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>

  )
}