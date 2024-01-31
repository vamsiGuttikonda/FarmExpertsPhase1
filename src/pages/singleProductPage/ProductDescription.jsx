import React from "react";
import { VStack, Heading, Text, HStack, Flex, Stack, ButtonGroup, Box } from "@chakra-ui/react";
import RatingComponent from "../../components/product-card/RatingComponent";
import ProductPice from "../../components/product-card/ProductPice";
import ProductQuantity from "./ProductQuantity";
import InStock from "./InStock";
import SizeSelected from "./SizeSelected";
import { AddToCartButton } from "../../components/product-card/ProductCard";
import BuyNowButton from "../../components/common/buttons/BuyNowButton";
import PinCodeCheck from "./PinCodeCheck";

const ProductDescription = ({BeforePrice,aftreprice}) => {
  return (
    <VStack
      maxW={{base:'inherit',lg:'80%'}}
      h='auto'
      direction="column"
      placeItems="start"
      letterSpacing="0.05rem"
      mx={{base:'0',lg:'auto'}}
      my={3}
      rowGap={{base:'3',lg:'4'}}
      
    >
      <Heading fontSize={{ base: "3xl", md: "3xl", lg: "5xl" }} fontWeight="900">
        Organic Wild Honey
      </Heading>
      <Box w={{base:'20rem',md:'35rem',lg:'40rem'}} flexWrap='nowrap'>
      <Text fontSize={{ base: "lg", lg: "xl" }} fontFamily="cursive" fontWeight="600" >
        No Preservatives | Highly Nutritious | Rich in Antioxidants
      </Text>
      </Box>
      <RatingComponent ratingValue="4.5" />

      {/* size select and display component */}
      <SizeSelected />

      <HStack spacing={4} align="start">
        <Text fontWeight="600"> MRP</Text>
        <span>(Including all taxes)</span>
      </HStack>

      <ProductPice BeforePrice='699' CurrentPrice="599"  />

      {/* product ProductQuantity component */}
      <ProductQuantity purpose='true' spacing={4}/>

      {/* stock indicator component */}
      <InStock />

      {/* add to cart and buy now section */}
      <VStack   direction='column' h='auto' rowGap='1rem' placeItems='flex-start'>
       
          <Box w={{base:'18rem',lg:'30rem'}} >
            <AddToCartButton w='100%' borderRadius='3rem' size='lg' colorScheme='orange'/>
          </Box>
          
          <Box w={{base:'18rem',lg:'30rem'}} >
            <BuyNowButton w='100%' borderRadius='3rem' size='lg' colorScheme='blue'/>
          </Box>       
       
      </VStack >
      <Flex direction='column'>
        <PinCodeCheck/>
      </Flex>
    </VStack>
  );
};

export default ProductDescription;
