import React from 'react'
import Slider from "react-slick";
// Import css files
import './ProductSLiderstyle.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../../../product-card/ProductCard';
import { Text ,Box, HStack, Heading, Link} from '@chakra-ui/react';

const ProductCourosel = () => {
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
    

      <ProductCard maxWidth='sm'/>
      <ProductCard/>
      <ProductCard/>

      <ProductCard/>

      <ProductCard/>
      <ProductCard/>
      <ProductCard/>

      <ProductCard/>

      <ProductCard/>
      <ProductCard/>
      <ProductCard/>


    </Slider>
  </Box>
  )
}

export default ProductCourosel