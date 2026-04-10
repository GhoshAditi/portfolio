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
    { title: 'Performance Buff', text: 'Optimized page speed and Lighthouse-focused builds.', icon: <Rocket size={18} className="text-accent-cyan" /> },
    { title: 'Security Shield', text: 'Defense-first architecture for sensitive flows.', icon: <Shield size={18} className="text-accent-orange" /> },
    { title: 'Ship Velocity', text: 'Fast iteration with clean production releases.', icon: <Flame size={18} className="text-fuchsia-300" /> },
  ]

  return (
    <section id="tech" ref={ref} className="py-20 px-6 bg-gradient-to-br from-slate-900 via-darkBlue-900 to-slate-800 relative overflow-hidden">
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
          <QuestBanner quest="Skill Tree" reward="+320 XP" />
          <h2 className="text-4xl md:text-5xl font-black font-display text-slate-100 mb-4 mt-4">
            Tech Arena Reloaded
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-orange mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A fully gamified skill board showing power levels, specialty lanes, and active perks.
          </p>
        </motion.div>

        <div className="rounded-3xl border border-accent-cyan/25 bg-slate-950/70 p-6 md:p-8 backdrop-blur-xl mb-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl border border-white/15 bg-slate-900/80 p-4 flex items-center gap-4"
            >
              <img src={item.logo} alt={`${item.name} logo`} className="h-11 w-11" loading="lazy" />
              <span className="font-semibold text-slate-100 text-base">{item.name}</span>
            </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
          className="rounded-3xl border border-accent-cyan/25 bg-slate-950/70 p-6 md:p-8 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-black text-slate-100 mb-6">Passive Perks Unlocked</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {perkCards.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.75 + index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-left"
              >
                <p className="inline-flex items-center gap-2 text-slate-100 font-semibold mb-2">{perk.icon}{perk.title}</p>
                <p className="text-sm text-slate-300">{perk.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack