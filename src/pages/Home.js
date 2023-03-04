import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar'

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

import noCover from '../img/noCover.png'

export default function Home() {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);

    //perform search and fetch data from google book api
    const searchBook = (e) => {
        if (e.key === 'Enter') {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyB8aM5bhf7EoM3pGpZ6-jpPdGUFDs5PDfU`)
                .then(res => res.json())
                .then(data => {

                    setBooks(data.items)
                })
        }
    };

    //add books to the bookshelf
    const handleAddBook = async (book) => {

        const blogRef = collection(db, 'bookshelf');
        await addDoc(blogRef, {
            bookTitle: book.volumeInfo.title,
            bookAuthor: book.volumeInfo.authors.join(' '),
            bookImage: book.volumeInfo.imageLinks.thumbnail,
            isBack: false,
            isLent: false,
            isRead: false,
            lentToWhom: "",
            lentWhen: "",
            isUpdate: true
        });
    };

    //add books to the wishlist
    const handleAddWishList = async (book) => {

        const blogRef = collection(db, 'wishlist');
        await addDoc(blogRef, {
            bookTitle: book.volumeInfo.title,
            bookAuthor: book.volumeInfo.authors.join(' '),
            bookImage: book.volumeInfo.imageLinks.thumbnail,
            comments: ""
        });
    }

    return (
        <main>
            <div className={styles.mainContainer}>
                <h1>Find your Books</h1>
                <h2>And </h2>
                <h2> add them to your</h2>
                <h2>Online Library</h2>
                <SearchBar search={search} setSearch={setSearch} searchBook={searchBook} />
            </div>
            <div className={styles.searchResults}>
                {books.map(book => (
                    <div className={styles.card} key={book.id}>
                        <div className={styles.bookImageWrapper}>
                            {book.volumeInfo.readingModes.image ? <img className={styles.bookImage} src={book.volumeInfo.imageLinks.thumbnail} alt="book cover" /> : <img className={styles.noCoverImage} src={noCover} alt="book without cover" />}</div>
                        <h1 className={styles.bookTitle}>{book.volumeInfo.title}</h1>
                        <h2 className={styles.bookAuthor}>{book.volumeInfo.authors}</h2>
                        <div className={styles.btnContainer}>
                            <button onClick={() => handleAddBook(book)}>Add to Bookshelf</button>
                            <button onClick={() => handleAddWishList(book)}>Add to WishList</button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
