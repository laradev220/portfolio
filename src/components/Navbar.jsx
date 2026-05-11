import { Github, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'hero', label: '~' },
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'experience', label: 'experience' },
  { id: 'education', label: 'education' },
  { id: 'contact', label: 'contact' },
]

const pathColors = [
  'text-tokyo-green',
  'text-tokyo-blue',
  'text-tokyo-purple',
  'text-tokyo-orange',
  'text-tokyo-yellow',
  'text-tokyo-red',
  'text-tokyo-blue',
]

export default function Navbar({ activeSection }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-tokyo-bg/90 backdrop-blur-md border-b border-tokyo-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center font-mono text-sm">
          <span className="text-tokyo-muted">irfan@dev</span>
          <span className="text-tokyo-muted mx-2">:</span>
          <div className="flex items-center">
            {navItems.map((item, index) => (
              <motion.div key={item.id} className="flex items-center" whileHover={{ scale: 1.05 }}>
                {index > 0 && <span className="text-tokyo-muted mx-1">/</span>}
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative ${pathColors[index]} hover:text-tokyo-text transition-colors`}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-tokyo-purple"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              </motion.div>
            ))}
            <span className="text-tokyo-green ml-2">$</span>
            <motion.span
              className="text-tokyo-green ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
            >
              ▊
            </motion.span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            href="https://github.com/laradev220"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tokyo-muted hover:text-tokyo-text transition-colors"
            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="mailto:iamirfan200@gmail.com"
            className="text-tokyo-muted hover:text-tokyo-text transition-colors"
            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={20} />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}