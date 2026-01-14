'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Globe, Smartphone } from 'lucide-react'

const TechStack = () => {
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

  const techCategories = [
    {
      icon: <Globe size={32} />,
      title: "Frontend Development",
      description: "Creating beautiful and responsive user interfaces",
      technologies: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      icon: <Database size={32} />,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs",
      technologies: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 90 },
       
        { name: "Java & SpringBoot", level: 95 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      icon: <Code size={32} />,
      title: "Tools & Technologies",
      description: "Development tools and technologies I work with",
      technologies: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Vercel", level: 85 },
        { name: "Firebase", level: 75 },
        { name: "VS Code", level: 95 }
      ]
    }
  ]

  return (
    <section id="tech" ref={ref} className="py-20 px-6 bg-gradient-to-r from-cream to-beige-100">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-beige-900 mb-4">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-beige-600 mx-auto mb-6"></div>
          <p className="text-lg text-beige-600 max-w-2xl mx-auto">
            Technologies and tools I'm comfortable with and use to bring ideas to life
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-beige-100 rounded-xl flex items-center justify-center text-beige-600">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-beige-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-beige-600 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ width: 0, opacity: 0 }}
                    animate={isInView ? { width: "100%", opacity: 1 } : { width: 0, opacity: 0 }}
                    transition={{ delay: (index * 0.2) + (techIndex * 0.1) }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-beige-700 font-medium text-sm">
                        {tech.name}
                      </span>
                      <span className="text-beige-500 text-sm">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="w-full bg-beige-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${tech.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: (index * 0.2) + (techIndex * 0.1) + 0.3,
                          duration: 1,
                          ease: "easeOut"
                        }}
                        className="bg-gradient-to-r from-beige-500 to-beige-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-beige-900 mb-8">
            Always Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Machine Learning","DevOps", "Microservices", 
              "Cloud Computing", "UI/UX Design", "Agile Methodology", "CI/CD"
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: 1 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
                className="bg-beige-200 text-beige-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-beige-300 transition-colors duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack