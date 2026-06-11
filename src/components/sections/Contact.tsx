import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { FadeInView } from '@/components/ui/FadeInView'

export const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-primary-light">
            <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <SectionTitle
                    title="Contacto"
                    subtitle="¿Tienes un proyecto en mente? Hablemos"
                />
                <FadeInView>
                <GlassPanel>
                    <form className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm text-gray-300 mb-1">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-colors"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-colors"
                                placeholder="tu@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm text-gray-300 mb-1">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                                placeholder="Cuéntame sobre tu proyecto..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-accent-blue hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
                        >
                            Enviar mensaje
                        </button>
                    </form>
                    <div className="mt-6 flex justify-center gap-6 text-gray-400 text-sm">
                        <a href="mailto:tuemail@example.com" className="hover:text-accent-cyan transition-colors">
                            Email
                        </a>
                        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">
                            LinkedIn
                        </a>
                        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">
                            GitHub
                        </a>
                    </div>
                    </GlassPanel>
                    </FadeInView>
            </div>
        </section>
    )
}
