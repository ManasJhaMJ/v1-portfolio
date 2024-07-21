import About from '../About/About'
import Landing from '../Landing/Landing'
import Projects from '../Projects/Projects'
import Services from '../Services/Services'
import './home.css'

function Home() {
    return (
        <>
            <Landing />
            <About />
            <Projects />
            <Services />
        </>
    )
}

export default Home