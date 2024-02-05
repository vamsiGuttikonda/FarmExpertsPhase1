import React from 'react'
import { Box ,HStack,Image, Link, Text, VStack} from '@chakra-ui/react'
import { GoArrowRight } from "react-icons/go";

const SLidercomp = ({name,image_url}) => {
  return (
    
    
    <VStack whiteSpace='nowrap' display='inline-block' justify='center'>
    <Box  w='200px' h='200px'  mx={3} borderRadius='50%' overflow='hidden'>
    <Image src={image_url}
             w='100%' 
             h='100%'  
             objectFit='cover'/>
    </Box>  
    <HStack align='center' justify='space-evenly' ml={4} mt={2}>
        <Text fontSize='1.5rem'>{name}</Text>
        <GoArrowRight/>
    </HStack>

    </VStack>
    
    
    
    )
}

export default SLidercomp