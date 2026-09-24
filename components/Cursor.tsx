'use client'

import { useEffect, useRef } from 'react'

const INTERACTIVE = 'a, button, [role="tab"], summary, .tag, .card'

// Ink-dot cursor with a trailing ring (fine pointers only) + ink ripples on touch.
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ripple = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' || reduced) return
      const r = document.createElement('span')
      r.className = 'tap-ripple'
      r.style.left = `${e.clientX}px`
      r.style.top = `${e.clientY}px`
      document.body.appendChild(r)
      r.addEventListener('animationend', () => r.remove())
    }
    window.addEventListener('pointerdown', ripple)

    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine || reduced) return () => window.removeEventListener('pointerdown', ripple)

    document.documentElement.classList.add('has-cursor')
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0

    const move = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      const t = e.target as Element
      const inField = !!t.closest('input, textarea')
      const hit = t.closest(INTERACTIVE)
      document.documentElement.classList.toggle('cursor-hidden', inField)
      ring.current?.classList.toggle('is-hover', !!hit)
      ring.current?.setAttribute('data-label', hit?.closest('.doodle') ? 'boop!' : hit?.closest('.card') ? 'view' : '')
    }
    const down = () => ring.current?.classList.add('is-down')
    const up = () => ring.current?.classList.remove('is-down')
    const leave = () => document.documentElement.classList.add('cursor-hidden')
    const enter = () => document.documentElement.classList.remove('cursor-hidden')

    const tick = () => {
      rx += (x - rx) * 0.18
      ry += (y - ry) * 0.18
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(tick)
    }
    tick()

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)
    return () => {
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove('has-cursor', 'cursor-hidden')
      window.removeEventListener('pointerdown', ripple)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
    }
  }, [])

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
