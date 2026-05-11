import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const stats = [
  { value: '2+', label: 'Years Experience', color: 'text-tokyo-blue' },
  { value: '5+', label: 'Projects Built', color: 'text-tokyo-green' },
  { value: '5+', label: 'Technologies', color: 'text-tokyo-purple' },
  { value: '100%', label: 'Commitment', color: 'text-tokyo-orange' },
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

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={0.2 + index * 0.1}>
              <motion.div
                className="bg-tokyo-surface border border-tokyo-border rounded-lg p-4 text-center cursor-default"
                whileHover={{ 
                  scale: 1.03, 
                  borderColor: 'rgba(122, 162, 247, 0.3)',
                  transition: { duration: 0.2 }
                }}
              >
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-tokyo-muted text-sm">{stat.label}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}