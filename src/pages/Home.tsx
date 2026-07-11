import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skill'
import { Projects } from '@/components/sections/Projects'
import { Certifications } from '@/components/sections/Certifications'
import { GitHubActivity } from '@/components/sections/GitHubActivity'
import { Contact } from '@/components/sections/Contact'
import { Helmet } from 'react-helmet-async'


export const Home = () => {
    return (
        <>
            <Helmet>
                <title>Tu Nombre | Full Stack Developer</title>
                <meta name="description" content="Portafolio profesional de Tu Nombre, desarrollador Full Stack." />
                <meta property="og:title" content="Rodrigo Lira Pizarro | Full Stack Developer" />
                {/* más tags... */}
            </Helmet>
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
