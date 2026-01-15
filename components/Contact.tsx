'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Reset success message after 5 seconds
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
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "aditighosh668@gmail.com",
      href: "mailto:aditighosh668@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 9804468117",
      href: "tel:+91-9804468117"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "India",
      href: null
    }
  ]

  return (
    <section id="contact" ref={ref} className="py-20 px-6 bg-gradient-to-r from-slate-900 via-darkBlue-900 to-slate-800">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideFromLeft}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-slate-100 mb-6">
                Let's Talk
              </h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with 
                amazing people. Whether you have a specific project in mind or 
                just want to explore possibilities, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-slate-900/20 backdrop-blur-md rounded-xl shadow-sm hover:shadow-md hover:shadow-accent-blue/30 transition-shadow duration-300 border border-white/10"
                >
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-500">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-slate-200 font-medium hover:text-accent-blue transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-200 font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Response Time */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-900/40 backdrop-blur-md rounded-xl p-6 border border-white/10"
            >
              <h4 className="text-slate-100 font-semibold mb-2">
                Quick Response
              </h4>
              <p className="text-slate-300 text-sm">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to call or connect via LinkedIn.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideFromRight}
            className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-beige-900 mb-6">
              Send Message
            </h3>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3"
              >
                <CheckCircle className="text-green-600" size={20} />
                <p className="text-black">Thank you! Your message has been sent successfully.</p>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center gap-3"
              >
                <AlertCircle className="text-red-600" size={20} />
                <p className="text-black">Sorry, there was an error sending your message. Please try again.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-600 bg-slate-800 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-300 text-slate-100 placeholder-slate-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-600 bg-slate-800 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-300 text-slate-100 placeholder-slate-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-300 font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-600 bg-slate-800 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-300 text-slate-100 placeholder-slate-500"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-600 bg-slate-800 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-300 resize-vertical text-slate-100 placeholder-slate-500"
                  placeholder="Tell me about your project or how we can work together..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`w-full flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-blue-500 cursor-not-allowed'
                    : 'bg-accent-blue hover:bg-blue-600'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 1 }}
          className="text-center mt-16 pt-8 border-t border-slate-700"
        >
          <p className="text-slate-300">
            © 2026 Aditi Ghosh. Built with Next.js and Tailwind CSS.
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Designed with ❤️ for meaningful connections and collaborations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact