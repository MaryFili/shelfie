// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxK58v3HYqvCUzKGl-L8rE7Z3p4PDPItM",
    authDomain: "shelfie-d120d.firebaseapp.com",
    projectId: "shelfie-d120d",
    storageBucket: "shelfie-d120d.appspot.com",
    messagingSenderId: "119997913677",
    appId: "1:119997913677:web:504c1ffe1b860267689a04",
    measurementId: "G-48H6B2CHVJ"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//initialize Firestore
const db = getFirestore()

//initialize storage
const storage = getStorage();

//initialize auth
const auth = getAuth()

export { db, storage, auth };