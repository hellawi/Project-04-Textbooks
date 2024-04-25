import { Box, Heading } from '@chakra-ui/react';
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
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: '5',
      }}
    >
      <Heading>Hello!</Heading>
    </Box>
    </div>
  );
}
export default HomePage;
