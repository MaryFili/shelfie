import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

//firebase import
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function useSignup() {
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext()

    const signup = (email, password) => {

        setError(null)//reset the error everytime a new user signs up
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('user signed up:', userCredential.user);
            })
            .catch((err) => {
                setError(err.message)
            })

    }
    return { error, signup }
}