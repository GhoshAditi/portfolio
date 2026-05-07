"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const TAB_CONTENT = [
  {
    title: "2024",
    files: [
      "learning-to-meditate.md",
      "spring-garden-plans.md",
      "travel-wishlist.md",
      "new-coding-projects.md",
    ],
  },
  {
    title: "2023",
    files: [
      "year-in-review.md",
      "marathon-training-log.md",
      "recipe-collection.md",
      "book-reflections.md",
    ],
  },
  {
    title: "2022",
    files: [
      "moving-to-a-new-city.md",
      "starting-a-blog.md",
      "photography-basics.md",
      "first-coding-project.md",
    ],
  },
  {
    title: "2021",
    files: [
      "goals-and-aspirations.md",
      "daily-gratitude.md",
      "learning-to-cook.md",
      "remote-work-journal.md",
    ],
  },
]

type GooeyDemoProps = {
  className?: string
}

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

export default function GooeyDemo({ className = "" }: GooeyDemoProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [isGooeyEnabled, setIsGooeyEnabled] = useState(true)
  const [blurStrength, setBlurStrength] = useState(12)

  const isSafari = useMemo(() => {
    if (typeof navigator === "undefined") return false
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  }, [])

  useEffect(() => {
    const updateStrength = () => {
      setBlurStrength(window.innerWidth < 768 ? 8 : 14)
    }

    updateStrength()
    window.addEventListener("resize", updateStrength)
    return () => window.removeEventListener("resize", updateStrength)
  }, [])

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: "100%",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-lg)",
        background: "var(--surface)",
        padding: "2rem",
        overflow: "hidden",
      }}
    >
      <GooeySvgFilter id="gooey-filter" strength={blurStrength} />

      <button
        type="button"
        onClick={() => setIsGooeyEnabled((prev) => !prev)}
        className="chip"
        style={{ position: "absolute", top: "1.25rem", right: "1.25rem", fontWeight: 500 }}
      >
        {isGooeyEnabled ? "Disable filter" : "Enable filter"}
      </button>

      <div style={{ marginTop: "2.5rem" }}>
        <div
          style={{
            position: "absolute",
            inset: "2.5rem 2rem 2rem",
            filter: isGooeyEnabled ? "url(#gooey-filter)" : "none",
          }}
        >
          <div style={{ display: "flex", width: "100%" }}>
            {TAB_CONTENT.map((_, index) => (
              <div key={index} style={{ position: "relative", flex: 1, height: "42px" }}>
                {activeTab === index && (
                  <motion.div
                    layoutId="active-tab"
                    style={{ position: "absolute", inset: 0, background: "var(--surface-hi)" }}
                    transition={{
                      type: "spring",
                      bounce: 0,
                      duration: isSafari ? 0 : 0.4,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <div
            style={{
              width: "100%",
              minHeight: "220px",
              background: "var(--surface-hi)",
              overflow: "hidden",
              color: "var(--fg-soft)",
            }}
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                style={{ padding: "1.75rem" }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {TAB_CONTENT[activeTab].files.map((file) => (
                      <li
                        key={file}
                        style={{
                          borderBottom: "1px solid var(--border)",
                          padding: "0.6rem 0",
                          color: "var(--fg)",
                          fontSize: "1rem",
                        }}
                      >
                        {file}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div style={{ position: "relative", display: "flex", width: "100%" }}>
          {TAB_CONTENT.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              style={{ flex: 1, height: "42px", background: "transparent", border: "none", cursor: "pointer" }}
            >
              <span
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: activeTab === index ? "var(--fg)" : "var(--fg-soft)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                {tab.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
