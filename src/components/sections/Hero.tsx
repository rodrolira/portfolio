import { SectionTitle } from '@/components/ui/SectionTitle'
import { useScrollTo } from '@/hooks/useScrollTo'
import { Badge } from '@/components/ui/Badge'
import { Scene3D } from './Scene3D'
import { FadeInView } from '@/components/ui/FadeInView'

export const Hero = () => {
    const scrollTo = useScrollTo()

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
            {/* Fondo 3D */}
            <div className="absolute inset-0 z-0">
                <Scene3D />
            </div>
            {/* Contenido textual, con z-10 para estar sobre el canvas */}
            <div className="relative z-10 text-center px-4 max-w-4xl">
                <SectionTitle className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" title="Hola, soy" subtitle="Rodrigo Lira Pizarro" >
                    Rodrigo Lira Pizarro
                </SectionTitle>
                <FadeInView>
                    <p className="text-xl md:text-2xl text-accent-cyan font-mono mb-8">
                        Full Stack Developer
                    </p>

                    {/* Badges de tecnologías principales */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        <Badge text="React" color="cyan" />
                        <Badge text="TypeScript" color="blue" />
                        <Badge text="Spring Boot" color="cyan" />
                        <Badge text="PostgreSQL" color="blue" />
                        <Badge text="Docker" color="cyan" />
                    </div>

                    <button
                        onClick={() => scrollTo('projects')}
                        className="px-8 py-4 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors text-lg"
                    >
                        Ver proyectos
                    </button>
                </FadeInView>
            </div>
        </section>
    )
}
