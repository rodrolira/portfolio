import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'ecommerce-api',
    title: 'E-Commerce API',
    description:
      'API RESTful para gestión de productos, carritos y pedidos con autenticación JWT.',
    longDescription:
      'Backend modular construido con Spring Boot y PostgreSQL, siguiendo principios de Clean Architecture. Incluye pruebas unitarias y de integración, documentación Swagger y despliegue en Docker.',
    image: '/projects/ecommerce-api.png',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Swagger'],
    problemSolved:
      'Proporcionar una base escalable para aplicaciones de comercio electrónico, separando responsabilidades y facilitando el testing.',
    architecture:
      'Hexagonal (puertos y adaptadores) con capas de dominio, aplicación e infraestructura.',
    liveDemoUrl: undefined,
    githubUrl: 'https://github.com/tuusuario/ecommerce-api',
    learnings: [
      'Aprendí a estructurar proyectos grandes con Clean Architecture.',
      'Mejoré mis habilidades de testing con JUnit y Mockito.',
      'Entendí la importancia de la documentación automática con Swagger.',
    ],
  },
  {
    id: 'task-manager',
    title: 'Task Manager Full Stack',
    description:
      'Aplicación web de gestión de tareas con frontend en React y backend en Node.js.',
    longDescription:
      'Permite crear, editar, eliminar y reordenar tareas con drag & drop. Autenticación con Auth0, estado global con Zustand y despliegue en Vercel + Railway.',
    image: '/projects/task-manager.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    problemSolved:
      'Centralizar la organización personal y de equipos pequeños con una interfaz intuitiva.',
    architecture:
      'SPA con API REST, autenticación delegada y base de datos NoSQL para flexibilidad.',
    liveDemoUrl: 'https://task-manager.example.com',
    githubUrl: 'https://github.com/tuusuario/task-manager',
    learnings: [
      'Manejo de estado global con Zustand en aplicaciones React.',
      'Integración de Auth0 para autenticación sin backend propio.',
      'Despliegue en dos plataformas y configuración de CORS.',
    ],
  },
  // Agrega al menos 2 o 3 proyectos más...
]
