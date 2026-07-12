import { useState, useEffect } from 'react'
import type { GitHubRepo } from '@/types'

type GitHubUser = { login: string; avatar_url: string; html_url: string; public_repos: number }

interface GitHubData {
    repos: GitHubRepo[]
    user: GitHubUser | null
    loading: boolean
    error: string | null
}

const username = 'rodrolira' // ← Reemplaza con tu usuario real

// Repos que no quieres mostrar en la sección (forks, pruebas, etc.)
const EXCLUDED_REPOS = new Set(['free-llm-api-keys'])

// Cuántas tarjetas mostrar tras filtrar
const MAX_REPOS = 6

// Caché en localStorage para evitar golpear la API en cada visita/recarga
// (la API pública de GitHub limita a 60 req/hora por IP sin autenticar).
const CACHE_KEY = 'gh_data_v1'
const CACHE_TTL = 6 * 60 * 60 * 1000 // 6 horas

type Cached = { at: number; user: GitHubUser; repos: GitHubRepo[] }

const readCache = (): Cached | null => {
    try {
        const raw = localStorage.getItem(CACHE_KEY)
        return raw ? (JSON.parse(raw) as Cached) : null
    } catch {
        return null
    }
}

const writeCache = (user: GitHubUser, repos: GitHubRepo[]) => {
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), user, repos }))
    } catch {
        /* almacenamiento no disponible: ignorar */
    }
}

export const useGitHubData = () => {
    const [data, setData] = useState<GitHubData>({
        repos: [],
        user: null,
        loading: true,
        error: null,
    })

    useEffect(() => {
        const cached = readCache()

        // Caché fresca → úsala y no llames a la API
        if (cached && Date.now() - cached.at < CACHE_TTL) {
            setData({ repos: cached.repos, user: cached.user, loading: false, error: null })
            return
        }

        const fetchData = async () => {
            try {
                const [userRes, reposRes] = await Promise.all([
                    fetch(`https://api.github.com/users/${username}`),
                    // Pedimos más para poder filtrar y aún así llenar las tarjetas
                    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`),
                ])
                if (!userRes.ok || !reposRes.ok) throw new Error(`GitHub ${reposRes.status}`)
                const user: GitHubUser = await userRes.json()
                const rawRepos = await reposRes.json()
                const repos: GitHubRepo[] = rawRepos
                    .filter((r: { name: string; fork: boolean }) =>
                        !r.fork && !EXCLUDED_REPOS.has(r.name)
                    )
                    .slice(0, MAX_REPOS)
                    .map((r: {
                        name: string
                        description: string | null
                        stargazers_count: number
                        forks_count: number
                        language: string | null
                        html_url: string
                    }) => ({
                        name: r.name,
                        description: r.description ?? '',
                        stars: r.stargazers_count,
                        forks: r.forks_count,
                        language: r.language ?? '',
                        url: r.html_url,
                    }))
                writeCache(user, repos)
                setData({ repos, user, loading: false, error: null })
            } catch (err) {
                // Si la API falla (p. ej. rate limit) pero tenemos caché vieja, úsala
                if (cached) {
                    setData({ repos: cached.repos, user: cached.user, loading: false, error: null })
                } else {
                    setData(prev => ({ ...prev, loading: false, error: 'No se pudo cargar la actividad' }))
                }
                console.error('GitHub API error:', err)
            }
        }
        fetchData()
    }, [])

    return data
}
