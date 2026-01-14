'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react'

const Experience = () => {
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

  const experiences = [
    {
      position: "Web Developer Intern",
      company: "PayZoll",
      location: "Remote",
      duration: "Feb 2025 - Apr 2026",
      type: "Full-time",
      description: "Leading the development of modern web applications using React, Node.js, and cloud technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Identified performance bottlenecks in the legacy interface utilizing older templates that hindered user retention",
        "Targeted the specific need to modernize the frontend architecture for better type safety and maintainability",
        "Migrated template components written in Octo SDK into a Next.js environment using TypeScript, maintaining proper typing",
        "Reduced load times by 40% and increased Google Lighthouse scores to 95+, significantly improving Quality Assurance metrics"
      ],
      technologies: ["React", "Node.js", "TypeScript", "NextJs", "MongoDB"],
      current: true
    },
    {
      position: "Open Source Contributor",
      company: "JGEC Winter of Code",
      location: "Remote",
      duration: "Dec 2024 - Jan 2025",
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
      duration: "Aug 2025 - Present",
      type: "Leadership Role",
      description: "Led web development initiatives for Google Developer Group RCCIIT, organizing workshops, managing development projects, and mentoring junior developers.",
      achievements: [
        "Organized technical workshops and coding sessions",
        "Developed and maintained the official GDG RCCIIT website",
        "Mentored 50+ students in modern web development practices"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Git"],
      current: false
    },
    {
      position: "Web Development Lead",
      company: "ACM RCCIIT",
      location: "Kolkata, India",
      duration: "Jan 2026 - Present",
      type: "Leadership Role",
      description: "Served as Web Development Lead for ACM RCCIIT chapter, coordinating technical events, managing web projects, and fostering a community of developers.",
      achievements: [
        "Built responsive websites for college events and competitions",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "MongoDB", "Express.js"],
      current: false
    }
  ]

  return (
    <section id="experience" ref={ref} className="py-20 px-6 bg-gradient-to-r from-cream to-beige-100">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-beige-900 mb-4">
            Work Experience & Achievements
          </h2>
          <div className="w-24 h-1 bg-beige-600 mx-auto mb-6"></div>
          <p className="text-lg text-beige-600 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career in web development
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 w-0.5 h-full bg-beige-300 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
                transition={{ delay: index * 0.3 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-beige-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                {/* Experience Card */}
                <div className="md:ml-20 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-wrap items-start justify-between mb-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-beige-900">
                          {exp.position}
                        </h3>
                        
                      </div>
                      
                      <h4 className="text-lg text-beige-700 font-medium mb-3">
                        {exp.company}
                      </h4>

                      <div className="flex flex-wrap gap-4 text-sm text-beige-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase size={16} />
                          {exp.type}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-beige-700 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="text-beige-900 font-medium mb-3 flex items-center gap-2">
                      <Award size={16} />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ x: -20, opacity: 0 }}
                          animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                          transition={{ delay: (index * 0.3) + (achIndex * 0.1) }}
                          className="text-beige-600 text-sm flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-beige-400 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-beige-900 font-medium mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                          transition={{ delay: (index * 0.3) + (techIndex * 0.05) }}
                          className="bg-beige-100 text-beige-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience