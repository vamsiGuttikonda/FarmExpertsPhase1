import { Box,Link,Text } from '@chakra-ui/react'
import React from 'react'

const ProductDescription = ({name,weight}) => {
    //{description,quantity} is the props
    // const name='Wild Organic Honey '
    // const weight='500gm'
    const additionalDescription='/ Raw Honey / Unprocessed'
    
  
  return (
    <Box   p={1} mt={1} maxH={{base:'80px',lg:'110px'}} overflow='hidden' w='auto'>
            <Link href='/productview'>
                <Text fontWeight='500' fontSize={{base:'1.1rem',lg:'1.5rem'}}>{name} | <span>{weight}</span> {additionalDescription}</Text>
            </Link>
            </Box>
            
  )
}

export default ProductDescription