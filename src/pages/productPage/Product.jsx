import { Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ProductGrid from './ProductGrid'
import ProductCard from '../../product-card/ProductCard'

const Product = () => {
  return (
    <Flex direction='column' maxW='1480px' mx='auto'>
      
      <SimpleGrid
      placeItems='center'
    columns={{sm:'2',md:'3',lg:'3'}}
    
      rowGap={{
        base: '8',
        md: '10',
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

    </Flex>
  )
}

export default Product