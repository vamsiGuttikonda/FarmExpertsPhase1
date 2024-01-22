import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ProductCard from '../../product-card/ProductCard'

const ProductGrid = () => {
  return (
    <SimpleGrid
    px={5}
    placeItems='center'
  columns={{sm:'2',md:'3',lg:'3'}}
  
    rowGap={{
      base: '8',
      md: '15',
      lg:'12'
    }}
  >
    <ProductCard maxWidth='lg'/>
    <ProductCard maxWidth='lg'/>

    <ProductCard maxWidth='lg'/>


    <ProductCard maxWidth='lg'/>

    <ProductCard maxWidth='lg'/>

    <ProductCard maxWidth='lg'/>

    <ProductCard maxWidth='lg'/>

    <ProductCard maxWidth='lg'/>

    <ProductCard maxWidth='lg'/>

  </SimpleGrid>



  )
}

export default ProductGrid