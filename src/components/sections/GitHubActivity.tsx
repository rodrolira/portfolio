import { SectionTitle } from '@/components/ui/SectionTitle'
import { FadeInView } from '@/components/ui/FadeInView'
export const GitHubActivity = () => {
    return (
        <section id="github" className="py-20 bg-primary">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <SectionTitle
                    title="GitHub"
                    subtitle="Mi actividad en código abierto"
                />
                <FadeInView>
                    <div className="bg-primary-light/50 border border-white/10 rounded-xl p-6 text-center text-gray-400">
                        Próximamente: estadísticas de GitHub.
                    </div>
                </FadeInView>
            </div>
        </section>
    )
}
