import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skill'
import { Projects } from '@/components/sections/Projects'
import { Certifications } from '@/components/sections/Certifications'
import { GitHubActivity } from '@/components/sections/GitHubActivity'
import { Contact } from '@/components/sections/Contact'

export const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Certifications />
            <GitHubActivity />
            <Contact />
        </>
    )
}
