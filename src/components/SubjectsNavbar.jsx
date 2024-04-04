import { Flex, Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

SubjectsNavbar.propTypes = {
  setGrade: PropTypes.func.isRequired,
};

function SubjectsNavbar({ setGrade }) {
  const grades = [7, 8, 9, 10, 11];

  return (
    <Flex gap={4} align="center">
      {grades.map((grade) => (
        <Button
          fontWeight={'medium'}
          key={grade}
          width={'100%'}
          minW={'80px'}
          onClick={() => setGrade(grade)}
        >
          {grade} клас
        </Button>
      ))}
    </Flex>
  );
}

export default SubjectsNavbar;
