// import React, { useState } from 'react'
// import styles from '../styles/Home.module.css';

// import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
// import { db } from '../firebase/config'


// export default function BookList({ listOfBooks }) {
//     const [isLent, setIsLent] = useState(listOfBooks.map(book => book.isLent));
//     const [lentToWhom, setLentToWhom] = useState(listOfBooks.map(book => book.lentToWhom))
//     const [lentWhen, setLentWhen] = useState(listOfBooks.map(book => book.lentWhen))
//     const [isRead, setIsRead] = useState(listOfBooks.map(book => book.isRead));
//     const [openModal, setOpenModal] = useState(false);

//     const [isUpdating, setIsUpdating] = useState(false);

//     const handleCloseModal = () => {
//         setOpenModal(false);
//         setIsUpdating(false);
//     }
//     const handleIsLent = (value) => {
//         setIsLent(value);
//         setIsUpdating(true);
//     }
//     const handleIsRead = (value) => {
//         setIsRead(value);
//         setIsUpdating(true);
//     }

//     const handleSave = async (book) => {
//         const bookRef = doc(db, 'bookshelf', book.id);
//         const updatedBook = {
//             ...book,
//             isRead,
//             isLent,
//             lentToWhom: isLent ? lentToWhom : '',
//             lentWhen: isLent ? lentWhen : ''
//         };
//         await setDoc(bookRef, updatedBook);
//         handleCloseModal();
//     }
//     return (

//         <div className={styles.bookList}>
//             {listOfBooks(book => (
//                 <div className={styles.card} key={book.id}>
//                     <img
//                         className={styles.bookImage}
//                         src={book.bookImage}
//                         alt="book post"
//                     />
//                     <h2 className={styles.bookTitle}>{book.bookTitle}</h2>

//                     <h4 className={styles.bookAuthor}> {book.bookAuthor}</h4>

//                     {book.isRead && <p>Read</p>}
//                     {!book.isRead && <p>Not Read</p>}

//                     {book.isLent &&
//                         <div className={styles.lentTo}>

//                             <p>Book Lent To: {book.lentToWhom}</p>
//                             <p>on the {book.lentWhen}</p>
//                         </div>
//                     }
//                     {book.isUpdate &&

//                         <button className={styles.openModalBtn} onClick={() => setOpenModal(true)}>Update your Book</button>
//                     }

//                     {openModal && <div className={styles.modalBackground}>
//                         <div className={styles.modalContainer}>
//                             <div className={styles.closeModal}>
//                                 <button onClick={handleCloseModal}>X</button>
//                             </div>
//                             <div className={styles.readStatus}>
//                                 <h2>Have you read this book?</h2>
//                                 <div className={styles.readBtn}>
//                                     <button onClick={() => handleIsRead(true)}>Yes</button>
//                                     <button onClick={() => handleIsRead(false)}>Not yet</button>
//                                 </div>

//                             </div>
//                             <div className={styles.lentStatus}>
//                                 <h2>Have you lent this book to someone?</h2>
//                                 <div className={styles.lentBtn}>
//                                     <button onClick={() => handleIsLent(true)}>Yes</button>
//                                     <button onClick={() => handleIsLent(false)}>Nope</button>
//                                 </div>
//                                 {isLent &&
//                                     <div className={styles.lentQuestions}>
//                                         <input
//                                             type='text' placeholder='Lent To'
//                                             // value={book.lentToWhom}
//                                             onChange={(e) => setLentToWhom(e.target.value)}
//                                         />
//                                         <input
//                                             type='text' placeholder='Lent When'
//                                             // value={book.lentWhen}
//                                             onChange={(e) => setLentWhen(e.target.value)}
//                                         />

//                                     </div>
//                                 }
//                                 <div className={styles.saveBtn}>
//                                     <button onClick={() => handleSave(book)}>Save</button>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     }
//                 </div>
//             ))
//             }
//         </div >
//     )
// }


