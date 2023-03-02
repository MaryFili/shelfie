import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
// import useBook from '../hooks/useBook';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config'

import styles from '../styles/Home.module.css'


export default function BookShelf() {
    const [bookShelf, setBookShelf] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getBooks = async () => {
            try {
                setLoading(true);
                const booksCollection = collection(db, 'bookshelf');
                const data = await getDocs(booksCollection);
                setBookShelf(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        getBooks();
    }, []);


    return (
        <main>
            <div className={styles.mainContainer}>

                <h1>Welcome to your Bookshelf</h1>

            </div>

            {loading
                ? (<p>Loading...</p>)
                : (<BookList bookShelf={bookShelf} />)}
        </main>
    )
}
