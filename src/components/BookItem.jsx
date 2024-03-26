import { LinkBox, LinkOverlay, Image, Text, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function BookItem() {
  return (
    <LinkBox border={'1px solid #576882'} borderRadius={5}>
      <Flex gap={4}>
        <Image
          maxW={'200px'}
          fit={'cover'}
          aspectRatio={3 / 4}
          src="https://shkola.in.ua/images/pictures/Pidruchnyky/10-klas/Algebra/algebra-10-klas-bevz-2018.jpg"
          alt="book cover"
        />
        <Flex mt={'10px'} maxW={'200px'} direction={'column'} gap={2}>
          <LinkOverlay as={RouterLink} to={''}>
            <Text>Book title</Text>
          </LinkOverlay>
          <Text>Subject</Text>
          <Text>Grade</Text>
          <Text>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, harum!
          </Text>
        </Flex>
      </Flex>
    </LinkBox>
  );
}
export default BookItem;
