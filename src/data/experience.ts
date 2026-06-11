import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'exp1',
    company: 'Tech Solutions Inc.',
    role: 'Desarrollador Full Stack Junior',
    startDate: '2023-02',
    endDate: '2024-01',
    description:
      'Participé en el desarrollo de una plataforma interna de gestión de inventarios usando React y Spring Boot.',
    type: 'work',
    highlights: [
      'Optimización de consultas SQL reduciendo tiempos de respuesta en un 40%',
      'Implementación de CI/CD con GitHub Actions y Docker',
      'Colaboración en un equipo ágil con Scrum',
    ],
  },
  {
    id: 'exp2',
    company: 'Freelance',
    role: 'Desarrollador Web Freelance',
    startDate: '2022-06',
    endDate: '2023-01',
    description:
      'Creación de sitios web estáticos y dinámicos para pequeños negocios locales.',
    type: 'freelance',
    highlights: [
      'Diseño y desarrollo de 3 sitios web con React y TailwindCSS',
      'Optimización SEO logrando primeras posiciones en búsquedas locales',
      'Manejo de hosting, dominios y configuración de DNS',
    ],
  },
  {
    id: 'exp3',
    company: 'Universidad XYZ',
    role: 'Practicante de Desarrollo',
    startDate: '2021-06',
    endDate: '2021-12',
    description:
      'Prácticas profesionales en el laboratorio de software, desarrollando una aplicación de encuestas.',
    type: 'internship',
    highlights: [
      'Primer contacto con metodologías ágiles',
      'Aprendizaje de Git y trabajo colaborativo',
      'Desarrollo de API REST con Node.js y Express',
    ],
  },
]
