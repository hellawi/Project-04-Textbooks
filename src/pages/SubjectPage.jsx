import { Grid, GridItem, Text, Flex } from '@chakra-ui/react';

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
    </Grid>
  );
}
export default SubjectPage;
