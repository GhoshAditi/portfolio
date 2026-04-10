'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Heart, MessageCircle, Share2, Eye } from 'lucide-react'
import QuestBanner from './QuestBanner'

const LinkedInPosts = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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

  const linkedinPosts = [
    {
      content: "🎤 Had the wonderful opportunity to be a speaker at RCCIIT WEBVERSE 1.0! Introduced juniors to Web Development alongside Rivu Chatterjee and Rishi Paul. My first speaking session and it was an incredible experience conducting hands-on sessions and seeing the energy from students. Grateful for this opportunity to grow and contribute! #webdevelopment #gdg #rcciit #speakerjourney",
      likes: 541,
      comments: 2,
      shares: 2,
      date: "2 months ago",
      image: null,
      featured: true
    },
    {
      content: "🏆 Thrilled to announce that The Hack-ators successfully boarded the ship for offline hackathon participation with StatusCode2! Our project VVote - a Decentralized Voting Application built using Ethereum Blockchain. Worked on front-end development and AI Chatbot implementation. Big thanks to my amazing team and all sponsors including Avalanche, GitHub, and others! #hackathon #blockchain #ethereum #web3 #teamwork",
      likes: 236,
      comments: 10,
      shares: 2,
      date: "2 years ago",
      image: null,
      featured: true
    }
  ]

  return (
    <section id="linkedin" ref={ref} className="py-24 px-6 im-section">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <QuestBanner quest="Community Engagement" reward="+180 XP" />
          <h2 className="im-heading text-slate-100 mb-4 mt-6">
            Social Highlights
          </h2>
          <div className="mx-auto mb-6 h-px w-28 bg-accent-cyan/40"></div>
          <p className="im-sub text-base text-center max-w-2xl mx-auto">
            Featured insights and achievements from community engagement across platforms.
          </p>
          <div className="mx-auto mb-6 h-px w-28 bg-slate-500/70"></div>
          <p className="text-lg text-slate-300 text-center max-w-2xl mx-auto">
            Real-time campaign updates from events, speaking sessions, and hackathons.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {linkedinPosts.filter(post => post.featured).map((post, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
              transition={{ delay: index * 0.2 }}
              className="im-card p-8 hover:shadow-xl hover:shadow-accent-cyan/30 transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent-orange/20 rounded-2xl border border-accent-orange/40 flex items-center justify-center">
                  <span className="text-accent-orange font-black text-lg">AG</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-slate-100">Aditi Ghosh</h3>
                  <p className="text-slate-300 text-sm uppercase tracking-[0.08em]">{post.date}</p>
                </div>
                <Linkedin className="text-accent-cyan" size={24} />
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {post.content}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-600">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="flex items-center gap-1">
                    <Heart size={16} />
                    <span className="text-sm">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={16} />
                    <span className="text-sm">{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 size={16} />
                    <span className="text-sm">{post.shares}</span>
                  </div>
                </div>
                <motion.a
                  href="https://linkedin.com/in/aditighosh2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="text-accent-cyan hover:text-accent-orange transition-colors duration-300 flex items-center gap-1 text-sm font-semibold"
                >
                  <Eye size={16} />
                  View on LinkedIn
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <h3 className="text-xl font-black text-slate-100 mb-4 uppercase tracking-[0.1em]">
            Need More Logs?
          </h3>
          <motion.a
            href="https://linkedin.com/in/aditighosh2005"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-accent-cyan hover:bg-accent-orange text-slate-950 px-6 py-3 rounded-full font-black transition-colors duration-300"
          >
            <Linkedin size={18} />
            Follow Live Feed
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default LinkedInPosts
