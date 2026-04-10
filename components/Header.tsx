'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#tech', label: 'Stack' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]

  const topBadges = [
    { href: '#linkedin', label: 'Updates' },
    { href: '#socials', label: 'Links' },
  ]

  return (
    <motion.header
      initial={false}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-700/60 shadow-[0_14px_45px_rgba(2,6,23,0.45)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ y: -1 }} className="cursor-pointer">
            <a href="#home" className="block">
              <p className="im-kicker">Aditi Ghosh</p>
              <h1 className="text-2xl font-extrabold font-display text-slate-100 tracking-tight">Portfolio</h1>
            </a>
          </motion.div>

          <div className="hidden xl:flex items-center space-x-7">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ y: -12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -2 }}
                className="text-slate-300 hover:text-accent-cyan transition-colors duration-300 font-semibold text-sm uppercase tracking-[0.12em]"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 ml-4">
            {topBadges.map((route) => (
              <a key={route.href} href={route.href} className="im-chip">
                {route.label}
              </a>
            ))}
          </div>

          <button className="xl:hidden text-slate-100 p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden mt-4 pb-4"
          >
            <div className="im-card flex flex-col space-y-4 p-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ x: -18, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-slate-200 hover:text-accent-cyan transition-colors duration-300 font-semibold py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-700/60">
                {topBadges.map((route) => (
                  <a key={route.href} href={route.href} className="im-chip" onClick={() => setIsOpen(false)}>
                    {route.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header
