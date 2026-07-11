import { SectionTitle } from '@/components/ui/SectionTitle'
import { useGitHubData } from '@/hooks/useGitHubData'
import { Badge } from '@/components/ui/Badge'
import { FadeInView } from '@/components/ui/FadeInView'

type Repo = {
    name: string
    url: string
    description?: string | null
    language?: string | null
    stars?: number
}

export const GitHubActivity = () => {
    const { user, repos: _repos, loading, error } = useGitHubData()
    const repos = (_repos || []) as Repo[]

    return (
        <section id="github" className="py-20 bg-primary">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <SectionTitle title="GitHub" subtitle="Mi actividad open source" />
                {loading && <p className="text-gray-400 text-center">Cargando...</p>}
                {error && <p className="text-red-400 text-center">{error}</p>}

                {user && (
                    <div className="flex flex-col items-center mb-12">
                        <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full border-2 border-accent-cyan" />
                        <a href={user.html_url} target="_blank" className="text-accent-cyan mt-2 text-lg">{user.login}</a>
                        <p className="text-gray-400">{user.public_repos} repositorios públicos</p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.map(repo => (
                        <FadeInView key={repo.name}>
                            <a href={repo.url} target="_blank" className="block bg-primary-light/50 border border-white/10 rounded-xl p-5 hover:border-accent-cyan/50 transition-colors">
                                <h3 className="text-white font-semibold">{repo.name}</h3>
                                <p className="text-gray-400 text-sm mt-2">{repo.description || 'Sin descripción'}</p>
                                <div className="flex gap-2 mt-3">
                                    {repo.language && <Badge text={repo.language} color="blue" />}
                                    <span className="text-gray-500 text-sm">⭐ {repo.stars}</span>
                                </div>
                            </a>
                        </FadeInView>
                    ))}
                </div>
            </div>
        </section>
    )
}
