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
      bg={'#2F374A'}
      border={'2px solid #576zzz882'}
    >
      <Text w="100%" fontSize="xl" mb="4" color="white">
        Предмети {grade} клас
      </Text>
      {subjects.map((subject) => (
        <Button
          as={Link}
          to={`/subjects/class/${grade}/${subject}`}
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
