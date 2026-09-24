'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import type { DotLottie } from '@lottiefiles/dotlottie-react'

const DotLottieReact = dynamic(() => import('@lottiefiles/dotlottie-react').then((m) => m.DotLottieReact), {
  ssr: false,
})

type Props = {
  name: 'hello' | 'robot' | 'cat' | 'coffee' | 'dog' | 'plane' | 'sleepy-cat' | 'astronaut'
  label: string
  size?: number
  // Speech bubbles shown on click, picked at random.
  says?: string[]
  className?: string
  style?: CSSProperties
}

// Cute interactive lottie: speeds up on hover, boops + talks on click.
export default function Doodle({ name, label, size = 140, says = [], className = '', style }: Props) {
  const player = useRef<DotLottie | null>(null)
  const [bubble, setBubble] = useState<string | null>(null)
  const [boop, setBoop] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (!bubble) return
    const t = setTimeout(() => setBubble(null), 1600)
    return () => clearTimeout(t)
  }, [bubble])

  const onClick = () => {
    setBoop(true)
    if (says.length) setBubble(says[Math.floor(Math.random() * says.length)])
    player.current?.setSpeed(2.5)
    player.current?.play()
    setTimeout(() => player.current?.setSpeed(1), 1200)
  }

  return (
    <button
      type="button"
      className={`doodle ${className}`}
      style={{ width: size, height: size, ...style }}
      aria-label={label}
      onClick={onClick}
      onMouseEnter={() => player.current?.setSpeed(1.8)}
      onMouseLeave={() => player.current?.setSpeed(1)}
    >
      <span className={boop ? 'doodle-art is-boop' : 'doodle-art'} onAnimationEnd={() => setBoop(false)}>
        <DotLottieReact
          src={`/lottie/${name}.lottie`}
          loop
          autoplay={!reduced}
          dotLottieRefCallback={(p) => {
            player.current = p
          }}
        />
      </span>
      {bubble && (
        <span className="doodle-bubble" role="status">
          {bubble}
        </span>
      )}
    </button>
  )
}
