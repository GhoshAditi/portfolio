'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Notes', href: '#notes' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="site-header">
      <div className="container">
        <a href="/#home" className="brand">
          Aditi <em>Ghosh</em>
        </a>
        <button
          className="burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav id="site-menu" className={`menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="container">
          <ol>
            {links.map((l, i) => (
              <li key={l.href}>
                <span>0{i + 1}</span>
                <a href={`/${l.href}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                  {l.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </header>
  )
}
