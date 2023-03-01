import React from 'react'
import styles from '../styles/Home.module.css';



export default function BookList({ bookShelf }) {
    console.log(bookShelf);

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
                    {!book.isRead && <p>Not yet Read</p>}

                    {book.isLent &&
                        <div>
                            <p>Book Lent To:</p>
                            <input type="text"
                                placeholder='Book lent to'
                                value={book.lentToWhom} />
                            <input type="date"
                                value={book.lentWhen} />
                        </div>
                    }


                </div>
            ))}
        </div>
    )
}



