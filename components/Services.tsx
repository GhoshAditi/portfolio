'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Palette, Smartphone, Cloud, Search, Zap } from 'lucide-react'
import QuestBanner from './QuestBanner'

const Services = () => {
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

  const services = [
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js. Focus on performance, scalability, and user experience.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatibility"]
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with attention to detail, accessibility, and modern design principles.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: <Smartphone size={32} />,
      title: "Full Stack Development",
      description: "End-to-end development of web applications, including frontend, backend, and database management using technologies like MERN stack.",
      features: ["Frontend Development", "Backend Development", "Database Management", "API Integration"]
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Solutions",
      description: "Deployment and management of applications on cloud platforms like AWS, Google Cloud, and Azure with focus on scalability.",
      features: ["Auto-scaling", "Load Balancing", "Database Management", "Security"]
    },
    {
      icon: <Search size={32} />,
      title: "SEO Optimization",
      description: "Improving website visibility and search engine rankings through technical SEO, content optimization, and performance improvements.",
      features: ["Technical SEO", "Content Strategy", "Analytics Setup", "Performance Audit"]
    },
    {
      icon: <Zap size={32} />,
      title: "Performance Optimization",
      description: "Analyzing and improving website performance, reducing load times, and enhancing user experience through various optimization techniques.",
      features: ["Code Splitting", "Image Optimization", "Caching Strategies", "Bundle Analysis"]
    }
  ]

  return (
    <section id="services" ref={ref} className="py-20 px-6 bg-gradient-to-r from-slate-900 via-darkBlue-900 to-slate-800">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <QuestBanner quest="Skill Tree" reward="+420 XP" />
          <h2 className="text-4xl md:text-5xl font-black font-display text-slate-100 mb-4 mt-4">
            Service Loadout
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-orange mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Choose a build path and I will craft a polished, high-impact execution plan.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-950/70 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-accent-cyan/25 transition-all duration-300 group border border-accent-cyan/20"
            >
              <div className="w-16 h-16 bg-accent-orange/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-orange/30 transition-colors duration-300 border border-accent-orange/30">
                <div className="text-accent-orange group-hover:text-orange-300 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-black text-slate-100 mb-4">
                {service.title}
              </h3>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                    transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                    className="flex items-center gap-2 text-slate-300"
                  >
                    <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-black text-slate-100 mb-4">
            Ready To Launch?
          </h3>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto">
            Let us select your build path and ship a standout product with speed and precision.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-accent-cyan hover:bg-sky-400 text-slate-950 px-8 py-3 rounded-full font-black transition-colors duration-300"
          >
            Start Mission
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services