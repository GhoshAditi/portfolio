'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Globe, Cloud, Cpu, Layers, Zap } from 'lucide-react'

const TechStack = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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

  // Technology data with icons and colors
  const technologies = [
    // First row - Frontend & Languages
    [
      { name: "React", icon: "⚛️", color: "text-accent-blue" },
      { name: "Next.js", icon: "🔺", color: "text-slate-100" },
      { name: "TypeScript", icon: "📘", color: "text-accent-blue" },
      { name: "JavaScript", icon: "🟨", color: "text-accent-yellow" },
      { name: "HTML5", icon: "🌐", color: "text-orange-500" },
      { name: "CSS3", icon: "🎨", color: "text-accent-blue" },
      { name: "Tailwind", icon: "💨", color: "text-accent-cyan" },
      { name: "Python", icon: "🐍", color: "text-accent-yellow" },
      { name: "Java", icon: "☕", color: "text-orange-600" },
      { name: "C++", icon: "⚡", color: "text-accent-blue" },
    ],
    // Second row - Backend & Databases
    [
      { name: "Node.js", icon: "🟢", color: "text-green-500" },
      { name: "Express", icon: "🚀", color: "text-slate-300" },
      { name: "Spring Boot", icon: "🍃", color: "text-green-500" },
      { name: "MongoDB", icon: "🍃", color: "text-green-600" },
      { name: "PostgreSQL", icon: "🐘", color: "text-accent-blue" },
     
      { name: "Firebase", icon: "🔥", color: "text-orange-500" },
      { name: "MySQL", icon: "🗄️", color: "text-accent-blue" },
      { name: "GraphQL", icon: "🎯", color: "text-accent-purple" },
      { name: "REST API", icon: "🔗", color: "text-accent-cyan" },
    ],
    // Third row - Tools & Cloud
    [
      { name: "Git", icon: "📝", color: "text-orange-600" },
      { name: "GitHub", icon: "🐱", color: "text-slate-100" },
      { name: "Docker", icon: "🐳", color: "text-accent-blue" },
      { name: "AWS", icon: "☁️", color: "text-orange-500" },
      { name: "Vercel", icon: "▲", color: "text-slate-100" },
      { name: "Linux", icon: "🐧", color: "text-accent-yellow" },
      { name: "VS Code", icon: "💻", color: "text-accent-blue" },
      { name: "Figma", icon: "🎨", color: "text-accent-purple" },
    ]
  ]

  return (
    <section id="tech" ref={ref} className="py-20 px-6 bg-gradient-to-br from-slate-900 via-darkBlue-900 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </motion.div>

        {/* Animated Tech Rows */}
        <div className="space-y-8">
          {technologies.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: rowIndex * 0.2 }}
              className="relative overflow-hidden"
            >
              <div className={`flex ${rowIndex % 2 === 0 ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
                {/* Duplicate the row for seamless infinite scroll */}
                {[...row, ...row].map((tech, techIndex) => (
                  <motion.div
                    key={`${rowIndex}-${techIndex}`}
                    whileHover={{ 
                      scale: 1.1,
                      y: -10,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="flex-shrink-0 mx-4 group"
                  >
                    <div className="bg-slate-800/70 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 min-w-[140px] text-center hover:bg-slate-700/70 transition-all duration-300 hover:border-accent-blue/50 hover:shadow-lg hover:shadow-accent-blue/20">
                      <div className={`text-3xl mb-2 group-hover:animate-bounce ${tech.color}`}>
                        {tech.icon}
                      </div>
                      <div className="text-slate-200 font-medium text-sm">
                        {tech.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-slate-100 mb-8">
            Always Learning & Exploring
          </h3>
          <div className="flex flex-wrap justify-center gap-4 ">
            {[
              "AI/ML", "DevOps", "Microservices", 
              "Cloud Computing", "UI/UX Design", "Agile Methodology", 
              "CI/CD"
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: 1 + (index * 0.1) }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                }}
                className="bg-gradient-to-r from-darkBlue-700 to-slate-700 text-slate-200 px-4 py-2 rounded-full text-sm font-medium hover:from-accent-blue hover:to-accent-purple transition-all duration-300 cursor-default border border-slate-600/50 hover:border-accent-blue/50"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { icon: <Code size={32} />, number: "20+", label: "Technologies" },
            { icon: <Database size={32} />, number: "5+", label: "Databases" },
            { icon: <Cloud size={32} />, number: "3+", label: "Cloud Platforms" },
            { icon: <Zap size={32} />, number: "∞", label: "Learning" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-accent-blue/50 transition-all duration-300"
            >
              <div className="text-accent-blue mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-slate-100 mb-1">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack