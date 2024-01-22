import { Box,Link,Text } from '@chakra-ui/react'
import React from 'react'

const ProductDescription = () => {
    //{description,quantity} is the props
    
  
  return (
    <Box   p={1} mt={1} maxH={{base:'90px',lg:'100px'}} overflow='hidden'>
            <Link>
                <Text fontWeight='500' fontSize={{base:'1.25rem',lg:'1.4rem'}}>Wild Organic Honey | <span>500gm</span> | Raw Honey | Unprocessed</Text>
            </Link>
            </Box>
            
  )
}

export default ProductDescription