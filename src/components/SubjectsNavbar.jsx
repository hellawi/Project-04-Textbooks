import { Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { propTypes } from 'prop-types';

SubjectsNavbar.propTypes = {
  grades: propTypes.arrayOf(propTypes.number).isRequired,
};

function SubjectsNavbar({ grades }) {
  return (
    <Flex gap={4} align="center" justify="center">
      {grades.map((grade) => (
        <Button
          as={Link}
          to={`/subjects/${grade}`}
          key={grade}
          fontWeight={'medium'}
          maxW={'120px'}
        >
          {grade} клас
        </Button>
      ))}
    </Flex>
  );
}

export default SubjectsNavbar;
