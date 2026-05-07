'use client'

import { useState, useCallback, useEffect } from 'react'
import { HiOutlineSun, HiOutlineMoon, HiBars3BottomRight, HiXMark } from 'react-icons/hi2'
import { motion, AnimatePresence } from 'framer-motion'
import NavHeader from '@/components/ui/nav-header'


export default function Header() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      return next
    })
  }, [])

  useEffect(() => {
    const handleHashChange = () => setIsMenuOpen(false)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <>
      {/* ── Fixed Brand Block ────────────────────────────────────── */}
      <div 
        className="brand-block-fixed"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          padding: '1.5rem 2rem',
          zIndex: 9999,
          pointerEvents: 'auto'
        }}
      >
        <a
          href="#home"
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            textDecoration: 'none', 
            lineHeight: 1
          }}
        >
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--red)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
            Aditi Ghosh
          </span>
          <span style={{ fontSize: '1.4rem', fontWeight: 500, color: 'var(--fg)', letterSpacing: '-0.03em' }}>
            Portfolio
          </span>
        </a>
      </div>

      {/* ── Navigation Row ────────────────────────────────────────── */}
      <div
        className={`nav-row-sticky ${scrolled ? 'is-scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9998,
          pointerEvents: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1.5rem 0',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="container" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'flex-end', // Align nav to right since brand is top-left
          width: '100%',
          pointerEvents: 'none'
        }}>
          
          {/* Desktop Navigation */}
          <div className="desktop-nav-container" style={{ flex: 1, display: 'flex', justifyContent: 'center', pointerEvents: 'auto' }}>
            <NavHeader />
          </div>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', pointerEvents: 'auto' }}>
            <button
              onClick={toggleTheme}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                border: '1px solid var(--border)',
                borderRadius: '50%',
                background: 'rgba(var(--bg-rgb), 0.3)',
                backdropFilter: 'blur(12px)',
                color: 'var(--fg)',
                cursor: 'pointer',
              }}
            >
              {theme === 'dark' ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
            </button>

            <button
              className="mobile-hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-md)',
                background: 'rgba(var(--bg-rgb), 0.3)',
                backdropFilter: 'blur(12px)',
                color: isMenuOpen ? 'var(--red)' : 'var(--fg)',
                cursor: 'pointer',
              }}
            >
              {isMenuOpen ? <HiXMark size={22} /> : <HiBars3BottomRight size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu Overlay ────────────────────────────────────── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              background: 'var(--bg)',
              padding: '7rem 1.5rem 2rem',
              zIndex: 9997,
              overflow: 'hidden',
              pointerEvents: 'auto'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Stack", href: "#tech" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" },
                { label: "Updates", href: "#linkedin" },
                { label: "Links", href: "#socials" },
              ].map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    color: 'var(--fg)',
                    padding: '0.85rem 0',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    textDecoration: 'none'
                  }}
                >
                  {item.label}
                  <span style={{ color: 'var(--red)', fontSize: '0.8rem' }}>0{i+1}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1025px) {
          .nav-row-sticky.is-scrolled {
             padding: 0.75rem 0 !important;
             background: rgba(var(--bg-rgb), 0.7);
             backdrop-filter: blur(12px);
          }
        }

        @media (max-width: 1024px) {
          .brand-block-fixed { padding: 1.25rem 1.5rem !important; }
          .desktop-nav-container { display: none !important; }
          .desktop-only-badges { display: none !important; }
          .mobile-hamburger { display: flex !important; }
          .nav-row-sticky { padding: 1.25rem 1.5rem !important; }
        }
      `}</style>
    </>
  )
}
