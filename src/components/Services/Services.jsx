import './services.css'
import one from '../../assets/misc/1.svg'
import two from '../../assets/misc/2.svg'
import three from '../../assets/misc/3.svg'
import tick from '../../assets/misc/tick.svg'

function Services() {
    return (
        <section id='services'>
            <h1>Hire•Me</h1>
            <div className="services">
                <div className="service">
                    <img src={one} className='servicetop' alt="" />
                    <h2><span className="highlight">Website</span> <br /> Development</h2>
                    <hr />
                    <div className='points'>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Fully Responsive</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>SEO Friendly</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Quick Delivery</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Creative Designs</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Fast & Secure</p>
                        </span>
                    </div>
                </div>
                <div className="service">
                    <img src={two} className='servicetop' alt="" />
                    <h2><span className="highlight">Graphic</span> <br /> Designing</h2>
                    <hr />
                    <div className='points'>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Creative solutions</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>High Quality</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Competitive Pricing</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Brand Solutions</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Timely Communication</p>
                        </span>
                    </div>
                </div>
                <div className="service">
                    <img src={three} className='servicetop' alt="" />
                    <h2><span className="highlight">App</span> <br /> Development</h2>
                    <hr />
                    <div className='points'>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>High Optimisation</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Secure app</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>User-friendly UI</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Creative Designs</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Fast & Secure</p>
                        </span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Services