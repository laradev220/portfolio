import { motion } from 'framer-motion'
import { GraduationCap, BookOpen } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const education = [
  {
    degree: 'BS Computer Science',
    institution: 'Abasyn University Peshawar',
    year: 'Present',
    description: "Pursuing Bachelor's degree in Computer Science with focus on software development and web technologies.",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="section-title text-2xl font-bold flex items-center gap-3">
            <span className="text-tokyo-purple">//</span> Education
          </h2>
        </ScrollReveal>

        <div className="relative">
          <motion.div 
            className="absolute left-4 top-0 bottom-0 w-0.5 bg-tokyo-border"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
          />

          <div className="space-y-6">
            {education.map((edu, index) => (
              <ScrollReveal key={index} delay={0.1} direction="left">
                <motion.div 
                  className="relative pl-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="absolute left-2 top-2 w-4 h-4 rounded-full bg-tokyo-purple border-2 border-tokyo-bg z-10"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  />

                  <motion.div
                    className="bg-tokyo-surface border border-tokyo-border rounded-lg p-6 hover:border-tokyo-purple/30 transition-colors"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-tokyo-text flex items-center gap-2">
                          <GraduationCap size={18} className="text-tokyo-purple" />
                          {edu.degree}
                        </h3>
                        <p className="text-tokyo-blue">{edu.institution}</p>
                      </div>
                      <motion.span
                        className="px-3 py-1 text-sm bg-tokyo-bg border border-tokyo-border rounded text-tokyo-muted"
                        whileHover={{ borderColor: 'rgba(187, 154, 247, 0.5)' }}
                      >
                        {edu.year}
                      </motion.span>
                    </div>

                    <motion.p 
                      className="text-tokyo-muted"
                      whileHover={{ color: '#9cdcfe' }}
                    >
                      {edu.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.3}>
          <motion.div 
            className="mt-8 p-4 bg-tokyo-surface border border-tokyo-border rounded-lg"
            whileHover={{ borderColor: 'rgba(187, 154, 247, 0.3)' }}
          >
            <p className="text-tokyo-muted text-center flex items-center justify-center gap-2">
              <BookOpen size={16} />
              <span>
                <span className="text-tokyo-green">const</span> learning = <span className="text-tokyo-string">"Always learning, always growing"</span>;
              </span>
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}