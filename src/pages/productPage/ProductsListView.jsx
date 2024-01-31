import { Flex, SimpleGrid,Box, Grid } from '@chakra-ui/react'
import React from 'react'
import ProductGrid from './ProductGrid'


const Product = () => {
  return (
    <Grid  maxW='1480px' mx='auto' templateColumns={{base:'1fr',lg:'0.2fr 0.8fr'}}>
      <Box bg='gray' height='500px' color='white'>
        sidebar
      </Box>
      <Box>
      <ProductGrid/>
      </Box>
     
    </Grid>
  )
}

export default Product