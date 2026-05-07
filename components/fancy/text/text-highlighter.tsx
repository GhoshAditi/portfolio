'use client'

import { motion, useInView, UseInViewOptions } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface TextHighlighterProps {
  children: ReactNode
  className?: string
  highlightColor?: string
  transition?: any // Using any to resolve complex Framer Motion type conflicts in specific environments
  useInViewOptions?: UseInViewOptions
}

export const TextHighlighter = ({
  children,
  className = "",
  highlightColor = "rgba(255,19,19,0.2)",
  transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
  useInViewOptions = { once: true, amount: 0.5 }
}: TextHighlighterProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, useInViewOptions)

  return (
    <motion.span
      ref={ref}
      initial={{ backgroundSize: "0% 0.8em" }}
      animate={isInView ? { backgroundSize: "100% 0.8em" } : { backgroundSize: "0% 0.8em" }}
      transition={transition}
      className={`inline ${className}`}
      style={{
        backgroundImage: `linear-gradient(${highlightColor}, ${highlightColor})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 85%",
        padding: "0 2px",
        borderRadius: "2px",
      }}
    >
      {children}
    </motion.span>
  )
}
