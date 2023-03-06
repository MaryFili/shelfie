import React, { useState } from 'react'
import styles from '../styles/Home.module.css';

import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config'


export default function BookList({ listOfBooks }) {
    const [isLent, setIsLent] = useState(listOfBooks.map(book => book.isLent));
    const [lentToWhom, setLentToWhom] = useState(listOfBooks.map(book => book.lentToWhom))
    const [lentWhen, setLentWhen] = useState(listOfBooks.map(book => book.lentWhen))
    const [isRead, setIsRead] = useState(listOfBooks.map(book => book.isRead));
    const [openModal, setOpenModal] = useState(false);

    const [isUpdating, setIsUpdating] = useState(false);

    const handleCloseModal = () => {
        setOpenModal(false);
        setIsUpdating(false);
    }
    const handleIsLent = (value) => {
        setIsLent(value);
        setIsUpdating(true);
    }
    const handleIsRead = (value) => {
        setIsRead(value);
        setIsUpdating(true);
    }

    const handleSave = async (book) => {
        const bookRef = doc(db, 'bookshelf', book.id);
        const updatedBook = {
            ...book,
            isRead,
            isLent,
            lentToWhom: isLent ? lentToWhom : '',
            lentWhen: isLent ? lentWhen : ''
        };
        await updateDoc(bookRef, updatedBook);
        handleCloseModal();
    }
    return (

        <div className={styles.bookList}>
            {listOfBooks.map(book => (
                <div className={styles.card} key={book.id}>
                    <img
                        className={styles.bookImage}
                        src={book.bookImage}
                        alt="book post"
                    />
                    <h2 className={styles.bookTitle}>{book.bookTitle}</h2>

                    <h4 className={styles.bookAuthor}> {book.bookAuthor}</h4>

                    {book.isRead && <p>Read</p>}
                    {!book.isRead && <p>Not Read</p>}

                    {book.isLent &&
                        <div className={styles.lentTo}>

                            <p>Book Lent To: {book.lentToWhom}</p>
                            <p>on the {book.lentWhen}</p>
                        </div>
                    }
                    {book.isUpdate &&

                        <button className={styles.openModalBtn} onClick={() => setOpenModal(true)}>Update your Book</button>
                    }

                    {openModal && <div className={styles.modalBackground}>
                        <div className={styles.modalContainer}>
                            <div className={styles.closeModal}>
                                <button onClick={handleCloseModal}>X</button>
                            </div>
                            <div className={styles.readStatus}>
                                <h2>Have you read this book?</h2>
                                <div className={styles.readBtn}>
                                    <button onClick={() => handleIsRead(true)}>Yes</button>
                                    <button onClick={() => handleIsRead(false)}>Not yet</button>
                                </div>

                            </div>
                            <div className={styles.lentStatus}>
                                <h2>Have you lent this book to someone?</h2>
                                <div className={styles.lentBtn}>
                                    <button onClick={() => handleIsLent(true)}>Yes</button>
                                    <button onClick={() => handleIsLent(false)}>Nope</button>
                                </div>
                                {isLent &&
                                    <div className={styles.lentQuestions}>
                                        <input
                                            type='text' placeholder='Lent To'
                                            // value={book.lentToWhom}
                                            onChange={(e) => setLentToWhom(e.target.value)}
                                        />
                                        <input
                                            type='text' placeholder='Lent When'
                                            // value={book.lentWhen}
                                            onChange={(e) => setLentWhen(e.target.value)}
                                        />

                                    </div>
                                }
                                <div className={styles.saveBtn}>
                                    <button onClick={() => handleSave(book)}>Save</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            ))
            }
        </div >
    )
}









