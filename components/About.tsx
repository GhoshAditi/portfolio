'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, User, Calendar } from 'lucide-react'

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
    <section id="about" ref={ref} className="py-20 px-6 bg-gradient-to-br from-slate-900 via-darkBlue-900 to-slate-800">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Get to know more about my journey, education, and what drives my passion for development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Me Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideFromLeft}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <User className="text-accent-blue" size={28} />
              <h3 className="text-2xl font-semibold text-slate-100">Who I Am</h3>
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with a love for creating innovative and 
                user-friendly web applications. My journey in technology started during my freshman year in 
                college years, where I discovered the power of code to solve real-world problems.
              </p>
              
              <p>
                With a strong foundation in both frontend and backend technologies, I enjoy 
                building complete solutions from concept to deployment. I'm particularly 
                interested in modern web frameworks, cloud technologies, and creating 
                seamless user experiences.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing my knowledge with the developer community. 
                I believe in continuous learning and staying up-to-date with the latest industry trends.
              </p>
            </div>

            {/* Personal Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-800/50 rounded-lg shadow-sm border border-slate-700">
                <div className="text-2xl font-bold text-accent-blue">8+</div>
                <div className="text-slate-300">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg shadow-sm border border-slate-700">
                <div className="text-2xl font-bold text-accent-blue">2+</div>
                <div className="text-slate-300">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideFromRight}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-accent-blue" size={28} />
              <h3 className="text-2xl font-semibold text-slate-100">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  className="bg-slate-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                      <Calendar className="text-accent-blue" size={20} />
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-slate-100 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-accent-blue font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-slate-400 mb-3">
                        {edu.year}
                      </p>
                      <p className="text-slate-300 text-sm mb-2">
                        {edu.description}
                      </p>
                      <div className="inline-block bg-accent-blue/20 text-accent-blue text-sm px-3 py-1 rounded-full border border-accent-blue/30">
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