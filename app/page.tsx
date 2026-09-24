import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Services from '@/components/Services'
import LinkedInPosts from '@/components/LinkedInPosts'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="portfolio-shell">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Services />
      <LinkedInPosts />
      <Contact />
    </main>
  )
}
