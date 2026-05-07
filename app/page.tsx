'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import GamifiedOverview from '@/components/GamifiedOverview'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Services from '@/components/Services'
import LinkedInPosts from '@/components/LinkedInPosts'
import Socials from '@/components/Socials'
import Contact from '@/components/Contact'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <main className="min-h-screen" style={{ paddingTop: '0' }}>
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'var(--red)',
          transformOrigin: '0%',
          zIndex: 1000,
        }}
      />
      <Header />
      <Hero />
      <GamifiedOverview />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Services />
      <LinkedInPosts />
      <Socials />
      <Contact />
    </main>
  )
}
