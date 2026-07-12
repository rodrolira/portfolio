import type { Skill } from '@/types'

// Niveles y tecnologías derivados del código real de los proyectos
// (atkl, kanban-app, simulacion, stack-smash, labocenter) + certificaciones.

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 88 },
  { name: 'TypeScript', category: 'frontend', level: 82 },
  { name: 'JavaScript', category: 'frontend', level: 85 },
  { name: 'HTML5', category: 'frontend', level: 90 },
  { name: 'CSS3', category: 'frontend', level: 85 },
  { name: 'TailwindCSS', category: 'frontend', level: 88 },
  { name: 'Redux Toolkit', category: 'frontend', level: 70 },
  { name: 'Material UI', category: 'frontend', level: 68 },
  { name: 'Framer Motion', category: 'frontend', level: 72 },
  { name: 'React Router', category: 'frontend', level: 82 },
  { name: 'PixiJS', category: 'frontend', level: 60 },
  { name: 'Phaser 3', category: 'frontend', level: 60 },

  // Backend
  { name: 'Node.js', category: 'backend', level: 82 },
  { name: 'Express', category: 'backend', level: 82 },
  { name: 'Python', category: 'backend', level: 68 },
  { name: 'FastAPI', category: 'backend', level: 65 },
  { name: 'REST APIs', category: 'backend', level: 82 },
  { name: 'Socket.IO / WebSockets', category: 'backend', level: 68 },
  { name: 'Prisma', category: 'backend', level: 74 },
  { name: 'Sequelize', category: 'backend', level: 62 },
  { name: 'Mongoose', category: 'backend', level: 62 },
  { name: 'JWT / Auth', category: 'backend', level: 76 },
  { name: 'Zod', category: 'backend', level: 70 },

  // Bases de datos
  { name: 'PostgreSQL', category: 'database', level: 82 },
  { name: 'MongoDB', category: 'database', level: 66 },
  { name: 'MySQL', category: 'database', level: 72 },
  { name: 'SQL', category: 'database', level: 80 },

  // Herramientas
  { name: 'Git', category: 'tools', level: 85 },
  { name: 'GitHub Actions', category: 'tools', level: 68 },
  { name: 'Docker', category: 'tools', level: 65 },
  { name: 'Nginx', category: 'tools', level: 55 },
  { name: 'Vite', category: 'tools', level: 82 },
  { name: 'Vitest / Jest', category: 'tools', level: 70 },
  { name: 'Playwright', category: 'tools', level: 60 },
  { name: 'Monorepo (pnpm workspaces)', category: 'tools', level: 65 },
  { name: 'Capacitor', category: 'tools', level: 55 },
  { name: 'Cloudinary / AWS S3', category: 'tools', level: 58 },
  { name: 'Supabase', category: 'tools', level: 58 },
  { name: 'WordPress', category: 'tools', level: 65 },
  { name: 'Ciberseguridad (fundamentos)', category: 'tools', level: 50 },
]
