import { Box, Button, Heading, Textarea } from '@chakra-ui/react';
import PDFReader from '../components/book/PDFReader';
import Review from '../components/book/Review';
import Details from '../components/book/Details';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findBookById } from '../services/booksService';

function BookPage() {
  const { bookId } = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    findBookById(bookId).then((data) => {
      setBook(data);
    });
  });

  return (
    <div>
      <Heading mb="35px" ml="15px" mt="10px">
        Підручник {book.title}{' '}
        <span style={{ color: '#b02e3b' }}>(Поглиблене)</span>
      </Heading>

      <Details
        cover="https://shkola.in.ua/images/pictures/Pidruchnyky/8-klas/Geografija/heohrafiia-8-klas-pestushko-2021-pohlyblene.jpg"
        description={book.description}
        author="Валерій Пестушко, Ганна Уварова, Андрій Головань"
        subject="Географія (поглиблене вивчення)"
        pub="Генеза, 2021"
        download="https://drive.usercontent.google.com/u/0/uc?id=1te_FTuW0NHGNL_8luDoHhPE1yLmpsb81&export=download"
      />

      <br />
      <Box>
        <Heading size="md" sx={{ textAlign: 'center' }}>
          Читати підручник зараз онлайн
        </Heading>
        <br />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PDFReader
            pdf={
              'https://drive.google.com/file/d/1te_FTuW0NHGNL_8luDoHhPE1yLmpsb81/preview'
            }
          />
        </Box>

        <Box>
          <Heading mb="15px" ml="15px" mt="10px">
            Відгуки
          </Heading>
          <Textarea
            placeholder="Ваш відгук..."
            width="35%"
            height="50px"
            variant="filled"
            ml="15px"
          />
        </Box>
        <Button variant="solid" colorScheme="blue" ml="15px" mt="5px">
          Надіслати
        </Button>
        <Box>
          <Review revText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quos iure sit illo voluptatem commodi cupiditate sint harum repudiandae ut quasi voluptas laboriosam mollitia quisquam sunt odio similique totam error iste, quas eum, tempore minus perspiciatis. Facere at minus eligendi enim vel amet, ullam, ut qui architecto corrupti, perferendis quia!" />
          <Review revText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quos iure sit illo voluptatem commodi cupiditate sint harum repudiandae ut quasi voluptas laboriosam mollitia quisquam sunt odio similique totam error iste, quas eum, tempore minus perspiciatis. Facere at minus eligendi enim vel amet, ullam, ut qui architecto corrupti, perferendis quia!" />
        </Box>
      </Box>
    </div>
  );
}
export default BookPage;

//
