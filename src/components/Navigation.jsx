import { Link, Box, Flex, Text, Stack } from '@chakra-ui/react';

const NavBar = (props) => {
  return (
    <NavBarContainer {...props}>
      <MenuLinks />
    </NavBarContainer>
  );
};

const MenuItem = ({ children, to = '/', ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = () => {
  return (
    <Box flexBasis={{ base: '100%', md: 'auto' }}>
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">1 клас</MenuItem>
        <MenuItem to="/first">2 клас</MenuItem>
        <MenuItem to="/second">3 клас </MenuItem>
        <MenuItem to="/third">4 клас </MenuItem>
        <MenuItem to="/fifth">5 клас</MenuItem>
        <MenuItem to="/sixth">6 клас</MenuItem>
        <MenuItem to="/seventh">7 клас</MenuItem>
        <MenuItem to="/eighth">8 клас</MenuItem>
        <MenuItem to="/ninth">9 клас</MenuItem>
        <MenuItem to="/tenth">10 клас</MenuItem>
        <MenuItem to="/eleventh">11 клас</MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      h="20px"
      mb={8}
      p={8}
      bg="gray"
      color="white"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
