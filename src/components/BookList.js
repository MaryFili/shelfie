import React, { useState } from 'react'
import styles from '../styles/Home.module.css';
// import Modal from './Modal';


export default function BookList({ bookShelf }) {
    const [isLent, setIsLent] = useState(bookShelf.map(book => book.isLent));
    const [lentToWhom, setLentToWhom] = useState(bookShelf.map(book => book.lentToWhom))
    const [lentWhen, setLentWhen] = useState(bookShelf.map(book => book.lentWhen))
    const [isBack, setIsBack] = useState(bookShelf.map(book => book.isBack));
    const [isRead, setIsRead] = useState(bookShelf.map(book => book.isRead));
    const [openModal, setOpenModal] = useState(false);

    return (

        <div className={styles.bookList}>
            {bookShelf.map(book => (
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
                        <div>
                            <p>Book Lent To:</p>
                            <p>{book.lentToWhom}</p>
                            <p>{book.lentWhen}</p>
                        </div>
                    }
                    <button className={styles.openModalBtn} onClick={() => setOpenModal(true)}>Update your Book</button>
                    {openModal && <div className={styles.modalBackground}>
                        <div className={styles.modalContainer}>
                            <div className={styles.closeModal}>
                                <button onClick={() => setOpenModal(false)}>X</button>
                            </div>
                            <div className={styles.readStatus}>
                                <h2>Have you read this book?</h2>
                                <div className={styles.readBtn}>
                                    <button onClick={() => setIsRead(true)}>Yes</button>
                                    <button onClick={() => setIsRead(false)}>Not yet</button>
                                </div>

                            </div>
                            <div className={styles.lentStatus}>
                                <h2>Have you lent this book to someone?</h2>
                                <div className={styles.lentBtn}>
                                    <button onClick={() => setIsLent(true)}>Yes</button>
                                    <button onClick={() => setIsLent(false)}>Nope</button>
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
                                        <div className={styles.saveBtn}>
                                            <button onClick={() => console.log(book)}>Save</button>

                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    }
                </div>
            ))}
        </div>
    )
}



