import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

function Review({ revText }) {
  return (
    <Card maxW="md" ml="15px" mt="15px">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar />
            <Box>
              <Heading size="sm">Guest</Heading>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{revText}</Text>
      </CardBody>
    </Card>
  );
}
export default Review;

Review.propTypes = {
  revText: PropTypes.string,
};
