import { SectionTitle } from '@/components/ui/SectionTitle'
import { TimelineItem } from '@/components/ui/TimelineItem'
import { experiences } from '@/data/experience'
import { FadeInView } from '@/components/ui/FadeInView'

export const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-primary">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <SectionTitle
                    title="Experiencia"
                    subtitle="Mi camino profesional hasta ahora"
                />
                <FadeInView>
                    <div className="space-y-0">
                        {experiences.map((exp, index) => (
                            <TimelineItem
                                key={exp.id}
                                experience={exp}
                                side={index % 2 === 0 ? 'left' : 'right'}
                            />
                        ))}
                    </div>
                </FadeInView>
            </div>
        </section>
    )
}
