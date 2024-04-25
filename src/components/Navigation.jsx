import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Flex,
  Center,
  Link as ChakraLink,
  Text,
  Heading,
} from '@chakra-ui/react';

function Navigation() {
  return (
    <Flex w="100%" bg={'#2F374A'}>
      <Heading color="white" size="md" marginTop={3} ml={2}>
        Pidruchnik.ua
      </Heading>
      <Flex w="100%" p={4} color="white" justify="center" gap={5}>
        <Center>
          <ChakraLink as={ReactRouterLink} to="/">
            Домашня сторінка
          </ChakraLink>
        </Center>
        <Center>
          <ChakraLink as={ReactRouterLink} to="/subjects">
            Підручники
          </ChakraLink>
        </Center>
      </Flex>
      <Flex w="100%" p={4} gap={5} color="white" justify="center">
        <Text>Класи:</Text>
        <Center>
          <ChakraLink as={ReactRouterLink} to="/classPage">
            1
          </ChakraLink>
        </Center>
        <Center>
          <ChakraLink as={ReactRouterLink} to="/classPage">
            2
          </ChakraLink>
        </Center>
        <Center>
          <ChakraLink as={ReactRouterLink} to="/classPage">
            3
          </ChakraLink>
        </Center>
        <Center>
          <ChakraLink as={ReactRouterLink} to="/classPage">
            4
          </ChakraLink>
        </Center>
        <Center>
          <ChakraLink as={ReactRouterLink} to="/classPage">
            5
          </ChakraLink>
        </Center>
        <Center>
          <ChakraLink as={ReactRouterLink} to="/classPage">
            6
          </ChakraLink>
        </Center>
        <Center>
          <ChakraLink as={ReactRouterLink} to="/classPage">
            7
          </ChakraLink>
        </Center>
        <Center>
          <ChakraLink as={ReactRouterLink} to="/classPage">
            8
          </ChakraLink>
        </Center>
        <Center>
          <ChakraLink as={ReactRouterLink} to="/classPage">
            9
          </ChakraLink>
        </Center>
        <Center>
          <ChakraLink as={ReactRouterLink} to="/classPage">
            10
          </ChakraLink>
        </Center>
        <Center>
          <ChakraLink as={ReactRouterLink} to="/classPage">
            11
          </ChakraLink>
        </Center>
      </Flex>
    </Flex>
  );
}
export default Navigation;
