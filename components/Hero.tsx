'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, Sparkles, Trophy, Flame } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const slideFromLeft = {
    hidden: { x: -70, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const slideFromRight = {
    hidden: { x: 70, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="home" className="im-section min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="hidden sm:block absolute top-24 right-[10%] h-20 w-20 rounded-full border border-slate-500/40" />
        <div className="absolute bottom-24 left-[12%] h-40 w-40 rounded-full bg-accent-cyan/10 blur-3xl" />
        <div className="absolute bottom-20 right-[8%] h-44 w-44 rounded-full bg-orange-300/10 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div variants={slideFromLeft} className="mb-6">
              <span className="im-chip inline-flex items-center gap-2">
                <Sparkles size={14} />
                Open To Build
              </span>
              <h1 className="im-heading mt-5 text-slate-100">Aditi Ghosh</h1>
            </motion.div>

            <motion.div variants={slideFromLeft} className="mb-6">
              <h2 className="text-2xl md:text-3xl text-slate-100 font-semibold leading-tight">
                Full Stack Engineer with strong product and performance instincts
              </h2>
            </motion.div>

            <motion.p variants={slideFromLeft} className="im-sub text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I design and ship immersive digital products with clean architecture, sharp UX details, and measurable outcomes.
            </motion.p>

            <motion.div variants={slideFromLeft} className="grid sm:grid-cols-3 gap-3 mb-8">
              <div className="im-card p-4">
                <p className="text-xs text-slate-400 uppercase tracking-[0.15em]">Projects</p>
                <p className="text-xl font-black text-accent-cyan">15+</p>
              </div>
              <div className="im-card p-4">
                <p className="text-xs text-slate-400 uppercase tracking-[0.15em]">Experience</p>
                <p className="text-xl font-black text-orange-300">2+ yrs</p>
              </div>
              <div className="im-card p-4">
                <p className="text-xs text-slate-400 uppercase tracking-[0.15em]">Win Rate</p>
                <p className="text-xl font-black text-emerald-300">94%</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.open('/Aditi_Ghosh_Resume.pdf', '_blank')
                }}
                className="im-cta-primary flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Open CV
              </motion.button>

              <motion.a href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }} className="im-cta-ghost text-center">
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div variants={slideFromLeft} className="flex flex-wrap items-center gap-4 mt-8 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <Trophy size={16} className="text-accent-cyan" /> Hackathon Finalist
              </span>
              <span className="inline-flex items-center gap-2">
                <Flame size={16} className="text-orange-300" /> Performance Optimizer
              </span>
            </motion.div>
          </div>

          <motion.div variants={slideFromRight} className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent-cyan/20 via-transparent to-orange-300/20 blur-2xl" />

              <div className="relative im-card p-5 rounded-[2rem]">
                <div className="w-80 h-80 bg-slate-900 rounded-[1.6rem] flex items-center justify-center border border-slate-600/40 overflow-hidden">
                  <Image
                    src="/pfp.jpg"
                    alt="Aditi Ghosh"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-[1.4rem] scale-110"
                  />
                </div>
              </div>

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 w-14 h-14 border border-slate-400/50 rounded-2xl bg-slate-300/10"
              />
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-6 -left-6 w-12 h-12 border border-orange-300/50 rounded-full bg-orange-300/20"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
