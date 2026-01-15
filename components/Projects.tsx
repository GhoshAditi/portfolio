'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'

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

  const projects = [
    {
      title: "Beacon",
      description: "Beacon is an email security solution that inserts tracking and PIN-protected links into emails, providing visibility, control, and AI-led insights to mitigate misuse and forwarding. It's a security layer on top of email, merging tracking, access control, and AI-based insights under one platform.",
      image: "/beacon.webp", // Placeholder image
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Gemini"],
      liveUrl: "https://beacon-running-rrq5.vercel.app/",
      githubUrl: "https://beacon-running-rrq5.vercel.app/",
      featured: true
    },
    {
      title: "HerShield",
      description: "HerShield is a website designed to help women in distress situations. It features SOS alerts, fake call functionality, real-time location sharing, and safe route mapping to ensure women's safety and provide immediate assistance when needed.",
      image: "/hershield.png",
      technologies: ["Next.js", "Python", "NLP", "Web Server","Socket.io"],
      liveUrl: "https://hershield-xi.vercel.app/",
      githubUrl: "https://github.com/GhoshAditi/Hershield---Woman-Safety-Platform",
      featured: true
    },
    {
      title: "BitShred",
      description: "BitShred is a secure data wiping tool that completely overrides data from devices, making it unrecoverable by regular data recovery tools. It ensures permanent data deletion for enhanced security and privacy protection.",
      image: "/bitshred.png",
      technologies: ["Next.js", "TypeScript", "Python"],
      liveUrl: "https://www.youtube.com/watch?v=w6mCLpcqOdM",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      featured: true
    },
    {
      title: "Aarya",
      description: "AARYA is a woman safety monitoring platform that detects threats via CCTV based on SOS Signals, Gender Context, and other social cues and notifies authorities, has additional features like safe routes, SOS alarm etc",
      image: "/aarya.png",
      technologies: ["Next.js", "Python", "OpenCV", "DeepFace", "MediaPose"," TensorFlow"],
      liveUrl: "https://www.youtube.com/watch?v=zbQVtpCLYeE",
      githubUrl: "https://github.com/GhoshAditi/womansafety",
      featured: true
    },
    {
      title: "Paws",
      description: "Paws is a web app that allows users to seamlessly report injured stray animals to nearby NGOs and animal hospitals. Two AI models were trained on custom dataset: one for detecting the type of animal and another for the type of physical injury",
      image: "/paws.png",
      technologies: ["React", "Azure", "Azure AI Vision", "PostgreSQL","Firebase"],
      liveUrl: "https://pawss.vercel.app/",
      githubUrl: "https://github.com/GhoshAditi/Paws-frontend",
      featured: true
    },
    {
      title: "EngiDocs",
      description: "EngiDocs provides comprehensive resources for engineering students including PDF materials, lecture links, previous year questions (PYQs), and TLDR summarization of any PDF for all years, semesters, and branches of engineering students.",
      image: "/engidocs.png",
      technologies: ["Next.js", "TypeScript", "Python", "MongoDB"],
      liveUrl: "https://engidocs.vercel.app/",
      githubUrl: "https://github.com/GhoshAditi/EngiDocs",
      featured: true
    }
  ]

  return (
    <section id="projects" ref={ref} className="py-20 px-6 bg-gradient-to-br from-slate-900 via-darkBlue-900 to-slate-800">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mb-16">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
                transition={{ delay: index * 0.2 }}
                className="group bg-slate-900/40 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-accent-blue/50"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-darkBlue-800 flex items-center justify-center">
                    {project.image ? (
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `
                            <div class="text-center">
                              <div class="w-16 h-16 text-accent-blue mx-auto mb-2 flex items-center justify-center">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                              </div>
                              <p class="text-slate-200 font-medium">Project Screenshot</p>
                              <p class="text-slate-400 text-sm">Add your project image here</p>
                            </div>
                          `;
                        }}
                      />
                    ) : (
                      <div className="text-center">
                        <Eye className="w-16 h-16 text-accent-blue mx-auto mb-2" />
                        <p className="text-slate-200 font-medium">Project Screenshot</p>
                        <p className="text-slate-400 text-sm">Add your project image here</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-accent-blue text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors duration-300"
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold text-slate-100 mb-3">
                    {project.title}
                  </h4>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full text-sm font-medium border border-accent-blue/30"
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
                      className="flex-1 bg-accent-blue text-white text-center py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-accent-blue text-accent-blue text-center py-2 rounded-lg hover:bg-accent-blue hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
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

export default Projects