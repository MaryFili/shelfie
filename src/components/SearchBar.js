import React from 'react'
import { FaSearch } from "react-icons/fa";
import styles from '../styles/SearchBar.module.css'

export default function SearchBar() {
    return (
        <div class={styles.searchBox}>
            <button class={styles.btnSearch}><FaSearch /></button>
            <input type="text" class={styles.inputSearch} placeholder="Type to Search..." />
        </div>
    )
}
