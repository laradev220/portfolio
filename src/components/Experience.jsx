import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const experiences = [
  {
    id: 1,
    role: 'Apprenticeship',
    company: 'Backend Developer Trainee',
    duration: '6 months',
    description: 'Hands-on training in backend development with focus on PHP and Node.js ecosystems.',
    highlights: [
      'Learned RESTful API development',
      'Worked with MySQL and PostgreSQL databases',
      'Implemented authentication systems',
      'Built real-time applications',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-6 bg-tokyo-surface/30">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="section-title text-xl md:text-2xl font-bold flex items-center gap-3">
            <span className="text-tokyo-purple">//</span> Experience
          </h2>
        </ScrollReveal>

        <div className="relative">
          <motion.div 
            className="absolute left-3 md:left-4 top-0 bottom-0 w-0.5 bg-tokyo-border"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
          />

          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.id} delay={index * 0.2} direction="left">
                <motion.div 
                  className="relative pl-8 md:pl-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <motion.div
                    className="absolute left-1.5 md:left-2 top-2 w-3 md:w-4 h-3 md:h-4 rounded-full bg-tokyo-blue border-2 border-tokyo-bg z-10"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  />

                  <motion.div
                    className="bg-tokyo-surface border border-tokyo-border rounded-lg p-4 md:p-6 hover:border-tokyo-blue/30 transition-colors"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3 md:mb-4 flex-wrap">
                      <div>
                        <h3 className="text-lg font-semibold text-tokyo-text flex items-center gap-2">
                          <Briefcase size={18} className="text-tokyo-green" />
                          {exp.role}
                        </h3>
                        <p className="text-tokyo-blue">{exp.company}</p>
                      </div>
                      <motion.span
                        className="px-3 py-1 text-sm bg-tokyo-bg border border-tokyo-border rounded text-tokyo-muted"
                        whileHover={{ borderColor: 'rgba(122, 162, 247, 0.5)' }}
                      >
                        {exp.duration}
                      </motion.span>
                    </div>

                    <p className="text-tokyo-muted mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-2 text-tokyo-muted"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-tokyo-green mt-1">›</span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}