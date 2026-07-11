import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>()
    const project = projects.find(p => p.id === id)

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <p>Proyecto no encontrado.</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-24 pb-16 bg-primary">
            <Helmet>
                <title>{project.title} | Tu Nombre</title>
                <meta name="description" content={project.description} />
            </Helmet>
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <Button onClick={() => globalThis.history.back()} variant="secondary" className="mb-8">← Volver</Button>
                <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-2xl mb-8 border border-white/10"
                />
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(t => <Badge key={t} text={t} color="cyan" />)}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-2">Descripción</h2>
                        <p>{project.longDescription || project.description}</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-2">Problema que resuelve</h2>
                        <p>{project.problemSolved}</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-2">Arquitectura</h2>
                        <p>{project.architecture}</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-2">Aprendizajes</h2>
                        <ul className="list-disc list-inside space-y-1">
                            {project.learnings.map((l) => <li key={l}>{l}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4 mt-12">
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank">
                            <Button>GitHub ↗</Button>
                        </a>
                    )}
                    {project.liveDemoUrl && (
                        <a href={project.liveDemoUrl} target="_blank">
                            <Button variant="secondary">Demo ↗</Button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
