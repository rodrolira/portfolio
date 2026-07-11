import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'atkl-records',
    title: 'ATKL Records - Pagina web de música',
    description:
      "Aplicación full-stack para la gestión y promoción de un sello de techno. Incluye catálogo de lanzamientos, sistema de maquetas (demos) para artistas, reproducción de audio y panel administrativo.",
    longDescription:
      "Aplicación full-stack para la gestión y promoción de un sello de techno. Incluye catálogo de lanzamientos, sistema de maquetas (demos) para artistas, reproducción de audio y panel administrativo.",
    image: '/projects/atkl.jpg',
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'Node.JS', 'Express', 'Vite', 'TailwindCSS'],
    problemSolved:
      'Facilitar la promoción y venta de música independiente a través de una plataforma web moderna y funcional.',
    architecture:
      'SPA con backend RESTful, autenticación JWT, base de datos relacional y despliegue en Vercel + Railway.',
    liveDemoUrl: 'https://atkl.vercel.app',
    githubUrl: 'https://github.com/rodrolira/atkl',
    learnings: [
      'Diseño de una arquitectura limpia y modular para aplicaciones full-stack.',
      'Implementación de autenticación segura con JWT y manejo de roles de usuario.',
      'Optimización de consultas SQL y diseño de base de datos relacional para un catálogo de productos.',
      'Integración de tecnologías modernas para mejorar la experiencia del usuario y el rendimiento de la aplicación.',
    ],
  },
  {
    id: 'kanban-app',
    title: 'Kanban App - Gestión de tareas en tiempo real',
    description:
      'Aplicación de tablero Kanban full-stack con drag & drop y actualizaciones en tiempo real. Frontend en React y backend en Node.js con Socket.IO.',
    longDescription:
      'Tablero estilo Kanban para organizar tareas en columnas con arrastrar y soltar (dnd-kit). El backend expone una API REST con Express, validación, seguridad (helmet, rate limiting) y sincronización en tiempo real mediante Socket.IO, de modo que los cambios se reflejan al instante entre clientes.',
    image: '',
    technologies: ['React', 'dnd-kit', 'Axios', 'TailwindCSS', 'Node.js', 'Express', 'Socket.IO'],
    problemSolved:
      'Centralizar la organización de tareas de equipos pequeños con una interfaz intuitiva y colaboración en tiempo real.',
    architecture:
      'SPA en React con dnd-kit para el drag & drop, consumiendo una API REST en Express; capa de tiempo real con Socket.IO y middlewares de seguridad (helmet, express-rate-limit, express-validator).',
    liveDemoUrl: 'https://kanban-frontend-ruby.vercel.app',
    githubUrl: 'https://github.com/rodrolira/kanban-frontend',
    learnings: [
      'Implementación de drag & drop accesible con dnd-kit.',
      'Sincronización en tiempo real entre clientes con Socket.IO.',
      'Aseguramiento de una API Express con helmet, rate limiting y validación.',
    ],
  },
  {
    id: 'simulacion-vida',
    title: 'Simulación de Vida Multiagente',
    description:
      'Simulación de vida artificial con un sistema ECS (Entity-Component-System) en Python y visualización en tiempo real con React + PixiJS en estilo pixel art.',
    longDescription:
      'Los NPCs tienen necesidades, personalidad, emociones, memoria, relaciones, trabajo y economía, y el mundo reacciona a eventos emergentes (epidemias, crisis económicas, migraciones, clima, innovación). El mundo se expande con la población: empieza como un pequeño asentamiento rodeado de niebla y crece con nuevos edificios en la frontera.',
    image: '',
    technologies: ['Python', 'FastAPI', 'WebSocket', 'React', 'PixiJS'],
    problemSolved:
      'Modelar comportamiento emergente de una sociedad artificial y visualizarlo en tiempo real de forma comprensible.',
    architecture:
      'Núcleo ECS en Python (entidades, componentes, sistemas) con un servidor FastAPI que emite el estado por WebSocket; cliente React + PixiJS que renderiza el mundo en pixel art.',
    liveDemoUrl: undefined,
    githubUrl: 'https://github.com/rodrolira/simulacion-vida',
    learnings: [
      'Diseño de una arquitectura ECS escalable para simulación en tiempo real.',
      'Streaming de estado de simulación al cliente mediante WebSocket.',
      'Renderizado eficiente de mundos dinámicos con PixiJS.',
    ],
  },
  {
    id: 'stack-smash',
    title: 'Stack & Smash - Juego móvil hyper-casual',
    description:
      'Juego móvil hyper-casual de un solo toque: apilá bloques, el sobrante se "smashea" y no dejes que el ancho llegue a cero. Hecho con Phaser 3 + Capacitor + TypeScript.',
    longDescription:
      'Juego de un toque apuntado a Android e iOS y a un público infantil/juvenil. Construido con Phaser 3 para la lógica de juego y Capacitor para empaquetarlo como app nativa. Estado actual: scaffold jugable, con anuncios e IAP como placeholders mockeados en navegador.',
    image: '',
    technologies: ['Phaser 3', 'Capacitor', 'TypeScript', 'Vite'],
    problemSolved:
      'Crear un juego móvil ligero y adictivo, empaquetable para tiendas de apps desde una única base de código web.',
    architecture:
      'Motor de juego Phaser 3 en TypeScript, empaquetado con Capacitor para Android/iOS; integración preparada (mock) para AdMob y RevenueCat.',
    liveDemoUrl: undefined,
    githubUrl: undefined,
    learnings: [
      'Desarrollo de mecánicas de juego con el motor Phaser 3.',
      'Empaquetado de una app web como aplicación nativa con Capacitor.',
      'Preparación de integraciones de monetización (ads e IAP).',
    ],
  },
  {
    id: 'labocenter',
    title: 'Labocenter - Plataforma web de laboratorio clínico',
    description:
      'Reconstrucción profesional de la plataforma web de un laboratorio clínico y centro de diagnóstico por imágenes: sitio público con SEO, portales de paciente y médico, y dashboard administrativo.',
    longDescription:
      'Monorepo que reemplaza el sitio existente con una plataforma moderna y accesible: buscador inteligente de exámenes, reservas online, agenda médica, portales de paciente y médico con carga/descarga y verificación de resultados, pagos preparados para Transbank, notificaciones, estadísticas y auditoría. Objetivos de WCAG AA y Lighthouse > 95.',
    image: '/projects/labocenter.jpg',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Turborepo'],
    problemSolved:
      'Modernizar una plataforma clínica heredada con un sitio público optimizado para SEO y portales seguros para pacientes y médicos.',
    architecture:
      'Monorepo con pnpm workspaces + Turborepo; frontend React 19 + Vite con SSR, backend Node/Express + Prisma sobre PostgreSQL, auth con JWT y refresh tokens (RBAC), infra con Docker, Nginx y GitHub Actions.',
    liveDemoUrl: 'https://labocenter-web.vercel.app',
    githubUrl: 'https://github.com/rodrolira/labocenter',
    learnings: [
      'Estructuración de un monorepo con Turborepo y pnpm workspaces.',
      'Modelado de datos y acceso con Prisma sobre PostgreSQL.',
      'Diseño de autenticación con JWT, refresh tokens y control de acceso por roles (RBAC).',
    ],
  },
]
