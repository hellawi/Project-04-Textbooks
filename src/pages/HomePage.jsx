import { Box, Heading } from '@chakra-ui/react';

function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: '5',
      }}
    >
      <Heading>Hello!</Heading>
    </Box>
  );
}
export default HomePage;
