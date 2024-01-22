import { Container,Box } from '@chakra-ui/react'
import React from 'react'
import Slidercustom from './features/Categories/Slidercustom'
import ProductCourosel from './product-slider/ProductCourosel'
const HomePageMainSection = () => {
  return (
    <Box  maxW='1480px'  mx='auto' mt={5}>
        
        <Slidercustom/>
        <ProductCourosel/>
        
    </Box>
  )
}

export default HomePageMainSection