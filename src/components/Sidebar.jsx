import { Flex, Text, Button } from '@chakra-ui/react';

function Sidebar() {
  return (
    <Flex
      mt={20}
      ml={20}
      maxW={400}
      flexDirection={'column'}
      gap={2}
      borderRadius={5}
      p={3}
      bg={'#2F374A'}
      border={'2px solid #576zzz882'}
    >
      <Text w="100%" fontSize="xl" mb="4">
        Предмети 10 клас
      </Text>
      <Button w="100%">Алгебра</Button>
      <Button w="100%">Англійська мова</Button>
      <Button w="100%">Геометрія</Button>
      <Button w="100%">Географія</Button>
      <Button w="100%">Захист України</Button>
      <Button w="100%">Українська мова</Button>
      <Button w="100%">Фізика</Button>
    </Flex>
  );
}

export default Sidebar;
