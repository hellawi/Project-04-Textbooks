import { Grid, GridItem, Text, Flex } from '@chakra-ui/react';
import BookItem from '../components/BookItem';
import SubjectsNavbar from '../components/SubjectsNavbar';
import Sidebar from '../components/Sidebar';
import { getAllBooksService } from '../services/booksService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SubjectPage() {
  const [books, setBooks] = useState([]);
  const [grades, setGrades] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const { grade: gradeParam = null, subject = null } = useParams();
  const grade = gradeParam !== null ? Number(gradeParam) : null;

  const fetchBooksAndGrades = async (grade, subject) => {
    const books = await getAllBooksService({ grade, subject });
    setBooks(books.items);

    const uniqueSubjects = [...new Set(books.items.map((book) => book.subject))];
    uniqueSubjects.sort((a, b) => a.localeCompare(b, 'uk'));
    setSubjects(uniqueSubjects);
    
    const uniqueGrades = [...new Set(books.items.map((book) => book.grade))];
    uniqueGrades.sort((a, b) => a - b);
    setGrades(uniqueGrades);
  };

  useEffect(() => {
    fetchBooksAndGrades(grade, subject);
  }, [grade, subject]);

  return (
    <Grid mt={10} px={10} templateColumns={grade ? '3fr 1fr' : '1fr'}>
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
      {grade && <GridItem mt={"120px"}>
        <Sidebar subjects={subjects} grade={grade} />
      </GridItem>}

    </Grid>
  );
}
export default SubjectPage;
