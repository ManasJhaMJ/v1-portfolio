import discord from '../../assets/socials/discord.png'
import email from '../../assets/socials/email.png'
import github from '../../assets/socials/github.png'
import linkedin from '../../assets/socials/linkedin.png'
import twitter from '../../assets/socials/twitter.png'

import homeimg from '../../assets/misc/home-image.png'
import slash from '../../assets/bg-elements/slash.svg'

function Landing() {
    return (
        <section id='home' className='wrapper'>
            <div className="home-text">
                <img className='slash' src={slash} alt="slash" />
                <h1>Manas Jha</h1>
                <h3>or simply, MJ10</h3>
                <p>Full Stack Developer working on freelance projects</p>
                <div className="home-socials">
                    <a href=""><img src={discord} alt="" /></a>
                    <a href=""><img src={email} alt="" /></a>
                    <a href=""><img src={github} alt="" /></a>
                    <a href=""><img src={linkedin} alt="" /></a>
                    <a href=""><img src={twitter} alt="" /></a>
                </div>
                <div className="cta-group">
                    <a href="#work"><button>
                        <div className="side">
                        </div>
                        View Work
                    </button></a>
                    <a href="#contact"><button>
                        <div className="side">
                        </div>
                        Hire Me
                    </button></a>
                </div>
            </div>
            <div className="home-image">
                <img src={homeimg} alt="" />
            </div>

        </section>
    )
}

export default Landing