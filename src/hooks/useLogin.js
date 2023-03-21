import { useState } from 'react'
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function useLogin() {
    const [error, setError] = useState(null)

    const login = (email, password) => {
        setError(null)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('user logged in:', userCredential.user);
            })
            .catch((err) => {
                setError(err.message)
            })

    }
    return { error, login }
}
