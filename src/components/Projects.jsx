import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import ProjectDetail from './ProjectDetail'
import { projects } from '../data/projects'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="section-title text-2xl font-bold flex items-center gap-3">
              <span className="text-tokyo-purple">//</span> Projects
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <motion.div
                  className="bg-tokyo-surface border border-tokyo-border rounded-lg p-5 hover:border-tokyo-blue/40 transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ 
                    x: 8,
                    boxShadow: '0 4px 20px rgba(122, 162, 247, 0.1)',
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <motion.h3 
                        className="text-xl font-semibold text-tokyo-text flex items-center gap-2"
                        whileHover={{ color: '#7aa2f7' }}
                      >
                        <motion.span
                          className="text-tokyo-green"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                        >
                          ➜
                        </motion.span>
                        {project.name}
                      </motion.h3>
                      <motion.div 
                        className="flex items-center gap-2 mt-1 text-sm text-tokyo-muted"
                      >
                        <Calendar size={14} />
                        <span>{project.status}</span>
                      </motion.div>
                    </div>

                    <div className="flex gap-3">
                      {project.github ? (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-tokyo-muted hover:text-tokyo-text transition-colors"
                          whileHover={{ x: 3, color: '#7aa2f7' }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </motion.a>
                      ) : (
                        <span className="flex items-center gap-1.5 text-sm text-tokyo-muted/50">
                          <Github size={16} />
                          <span>Private</span>
                        </span>
                      )}
                      {project.live ? (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-tokyo-muted hover:text-tokyo-blue transition-colors"
                          whileHover={{ x: 3 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                          <span>Live</span>
                        </motion.a>
                      ) : (
                        <span className="flex items-center gap-1.5 text-sm text-tokyo-muted/50">
                          <ExternalLink size={16} />
                          <span>N/A</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-tokyo-muted mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded bg-tokyo-bg border border-tokyo-border text-tokyo-muted"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + techIndex * 0.05 }}
                        whileHover={{ 
                          borderColor: 'rgba(122, 162, 247, 0.5)',
                          color: '#c0caf5',
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.6}>
            <motion.div 
              className="mt-8 p-4 bg-tokyo-surface border border-tokyo-border rounded-lg text-center"
              whileHover={{ borderColor: 'rgba(122, 162, 247, 0.3)' }}
            >
              <p className="text-tokyo-muted">
                <span className="text-tokyo-green">const</span> moreProjects = <span className="text-tokyo-string">"Coming soon..."</span>;
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
          onNavigate={(id) => {
            const project = projects.find(p => p.id === id)
            if (project) setSelectedProject(project)
          }}
        />
      )}
    </>
  )
}