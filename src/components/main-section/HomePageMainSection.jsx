import { Container,Box } from '@chakra-ui/react'
import React from 'react'
import Slidercustom from './features/Categories/Slidercustom'
import ProductCourosel from './product-slider/ProductCourosel'
import productData from '../data/MockData'
const HomePageMainSection = () => {
  const recommendedProducts=productData.filter((product)=>product.recommended)
  const bestSellingproducts=productData.filter((product)=>product.bestseller)
  return (
    <Box  maxW='1480px'  mx='auto' mt={5}>
        
        <Slidercustom/>
        
        <ProductCourosel products={recommendedProducts}/>
        <ProductCourosel products={bestSellingproducts}/>
        
    </Box>
  )
}

export default HomePageMainSection