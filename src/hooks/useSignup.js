import { useState } from 'react';

//firebase import
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function useSignup() {
    const [error, setError] = useState(null)

    const signup = (email, password) => {
        setError(null)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('user signed u:', userCredential.user);
            })
            .catch((err) => {
                setError(err.message)
            })

    }
    return { error, signup }
}