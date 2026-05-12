'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineBriefcase, HiOutlineMapPin, HiOutlineCheckBadge } from 'react-icons/hi2'

const EASE = [0.16, 1, 0.3, 1] as const

const experiences = [
  {
    position: "Software Development Engineer Intern",
    company: "DevrelSquad",
    location: "Remote",
    duration: "Feb 2026 — Apr 2026",
    type: "Full-time",
    description: "Leading the development of modern web applications using NextJs, MongoDB, and cloud technologies like Azure and Docker. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Assisted in the development and maintenance of web applications by revamping and redesigning multiple high-traffic product pages with polished, modern UI — sharpening visual hierarchy and boosting user engagement",
      "Collaborated with the senior development team to integrate AI-powered enhancements into existing product features, elevating user experience and delivering intelligent, context-aware functionality",
      "Spearheaded a full-scale codebase refactor, writing clean, efficient, and well-documented code by decomposing monolithic logic into clean constants, enums, and config files — dramatically improving modularity and long-term maintainability",
      "Participated in code reviews and contributed to team discussions around architecture and best practices, improving overall code quality",
      "Executed a comprehensive SEO overhaul — optimizing metadata, content structure, and discoverability signals — driving a 5x surge in organic users within 2 months",
      " Diagnosed and resolved critical miscalculations in the lead generation pipeline, testing and debugging the web application to ensure functionality and data accuracy" 
    ],
    technologies: ["NextJs", "TypeScript", "Azure", "MongoDB", "Docker", "AWS"],
    current: true
  },
  {
    position: "Web Developer Intern",
    company: "PayZoll",
    location: "Remote",
    duration: "Feb 2025 — Apr 2026",
    type: "Full-time",
    description: "Leading the development of modern web applications using React, Node.js, and cloud technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Identified performance bottlenecks in the legacy interface utilizing older templates that hindered user retention",
      "Targeted the specific need to modernize the frontend architecture for better type safety and maintainability",
      "Migrated template components written in Octo SDK into a Next.js environment using TypeScript, maintaining proper typing",
      "Reduced load times by 40% and increased Google Lighthouse scores to 95+, significantly improving Quality Assurance metrics"
    ],
    technologies: ["React", "Node.js", "TypeScript", "NextJs", "MongoDB"],
    current: false
  },
  {
    position: "Open Source Contributor",
    company: "JGEC Winter of Code",
    location: "Remote",
    duration: "Dec 2024 — Jan 2025",
    type: "Open Source Program",
    description: "Contributed to multiple open source projects during the winter program, focusing on meaningful contributions to various repositories and collaborating with developers worldwide.",
    achievements: [
      "Ranked in top 20 out of 1000+ participants",
      "Collaborated with maintainers and fellow contributors globally",
      "Enhanced skills in open source development workflows"
    ],
    technologies: ["React", "Node.js", "TypeScript", "Git", "GitHub", "JavaScript"],
    current: false
  },
  {
    position: "Web Development Lead",
    company: "GDG RCCIIT",
    location: "Kolkata, India",
    duration: "Aug 2025 — Present",
    type: "Leadership Role",
    description: "Led web development initiatives for Google Developer Group RCCIIT, organizing workshops, managing development projects, and mentoring junior developers.",
    achievements: [
      "Organized technical workshops and coding sessions",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Git"],
    current: false
  },
  {
    position: "Tech Lead",
    company: "ACM RCCIIT",
    location: "Kolkata, India",
    duration: "Jan 2026 — Present",
    type: "Leadership Role",
    description: "Serving as Tech Lead for ACM RCCIIT chapter, coordinating technical events, managing web projects, and fostering a community of developers.",
    achievements: [],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "MongoDB", "Express.js"],
    current: false
  },
  {
    position : "Tech Member",
    company: "Student Welfare Committee RCCIIT",
    location: "Kolkata, India",
    duration: "Year 2025",
    type: "Tech Role",
    description: "Served as a Tech Member for SWC RCCIIT chapter, contributing to technical initiatives and supporting the development of web projects.",
    achievements: [
      "Contributed to the website development of the official college events like Techtrix, GOT & Regalia , enhancing its functionality and user experience",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "MongoDB", "Express.js"],
    current: false
  }
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
})

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref} className="section">
      <div className="container">
        
        {/* ── Heading ─────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: 'clamp(2.5rem, 8vw, 4.5rem)' }}
        >
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>Career Timeline</p>
          <h2 className="t-h2">Professional Journey</h2>
          <p className="t-body" style={{ marginTop: '1.25rem', fontWeight: 400 }}>
            Diverse roles spanning web development, cloud infrastructure, and cross-functional collaborations across startups and open-source communities.
          </p>
        </motion.div>

        {/* ── Timeline ────────────────────────────────────────── */}
        <div className="timeline-wrapper" style={{ position: 'relative' }}>
          {/* Vertical Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            style={{
              position: 'absolute',
              left: 0,
              top: '0.5rem',
              bottom: '0.5rem',
              width: '1px',
              background: 'var(--border)',
              transformOrigin: 'top'
            }} 
          />

          <motion.div 
            style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 5vw, 3rem)' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { type: 'spring', stiffness: 70, damping: 14 }
                  }
                }}
                whileHover={{ y: -5 }}
                style={{ position: 'relative', paddingLeft: 'clamp(1.5rem, 4vw, 2.5rem)' }}
              >
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 200 }}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '0.65rem',
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    background: exp.current ? 'var(--red)' : 'var(--bg)',
                    border: `2px solid ${exp.current ? 'var(--red)' : 'var(--steel)'}`,
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                  }} 
                />

                <div className="experience-card" style={{
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-lg)',
                  background: 'var(--surface)',
                  padding: 'clamp(1.25rem, 4vw, 2.5rem)',
                  transition: 'border-color 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease',
                  cursor: 'default'
                }}>
                  {/* Header */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '1rem' }}>
                      <h3 className="t-h3" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', lineHeight: 1.2 }}>{exp.position}</h3>
                      <span className="t-label" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.85rem)', color: 'var(--red)', whiteSpace: 'nowrap' }}>{exp.duration}</span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(0.75rem, 2vw, 1.5rem)', alignItems: 'center' }}>
                      <span style={{ fontSize: 'clamp(1rem, 3vw, 1.1rem)', fontWeight: 600, color: 'var(--fg)' }}>{exp.company}</span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--fg-soft)', fontWeight: 400 }}>
                          <HiOutlineMapPin size={14} /> {exp.location}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--fg-soft)', fontWeight: 400 }}>
                          <HiOutlineBriefcase size={14} /> {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: 'clamp(1rem, 3vw, 1.1rem)', color: 'var(--fg-soft)', lineHeight: 1.6, marginBottom: '1.5rem', fontWeight: 400 }}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  {exp.achievements.length > 0 && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <p className="t-label" style={{ fontSize: '0.75rem', color: 'var(--fg)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                        <HiOutlineCheckBadge size={16} style={{ color: 'var(--red)' }} /> Quest Rewards
                      </p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '0.25rem' }}>
                        {exp.achievements.map((ach, ai) => (
                          <motion.li 
                            key={ai} 
                            whileHover={{ x: 5 }}
                            style={{
                              fontSize: '0.95rem',
                              color: 'var(--fg-soft)',
                              lineHeight: 1.5,
                              position: 'relative',
                              paddingLeft: '1.25rem',
                              fontWeight: 400,
                              cursor: 'default'
                            }}>
                            <span style={{ position: 'absolute', left: 0, top: '0.6rem', width: '6px', height: '1px', background: 'var(--red)' }} />
                            {ach}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills / Tools */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                    {exp.technologies.map(tech => (
                      <motion.span
                        key={tech}
                        whileHover={{ y: -2, borderColor: 'var(--red)' }}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: 'var(--fg)',
                          padding: '0.25rem 0.65rem',
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--r-sm)',
                          background: 'var(--bg)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          cursor: 'default',
                          transition: 'border-color 0.3s ease'
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .experience-card:hover {
          border-color: var(--red);
          box-shadow: 0 20px 40px -15px rgba(255, 0, 0, 0.1);
          background: var(--surface-hi);
        }
        [data-theme="light"] .experience-card:hover {
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.15);
          background: #fff;
          border-color: var(--red);
        }
      `}</style>
    </section>

  )
}
