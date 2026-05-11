import { motion } from 'framer-motion'
import { Mail, Github, MapPin, Send, MessageCircle } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'iamirfan200@gmail.com',
    href: 'mailto:iamirfan200@gmail.com',
    color: 'text-tokyo-blue',
    hoverColor: 'hover:border-tokyo-blue/50',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'laradev220',
    href: 'https://github.com/laradev220',
    color: 'text-tokyo-green',
    hoverColor: 'hover:border-tokyo-green/50',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Pakistan',
    href: null,
    color: 'text-tokyo-orange',
    hoverColor: 'hover:border-tokyo-orange/50',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-tokyo-surface/30">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="section-title text-xl md:text-2xl font-bold flex items-center gap-3">
            <span className="text-tokyo-purple">//</span> Get In Touch
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="text-center mb-8 md:mb-10">
            <p className="text-tokyo-muted text-base md:text-lg mb-3 md:mb-4">
              <span className="text-tokyo-green">const</span> message = <span className="text-tokyo-string">"Let's build something together!"</span>;
            </p>
            <p className="text-tokyo-text text-sm md:text-base">
              I'm currently available for backend developer opportunities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:10">
          {contactMethods.map((method, index) => (
            <ScrollReveal key={method.label} delay={0.2 + index * 0.1}>
              {method.href ? (
                <motion.a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className={`bg-tokyo-surface border border-tokyo-border rounded-lg p-4 md:p-6 text-center block ${method.hoverColor} transition-colors group`}
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className={`mx-auto mb-2 md:mb-3 ${method.color}`}
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <method.icon size={28} />
                  </motion.div>
                  <p className="text-tokyo-text font-medium text-sm md:text-base">{method.label}</p>
                  <p className="text-tokyo-muted text-xs md:text-sm group-hover:text-tokyo-text transition-colors">{method.value}</p>
                </motion.a>
              ) : (
                <motion.div
                  className="bg-tokyo-surface border border-tokyo-border rounded-lg p-4 md:p-6 text-center"
                  whileHover={{ scale: 1.03, y: -4 }}
                >
                  <motion.div
                    className={`mx-auto mb-2 md:mb-3 ${method.color}`}
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <method.icon size={28} />
                  </motion.div>
                  <p className="text-tokyo-text font-medium text-sm md:text-base">{method.label}</p>
                  <p className="text-tokyo-muted text-xs md:text-sm">{method.value}</p>
                </motion.div>
              )}
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="text-center">
            <motion.a
              href="mailto:iamirfan200@gmail.com?subject=Hello from Portfolio"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={18} />
              Send a Message
            </motion.a>
          </div>
        </ScrollReveal>

        {/* Decorative element */}
        <ScrollReveal delay={0.7}>
          <motion.div 
            className="mt-12 flex justify-center"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <MessageCircle size={48} className="text-tokyo-purple/30" />
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}