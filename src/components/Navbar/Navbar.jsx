import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

// import Logo from '../../assets/'

import './navbar.css'

function Navbar() {


    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 30) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    return (
        <nav>
            <div className={
                colorChange
                    ? "navbar colorChange"
                    : "navbar"
            }>
                <div className='logo'>
                    <Link to='/'>
                        {/* <img src={Logo} alt="Logo" /> */}
                    </Link>
                </div>
                <div className='links'>
                    <NavLink to={'/'} className={({ isActive }) => `link
                        ${isActive ? "active" : "non-active"}`}>
                        Home
                    </NavLink>
                    <NavLink to={'/work'} className={({ isActive }) => `link
                        ${isActive ? "active" : "non-active"}`}>
                        Work
                    </NavLink>
                    <NavLink to={'/about'} className={({ isActive }) => `link
                        ${isActive ? "active" : "non-active"}`}>
                        About
                    </NavLink>
                    <NavLink to={'/contact'} className={({ isActive }) => `link
                        ${isActive ? "active" : "non-active"}`}>
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar