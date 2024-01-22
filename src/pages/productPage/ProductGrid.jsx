import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const ProductGrid = () => {
  return (
    <SimpleGrid
    columns={{sm:'2',md:'3',lg:'3'}}
    columnGap={{
        base: '4',
        md: '6',
      }}
      rowGap={{
        base: '8',
        md: '10',
      }}
    />


  )
}

export default ProductGrid