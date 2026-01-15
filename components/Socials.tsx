'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Github, Twitter, Instagram, Youtube, Mail, ExternalLink } from 'lucide-react'

const Socials = () => {
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

  const socialPlatforms = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={32} />,
      url: "https://linkedin.com/in/aditighosh2005",
      description: "Connect with me professionally and stay updated with my career journey, achievements, and industry insights.",
      color: "bg-blue-600 hover:bg-blue-700",
      stats: "Professional networking • Career updates • Industry insights"
    },
    {
      name: "GitHub",
      icon: <Github size={32} />,
      url: "https://github.com/GhoshAditi",
      description: "Explore my open source contributions, personal projects, and collaborative development work.",
      color: "bg-gray-800 hover:bg-gray-900",
      stats: "Open source projects • Code repositories • Development showcase"
    },
    {
      name: "LeetCode",
      icon: <ExternalLink size={32} />,
      url: "https://leetcode.com/u/aditi_ghosh668/",
      description: "Follow my competitive programming journey and algorithmic problem-solving progress.",
      color: "bg-orange-500 hover:bg-orange-600",
      stats: "Algorithmic challenges • Problem solving • Coding practice"
    }
  ]

  return (
    <section id="socials" ref={ref} className="py-20 px-6 bg-gradient-to-r from-slate-900 via-darkBlue-900 to-slate-800">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Connect With Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Follow my journey across different platforms to stay updated with my latest projects, insights, and professional growth
          </p>
        </motion.div>

        {/* Social Platforms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-accent-blue/30 transition-all duration-300 h-full border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-xl flex items-center justify-center text-white transition-all duration-300 ${platform.color}`}
                  >
                    {platform.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">
                      {platform.name}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  {platform.description}
                </p>

                <p className="text-slate-400 text-sm mb-6">
                  {platform.stats}
                </p>

                <motion.a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 ${platform.color}`}
                >
                  Follow
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Contact */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-darkBlue-700 to-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-semibold text-slate-100 mb-4">
              Prefer Email?
            </h3>
            <p className="text-slate-300 mb-6">
              Feel free to reach out directly via email for collaboration opportunities
            </p>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-accent-blue hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
            >
              <Mail size={18} />
              Send Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Socials