import { Grid, GridItem, Text, Flex } from '@chakra-ui/react';
import BookItem from '../components/BookItem';
import SubjectsNavbar from '../components/SubjectsNavbar';
import { getAllBooksService } from '../services/booksService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SubjectPage() {
  const [books, setBooks] = useState([]);
  const [grades, setGrades] = useState([]);
  const { grade = null } = useParams();

  const fetchBooksAndGrades = async (grade) => {
    const books = await getAllBooksService({ grade });
    setBooks(books.items);
    
    const uniqueGrades = [...new Set(books.items.map((book) => book.grade))];
    setGrades(uniqueGrades);
  };

  useEffect(() => {
    fetchBooksAndGrades(grade);
  }, [grade]);

  return (
    <Grid mt={10} px={5}>
      <GridItem>
        <SubjectsNavbar grades={grades} />
        <Text align={'center'} fontSize="2xl" mt={5}>
          Підручники {grade} {grade && 'класу'}
        </Text>
        <Flex mt={6} wrap={'wrap'} gap={6} justify={'center'}>
          {books.length > 0 ? (
            books.map((book) => (
              <BookItem
                key={book.id}
                id={book.id}
                description={book.description}
                subject={book.subject}
                grade={book.grade}
                title={book.title}
                url={book.url}
                cover={book.cover}
              />
            ))
          ) : (
            <Text fontSize={'xl'} fontWeight={'medium'}>
              Книжок не знайдено 🙁
            </Text>
          )}
        </Flex>
      </GridItem>
    </Grid>
  );
}
export default SubjectPage;
