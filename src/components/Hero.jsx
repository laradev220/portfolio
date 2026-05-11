import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Download, Github, Mail } from 'lucide-react'

const phrases = [
  'Building APIs, not excuses.',
  'Backend Developer.',
  'Laravel & Node.js Expert.',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 150], [1, 0])

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1))
          if (displayText === currentPhrase) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1))
          if (displayText === '') {
            setIsDeleting(false)
            setPhraseIndex((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: y1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tokyo-blue/5 rounded-full blur-3xl" />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tokyo-purple/5 rounded-full blur-3xl"
          style={{ y: y2 }}
        />
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p variants={itemVariants} className="text-tokyo-green mb-4 font-mono">
          <span className="text-tokyo-muted">const</span> greeting = <span className="text-tokyo-string">"Hello, World!"</span>;
        </motion.p>

        {/* Name */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-tokyo-text">I'm </span>
          <span className="text-tokyo-text">
            Muhammad Irfan
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-tokyo-muted mb-8 h-10">
          <span className="text-tokyo-orange">{displayText}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            className="text-tokyo-orange"
          >
            |
          </motion.span>
        </motion.h2>

        {/* Bio */}
        <motion.p variants={itemVariants} className="text-tokyo-muted max-w-xl mx-auto mb-10 text-lg">
          Backend Developer with 2 years of experience building scalable APIs and robust server-side applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          <motion.a
            href="/resume.pdf"
            download
            className="btn-primary flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={18} />
            Download Resume
          </motion.a>
          <motion.a
            href="#projects"
            className="btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6">
          <motion.a
            href="https://github.com/laradev220"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-tokyo-muted hover:text-tokyo-text transition-colors"
            whileHover={{ x: 5 }}
          >
            <Github size={20} />
            <span>github.com/laradev220</span>
          </motion.a>
          <motion.a
            href="mailto:iamirfan200@gmail.com"
            className="flex items-center gap-2 text-tokyo-muted hover:text-tokyo-text transition-colors"
            whileHover={{ x: 5 }}
          >
            <Mail size={20} />
            <span>iamirfan200@gmail.com</span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            className="text-tokyo-muted hover:text-tokyo-blue transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}