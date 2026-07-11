import type { Project } from '@/types'
import { Badge } from './Badge'
import { Link } from 'react-router-dom'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-primary-light/30 border border-white/10 rounded-2xl overflow-hidden hover:border-accent-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/5 group">
      {/* Imagen de preview */}
      <div className="aspect-video bg-gray-800 relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Sin imagen
          </div>
        )}
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          <Link to={`/project/${project.id}`} className="hover:text-accent-cyan transition-colors">
            {project.title}
          </Link>
        </h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        {/* Badges de tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} text={tech} color="cyan" />
          ))}
        </div>

        {/* Enlaces */}
        <div className="flex gap-3 mt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-accent-cyan transition-colors inline-flex items-center gap-1"
            >
              <span>GitHub</span> ↗
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-accent-cyan transition-colors inline-flex items-center gap-1"
            >
              <span>Demo</span> ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
