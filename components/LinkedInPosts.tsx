'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Heart, MessageCircle, Share2, Eye } from 'lucide-react'

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
    <section id="linkedin" ref={ref} className="py-20 px-6 bg-gradient-to-r from-slate-900 via-darkBlue-900 to-slate-800">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Featured Posts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Recent thoughts and updates from my professional journey on LinkedIn
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
              className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-accent-blue/30 transition-shadow duration-300 border border-white/10"
            >
              {/* Post Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-lg">YN</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-slate-100">Aditi Ghosh</h3>
                  <p className="text-slate-300 text-sm">{post.date}</p>
                </div>
                <Linkedin className="text-blue-600" size={24} />
              </div>

              {/* Post Content */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                {post.content}
              </p>

              {/* Post Stats */}
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
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-300 flex items-center gap-1 text-sm"
                >
                  <Eye size={16} />
                  View on LinkedIn
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Posts */}
        <div className="grid md:grid-cols-2 gap-6">
          {linkedinPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ delay: 0.6 + (index * 0.1) }}
              className="bg-slate-900/40 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-accent-blue/30 transition-shadow duration-300 border border-white/10"
            >
              {/* Post Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <span className="text-orange-500 font-bold">AD</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-medium text-slate-100">Aditi Ghosh</h4>
                  <p className="text-slate-300 text-xs">{post.date}</p>
                </div>
                <Linkedin className="text-blue-600" size={20} />
              </div>

              {/* Post Content */}
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {post.content.length > 150 ? `${post.content.substring(0, 150)}...` : post.content}
              </p>

              {/* Post Stats */}
              <div className="flex items-center justify-between text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="text-xs flex items-center gap-1">
                    <Heart size={12} />{post.likes}
                  </span>
                  <span className="text-xs flex items-center gap-1">
                    <MessageCircle size={12} />{post.comments}
                  </span>
                  <span className="text-xs flex items-center gap-1">
                    <Share2 size={12} />{post.shares}
                  </span>
                </div>
                <a
                  href="https://linkedin.com/in/aditighosh2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-300 text-xs"
                >
                  View Post
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow Call to Action */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <h3 className="text-xl font-semibold text-slate-100 mb-4">
            Want to see more updates?
          </h3>
          <motion.a
            href="https://linkedin.com/in/aditighosh2005"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-accent-blue hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
          >
            <Linkedin size={18} />
            Follow on LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default LinkedInPosts