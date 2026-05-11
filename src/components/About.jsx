import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const stats = [
  { key: 'years', value: '"2+"', keyColor: 'text-tokyo-purple', valueColor: 'text-tokyo-blue' },
  { key: 'projects', value: '"5+"', keyColor: 'text-tokyo-purple', valueColor: 'text-tokyo-green' },
  { key: 'technologies', value: '"5+"', keyColor: 'text-tokyo-purple', valueColor: 'text-tokyo-purple' },
  { key: 'commitment', value: '"100%"', keyColor: 'text-tokyo-purple', valueColor: 'text-tokyo-orange' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="section-title text-2xl font-bold flex items-center gap-3">
            <span className="text-tokyo-purple">//</span> About Me
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="space-y-4 text-tokyo-muted">
            <p className="text-lg leading-relaxed">
              <span className="text-tokyo-green">const</span> about = <span className="text-tokyo-string">"I'm a backend developer passionate about building robust and scalable applications."</span>;
            </p>

            <p className="leading-relaxed">
              With 2 years of hands-on experience, I specialize in designing and developing server-side applications using PHP (Laravel, CodeIgniter) and Node.js with TypeScript. My expertise spans across RESTful API development, JWT authentication, role-based access control, multi-tenant architecture, and database optimization.
            </p>

            <p className="leading-relaxed">
              I have worked extensively with PostgreSQL, MySQL, and Redis for data persistence and caching. I'm also familiar with containerization using Docker and Docker Compose, ensuring smooth deployments across different environments.
            </p>

            <p className="leading-relaxed">
              Currently open to backend developer opportunities where I can contribute my skills and continue learning.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8">
          <ScrollReveal delay={0.2}>
            <motion.div
              className="bg-tokyo-bg border border-tokyo-border rounded-lg p-3 md:p-5 font-mono text-xs md:text-sm overflow-x-auto"
              whileHover={{ borderColor: 'rgba(122, 162, 247, 0.4)' }}
            >
              <div className="text-tokyo-muted mb-1 text-xs">{'// Stats'}</div>
              <div className="flex flex-wrap items-center">
                <span className="text-tokyo-text">{'{'}</span>
                <div className="flex flex-wrap w-full">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.key}
                      className="flex items-center mr-2 md:mr-4 my-1"
                      whileHover={{ x: 2 }}
                    >
                      <span className={`${stat.keyColor}`}>{stat.key}</span>
                      <span className="text-tokyo-muted mx-1">:</span>
                      <span className={`${stat.valueColor}`}>{stat.value}</span>
                      {index < stats.length - 1 && <span className="text-tokyo-text">,</span>}
                    </motion.div>
                  ))}
                </div>
                <span className="text-tokyo-text">{'}'}</span>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}