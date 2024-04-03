import { Grid, GridItem, Text, Flex } from '@chakra-ui/react';

import BookItem from '../components/BookItem';
import { getAllBooksService } from '../services/booksService';
import { useEffect, useState } from 'react';

function SubjectPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooksService().then((books) => {
      setBooks(books.items);
    });
  }, []);
  console.log(books);
  return (
    <Grid templateColumns="3fr 1fr" mt={10} px={5}>
      <GridItem>
        <Text align={'center'} fontSize="2xl">
          Підручники 10 клас
        </Text>
        <Flex mt={6} wrap={'wrap'} gap={6} justify={'center'}>
          {books.length > 0 ? (
            books.map((book) => (
              <BookItem
                key={book.id}
                description={book.description}
                subject={book.subject}
                grade={book.grade}
                title={book.title}
                url={book.url}
                cover={book.cover}
              />
            ))
          ) : (
            <p>Книжок не знайдено🙁</p>
          )}
        </Flex>
      </GridItem>
    </Grid>
  );
}
export default SubjectPage;
