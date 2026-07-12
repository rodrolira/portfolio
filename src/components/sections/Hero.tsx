import { lazy, Suspense } from 'react'
import { useScrollTo } from '@/hooks/useScrollTo'
import { Badge } from '@/components/ui/Badge'
import { FadeInView } from '@/components/ui/FadeInView'

const Scene3D = lazy(() => import('./Scene3D').then(mod => ({ default: mod.Scene3D })))

const heroBadges = [
    { text: 'React', color: 'cyan' as const },
    { text: 'TypeScript', color: 'blue' as const },
    { text: 'Node.js', color: 'cyan' as const },
    { text: 'Python', color: 'blue' as const },
    { text: 'PostgreSQL', color: 'cyan' as const },
]

export const Hero = () => {
    const scrollTo = useScrollTo()

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
        >
            {/* Fondo 3D */}
            <div className="absolute inset-0 z-0">
                <Suspense fallback={<div className="w-full h-full bg-primary" />}>
                    <Scene3D />
                </Suspense>
            </div>

            {/* Capas de profundidad: blobs de color + viñeta para legibilidad */}
            <div className="pointer-events-none absolute inset-0 z-[1]">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent-cyan/10 blur-3xl animate-blob" />
                <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-accent-violet/10 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
                <div className="absolute inset-0 bg-radial from-transparent via-primary/40 to-primary" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10,25,47,0.55) 70%, #0A192F 100%)' }} />
            </div>

            {/* Contenido */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <FadeInView>
                    <span className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-4 py-1.5 text-sm text-accent-cyan mb-8 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75 animate-ping" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
                        </span>
                        Disponible para nuevos proyectos
                    </span>
                </FadeInView>

                <p className="text-accent-cyan font-mono text-base md:text-lg mb-3">Hola, soy</p>
                <h1 className="text-gradient text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                    Rodrigo Lira Pizarro
                </h1>

                <FadeInView delay={0.1}>
                    <p className="text-xl md:text-2xl text-gray-300 font-mono mb-8">
                        Full Stack Developer
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {heroBadges.map(b => (
                            <Badge key={b.text} text={b.text} color={b.color} />
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <button
                            onClick={() => scrollTo('projects')}
                            className="px-8 py-4 rounded-xl font-semibold text-white text-lg bg-gradient-to-r from-accent-blue to-accent-violet hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 glow-blue"
                        >
                            Ver proyectos
                        </button>
                        <a
                            href="https://github.com/rodrolira"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-xl font-semibold text-lg border border-white/15 text-white hover:border-accent-cyan/60 hover:text-accent-cyan hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
                        >
                            Ver GitHub ↗
                        </a>
                    </div>
                </FadeInView>
            </div>

            {/* Indicador de scroll */}
            <button
                onClick={() => scrollTo('about')}
                aria-label="Bajar a Sobre mí"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gray-400 hover:text-accent-cyan transition-colors"
            >
                <svg className="w-6 h-6 animate-bounce-soft" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
        </section>
    )
}
