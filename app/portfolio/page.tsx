'use client'

import { motion } from 'framer-motion'
import { Download, ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Code2, Database, Cloud, Rocket } from 'lucide-react'
import { featuredProjects } from '@/lib/projects'

const fadeInUp = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function PortfolioPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const technologies = {
    frontend: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Python', 'Java'],
    database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'],
    devops: ['Docker', 'Azure', 'AWS', 'Vercel'],
  }

  const experiences = [
    {
      role: 'Software Development Engineer Intern',
      company: 'DevrelSquad',
      location: 'Remote',
      period: 'Feb 2026 - Present',
      highlights: [
        'Implemented SEO strategies to enhance organic search visibility',
        'Enhanced product functionality by implementing user feedback',
        'Refactored codebase by modularizing components',
      ],
    },
    {
      role: 'Web Developer Intern',
      company: 'PayZoll',
      location: 'Remote',
      period: 'Feb 2025 - Apr 2026',
      highlights: [
        'Reduced load times by 40% and increased Lighthouse scores to 95+',
        'Migrated components to Next.js environment using TypeScript',
        'Led frontend modernization initiative',
      ],
    },
  ]

  const skills = [
    { title: 'Performance Optimization', desc: 'Core Web Vitals focused architecture. Lighthouse-grade optimization.' },
    { title: 'Security Hardened', desc: 'Defense-in-depth practices with industry best-practice standards.' },
    { title: 'Rapid Iteration', desc: 'Clean production deployments with robust error handling.' },
  ]

  const projects = featuredProjects.slice(0, 6)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-slate-700/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial='hidden'
            animate='visible'
            variants={containerVariants}
            className='space-y-8'
          >
            <motion.div variants={fadeInUp} className='text-center space-y-4'>
              <h1 className='text-5xl md:text-7xl font-black text-slate-100 leading-tight'>
                Aditi Ghosh
              </h1>
              <h2 className='text-2xl md:text-3xl text-accent-cyan font-semibold'>
                Full Stack Engineer | Performance Architect
              </h2>
              <p className='text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed'>
                Building high-performance, scalable web applications with clean architecture and exceptional user experiences. Specialized in Next.js, TypeScript, and cloud technologies.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp} className='flex flex-wrap justify-center gap-6 pt-4'>
              <a
                href='mailto:aditighosh668@gmail.com'
                className='flex items-center gap-2 text-slate-300 hover:text-accent-cyan transition-colors'
              >
                <Mail size={20} />
                <span>aditighosh668@gmail.com</span>
              </a>
              <a
                href='tel:+919804468117'
                className='flex items-center gap-2 text-slate-300 hover:text-accent-cyan transition-colors'
              >
                <Phone size={20} />
                <span>+91 9804468117</span>
              </a>
              <div className='flex items-center gap-2 text-slate-300'>
                <MapPin size={20} />
                <span>India</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className='flex justify-center gap-4 pt-4'>
              <a
                href='https://linkedin.com/in/aditighosh2005'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors'
              >
                <Linkedin size={24} />
              </a>
              <a
                href='https://github.com/GhoshAditi'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-lg bg-gray-800 hover:bg-gray-900 text-white transition-colors'
              >
                <Github size={24} />
              </a>
              <a
                href='#'
                className='p-3 rounded-lg bg-accent-cyan hover:bg-accent-cyan/80 text-slate-900 transition-colors font-semibold'
              >
                <Download size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className='py-16 px-6 border-b border-slate-700/50'>
        <div className='container mx-auto max-w-6xl'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={containerVariants}
            className='space-y-8'
          >
            <motion.div variants={fadeInUp}>
              <h3 className='text-3xl font-bold text-slate-100 mb-6'>Professional Summary</h3>
              <div className='bg-slate-850 rounded-2xl border border-slate-700/50 p-8 space-y-4 text-slate-300 leading-relaxed'>
                <p>
                  Full-stack engineer with 2+ years of professional experience building production-grade web applications. Specialized in high-performance architecture, scalable backend systems, and modern frontend development using Next.js and TypeScript.
                </p>
                <p>
                  Proven track record of optimizing application performance (Lighthouse scores 95+), implementing SEO strategies for improved discoverability, and refactoring codebases for maintainability and scalability.
                </p>
                <p>
                  Strong focus on code quality, security best practices, and delivering products with measurable business impact. Actively contribute to open-source projects and mentor junior developers.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className='py-16 px-6 border-b border-slate-700/50'>
        <div className='container mx-auto max-w-6xl'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={containerVariants}
            className='space-y-8'
          >
            <motion.h3 variants={fadeInUp} className='text-3xl font-bold text-slate-100'>
              Core Competencies
            </motion.h3>
            <div className='grid md:grid-cols-3 gap-6'>
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill.title}
                  variants={fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className='bg-slate-850 rounded-2xl border border-slate-700/50 p-6 hover:border-accent-cyan/50 transition-colors'
                >
                  <h4 className='text-xl font-bold text-slate-100 mb-2'>{skill.title}</h4>
                  <p className='text-slate-400'>{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className='py-16 px-6 border-b border-slate-700/50'>
        <div className='container mx-auto max-w-6xl'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={containerVariants}
            className='space-y-8'
          >
            <motion.h3 variants={fadeInUp} className='text-3xl font-bold text-slate-100'>
              Tech Stack & Tools
            </motion.h3>
            <div className='grid md:grid-cols-4 gap-6'>
              {Object.entries(technologies).map(([category, techs], catIdx) => (
                <motion.div
                  key={category}
                  variants={fadeInUp}
                  transition={{ delay: catIdx * 0.1 }}
                  className='bg-slate-850 rounded-2xl border border-slate-700/50 p-6'
                >
                  <h4 className='text-slate-100 font-bold mb-4 capitalize flex items-center gap-2'>
                    {category === 'frontend' && <Code2 size={18} className='text-accent-cyan' />}
                    {category === 'backend' && <Rocket size={18} className='text-accent-orange' />}
                    {category === 'database' && <Database size={18} className='text-accent-cyan' />}
                    {category === 'devops' && <Cloud size={18} className='text-accent-orange' />}
                    {category}
                  </h4>
                  <ul className='space-y-2'>
                    {techs.map((tech) => (
                      <li key={tech} className='text-slate-400 text-sm'>
                        • {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className='py-16 px-6 border-b border-slate-700/50'>
        <div className='container mx-auto max-w-6xl'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={containerVariants}
            className='space-y-8'
          >
            <motion.h3 variants={fadeInUp} className='text-3xl font-bold text-slate-100'>
              Professional Experience
            </motion.h3>
            <div className='space-y-6'>
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.company}
                  variants={fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className='bg-slate-850 rounded-2xl border border-slate-700/50 p-8'
                >
                  <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4'>
                    <div>
                      <h4 className='text-xl font-bold text-slate-100'>{exp.role}</h4>
                      <p className='text-accent-cyan font-semibold'>{exp.company}</p>
                    </div>
                    <div className='text-right text-slate-400'>
                      <p className='text-sm'>{exp.period}</p>
                      <p className='text-sm flex items-center gap-1 justify-end mt-1'>
                        <MapPin size={14} /> {exp.location}
                      </p>
                    </div>
                  </div>
                  <ul className='space-y-2'>
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className='text-slate-400 flex items-start gap-3'>
                        <span className='text-accent-cyan mt-1'>▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className='py-16 px-6 border-b border-slate-700/50'>
        <div className='container mx-auto max-w-6xl'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={containerVariants}
            className='space-y-8'
          >
            <motion.h3 variants={fadeInUp} className='text-3xl font-bold text-slate-100'>
              Featured Projects
            </motion.h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {projects.map((project, idx) => (
                <motion.a
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  variants={fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className='group bg-slate-850 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-accent-cyan/50 transition-all duration-300'
                >
                  <div className='h-40 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden relative'>
                    <p className='text-slate-400 text-sm font-medium'>{project.title}</p>
                  </div>
                  <div className='p-6 space-y-4'>
                    <div>
                      <h4 className='text-lg font-bold text-slate-100 mb-2 group-hover:text-accent-cyan transition-colors'>
                        {project.title}
                      </h4>
                      <p className='text-slate-400 text-sm line-clamp-2'>{project.description}</p>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className='text-xs px-2 py-1 rounded-full bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className='flex gap-2 pt-2'>
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 flex items-center justify-center gap-1 py-2 rounded-lg bg-accent-cyan/10 hover:bg-accent-cyan/20 text-accent-cyan text-sm font-semibold transition-colors'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 flex items-center justify-center gap-1 py-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-colors'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
            <motion.div variants={fadeInUp} className='text-center pt-4'>
              <a
                href='/projects'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-cyan text-slate-900 font-bold hover:bg-accent-cyan/90 transition-colors'
              >
                View All Projects
                <ExternalLink size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-6'>
        <div className='container mx-auto max-w-6xl'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={containerVariants}
            className='text-center space-y-8'
          >
            <motion.div variants={fadeInUp} className='space-y-4'>
              <h3 className='text-4xl font-bold text-slate-100'>Ready to Work Together?</h3>
              <p className='text-lg text-slate-300 max-w-2xl mx-auto'>
                Let&apos;s build something amazing. Reach out with your project details and I&apos;ll respond within 24 hours.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className='flex flex-wrap justify-center gap-4'>
              <a
                href='mailto:aditighosh668@gmail.com'
                className='px-8 py-3 rounded-lg bg-accent-cyan text-slate-900 font-bold hover:bg-accent-cyan/90 transition-colors flex items-center gap-2'
              >
                <Mail size={20} />
                Send Email
              </a>
              <a
                href='https://linkedin.com/in/aditighosh2005'
                target='_blank'
                rel='noopener noreferrer'
                className='px-8 py-3 rounded-lg border border-slate-700 text-slate-100 font-bold hover:border-accent-cyan hover:text-accent-cyan transition-colors flex items-center gap-2'
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Aditi Ghosh',
            url: 'https://aditi-ghosh.vercel.app',
            jobTitle: 'Full Stack Engineer',
            email: 'aditighosh668@gmail.com',
            telephone: '+91 9804468117',
            sameAs: [
              'https://linkedin.com/in/aditighosh2005',
              'https://github.com/GhoshAditi',
            ],
            worksFor: {
              '@type': 'Organization',
              name: 'Freelance / Self-employed',
            },
            skills: [
              'Next.js',
              'React',
              'TypeScript',
              'Node.js',
              'PostgreSQL',
              'MongoDB',
              'AWS',
              'Azure',
              'Docker',
            ],
          }),
        }}
      />
    </main>
  )
}
