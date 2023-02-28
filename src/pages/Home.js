import React from 'react'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar'


export default function Home() {
    return (
        <main>
            <div className={styles.mainContainer}>
                <h1>Search your books</h1>
                <h2>And save them into your</h2>
                <h2>Online Library</h2>
                <SearchBar />
            </div>
            <div className={styles.searchResults}>
                <div className={styles.card}>
                    <img src="https://via.placeholder.com/150" alt="book cover" />
                    <h1>Title</h1>
                    <h2>Author</h2>
                    <button>Add Book</button>
                </div>
                <div className={styles.card}>
                    <img src="https://via.placeholder.com/150" alt="book cover" />
                    <h1>Title</h1>
                    <h2>Author</h2>
                    <button>Add Book</button>

                </div>
                <div className={styles.card}>
                    <img src="https://via.placeholder.com/150" alt="book cover" />
                    <h1>Title</h1>
                    <h2>Author</h2>
                    <button>Add Book</button>

                </div>
            </div>
        </main>
    )
}
