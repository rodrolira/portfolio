import { useCallback } from 'react';

export const useScrollTo = () => {
    const scrollTo = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (!element) return;

        // Altura del header (ajustar conforme necesario)
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }, []);

    return scrollTo;
}
