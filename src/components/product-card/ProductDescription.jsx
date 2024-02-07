import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
Link

const ProductDescription = ({id,name,weight}) => {
    //{description,quantity} is the props
    // const name='Wild Organic Honey '
    // const weight='500gm'
    const additionalDescription='/ Raw Honey / Unprocessed'
    
  
  return (
    <Box   p={1} mt={1} maxH={{base:'80px',lg:'110px'}} overflow='hidden' w='auto'>
            <Link to='/productview/$id'>
                <Text fontWeight='500' fontSize={{base:'1.1rem',lg:'1.5rem'}}>{name} | <span>{weight}</span> {additionalDescription}</Text>
            </Link>
            </Box>
            
  )
}

export default ProductDescription