import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function BookList({ listOfBooks }) {
    const [bookStates, setBookStates] = useState(
        listOfBooks.map((book) => ({
            isLent: book.isLent,
            lentToWhom: book.lentToWhom,
            lentWhen: book.lentWhen,
            isRead: book.isRead,
        }))
    );

    const [openModal, setOpenModal] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [selectedBookIndex, setSelectedBookIndex] = useState(null);

    const handleCloseModal = () => {
        setOpenModal(false);
        setIsUpdating(false);
        setSelectedBookIndex(null);
    };

    const handleIsLent = (value) => {
        setBookStates((prevState) => [...prevState.slice(0, selectedBookIndex), {
            ...prevState[selectedBookIndex],
            isLent: value,
            lentToWhom: value ? prevState[selectedBookIndex].lentToWhom : '',
            lentWhen: value ? prevState[selectedBookIndex].lentWhen : '',
        },
        ...prevState.slice(selectedBookIndex + 1),
        ]);
        setIsUpdating(true);
    };

    const handleIsRead = (value) => {
        setBookStates((prevState) => [...prevState.slice(0, selectedBookIndex), { ...prevState[selectedBookIndex], isRead: value },
        ...prevState.slice(selectedBookIndex + 1),
        ]);
        setIsUpdating(true);
    };

    const handleSave = async (book) => {
        const bookRef = doc(db, 'bookshelf', book.id);
        const updatedBook = {
            ...book,
            ...bookStates[selectedBookIndex],
        };
        await setDoc(bookRef, updatedBook);
        handleCloseModal();
    };

    return (
        <div className={styles.bookList}>
            {listOfBooks.map((book, index) => (
                <div className={styles.card} key={book.id}>
                    <img className={styles.bookImage} src={book.bookImage} alt="book post" />
                    <h2 className={styles.bookTitle}>{book.bookTitle}</h2>
                    <h4 className={styles.bookAuthor}> {book.bookAuthor}</h4>
                    <div className={styles.isRead}>
                        {bookStates[index].isRead && <p className={styles.readStatus}>Read</p>}
                        {!bookStates[index].isRead && <p className={styles.notReadStatus}>Not Read</p>}
                    </div>
                    {bookStates[index].isLent && (
                        <div className={styles.lentTo}>
                            <p>Lent to: {bookStates[index].lentToWhom}</p>
                            <p>On the: {bookStates[index].lentWhen}</p>
                        </div>

                    )}



                    <button
                        className={styles.openModalBtn}
                        onClick={() => {
                            setSelectedBookIndex(index);
                            setOpenModal(true);
                        }}
                    >
                        Edit Book
                    </button>

                    {openModal && (
                        <div className={styles.modalBackground}>
                            <div className={styles.modalContainer}>
                                <h2>Edit Book</h2>
                                <label>
                                    Is Lent:
                                    <input
                                        type="checkbox"
                                        checked={bookStates[selectedBookIndex].isLent}
                                        onChange={(e) => handleIsLent(e.target.checked)}
                                    />
                                </label>
                                <br />
                                {bookStates[selectedBookIndex].isLent && (
                                    <>
                                        <label>
                                            Lent To Whom:
                                            <input
                                                type="text"
                                                value={bookStates[selectedBookIndex].lentToWhom}
                                                onChange={(e) =>
                                                    setBookStates((prevState) => [
                                                        ...prevState.slice(0, selectedBookIndex),
                                                        {
                                                            ...prevState[selectedBookIndex],
                                                            lentToWhom: e.target.value,
                                                        },
                                                        ...prevState.slice(selectedBookIndex + 1),
                                                    ])
                                                }
                                            />
                                        </label>
                                        <br />
                                        <label>
                                            Lent When:
                                            <input
                                                type="text"
                                                value={bookStates[selectedBookIndex].lentWhen}
                                                onChange={(e) =>
                                                    setBookStates((prevState) => [
                                                        ...prevState.slice(0, selectedBookIndex),
                                                        {
                                                            ...prevState[selectedBookIndex],
                                                            lentWhen: e.target.value,
                                                        },
                                                        ...prevState.slice(selectedBookIndex + 1),
                                                    ])
                                                }
                                            />
                                        </label>
                                        <br />
                                    </>
                                )}
                                <label>
                                    Is Read:
                                    <input
                                        type="checkbox"
                                        checked={bookStates[selectedBookIndex].isRead}
                                        onChange={(e) => handleIsRead(e.target.checked)}
                                    />
                                </label>
                                <br />
                                <button
                                    className={styles.saveBtn}
                                    onClick={() => handleSave(listOfBooks[selectedBookIndex])}
                                    disabled={!isUpdating}
                                >
                                    Save
                                </button>
                                <button className={styles.cancelBtn} onClick={handleCloseModal}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}