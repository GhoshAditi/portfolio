'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { SectionHead, Squiggle } from '@/components/Sketch'
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/lib/site'
import Doodle from '@/components/Doodle'

const empty = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(String(res.status))
      setForm(empty)
      setStatus('success')
    } catch (err) {
      console.error('Form submission error:', err)
      setStatus('error')
    }
  }

  return (
    <>
      <section id="contact" className="section">
        <div className="container" style={{ position: 'relative' }}>
          <SectionHead
            index="06"
            aside={
              <Doodle
                name="plane"
                label="Launch the paper plane"
                size={150}
                says={['whoosh!', 'to your inbox ✉', 'fly, little plane']}
                className={status === 'success' ? 'plane-fly' : ''}
              />
            }
          >
            Contact
          </SectionHead>
          <Squiggle variant="wave" width={300} height={60} style={{ right: '6%', top: '12%' }} />

          <h2 className="contact-title">
            Let&apos;s make something <em>good</em> together.
          </h2>

          <div className="contact-grid">
            <div className="contact-info">
              <p className="paren" style={{ marginTop: 0 }}>
                I reply within 24 hours — share your idea, timeline and what you need
              </p>
              <div>
                <span className="caption">Email</span>
                <br />
                <a className="link" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </div>
              <div>
                <span className="caption">Phone</span>
                <br />
                <a className="link" href="tel:+919804468117">
                  +91 98044 68117
                </a>
              </div>
              <div>
                <span className="caption">Based in</span>
                <p>India</p>
              </div>
              <div className="socials">
                <a className="pill" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
                <a className="pill" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              </div>
            </div>

            <form className="form" onSubmit={onSubmit}>
              <div className="form-row">
                <input className="field" name="name" placeholder="Your name" aria-label="Your name" required value={form.name} onChange={onChange} />
                <input className="field" name="email" type="email" placeholder="Email" aria-label="Email" required value={form.email} onChange={onChange} />
              </div>
              <input className="field" name="subject" placeholder="Subject" aria-label="Subject" required value={form.subject} onChange={onChange} />
              <textarea className="field" name="message" placeholder="Tell me about your project" aria-label="Message" required value={form.message} onChange={onChange} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
                <button className="pill pill--ink" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message →'}
                </button>
                <p className="form-status" role="status">
                  {status === 'success' && 'Thanks! Your message is on its way.'}
                  {status === 'error' && 'Something went wrong — please email me directly.'}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <span className="footer-sign">
            <Doodle name="sleepy-cat" label="Wake the sleepy cat" size={90} says={['zzz…', 'five more minutes', 'purr…']} />
            © {new Date().getFullYear()} Aditi Ghosh
          </span>
          <a className="link" href="#home">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  )
}
