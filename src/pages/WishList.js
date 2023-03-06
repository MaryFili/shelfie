import BookList from '../components/BookList';
import styles from '../styles/Home.module.css'
import { collection, getDocs } from 'firebase/firestore';
import { useLoaderData } from 'react-router-dom';
import { db } from '../firebase/config'

function WishList() {

    const listOfBooks = useLoaderData()


    return (
        <main>
            <div className={styles.mainContainer}>
                <h1>Welcome to your WishList</h1>
            </div>


            <BookList listOfBooks={listOfBooks} />
        </main>
    )
}


const getWishBooksLoader = async () => {
    try {
        const booksCollection = collection(db, 'wishlist');
        const data = await getDocs(booksCollection);
        return (data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

    } catch (error) {
        console.error(error);
    }
};


export { getWishBooksLoader, WishList }