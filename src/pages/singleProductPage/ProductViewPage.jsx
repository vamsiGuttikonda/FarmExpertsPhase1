import { Grid, Box, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import ProductImages from './ProductImages'
import ProductDescription from './ProductDescription'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const ProductDetails = () => {
//   const { id } = useParams();
//  const dispatcher= useDispatch(filterProductById(id))
  
  return (
    <Grid templateColumns={{ base: '1fr', lg: '1.1fr 0.9fr' }} maxW='1580px' mx='auto' >
      <Box w='100%' 
      overflow='hidden'
      
      
      
      placeContent='center' as='section' pt={{ base: '1rem',lg:'4rem' }} h='auto'>
        <ProductImages />
      </Box>

      <Box
        className='product-wrapper'
        w={{base:'90%',}}
        py={{base:'1rem',lg:'3rem'}}
        ml={{base:'1rem',lg:'2rem'}}
        
        
      >
        <ProductDescription />
      </Box>
    </Grid>
  )
}

export default ProductDetails;
