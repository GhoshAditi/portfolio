'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'

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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={slideFromLeft}
              className="mb-6"
            >
              <span className="text-beige-600 text-lg font-medium">Hello, I'm</span>
              <h1 className="text-4xl md:text-6xl font-bold text-beige-900 mt-2">
                Aditi Ghosh
              </h1>
            </motion.div>

            <motion.div
              variants={slideFromLeft}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl text-beige-700 font-semibold">
                Full Stack Developer
              </h2>
            </motion.div>

            <motion.p
              variants={slideFromLeft}
              className="text-lg text-beige-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              I create beautiful, responsive web applications with modern technologies. 
              Passionate about clean code, user experience, and innovative solutions.
            </motion.p>

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
                className="bg-beige-600 hover:bg-beige-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Download size={18} />
              Open CV
              </motion.button>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-beige-600 text-beige-600 hover:bg-beige-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 text-center"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={slideFromRight}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-beige-200 to-beige-300 rounded-full transform rotate-6"></div>
              
              {/* Image Container */}
              <div className="relative bg-white p-4 rounded-full shadow-2xl">
                <div className="w-80 h-80 bg-beige-100 rounded-full flex items-center justify-center border-4 border-beige-200 overflow-hidden">
                  <img 
                    src="/pfp.jpg" 
                    alt="Aditi Ghosh" 
                    className="w-full h-full object-cover rounded-full scale-110"
                  /> 
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-beige-400 rounded-full opacity-70"
              ></motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-6 -left-6 w-8 h-8 bg-beige-500 rounded-full opacity-60"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center text-beige-600"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero