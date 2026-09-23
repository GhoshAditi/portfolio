'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaAws } from 'react-icons/fa'
import { 
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiC, SiGo, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase, 
  SiDocker, SiLinux, SiGit, SiGithub, SiTensorflow, SiOpencv 
} from 'react-icons/si'

const EASE = [0.16, 1, 0.3, 1] as const

const allTechs = [
  { name: "JavaScript", icon: <SiJavascript size={26} style={{ color: '#f7df1e' }} /> },
  { name: "TypeScript", icon: <SiTypescript size={26} style={{ color: '#3178c6' }} /> },
  { name: "Python", icon: <SiPython size={26} style={{ color: '#3776ab' }} /> },
  { name: "C++", icon: <SiCplusplus size={26} style={{ color: '#00599c' }} /> },
  { name: "C", icon: <SiC size={26} style={{ color: '#a8b9cc' }} /> },
  { name: "Go", icon: <SiGo size={26} style={{ color: '#00add8' }} /> },
  { name: "Node.js", icon: <SiNodedotjs size={26} style={{ color: '#5fa04e' }} /> },
  { name: "Express.js", icon: <SiExpress size={26} style={{ color: '#ffffff' }} /> },
  { name: "MongoDB", icon: <SiMongodb size={26} style={{ color: '#47a248' }} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={26} style={{ color: '#4169e1' }} /> },
  { name: "Firebase", icon: <SiFirebase size={26} style={{ color: '#ffca28' }} /> },
  { name: "Docker", icon: <SiDocker size={26} style={{ color: '#2496ed' }} /> },
  { name: "AWS", icon: <FaAws size={26} style={{ color: '#ff9900' }} /> },
  { name: "Linux", icon: <SiLinux size={26} style={{ color: '#fcc624' }} /> },
  { name: "Git", icon: <SiGit size={26} style={{ color: '#f05032' }} /> },
  { name: "GitHub", icon: <SiGithub size={26} style={{ color: '#ffffff' }} /> },
  { name: "TensorFlow", icon: <SiTensorflow size={26} style={{ color: '#ff6f00' }} /> },
  { name: "OpenCV", icon: <SiOpencv size={26} style={{ color: '#5c3ee8' }} /> },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
})

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section id="stack" ref={ref} className="ed-stack-stage section">
      {/* ── Background Vertical Grid Guides ── */}
      <div className="ed-grid-guides" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      {/* ── Left Rail: Section Index ── */}
      <div className="ed-left-rail" aria-hidden="true">
        <span className="ed-rail-text">CHAPTER // 03 • TECH ARSENAL</span>
      </div>

      {/* ── Right Rail: Status Indicator ── */}
      <div className="ed-right-rail" aria-hidden="true">
        <div className="ed-scroll-indicator">
          <span className="ed-scroll-label">NODES: 18</span>
          <span className="ed-scroll-line" />
        </div>
      </div>

      <div className="container ed-stack-container">
        
        {/* ── Header ── */}
        <div className="stack-header-layout">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="stack-badge-wrap">
              <span className="chip">Skill Tree</span>
            </div>
            <h2 className="t-h2">
              Tech <span style={{ color: 'var(--red)' }}>Mastery</span>
            </h2>
            <p className="t-body" style={{ marginTop: '0.85rem', maxWidth: '48ch' }}>
              Specialized expertise across modern backend architecture, cloud infrastructure, and AI systems in a 3D orbital array.
            </p>
          </motion.div>
        </div>

        {/* ── 3D True Orbital Arena ── */}
        <motion.div 
          variants={fadeUp(0.2)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="orbit-arena-3d"
        >
          {/* Ambient glow */}
          <div className="arena-ambient-glow" />

          {/* Central 3D Wireframe Cube Core */}
          <div className="arena-core-3d">
            <div className="wireframe-cube">
              <div className="cube-face front" />
              <div className="cube-face back" />
              <div className="cube-face right" />
              <div className="cube-face left" />
              <div className="cube-face top" />
              <div className="cube-face bottom" />
            </div>
            <div className="core-pulse-ring" />
            <div className="core-inner-glow" />
          </div>

          {/* 3D Orbiting Sphere Container */}
          <div className={`orbit-sphere-container ${isPaused ? 'is-paused' : ''}`}>
            {allTechs.map((tech, i) => {
              // Distribute items across a 3D spherical shell layout
              const phi = Math.acos(-1 + (2 * i) / allTechs.length)
              const theta = Math.sqrt(allTechs.length * Math.PI) * phi
              
              const radius = 210 // 3D Orbit radius in pixels

              // Convert spherical coordinates to 3D offsets
              const x = radius * Math.cos(theta) * Math.sin(phi)
              const y = radius * Math.sin(theta) * Math.sin(phi)
              const z = radius * Math.cos(phi)

              return (
                <div
                  key={tech.name}
                  className="orbit-3d-item"
                  style={{
                    ['--tx' as any]: `${x}px`,
                    ['--ty' as any]: `${y}px`,
                    ['--tz' as any]: `${z}px`,
                    animationDelay: `-${(i / allTechs.length) * 35}s`,
                  }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className="orbit-node-card">
                    <div className="node-glow" />
                    <div className="node-content">
                      <div className="node-icon-box">
                        {tech.icon}
                      </div>
                      <span className="node-title">{tech.name}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

      </div>

      <style>{`
        .ed-stack-stage {
          position: sticky;
          top: 0;
          z-index: 20;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: center;
          background: 
            radial-gradient(circle at 50% 45%, rgba(224, 101, 96, 0.06) 0%, transparent 60%),
            linear-gradient(135deg, #131410 0%, #1a1b16 50%, #12130f 100%);
          border-top: 1px solid rgba(60, 60, 56, 0.5);
          border-bottom: 1px solid rgba(60, 60, 56, 0.5);
          padding-top: clamp(4rem, 6vw, 6rem);
          padding-bottom: clamp(4rem, 6vw, 6rem);
          box-sizing: border-box;
          overflow: hidden;
        }

        .ed-stack-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .stack-header-layout {
          margin-bottom: 2rem;
        }

        .stack-badge-wrap {
          margin-bottom: 0.75rem;
        }

        /* ── 3D Orbit Arena ── */
        .orbit-arena-3d {
          position: relative;
          width: 100%;
          height: 500px;
          border: 1px solid rgba(228, 223, 218, 0.12);
          border-radius: 24px;
          background: rgba(20, 21, 17, 0.82);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 20px 50px -15px rgba(0, 0, 0, 0.7);
          perspective: 1200px;
        }

        .arena-ambient-glow {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(224, 101, 96, 0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        /* Central 3D Wireframe Cube Core */
        .arena-core-3d {
          position: absolute;
          z-index: 4;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          pointer-events: none;
        }

        .wireframe-cube {
          position: relative;
          width: 65px;
          height: 65px;
          transform-style: preserve-3d;
          animation: rotateCube 18s linear infinite;
        }

        @keyframes rotateCube {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }

        .cube-face {
          position: absolute;
          width: 65px;
          height: 65px;
          border: 1.5px solid rgba(224, 101, 96, 0.65);
          background: rgba(224, 101, 96, 0.06);
          box-shadow: inset 0 0 15px rgba(224, 101, 96, 0.25);
        }

        .cube-face.front  { transform: translateZ(32.5px); }
        .cube-face.back   { transform: rotateY(180deg) translateZ(32.5px); }
        .cube-face.right  { transform: rotateY(90deg) translateZ(32.5px); }
        .cube-face.left   { transform: rotateY(-90deg) translateZ(32.5px); }
        .cube-face.top    { transform: rotateX(90deg) translateZ(32.5px); }
        .cube-face.bottom { transform: rotateX(-90deg) translateZ(32.5px); }

        .core-pulse-ring {
          position: absolute;
          inset: -35px;
          border-radius: 50%;
          border: 1px dashed rgba(224, 101, 96, 0.35);
          animation: spinSlow 30s linear infinite;
        }

        .core-inner-glow {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(224, 101, 96, 0.3) 0%, transparent 70%);
          filter: blur(10px);
          z-index: -1;
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* 3D Spherical Orbit Container */
        .orbit-sphere-container {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          transform-style: preserve-3d;
          animation: orbit3D 35s linear infinite;
          z-index: 3;
        }

        .orbit-sphere-container.is-paused {
          animation-play-state: paused;
        }

        @keyframes orbit3D {
          0% { transform: rotateX(15deg) rotateY(0deg); }
          100% { transform: rotateX(15deg) rotateY(360deg); }
        }

        .orbit-3d-item {
          position: absolute;
          transform-style: preserve-3d;
          transform: translate3d(var(--tx), var(--ty), var(--tz));
        }

        .orbit-node-card {
          position: relative;
          transform: translate(-50%, -50%);
          pointer-events: auto;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.7rem 1.1rem;
          border-radius: 14px;
          background: rgba(30, 31, 26, 0.95);
          border: 1px solid rgba(228, 223, 218, 0.22);
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px -8px rgba(0, 0, 0, 0.8);
          cursor: pointer;
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
        }

        .orbit-node-card:hover {
          border-color: rgba(224, 101, 96, 0.6);
          background: rgba(42, 43, 36, 0.98);
          transform: translate(-50%, -50%) scale(1.15);
          z-index: 10;
        }

        .node-glow {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(224, 101, 96, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .node-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .node-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .node-title {
          font-family: var(--font-body);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--fg);
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .orbit-arena-3d {
            height: 420px;
          }
          .orbit-sphere-container {
            transform: scale(0.7);
          }
        }

        @media (min-width: 1024px) {
          .ed-stack-stage .ed-left-rail,
          .ed-stack-stage .ed-right-rail {
            display: flex;
          }

          .ed-stack-container {
            padding-left: 3.5rem;
            padding-right: 3rem;
          }
        }
      `}</style>
    </section>
  )
}