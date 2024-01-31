import { Button, Text } from '@chakra-ui/react'
import React from 'react'
const AddToCartButton = ({product,...props}) => {

  return (
    <Button {...props}>
    Add to Cart
    </Button>
  )
}

export default AddToCartButton