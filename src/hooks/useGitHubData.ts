import { useState, useEffect } from 'react'
import type { GitHubRepo } from '@/types'

interface GitHubData {
    repos: GitHubRepo[]
    user: { login: string; avatar_url: string; html_url: string; public_repos: number } | null
    loading: boolean
    error: string | null
}

const username = 'rodrolira' // ← Reemplaza con tu usuario real

// Repos que no quieres mostrar en la sección (forks, pruebas, etc.)
const EXCLUDED_REPOS = new Set(['free-llm-api-keys'])

// Cuántas tarjetas mostrar tras filtrar
const MAX_REPOS = 6

export const useGitHubData = () => {
    const [data, setData] = useState<GitHubData>({
        repos: [],
        user: null,
        loading: true,
        error: null,
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [userRes, reposRes] = await Promise.all([
                    fetch(`https://api.github.com/users/${username}`),
                    // Pedimos más para poder filtrar y aún así llenar las tarjetas
                    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`),
                ])
                if (!userRes.ok || !reposRes.ok) throw new Error('Error al obtener datos')
                const user = await userRes.json()
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
                setData({ repos, user, loading: false, error: null })
            } catch (err) {
                setData(prev => ({ ...prev, loading: false, error: 'No se pudo cargar la actividad' }))
                console.error('GitHub API error:', err)
            }
        }
        fetchData()
    }, [])

    return data
}
