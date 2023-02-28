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

                {/* h1 and hamburger menu */}

                {/* <h1 className='webTitle'>FIND MY BOOK</h1> */}
                <NavLink className='logo' to="/"><img src={logo} className='logo' alt='logo' /></NavLink>
                <div className={active ? 'hiddenHamburger' : ' hamburgerMenu'}>
                    <RxHamburgerMenu className='hamburger' onClick={showElem} />
                </div>

                <nav className={active ? 'activeNavbar' : 'navbar'}>
                    <div className="links">
                        <div className="closed">
                            <IoClose className='close' onClick={showElem} />
                        </div>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="about">About</NavLink>
                        <NavLink to="bookshelf">My Bookshelf</NavLink>
                        <NavLink to="signUp">Sign up</NavLink>
                        <NavLink to="#" onClick={showLogin}>Login</NavLink>
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
