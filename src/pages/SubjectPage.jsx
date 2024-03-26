import { Grid, GridItem, Text, Flex, Box } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import BookItem from '../components/BookItem';

function SubjectPage() {
  return (
    <Grid templateColumns="3fr 1fr" mt={10} px={5}>
      <GridItem>
        <Text align={'center'} fontSize="2xl">
          Підручники 10 клас
        </Text>
        <Flex mt={6} wrap={'wrap'} gap={6} justify={'center'}>
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
        </Flex>
      </GridItem>
      <Box mt={'50px'}>
        <Sidebar />
      </Box>
    </Grid>
  );
}
export default SubjectPage;
