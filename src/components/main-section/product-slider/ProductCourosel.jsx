import React from 'react'
import Slider from "react-slick";
// Import css files
import './ProductSLiderstyle.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../../../components/product-card/ProductCard';
import {  Box, HStack, Heading, Link} from '@chakra-ui/react';

const ProductCourosel = ({products}) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        variableWidth: true,
        arrows:false
         // Set this to true
      };
  return (
    <Box className="App" maxW='100%'>
    <HStack justify='space-between'>
        <Heading>Our BestSellers</Heading>
        <Link>view all</Link>
    </HStack>


    <Slider {...settings}>
    
      {
        products.map((item)=>(
          <ProductCard key={item.product_id} item={item}/>
        ))
      }
      


    </Slider>
  </Box>
  )
}

export default ProductCourosel