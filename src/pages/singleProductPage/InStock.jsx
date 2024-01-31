import { Box, HStack } from '@chakra-ui/react';
import React from 'react';

const InStock = () => {
  
  return (
    <HStack>
      <Box
        h="0.7rem"
        w="0.7rem"
        bgColor='green'
        borderRadius="50%"
        display="inline-block"
      ></Box>
      <span style={{ fontWeight: '500', fontSize: '1.2rem' }}>In stock</span>
    </HStack>
  );
};

export default InStock;
