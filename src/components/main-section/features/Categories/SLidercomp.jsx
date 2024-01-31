import React from 'react'
import { Box ,HStack,Image, Link, Text, VStack} from '@chakra-ui/react'
import { GoArrowRight } from "react-icons/go";

const SLidercomp = () => {
  return (
    
    <Link>
    <VStack whiteSpace='nowrap' display='inline-block' >
    <Box  w='230px' h='160px' p={2} mx={3}>
    <Image src='https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
             w='100%' 
             h='100%'  
             objectFit='cover'/>
    </Box>  
    <HStack align='center' justify='space-evenly'>
        <Text>Honey</Text>
        <GoArrowRight/>
    </HStack>

    </VStack>
    
    </Link>
    
    )
}

export default SLidercomp