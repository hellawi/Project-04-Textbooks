import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { IoMdDownload } from 'react-icons/io';

function Details({ cover, description, subject, clas, download }) {
  return (
    <Card
      ml="15px"
      mr="15px"
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={cover}
        alt="book cover"
      />

      <Stack>
        <CardBody>
          <Text py="2">{description}</Text>
          <Text>
            <span style={{ color: '#ED8936', fontWeight: 'bold' }}>
              Предмет:
            </span>{' '}
            {subject}
          </Text>
          <Text>
            <span style={{ color: '#ED8936', fontWeight: 'bold' }}>
              Клас:
            </span>{' '}
            {clas}
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" as="a" href={download} colorScheme="blue">
            <IoMdDownload />
            Завантажити
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
export default Details;

Details.propTypes = {
  cover: PropTypes.string,
  description: PropTypes.string,
  subject: PropTypes.string,
  download: PropTypes.string,
  clas: PropTypes.string,
};
