'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Spawn' },
    { href: '#about', label: 'Story' },
    { href: '#tech', label: 'Skills' },
    { href: '#projects', label: 'Quests' },
    { href: '#experience', label: 'Campaign' },
    { href: '#services', label: 'Loadout' },
    { href: '#contact', label: 'Final Boss' },
  ]

  const topBadges = [
    { href: '#linkedin', label: 'Live Feed' },
    { href: '#socials', label: 'Guild' },
  ]

  return (
    <motion.header
      initial={false}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(15,23,42,0.55)] border-b border-accent-cyan/30' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
          >
            <a href="#home" className="block">
              <p className="text-xs uppercase tracking-[0.26em] text-accent-cyan">Player One</p>
              <h1 className="text-2xl font-black font-display text-slate-100">
                Aditi Ghosh
              </h1>
            </a>
          </motion.div>

          <div className="hidden xl:flex items-center space-x-7">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-slate-200/90 hover:text-accent-cyan transition-colors duration-300 font-semibold text-sm uppercase tracking-[0.12em]"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 ml-4">
            {topBadges.map((route) => (
                <a
                  key={route.href}
                  href={route.href}
                  className="text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full border border-accent-orange/50 bg-slate-900/60 text-accent-orange hover:bg-accent-orange hover:text-slate-950 transition-colors"
                >
                  {route.label}
                </a>
            ))}
          </div>

          <button
            className="xl:hidden text-slate-100 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
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
            <div className="flex flex-col space-y-4 bg-slate-950/95 backdrop-blur-xl rounded-2xl p-6 border border-accent-cyan/25">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-slate-200 hover:text-accent-cyan transition-colors duration-300 font-semibold py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-700">
                {topBadges.map((route) => (
                  <a
                    key={route.href}
                    href={route.href}
                    className="text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full border border-accent-orange/50 bg-slate-900/60 text-accent-orange"
                    onClick={() => setIsOpen(false)}
                  >
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