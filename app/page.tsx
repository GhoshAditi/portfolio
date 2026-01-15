'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Services from '@/components/Services'
import LinkedInPosts from '@/components/LinkedInPosts'
import Socials from '@/components/Socials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-darkBlue-900 to-slate-800">
      <Header />
      <Hero />
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