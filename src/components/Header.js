import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoClose } from "react-icons/io5"
import logo from '../img/shelfieLogo3.png'
import '../styles/Header.css'
import LoginModal from './LoginModal'
import { useLogout } from '../hooks/useLogout'

export default function Header() {

    const [active, setActive] = useState(false);
    const [activeModalLogin, setModalActiveLogin] = useState(false);
    const { logout } = useLogout();

    const showElem = () => {
        setActive(!active)
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
                        <button className="loginBtn " to="#" onClick={() => setModalActiveLogin(true)}>Login</button>
                        {activeModalLogin && <LoginModal setModalActiveLogin={setModalActiveLogin} />}
                        <NavLink to="/" onClick={showElem}>Home</NavLink>
                        <NavLink to="bookshelf" onClick={showElem}> My BookShelf</NavLink>
                        <NavLink to="wishlist" onClick={showElem}>My WishList</NavLink>
                        <NavLink to="about" onClick={showElem}>About</NavLink>
                        <p onClick={logout}>Logout</p>
                    </div>
                </nav>

            </div>
        </header >
    )
}
