import styles from '../searchbar/InputSrch.module.css';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function InputSrch({ onSearch }) {
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onSearch(query);
  }

  return (
    <form className={styles.inputWrapper} onSubmit={handleSubmit}>
      <input
        className={styles.inputSrch}
        placeholder="Введіть назву ..."
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={styles.inputIcon}>
        <FaSearch className={styles.searchIcon} id="search-icon" />
      </button>
    </form>
  );
}

export default InputSrch;
