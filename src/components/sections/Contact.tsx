import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { FadeInView } from '@/components/ui/FadeInView'
import { useEmailForm } from '@/hooks/useEmailForm'
import { Button } from '../ui/Button'

export const Contact = () => {
    const { formRef, sendEmail, loading, success, error } = useEmailForm()

    return (
        <section id="contact" className="py-20 bg-primary-light">
            <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <SectionTitle
                    title="Contacto"
                    subtitle="¿Tienes un proyecto en mente? Hablemos"
                />
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                    <div>
                        <label htmlFor="from_name" className="block text-sm text-gray-300 mb-1">Nombre</label>
                        <input
                            type="text"
                            name="from_name"
                            id="from_name"
                            required
                            className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent-cyan outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="reply_to" className="block text-sm text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            name="reply_to"
                            id="reply_to"
                            required
                            className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent-cyan outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm text-gray-300 mb-1">Mensaje</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            required
                            className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent-cyan outline-none resize-y"
                        />
                    </div>

                    <Button type="submit" disabled={loading} className="w-full">
                        {loading ? 'Enviando...' : 'Enviar mensaje'}
                    </Button>

                    {success && <p className="text-green-400 text-sm">¡Mensaje enviado correctamente!</p>}
                    {error && <p className="text-red-400 text-sm">{error}</p>}
                </form>

                <FadeInView>
                    <GlassPanel>
                        <h3 className="text-xl font-semibold text-white mb-2">O contáctame directamente:</h3>
                        <p className="text-gray-400 my-4!">Correo: <a href="mailto:rlirapizarro@gmail.com" className="text-accent-cyan hover:underline">rlirapizarro@gmail.com</a></p>

                    </GlassPanel>
                </FadeInView>
            </div>
        </section>
    )
}
