import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ProductCard from '../../components/product-card/ProductCard'
import { useSelector } from 'react-redux';
import { selectFilteredProducts } from '../../redux-toolkit/feautures/product/productSlice.jsx';
const ProductGrid = ({products}) => {
  
  return (
    <SimpleGrid
    px={{base:'2',lg:'7'}}
    placeItems='center'
  columns={{base:'2',md:'3',lg:'3'}}
  
    rowGap={{
      base: '8',
      md: '15',
      lg:'20'
    }}
  >
    
    
      {
        products.map((item)=>(
          <ProductCard key={item.product_id} item={item}/>
        ))
      }


  </SimpleGrid>



  )
}

export default ProductGrid