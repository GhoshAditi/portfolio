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
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 right-[10%] h-20 w-20 rounded-full border border-accent-orange/40" />
        <div className="absolute bottom-24 left-[12%] h-40 w-40 rounded-full bg-accent-cyan/20 blur-3xl" />
        <div className="absolute bottom-20 right-[8%] h-44 w-44 rounded-full bg-accent-orange/20 blur-3xl" />
      </div>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="text-center lg:text-left">
            <motion.div variants={slideFromLeft} className="mb-6">
              <span className="inline-flex items-center gap-2 text-slate-200 text-xs font-semibold uppercase tracking-[0.22em] rounded-full border border-accent-cyan/40 px-4 py-1.5 bg-slate-900/70">
                <Sparkles size={14} /> Mission Start
              </span>
              <h1 className="text-5xl md:text-7xl font-black font-display bg-gradient-to-r from-white via-accent-cyan to-accent-orange bg-clip-text text-transparent mt-4 leading-[0.95]">
                Aditi Ghosh
              </h1>
            </motion.div>

            <motion.div
              variants={slideFromLeft}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl text-slate-100 font-semibold">
                Full Stack Engineer with a Boss-Level Product Mindset
              </h2>
            </motion.div>

            <motion.p variants={slideFromLeft} className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I design and build immersive, high-performance digital products that feel cinematic, polished, and intentionally crafted for humans.
            </motion.p>

            <motion.div variants={slideFromLeft} className="grid sm:grid-cols-3 gap-3 mb-8">
              <div className="rounded-xl border border-accent-cyan/35 bg-slate-900/60 p-3">
                <p className="text-xs text-slate-400 uppercase tracking-[0.15em]">Rank</p>
                <p className="text-xl font-black text-accent-cyan">S+</p>
              </div>
              <div className="rounded-xl border border-accent-orange/35 bg-slate-900/60 p-3">
                <p className="text-xs text-slate-400 uppercase tracking-[0.15em]">XP</p>
                <p className="text-xl font-black text-accent-orange">12.4K</p>
              </div>
              <div className="rounded-xl border border-fuchsia-400/35 bg-slate-900/60 p-3">
                <p className="text-xs text-slate-400 uppercase tracking-[0.15em]">Quest Winrate</p>
                <p className="text-xl font-black text-fuchsia-300">94%</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.open('/Aditi_Ghosh_Resume.pdf', '_blank')
                }}
                className="bg-accent-cyan hover:bg-sky-400 text-slate-950 px-8 py-3 rounded-full font-black transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Open CV
              </motion.button>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-slate-950 px-8 py-3 rounded-full font-black transition-all duration-300 text-center"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div variants={slideFromLeft} className="flex flex-wrap items-center gap-4 mt-8 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2"><Trophy size={16} className="text-accent-cyan" /> Hackathon Finalist</span>
              <span className="inline-flex items-center gap-2"><Flame size={16} className="text-accent-orange" /> Performance Optimizer</span>
            </motion.div>
          </div>

          <motion.div
            variants={slideFromRight}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent-cyan/30 via-transparent to-accent-orange/30 blur-2xl" />
              
              <div className="relative bg-slate-900/80 p-5 rounded-[2.2rem] shadow-2xl border border-accent-cyan/25 backdrop-blur-xl">
                <div className="w-80 h-80 bg-slate-800 rounded-[1.8rem] flex items-center justify-center border border-accent-orange/30 overflow-hidden">
                  <Image 
                    src="/pfp.jpg" 
                    alt="Aditi Ghosh" 
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-[1.6rem] scale-110"
                  /> 
                </div>
              </div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 w-14 h-14 border border-accent-cyan/50 rounded-2xl bg-accent-cyan/20"
              ></motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-6 -left-6 w-12 h-12 border border-accent-orange/60 rounded-full bg-accent-orange/25"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero