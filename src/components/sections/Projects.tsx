import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'
import { FadeInView } from '@/components/ui/FadeInView'

export const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-primary">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <SectionTitle
                    title="Proyectos"
                    subtitle="Algunas cosas en las que he trabajado"
                />
                <FadeInView>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    </div>
                    </FadeInView>
            </div>
        </section>
    )
}
