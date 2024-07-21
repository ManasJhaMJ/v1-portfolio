import About from '../About/About'
import Landing from '../Landing/Landing'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'
import Services from '../Services/Services'
import './home.css'

function Home() {
    return (
        <>
            <Landing />
            <About />
            <Projects />
            <Services />
            <Resume />
        </>
    )
}

export default Home