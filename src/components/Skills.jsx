import { motion } from 'framer-motion'
import { Database, Code2, Server, Container, Terminal } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: Code2,
    skills: ['PHP', 'Laravel 12', 'CodeIgniter 3/4', 'Node.js', 'Express', 'TypeScript'],
    color: 'text-tokyo-blue',
    borderColor: 'hover:border-tokyo-blue/30',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL (Prisma)', 'MySQL', 'MariaDB', 'Redis'],
    color: 'text-tokyo-green',
    borderColor: 'hover:border-tokyo-green/30',
  },
  {
    title: 'API & Architecture',
    icon: Server,
    skills: ['RESTful API', 'OpenAPI/Swagger', 'JWT Auth', 'WebSocket', 'Role-Based Access'],
    color: 'text-tokyo-purple',
    borderColor: 'hover:border-tokyo-purple/30',
  },
  {
    title: 'DevOps & Tools',
    icon: Container,
    skills: ['Docker', 'Docker Compose', 'Kubernetes', 'Git', 'Linux'],
    color: 'text-tokyo-orange',
    borderColor: 'hover:border-tokyo-orange/30',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-tokyo-surface/30">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="section-title text-2xl font-bold flex items-center gap-3">
            <span className="text-tokyo-purple">//</span> Technical Skills
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 0.1}>
              <motion.div
                className={`bg-tokyo-surface border border-tokyo-border rounded-lg p-6 ${category.borderColor} transition-colors`}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 rounded-lg bg-tokyo-bg"
                  >
                    <category.icon className={category.color} size={24} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-tokyo-text">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-tokyo-bg border border-tokyo-border rounded-md text-tokyo-muted"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + skillIndex * 0.05 }}
                      whileHover={{ 
                        borderColor: 'rgba(122, 162, 247, 0.5)', 
                        color: '#7aa2f7',
                        scale: 1.05,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <motion.div 
            className="mt-8 p-4 bg-tokyo-surface/50 border border-tokyo-border rounded-lg"
            whileHover={{ borderColor: 'rgba(122, 162, 247, 0.3)' }}
          >
            <div className="flex items-center gap-2 text-tokyo-muted">
              <Terminal size={16} />
              <span className="text-sm">
                <span className="text-tokyo-green">$</span> echo $CURRENT_STACK
              </span>
            </div>
            <motion.p 
              className="text-tokyo-text mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              PHP, Node.js, PostgreSQL, MySQL, Redis, Docker, Git
            </motion.p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}