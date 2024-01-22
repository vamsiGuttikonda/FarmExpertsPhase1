import { Skeleton, Box, Flex, VStack, Image,Card,Text, Link, HStack, Button,AspectRatio } from "@chakra-ui/react";
import React from "react";
import honeyimg from "../assets/images/honeyimage1.jpg";
import RupeeCurrencyIcon from "../components/icons/RupeeCurrencyIcon";
import ProductDescription from "./ProductDescription";
import { RiStarSFill } from "react-icons/ri";
import RatingIcon from "../components/icons/RatingIcon";
const ProductCard = ({ product, loading,maxWidth }) => {
  let variableWidth='';
  if(maxWidth==='lg'){
    variableWidth='320px';

  }
  if(maxWidth==='sm'){
    variableWidth='260px';
  }
  return (
    <Skeleton isLoaded={!loading} maxW={variableWidth} >
      <Card w="100%" h="420px" borderRadius="1px" alignContent='center' AspectRatio ratio={4 / 3}>
        <Box h="200px" w="280px" p={3} letterSpacing='0.02rem'  >
          <Image
            src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Green double couch with wooden legs"
            borderRadius="sm"
            width="100%"
            h="100%"
            objectFit="cover"
          />
          <Flex direction='column'gap={1} >
            <ProductDescription />
            <HStack className="starratingcomp" spacing={0} align='center' letterSpacing='0.04rem'>
                <RatingIcon ratingValue='4.5'/>
                <span style={{fontSize:'0.9rem',marginLeft:'4px',marginTop:'5px'}}>(12)</span>

            </HStack>
            
            <HStack align='center'>
                <RupeeCurrencyIcon/>
                <Text fontSize='2xl' color='black' ml='-2'>599</Text><s style={{marginTop:'2px'}}>699</s>
                    {/* rating comp */}
            </HStack>
            <Flex justifyContent='center' align='center'>
                <Button w='100%' size='lg' bgColor='green.100' borderRadius='20px'>Add to Cart</Button>
            </Flex>
            
            
          </Flex>
        </Box>
      </Card>
    </Skeleton>
  );
};

export default ProductCard;
