'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { featuredProjects } from '@/lib/projects'
import QuestBanner from './QuestBanner'

const Projects = () => {
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

  return (
    <section id="projects" ref={ref} className="py-20 px-6 im-section">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <QuestBanner quest="Quest Board" reward="+500 XP" />
          <h2 className="im-heading text-slate-100 mb-4 mt-6">
            Featured Work
          </h2>
          <div className="mx-auto mb-6 h-px w-28 bg-accent-cyan/40"></div>
          <p className="im-sub text-base text-center mx-auto">
            Curated selection of production projects spanning full-stack development, cloud architecture, and real-world impact.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mb-16">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
                transition={{ delay: index * 0.2 }}
                className="group im-card overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-accent-cyan/50"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-slate-800 to-darkBlue-900 flex items-center justify-center border-b border-accent-cyan/20">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      width={300}
                      height={200}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  
                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-accent-cyan text-slate-950 p-3 rounded-full hover:bg-accent-orange transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-slate-800 text-white p-3 rounded-full hover:bg-slate-700 transition-colors duration-300"
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-black text-slate-100 mb-3">
                    {project.title}
                  </h4>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-accent-cyan/15 text-accent-cyan px-3 py-1 rounded-full text-xs uppercase tracking-[0.1em] font-semibold border border-accent-cyan/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-accent-cyan text-slate-950 text-center py-2 rounded-xl hover:bg-accent-orange transition-colors duration-300 flex items-center justify-center gap-2 font-semibold"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-accent-cyan text-accent-cyan text-center py-2 rounded-xl hover:bg-accent-cyan hover:text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-accent-orange uppercase tracking-[0.08em]">
                    Quest unlocked: {project.category.replace('-', ' ')} track
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

export default Projects