import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoClose } from "react-icons/io5"
import logo from '../img/shelfie.png'
import '../styles/Header.css'

export default function Header() {

    const [active, setActive] = useState(false)
    const [activeLogin, setActiveLogin] = useState(false)

    const showElem = () => {
        setActive(!active)
    }
    const showLogin = () => {
        setActiveLogin(!activeLogin)
    }
    return (
        <header>
            <div className='headerContainer'>

                {/* logo and hamburger menu */}


                <NavLink className='logo' to="/"><img src={logo} className='logo' alt='logo' /></NavLink>
                <div className={active ? 'hiddenHamburger' : ' hamburgerMenu'}>
                    <RxHamburgerMenu className='hamburger' onClick={showElem} />
                </div>
                <nav className={active ? 'activeNavbar' : 'navbar'}>
                    <div className="links">
                        <div className="closed">
                            <IoClose className='close' onClick={showElem} />
                        </div>
                        <NavLink to="#" onClick={showLogin}>Login</NavLink>
                        <NavLink to="/" onClick={showElem}>Home</NavLink>
                        <NavLink to="about" onClick={showElem}>About</NavLink>
                        <NavLink to="bookshelf" onClick={showElem}>My Bookshelf</NavLink>
                        <NavLink to="signUp" onClick={showElem}>Sign up</NavLink>

                        <div className={activeLogin ? ' loginContainer' : 'hiddenLogin'}>
                            <label>Login</label>
                            <input type="text" placeholder="Username" id="username" />
                            <input type="password" placeholder="Password" id="password" />
                            <button>Login</button>
                        </div>
                    </div>

                </nav>

            </div>
        </header >
    )
}
