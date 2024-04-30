import { useState, useEffect } from 'react';
import InputSrch from '../components/searchbar/InputSrch';
import BookList from '../components/searchbar/BookList';
import { inputSrchServ } from '../components/searchbar/inputSrchServ';
import Sidebar from '../components/Sidebar';
import { Flex } from '@chakra-ui/react';

function HomePage() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('react');
  const [showHomepageElements, setShowHomepageElements] = useState(true); // State to control homepage elements visibility

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await inputSrchServ(query, 1);
      setBooks(data.items);
    };

    if (query) {
      fetchBooks();
    } else {
      setShowHomepageElements(true); // Reset homepage elements visibility when search query is empty
    }
  }, [query]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setShowHomepageElements(false); // Hide homepage elements on search
  };

  return (
    <div className="searchDiv">
      <InputSrch onSearch={handleSearch} />
      <BookList books={books} />
      {showHomepageElements && <Sidebar />}
    </div>
  );
}

export default HomePage;
