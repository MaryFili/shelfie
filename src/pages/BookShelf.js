import React from 'react';
import BookList from '../components/BookList';

import useBook from '../hooks/useBook'
import { useAuthContext } from '../hooks/useAuthContext';
import styles from '../styles/Home.module.css'


export default function BookShelf() {
    const { user } = useAuthContext();
    const { listOfBooks, loading } = useBook('bookshelf', ['uid', '==', user.uid])

    return (
        <main>
            <div className={styles.mainContainer}>

                <h1>Welcome to your Bookshelf</h1>

            </div>

            {loading
                ? (<p className={styles.loading}>Loading...</p>)
                : (<BookList listOfBooks={listOfBooks} />)}
        </main>
    )
}
