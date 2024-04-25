import InputSrch from '../components/searchbar/InputSrch';
import { useState, useEffect } from 'react';
import BookList from '../components/searchbar/BookList';
import { inputSrchServ } from '../components/searchbar/inputSrchServ';

function HomePage() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('react');

  useEffect(() => {
    inputSrchServ(query, 1).then((data) => {
      console.log(data);
      setBooks(data.items);
    });
  }, [query]);
  return (
    <div className="searchDiv">
      <InputSrch onSearch={setQuery} />
      <BookList books={books} />
    </div>
  );
}
export default HomePage;
