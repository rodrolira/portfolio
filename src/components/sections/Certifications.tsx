import { SectionTitle } from '@/components/ui/SectionTitle'
import { certifications } from '@/data/certifications'
import { FadeInView } from '@/components/ui/FadeInView'

export const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-primary-light">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <SectionTitle
                    title="Certificaciones"
                    subtitle="Formación continua que respalda mis conocimientos"
                />
                <FadeInView>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {certifications.map((cert) => (
                            <a
                                key={cert.title}
                                href={cert.url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-primary/50 border border-white/10 rounded-xl overflow-hidden hover:border-accent-cyan/50 transition-colors group"
                            >
                                {cert.image && (
                                    <img
                                        src={cert.image}
                                        alt={`Certificado: ${cert.title}`}
                                        loading="lazy"
                                        className="w-full aspect-4/3 object-cover border-b border-white/10 bg-white"
                                    />
                                )}
                                <div className="p-5">
                                    <h3 className="text-white font-semibold group-hover:text-accent-cyan transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                                    <p className="text-gray-500 text-xs mt-2">{cert.date}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </FadeInView>
            </div>
        </section>
    )
}
