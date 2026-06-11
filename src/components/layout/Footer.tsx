export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary-light border-t border-white/10 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 text-sm">
                    © {currentYear} MiNombre. Todos los derechos reservados.
                </p>
                <div className="flex space-x-6">
                    <a
                        href="https://github.com/tuusuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent-cyan transition-colors"
                        aria-label="GitHub"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/tuusuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent-cyan transition-colors"
                        aria-label="LinkedIn"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:tuemail@example.com"
                        className="text-gray-400 hover:text-accent-cyan transition-colors"
                        aria-label="Correo electrónico"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    )
}
