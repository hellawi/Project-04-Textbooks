import { Flex, Text, Button } from '@chakra-ui/react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

Sidebar.propTypes = {
  subjects: propTypes.arrayOf(propTypes.string).isRequired,
  grade: propTypes.number.isRequired,
};

function Sidebar({ subjects, grade }) {
  return (
    <Flex
      ml={20}
      maxW={400}
      flexDirection={'column'}
      gap={2}
      borderRadius={5}
      p={5}
      bg={'#fff'}
      border={'1px solid #576882'}
    >
      <Text w="100%" fontSize="xl" mb="4">
        Предмети {grade} клас
      </Text>
      {subjects.map((subject) => (
        <Button
          as={Link}
          to={`/subjects/${grade}/${subject}`}
          key={subject}
          colorScheme={'blue'}
          variant={'outline'}
          w="100%"
          fontWeight={'medium'}
        >
          {subject}
        </Button>
      ))}
    </Flex>
  );
}

export default Sidebar;
