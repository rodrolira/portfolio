import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'atkl-records',
    company: 'ATKL Records',
    role: 'Desarrollador Full Stack',
    startDate: '2023-01',
    endDate: '2023-12',
    description:
      "Desarrollé una aplicación web para la gestión y promoción de un sello de techno. La plataforma incluye un catálogo de lanzamientos, un sistema de maquetas (demos) para artistas, reproducción de audio y un panel administrativo.",
    type: 'work',
    highlights: [
      'Diseñé y desarrollé una arquitectura limpia y modular para la aplicación full-stack.',
      'Implementé funcionalidades clave como catálogo de lanzamientos y sistema de maquetas.',

      'Optimicé consultas SQL y diseñé una base de datos relacional eficiente.',
      'Integré tecnologías modernas para mejorar la experiencia del usuario y el rendimiento de la aplicación.',
    ],
  },
]
