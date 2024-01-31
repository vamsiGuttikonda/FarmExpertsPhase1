import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const TopDiscount = () => {
  return (
    <>
      <Box w='100vw' bgColor='darkgreen' h='40px'>
        <Text minH='100%' textAlign='center' color='white' alignContent='center' paddingTop='7px'>
          Avail 5% discount on orders above 499
        </Text>
      </Box>
    </>
  );
};

export default TopDiscount;
