import { SectionTitle } from '@/components/ui/SectionTitle'
import { SkillCard } from '@/components/ui/SkillCard'
import { skills } from '@/data/skills'
import { FadeInView } from '@/components/ui/FadeInView'

const categories = [
    { key: 'frontend', title: 'Frontend' },
    { key: 'backend', title: 'Backend' },
    { key: 'database', title: 'Bases de datos' },
    { key: 'tools', title: 'Herramientas' },
] as const

export const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-primary-light">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <SectionTitle
                    title="Skills"
                    subtitle="Tecnologías con las que trabajo"
                />
                <FadeInView>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {categories.map((cat) => {
                            const categorySkills = skills.filter((s) => s.category === cat.key)
                            return (
                                <div key={cat.key}>
                                    <h3 className="text-accent-cyan font-semibold mb-4 text-lg">{cat.title}</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {categorySkills.map((skill) => (
                                            <SkillCard key={skill.name} skill={skill} />
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </FadeInView>
            </div>
        </section>
    )
}
