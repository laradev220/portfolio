import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Database, Code2, BookOpen, Layers, ArrowRight, Plug, Maximize2, Minimize2 } from 'lucide-react'
import { getNextProject, getPrevProject } from '../data/projects'

export default function ProjectDetail({ project, onClose, onNavigate }) {
  const [isMaximized, setIsMaximized] = useState(false)
  const nextProject = getNextProject(project.id)
  const prevProject = getPrevProject(project.id)

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowRight') onNavigate(nextProject.id)
    if (e.key === 'ArrowLeft') onNavigate(prevProject.id)
    if (e.key === 'f' && !e.ctrlKey && !e.metaKey) {
      e.preventDefault()
      setIsMaximized(prev => !prev)
    }
  }, [onClose, onNavigate, nextProject, prevProject])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  const { architecture } = project

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-tokyo-bg/95 backdrop-blur-sm p-4 md:p-8 ${isMaximized ? '!p-0' : ''}`}
        onClick={onClose}
      >
        <motion.div
  initial={{ x: '100%', opacity: 0 }}
  animate={{
    x: 0,
    opacity: 1,
  }}
  exit={{ x: '100%', opacity: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className={`
    bg-tokyo-surface border border-tokyo-border shadow-2xl
    transition-all duration-300
    ${
      isMaximized
        ? 'fixed inset-0 w-screen h-screen rounded-none m-0'
        : 'relative w-full max-w-4xl rounded-xl my-8'
    }
  `}
  onClick={(e) => e.stopPropagation()}
>
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-tokyo-border bg-tokyo-surface/95 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="text-tokyo-muted text-sm font-mono">project/{project.id}</span>
              <div className="flex gap-1.5">
                {project.tech.slice(0, 3).map(t => (
                  <span key={t} className="px-2 py-0.5 text-xs bg-tokyo-bg border border-tokyo-border rounded text-tokyo-blue">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="p-2 rounded-lg text-tokyo-muted hover:text-tokyo-text hover:bg-tokyo-bg transition-colors"
                title={isMaximized ? 'Minimize (F)' : 'Maximize (F)'}
              >
                {isMaximized ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
              </button>
               <button
                onClick={onClose}
                className="p-2 rounded-lg text-tokyo-muted hover:text-tokyo-text hover:bg-tokyo-bg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Content */}
         <div
  className={`
    p-6 md:p-8 space-y-8 overflow-y-auto
    ${isMaximized
      ? 'h-[calc(100vh-140px)]'
      : 'max-h-[calc(100vh-200px)]'
    }
  `}
>
            {/* Title */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-tokyo-text mb-2">
                {project.name}
              </h2>
              <p className="text-tokyo-muted">{project.fullDescription}</p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-tokyo-blue mb-3">
                <Code2 size={18} />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1.5 text-sm bg-tokyo-bg border border-tokyo-border rounded-md text-tokyo-text">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-tokyo-green mb-3">
                <BookOpen size={18} />
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-tokyo-muted">
                    <span className="text-tokyo-green mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

{/* Architecture - Full System Map */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-tokyo-purple mb-4">
                <Layers size={18} />
                System Architecture
              </h3>
               
              {/* Overview */}
              <div className="mb-6 p-4 bg-tokyo-bg border border-tokyo-border rounded-lg">
                <p className="text-tokyo-text leading-relaxed">{architecture.overview}</p>
              </div>

              {/* Layers */}
              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-semibold text-tokyo-muted uppercase tracking-wider">Layers</h4>
                <div className="grid gap-3">
                  {architecture.layers.map((layer, i) => (
                    <div key={layer.name} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-32 text-sm font-medium text-tokyo-orange pt-1">
                        {layer.name}
                      </div>
                      <div className="flex-1 flex flex-wrap gap-2">
                        {layer.items.map((item, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs bg-tokyo-surface border border-tokyo-border rounded text-tokyo-text">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Flow */}
              <div className="mb-6 p-4 bg-tokyo-bg border border-tokyo-border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <ArrowRight size={16} className="text-tokyo-blue" />
                  <span className="text-sm font-semibold text-tokyo-muted">Data Flow</span>
                </div>
                <p className="text-tokyo-text text-sm font-mono">{architecture.dataFlow}</p>
              </div>

              {/* External Services */}
              {architecture.external && architecture.external.length > 0 && (
                <div className="flex items-start gap-3">
                  <Plug size={16} className="text-tokyo-muted mt-1" />
                  <div>
                    <span className="text-sm font-semibold text-tokyo-muted">Integrations: </span>
                    <span className="text-tokyo-text text-sm">{architecture.external.join(', ')}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Database */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-tokyo-orange mb-3">
                <Database size={18} />
                Database
              </h3>
              <div className="p-3 bg-tokyo-bg border border-tokyo-border rounded-lg">
                <span className="text-tokyo-muted">Relationships: </span>
                <span className="text-tokyo-text">{project.database.relationships}</span>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="flex items-center justify-between p-4 border-t border-tokyo-border bg-tokyo-bg/50">
            <button
              onClick={() => onNavigate(prevProject.id)}
              className="flex items-center gap-2 text-tokyo-muted hover:text-tokyo-blue transition-colors"
            >
              <ChevronLeft size={18} />
              <span className="hidden sm:inline">{prevProject.shortName}</span>
            </button>
            <span className="text-tokyo-muted text-sm">
              {project.id} / 5
            </span>
            <button
              onClick={() => onNavigate(nextProject.id)}
              className="flex items-center gap-2 text-tokyo-muted hover:text-tokyo-blue transition-colors"
            >
              <span className="hidden sm:inline">{nextProject.shortName}</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
