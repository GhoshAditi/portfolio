'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, User, Calendar } from 'lucide-react'
import QuestBanner from './QuestBanner'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const slideFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const slideFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech) - Computer Science and Engineering",
      institution: "RCC Institute of Information Technology, Kolkata",
      year: "2023 - 2027",
      description: "Focused on software engineering, algorithms, and web development.",
      grade: "CGPA: 8.84/10"
    }
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-6 im-section">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <QuestBanner quest="Origin Story" reward="+240 XP" />
          <h2 className="im-heading text-slate-100 mb-4 mt-6">
            About Me
          </h2>
          <div className="mx-auto mb-6 h-px w-28 bg-accent-cyan/40"></div>
          <p className="im-sub text-base text-center mx-auto">
            Full-stack engineer with a passionate focus on clean architecture, exceptional UX, and shipping products that matter.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideFromLeft}
            className="space-y-6 lg:col-span-7"
          >
            <div className="im-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <User className="text-accent-cyan" size={28} />
                <h3 className="text-2xl font-semibold text-slate-100">Character Profile</h3>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I am a full-stack developer obsessed with building products that are beautiful, useful, and technically sharp.
                </p>
                
                <p>
                  From frontend interactions to backend architecture, I enjoy owning the full game board. I care deeply about speed,
                  code quality, and product clarity.
                </p>

                <p>
                  Outside projects, I invest in open-source, community work, and continuous learning to keep leveling up.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-5 bg-slate-950/70 rounded-2xl shadow-sm border border-accent-cyan/25">
                <div className="text-2xl font-black text-accent-cyan">8+</div>
                <div className="text-slate-300 text-sm uppercase tracking-[0.11em]">Projects Completed</div>
              </div>
              <div className="text-center p-5 bg-slate-950/70 rounded-2xl shadow-sm border border-accent-orange/25">
                <div className="text-2xl font-black text-accent-orange">2+</div>
                <div className="text-slate-300 text-sm uppercase tracking-[0.11em]">Years Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideFromRight}
            className="space-y-6 lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-accent-orange" size={28} />
              <h3 className="text-2xl font-semibold text-slate-100">Academy Arc</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-slate-950/70 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-accent-orange/25">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center border border-accent-orange/35">
                      <Calendar className="text-accent-orange" size={20} />
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-slate-100 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-accent-cyan font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-slate-400 mb-3">
                        {edu.year}
                      </p>
                      <p className="text-slate-300 text-sm mb-2">
                        {edu.description}
                      </p>
                      <div className="inline-block bg-accent-cyan/20 text-accent-cyan text-sm px-3 py-1 rounded-full border border-accent-cyan/30">
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About