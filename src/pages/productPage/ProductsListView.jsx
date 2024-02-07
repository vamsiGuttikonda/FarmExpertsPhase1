import { Flex, SimpleGrid,Box, Grid } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import ProductGrid from './ProductGrid'
import { useLocation } from 'react-router-dom';
import { filterProducts, selectFilteredProducts } from '../../redux-toolkit/feautures/product/productSlice';

const Product = () => {
  const location = useLocation();
  const dispatch=useDispatch()

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');

    if (category) {
      dispatch(filterProducts(category));
    }
  }, [dispatch, location.search]);
  const filteredProducts=useSelector(selectFilteredProducts)

  return (
    <Grid  maxW='1480px' mx='auto' templateColumns={{base:'1fr',lg:'0.2fr 0.8fr'}}>
      <Box bg='gray' height='500px' color='white'>
        sidebar
      </Box>
      <Box>
      <ProductGrid products={filteredProducts}/>
      </Box>
     
    </Grid>
  )
}

export default Product