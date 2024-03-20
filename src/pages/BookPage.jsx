import { Box, Button, Heading, Textarea } from '@chakra-ui/react';
import PDFReader from '../components/book/PDFReader';
import Review from '../components/book/Review';
import Details from '../components/book/Details';

function BookPage() {
  const descriptionBook =
    'Вітаємо Вас з новим роком навчання! Залишаючи за плечима курси `Загальна географія` та `Материки та океани`, Ви готові зробити наступний крок у вивченні географії. Курс `Україна у світі: природа населення` допоможе Вам розширити свої знання про рідну країну та поглибити їх, вивчаючи біологічні, екологічні та фізичні закономірності її розвитку. Природа нашої держави - це окремий світ, який необхідно не тільки дивитися, а й бачити. Разом з курсом `Україна у світі: природа, населення` Ви зможете дізнатися нові факти про рідну країну та зрозуміти, наскільки вона унікальна. Відкрийте для себе новий світ географії. Допоможе Вам у цьомe підручник з географії за восьмий клас автора Пестушко. Бажаємо успіху!';
  return (
    <div>
      <Heading mb="35px" ml="15px" mt="10px">
        Підручник Географія 8 клас Пестушко{' '}
        <span style={{ color: '#b02e3b' }}>(Поглиблене)</span>
      </Heading>

      <Details
        cover="https://shkola.in.ua/images/pictures/Pidruchnyky/8-klas/Geografija/heohrafiia-8-klas-pestushko-2021-pohlyblene.jpg"
        description={descriptionBook}
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
