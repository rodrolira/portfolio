import { SectionTitle } from '@/components/ui/SectionTitle'

export const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
            {/* Contenido temporal hasta la Fase 5 */}
            <div className="text-center z-10">
                <SectionTitle title="Mi Nombre Completo" subtitle="Full Stack Developer" />
                <p className="text-gray-400">Próximamente: tecnologías principales y botón</p>
            </div>
        </section>
    )
}
