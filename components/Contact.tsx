'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin, HiOutlinePaperAirplane, HiOutlineCheckBadge, HiOutlineExclamationCircle } from 'react-icons/hi2'

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
})

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: <HiOutlineEnvelope size={20} />, label: "Email", value: "aditighosh668@gmail.com", href: "mailto:aditighosh668@gmail.com" },
    { icon: <HiOutlinePhone size={20} />, label: "Phone", value: "+91 9804468117", href: "tel:+91-9804468117" },
    { icon: <HiOutlineMapPin size={20} />, label: "Location", value: "India", href: null }
  ]

  return (
    <section id="contact" ref={ref} className="section" style={{ paddingBottom: '2rem' }}>
      <div className="container">
        
        {/* ── Heading ─────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: 'clamp(2.5rem, 8vw, 4.5rem)' }}
        >
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>Final Boss</p>
          <h2 className="t-h2">Get In Touch</h2>
          <p className="t-body" style={{ marginTop: '1.25rem', fontWeight: 400 }}>
            Ready to collaborate? I respond within 24 hours. Share your vision, timeline, and requirements. Let&apos;s ship something great together.
          </p>
        </motion.div>

        <div className="contact-grid">
          
          {/* ── Left: Info ────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {contactInfo.map((info, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { type: 'spring', stiffness: 80, damping: 15 }
                  }
                }}
                whileHover={{ x: 5, borderColor: 'var(--red)' }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: 'clamp(1rem, 3vw, 1.25rem)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-md)',
                  background: 'var(--surface)',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
              >
                <div style={{ color: 'var(--red)', flexShrink: 0 }}>{info.icon}</div>
                <div style={{ minWidth: 0, overflow: 'hidden' }}>
                  <p className="t-label" style={{ fontSize: '0.75rem', color: 'var(--steel)', marginBottom: '0.2rem', fontWeight: 600 }}>{info.label}</p>
                  {info.href ? (
                    <a href={info.href} style={{ fontSize: 'clamp(0.9rem, 3vw, 1.05rem)', color: 'var(--fg)', textDecoration: 'none', fontWeight: 400, wordBreak: 'break-all' }}>{info.value}</a>
                  ) : (
                    <p style={{ fontSize: 'clamp(0.9rem, 3vw, 1.05rem)', color: 'var(--fg)', fontWeight: 400 }}>{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              style={{ border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: 'clamp(1rem, 3vw, 1.5rem)', background: 'var(--bg)', marginTop: '1rem' }}
            >
              <h4 className="t-label" style={{ fontSize: '0.75rem', color: 'var(--fg)', marginBottom: '0.75rem', fontWeight: 600 }}>Response Window</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--fg-soft)', lineHeight: 1.5, fontWeight: 400 }}>
                I typically respond to emails within 24 hours. For urgent matters, feel free to call or connect via LinkedIn.
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: Form ───────────────────────────────────── */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-lg)',
              background: 'var(--surface)',
              padding: 'clamp(1.25rem, 4vw, 2.5rem)',
            }}
          >
            <h3 className="t-h3" style={{ fontSize: 'clamp(1.3rem, 4vw, 1.45rem)', marginBottom: '2rem' }}>Send Message</h3>

            {submitStatus === 'success' && (
              <div style={{ padding: '1rem', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: 'var(--r-md)', background: 'rgba(16, 185, 129, 0.05)', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', color: '#10b981', fontSize: '1rem', fontWeight: 400 }}>
                <HiOutlineCheckBadge size={18} /> Message sent successfully.
              </div>
            )}

            {submitStatus === 'error' && (
              <div style={{ padding: '1rem', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 'var(--r-md)', background: 'rgba(239, 68, 68, 0.05)', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', color: '#ef4444', fontSize: '1rem', fontWeight: 400 }}>
                <HiOutlineExclamationCircle size={18} /> Error sending message.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="form-row">
                <div style={{ flex: 1 }}>
                  <label htmlFor="name" className="t-label" style={{ fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Name *</label>
                  <input
                    type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange}
                    style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)', background: 'var(--bg)', color: 'var(--fg)', fontSize: '1rem', fontWeight: 400 }}
                    placeholder="Your Name"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label htmlFor="email" className="t-label" style={{ fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email *</label>
                  <input
                    type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange}
                    style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)', background: 'var(--bg)', color: 'var(--fg)', fontSize: '1rem', fontWeight: 400 }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="t-label" style={{ fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Subject *</label>
                <input
                  type="text" id="subject" name="subject" required value={formData.subject} onChange={handleInputChange}
                  style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)', background: 'var(--bg)', color: 'var(--fg)', fontSize: '1rem', fontWeight: 400 }}
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="t-label" style={{ fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Message *</label>
                <textarea
                  id="message" name="message" required rows={5} value={formData.message} onChange={handleInputChange}
                  style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)', background: 'var(--bg)', color: 'var(--fg)', fontSize: '1rem', resize: 'vertical', fontWeight: 400 }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit" disabled={isSubmitting}
                className="cta-primary"
                style={{ width: '100%', padding: '0.85rem', fontWeight: 600, fontSize: '0.9rem' }}
              >
                {isSubmitting ? 'Sending...' : <><HiOutlinePaperAirplane size={18} style={{ transform: 'rotate(90deg)' }} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>

        {/* ── Footer ─────────────────────────────────────────── */}
        <footer style={{ marginTop: 'clamp(4rem, 15vw, 7rem)', paddingTop: '4rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.05rem)', color: 'var(--fg)', fontWeight: 600 }}>
            © 2026 Aditi Ghosh.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--fg-soft)', marginTop: '0.5rem', fontWeight: 400 }}>
            Built with Next.js & Framer Motion. Editorial Grade.
          </p>
        </footer>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2.5rem, 8vw, 4rem);
        }
        .form-row {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        @media (min-width: 1024px) {
          .contact-grid { grid-template-columns: 5fr 7fr; gap: 6rem; }
          .form-row { flex-direction: row; }
        }
      `}</style>
    </section>

  )
}