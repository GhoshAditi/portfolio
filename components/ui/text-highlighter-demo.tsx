"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"

import { TextHighlighter } from "@/components/fancy/text/text-highlighter"
import { Transition } from "motion"

export default function TextHighlighterDemo() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const transition = { type: "spring", duration: 1, delay: 0.4, bounce: 0 }
  const highlightClass = "rounded-[0.3em] px-px"
  const highlightColor = "#F2AD91"
  const inViewOptions = { once: true, initial: true, amount: 0.1 }

  useEffect(() => {
    if (!containerRef.current) return

    const lenis = new Lenis({
      autoRaf: true,
      wrapper: containerRef.current,
      duration: 1.2,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="w-full relative py-20">
      <div className="container mx-auto px-4 text-black dark:text-white">
        <div className="max-w-3xl mx-auto p-0">
          <h1 className="text-4xl md:text-5xl font-medium mb-12 font-calendas tracking-tight text-center md:text-left">
            Design Philosophy
          </h1>

          <div className="text-base md:text-xl leading-relaxed space-y-6 font-overusedGrotesk">
            <p className="whitespace-break-spaces">
              The present-day designer has a host of printing types at his
              disposal.{" "}
              <TextHighlighter
                className={highlightClass}
                transition={transition as Transition}
                highlightColor={highlightColor}
                useInViewOptions={inViewOptions}
              >
                Since Gutenberg first invented movable type in 1436-55
              </TextHighlighter>{" "}
              hundreds of different types have been designed and cast in lead.{" "}
              <TextHighlighter
                className={highlightClass}
                transition={transition as Transition}
                highlightColor={highlightColor}
                useInViewOptions={inViewOptions}
              >
                The most recent technical developments
              </TextHighlighter>{" "}
              with computer and photo-typesetting have once again brought new
              faces or variations of old ones on the market.
            </p>

            <p>
              <TextHighlighter
                className={highlightClass}
                transition={transition as Transition}
                highlightColor={highlightColor}
                useInViewOptions={inViewOptions}
              >
                The choice is up to the designer
              </TextHighlighter>{" "}
              It is left to his feeling for form to use{" "}
              <TextHighlighter
                className={highlightClass}
                transition={transition as Transition}
                highlightColor={highlightColor}
                useInViewOptions={inViewOptions}
              >
                good or poor typefaces
              </TextHighlighter>{" "}
              for his design work. In view of the limited space available, we
              shall refer here to only a few of the outstanding designs of the
              past and the 20th century which have appeared most frequently in
              publications.
            </p>

            <p>
              Knowledge of the quality of a typeface is of the greatest
              importance for the{" "}
              <TextHighlighter
                className={highlightClass}
                transition={transition as Transition}
                highlightColor={highlightColor}
                useInViewOptions={inViewOptions}
              >
                functional, aesthetic and psychological effect
              </TextHighlighter>{" "}
              of printed matter. Again, the typographic design, i. e. the
              correct spaces between letters and words and the length and
              spacing of lines conducive to easy reading, does much to enhance
              the impression created.{" "}
              <TextHighlighter
                className={highlightClass}
                transition={transition as Transition}
                highlightColor={highlightColor}
                useInViewOptions={inViewOptions}
              >
                Today the field is dominated mainly by computer and
                photo-typesetting
              </TextHighlighter>{" "}
              A typical characteristic of these forms of composition is the too
              narrow setting of the letters which makes reading difficult.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
