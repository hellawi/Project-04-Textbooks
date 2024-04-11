import PropTypes from 'prop-types';
import { LinkBox, Image, Text, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

BookItem.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  subject: PropTypes.string,
  grade: PropTypes.number,
  url: PropTypes.string,
  cover: PropTypes.string,
  id: PropTypes.number,
};

function BookItem({ description, title, subject, grade, cover, id }) {
  const defaultCover = 'https://via.placeholder.com/1600x900';

  return (
    <LinkBox border={'1px solid #576882'} as={Link} to={`/subjects/${id}`}>
      <Flex gap={4}>
        <Image
          w={'200px'}
          fit={'cover'}
          aspectRatio={3 / 4}
          src={cover ? cover : defaultCover}
          alt="book cover"
          bg={'gray.500'}
        />
        <Flex mt={'10px'} mr={2} maxW={'200px'} direction={'column'} gap={2}>
          <Text>{title}</Text>
          <Text>{subject}</Text>
          <Text>{grade}</Text>
          <Text>
            {description.length > 200
              ? description.slice(0, 200) + '...'
              : description}
          </Text>
        </Flex>
      </Flex>
    </LinkBox>
  );
}
export default BookItem;
