export interface Project {
    id: string
    title: string
    description: string
    longDescription?: string
    image: string
    technologies: string[]
    problemSolved: string
    architecture: string
    liveDemoUrl?: string
    githubUrl?: string
    learnings: string[]
}

export interface Experience {
    id: string
    company: string
    role: string
    startDate: string
    endDate?: string
    description: string
    type: 'work' | 'internship' | 'freelance'
    highlights?: string[]
}

export interface Skill {
    name: string
    category: 'frontend' | 'backend' | 'database' | 'tools'
    level?: number // 0-100
}

export interface Certification {
    title: string
    issuer: string
    date: string
    url?: string
    image?: string
}


export interface GitHubRepo {
    name: string
    description: string
    stars: number
    forks: number
    language: string
    url: string
}
