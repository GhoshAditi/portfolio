'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react'
import QuestBanner from './QuestBanner'

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
      position: "Software Development Engineer Intern",
      company: "DevrelSquad",
      location: "Remote",
      duration: "Feb 2026 - Present",
      type: "Full-time",
      description: "Leading the development of modern web applications using NextJs, MongoDB, and cloud technologies like Azure and Docker. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
       " Implemented SEO strategies to enhance organic search visibility, optimizing content and metadata to improve Google rankings and discoverability across search engines and AI language models",
"Enhanced product functionality by implementing user feedback, resolving bugs, developing new features, and creating additional pages to improve user experience",
"Refactored codebase by modularizing components into constants, enums, and configuration files, improving code maintainability, scalability, and development efficiency"
        
      ],
      technologies: ["NextJs", "TypeScript", "Azure", "MongoDB", "Docker"],
      current: true
    },
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
      position: "Web Development co-Lead",
      company: "GDG RCCIIT",
      location: "Kolkata, India",
      duration: "Aug 2025 - Present",
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
      duration: "Jan 2026 - Present",
      type: "Leadership Role",
      description: "Serving as Tech Lead for ACM RCCIIT chapter, coordinating technical events, managing web projects, and fostering a community of developers.",
      achievements: [
       
      ],
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

  return (
    <section id="experience" ref={ref} className="py-24 px-6 im-section relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <QuestBanner quest="Career Timeline" reward="+360 XP" />
          <h2 className="im-heading text-slate-100 mb-4 mt-6">
            Professional Journey
          </h2>
          <div className="mx-auto mb-6 h-px w-28 bg-accent-cyan/40"></div>
          <p className="im-sub text-base text-center mx-auto">
            Diverse roles spanning web development, cloud infrastructure, and cross-functional collaborations across startups and open-source communities.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-accent-cyan to-accent-orange hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
                transition={{ duration: 0.6, delay: index * 0.18 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-5 top-9 w-6 h-6 bg-slate-950 rounded-full border-2 border-accent-cyan shadow-[0_0_20px_rgba(34,211,238,0.5)] hidden md:block"></div>

                {/* Experience Card */}
                <div className="md:ml-20 im-card p-8 hover:shadow-xl hover:shadow-accent-cyan/20 transition-shadow duration-300">
                  <div className="flex flex-wrap items-start justify-between mb-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-black text-slate-100">
                          {exp.position}
                        </h3>
                        
                      </div>
                      
                      <h4 className="text-lg text-accent-cyan font-semibold mb-3 uppercase tracking-[0.06em]">
                        {exp.company}
                      </h4>

                      <div className="flex flex-wrap gap-4 text-sm mb-4">
                        <div className="flex items-center gap-1 text-slate-300">
                          <Calendar size={16} />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1 text-slate-300">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1 text-slate-300">
                          <Briefcase size={16} />
                          {exp.type}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed text-[15px]">
                    {exp.description}
                  </p>

                  {/* Achievements */}
{exp.achievements.length > 0 && (
  <div className="mb-6">
    <h5 className="text-slate-100 font-semibold mb-3 flex items-center gap-2 uppercase tracking-[0.09em] text-sm">
      <Award size={16} />
      Quest Rewards
    </h5>
    <ul className="space-y-2">
      {exp.achievements.map((achievement, achIndex) => (
        <motion.li
          key={achIndex}
          initial={{ x: -20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
          transition={{ delay: (index * 0.3) + (achIndex * 0.1) }}
          className="text-slate-300 text-sm flex items-start gap-2"
        >
          <div className="w-1.5 h-1.5 bg-accent-orange rounded-full mt-2 flex-shrink-0"></div>
          {achievement}
        </motion.li>
      ))}
    </ul>
  </div>
)}
                  {/* Technologies */}
                  <div>
                    <h5 className="text-slate-100 font-semibold mb-3 uppercase tracking-[0.09em] text-sm">Tools Equipped</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                          transition={{ delay: (index * 0.3) + (techIndex * 0.05) }}
                          className="bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30 px-3 py-1 rounded-full text-sm font-semibold"
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
