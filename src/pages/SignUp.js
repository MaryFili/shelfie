import React, { useState } from 'react'
import styles from '../styles/loginModal.module.css';
import useSignup from '../hooks/useSignup'
import { useNavigate } from 'react-router-dom';


export default function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('')
    const navigate = useNavigate();

    const { error, signup } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password)
        navigate('/');
    }
    return (
        <div className={styles.modalBackground}>


            <div className={styles.loginModalContainer} >
                <form onSubmit={handleSubmit} className={styles.signUpModalContainer}>
                    <input
                        type="text"
                        required
                        onChange={(e) => setFname(e.target.value)}
                        value={fname}
                        placeholder="First name"
                        id="fname" />

                    <input
                        type="text"
                        required
                        onChange={(e) => setLname(e.target.value)}
                        value={lname}
                        placeholder="Last name"
                        id="lname" />
                    <input
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="E-mail"
                        id="email" />
                    <input
                        required
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Password" id="password" />
                    <button>Sign Up</button>
                    {error && <p>{error}</p>}
                </form>

            </div>
        </div>


    )
}


