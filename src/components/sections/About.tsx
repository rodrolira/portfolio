// src/components/sections/About.tsx
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { FadeInView } from '@/components/ui/FadeInView'

export const About = () => {
    return (
        <section id="about" className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionTitle
                    title="Sobre mí"
                    subtitle="La persona detrás del código"
                />
                <FadeInView>
                    <GlassPanel>
                        <div className="text-gray-300 space-y-6 leading-relaxed">
                            <p>
                                Soy un desarrollador Full Stack apasionado por construir aplicaciones web
                                que no solo funcionen bien, sino que estén bien diseñadas. Comencé en el
                                mundo del desarrollo durante la universidad y desde entonces no he parado
                                de aprender.
                            </p>
                            <p>
                                Mi enfoque principal está en el ecosistema React y Node.js (Express),
                                y también trabajo con Python (FastAPI) para servicios en tiempo real.
                                Siempre estoy explorando nuevas herramientas y creo firmemente en las
                                buenas prácticas: Clean Code, pruebas automatizadas y despliegue continuo.
                            </p>
                            <p>
                                Actualmente busco oportunidades donde pueda seguir creciendo como
                                profesional y contribuir a proyectos que marquen la diferencia.
                            </p>
                        </div>

                    </GlassPanel>
                </FadeInView>

            </div>
        </section>
    )
}
