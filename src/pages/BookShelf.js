import React from 'react';
import BookList from '../components/BookList';
import { collection, getDocs } from 'firebase/firestore';
import { useLoaderData } from 'react-router-dom';
import { db } from '../firebase/config'


import styles from '../styles/Home.module.css'


function BookShelf() {

    const listOfBooks = useLoaderData()

    return (
        <main>
            <div className={styles.mainContainer}>

                <h1>Welcome to your Bookshelf</h1>

            </div>
            <BookList listOfBooks={listOfBooks} />
        </main>
    )
}
//function to replace useEffect and make use of loader
const getBooksLoader = async () => {
    try {
        const booksCollection = collection(db, 'bookshelf');
        const data = await getDocs(booksCollection);
        return (data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

    } catch (error) {
        console.error(error);
    }
};


export { getBooksLoader, BookShelf }