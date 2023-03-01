// import { useEffect, useState } from "react";
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../firebase/config'

// const useBook = (bookshelf) => {
//     const [bookShelf, setBookShelf] = useState([]);
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         const getBooks = async () => {
//             try {
//                 setLoading(true);
//                 const booksCollection = collection(db, 'bookshelf');
//                 const querySnapshot = await getDocs(booksCollection);
//                 const fetchedBooks = querySnapshot.docs.map((doc) => {
//                     return { id: doc.id, ...doc.data() };
//                 });
//                 setBookShelf(fetchedBooks);
//                 setLoading(false);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         getBooks();
//     }, [bookshelf]);
//     console.log({ bookShelf });

//     return { bookShelf, loading }

// }
// export default useBook;
