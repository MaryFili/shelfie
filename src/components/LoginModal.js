import React from 'react'
import styles from '../styles/loginModal.module.css'
import { NavLink } from 'react-router-dom'


export default function LoginModal({ setModalActiveLogin }) {
    return (
        <div className={styles.modalBackground}>
            <div className={styles.loginModalContainer}>
                <div className={styles.loginCloseBtn}> <button onClick={() => setModalActiveLogin(false)}>X</button>
                </div>

                <div className={styles.loginModalContainer} >

                    <input type="text" placeholder="Username" id="username" />
                    <input type="password" placeholder="Password" id="password" />
                    <button>Login</button>

                    <div className={styles.register}>
                        <p>Not registered yet?</p>
                        <NavLink className={styles.SignUp} id={styles.signUp} to="signUp">Sign up</NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}
