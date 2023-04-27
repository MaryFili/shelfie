import { useEffect, useState } from "react";
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../firebase/config'
import { useAuthContext } from "./useAuthContext";

const useBook = (c) => {
    const [listOfBooks, setListOfBooks] = useState([]);
    const [loading, setLoading] = useState(true)
    const { user } = useAuthContext()

    useEffect(() => {
        const getBooks = async () => {
            try {
                setLoading(true);
                const booksCollection = collection(db, c);
                const booksQuery = query(booksCollection, where("uid", "==", user.uid));
                const data = await getDocs(booksQuery);
                setListOfBooks(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        if (user) {
            getBooks();
        }

    }, [c, user]);

    return { listOfBooks, loading }

}
export default useBook;
