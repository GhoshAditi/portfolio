'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Rocket, Flame } from 'lucide-react'
import QuestBanner from './QuestBanner'

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

  const technologies = [
    { name: 'Next.js', logo: 'https://skillicons.dev/icons?i=nextjs' },
    { name: 'React', logo: 'https://skillicons.dev/icons?i=react' },
    { name: 'TypeScript', logo: 'https://skillicons.dev/icons?i=ts' },
    { name: 'JavaScript', logo: 'https://skillicons.dev/icons?i=js' },
    { name: 'Tailwind CSS', logo: 'https://skillicons.dev/icons?i=tailwind' },
    { name: 'Node.js', logo: 'https://skillicons.dev/icons?i=nodejs' },
    { name: 'Express', logo: 'https://skillicons.dev/icons?i=express' },
    { name: 'Python', logo: 'https://skillicons.dev/icons?i=python' },
    { name: 'Java', logo: 'https://skillicons.dev/icons?i=java' },
    { name: 'PostgreSQL', logo: 'https://skillicons.dev/icons?i=postgres' },
    { name: 'MongoDB', logo: 'https://skillicons.dev/icons?i=mongodb' },
    { name: 'MySQL', logo: 'https://skillicons.dev/icons?i=mysql' },
    { name: 'Firebase', logo: 'https://skillicons.dev/icons?i=firebase' },
    { name: 'Docker', logo: 'https://skillicons.dev/icons?i=docker' },
    { name: 'Azure', logo: 'https://skillicons.dev/icons?i=azure' },
    { name: 'AWS', logo: 'https://skillicons.dev/icons?i=aws' },
    { name: 'GitHub', logo: 'https://skillicons.dev/icons?i=github' },
    { name: 'Vercel', logo: 'https://skillicons.dev/icons?i=vercel' },
  ]

  const perkCards = [
    { title: 'Performance First', text: 'Core Web Vitals focused architecture. Lighthouse-grade optimization across all projects.', icon: <Rocket size={18} className="text-accent-cyan" /> },
    { title: 'Security Hardened', text: 'Defense-in-depth practices. Sensitive data handling with industry best practices.', icon: <Shield size={18} className="text-accent-orange" /> },
    { title: 'Rapid Iteration', text: 'Clean production deployments. Fast feedback loops with robust error handling.', icon: <Flame size={18} className="text-fuchsia-300" /> },
  ]

  return (
    <section id="tech" ref={ref} className="py-24 px-6 im-section relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <QuestBanner quest="Skill Tree" reward="+420 XP" />
          <h2 className="im-heading text-slate-100 mb-4 mt-6">
            Tech Mastery
          </h2>
          <div className="mx-auto mb-6 h-px w-28 bg-accent-cyan/40"></div>
          <p className="im-sub text-base text-center mx-auto">
            Specialized expertise across modern web development, cloud infrastructure, and full-stack systems. Proven track record shipping production-grade code at scale.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="im-card p-8 md:p-10 mb-12"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-2xl border border-white/15 bg-slate-900/80 p-4 flex items-center gap-4 transition-all duration-300 hover:border-accent-cyan/50"
              >
                <img src={item.logo} alt={`${item.name} logo`} className="h-11 w-11" loading="lazy" />
                <span className="font-semibold text-slate-100 text-base">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Perks Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-300 mb-6 flex items-center gap-2">
              <span className="text-accent-cyan">⚡</span>
              Core Competencies
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {perkCards.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group im-card p-6 md:p-7 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-slate-800/80 group-hover:bg-accent-cyan/15 transition-colors">
                    {perk.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-slate-100 font-semibold mb-2 text-sm md:text-base">
                      {perk.title}
                    </h4>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      {perk.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack