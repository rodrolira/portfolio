// src/components/sections/About.tsx
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlassPanel } from '@/components/ui/GlassPanel'

export const About = () => {
    return (
        <section id="about" className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionTitle
                    title="Sobre mí"
                    subtitle="Una breve historia de mi camino en el desarrollo"
                />
                <GlassPanel>
                    <p className="text-gray-300 leading-relaxed">
                        Aquí irá mi presentación profesional...
                    </p>
                </GlassPanel>
            </div>
        </section>
    )
}
