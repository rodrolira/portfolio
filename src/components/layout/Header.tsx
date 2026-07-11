// Header.tsx
import React from 'react'
import { useScrollTo } from '@/hooks/useScrollTo'

const navItems = [
    { label: 'Inicio', target: 'hero' },
    { label: 'Sobre mí', target: 'about' },
    { label: 'Experiencia', target: 'experience' },
    { label: 'Skills', target: 'skills' },
    { label: 'Proyectos', target: 'projects' },
    { label: 'Certificaciones', target: 'certifications' },
    { label: 'GitHub', target: 'github' },
    { label: 'Contacto', target: 'contact' },
]

export const Header = () => {
    const scrollTo = useScrollTo();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault();
        scrollTo(target);
    };

    return (
        <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-primary/70 border-b border-white/10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
            {/* Logo / Nombre */}
            <button
                onClick={() => scrollTo('hero')}
                className="text-2xl font-bold text-accent-cyan tracking-tight hover:text-white transition-colors"
            >
                RODRIGO LIRA PIZARRO
            </button>

            {/* Enlaces de navegación (desktop) */}
            <ul className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                    <li key={item.target}>
                        <a
                            href={`#${item.target}`}
                            onClick={(e) => handleNavClick(e, item.target)}
                            className="text-sm uppercase tracking-widest text-gray-300 hover:text-accent-cyan transition-colors"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Botón hamburguesa (mobile) - solo lo visualizamos, funcionalidad después */}
            <button className="md:hidden text-gray-300 hover:text-accent-cyan">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </nav>
    </header>
    )
}

