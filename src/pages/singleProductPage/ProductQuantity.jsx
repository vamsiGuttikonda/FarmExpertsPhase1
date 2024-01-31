import { Button, HStack, Stack,IconButton ,Text} from '@chakra-ui/react'
import React from 'react'
import { FaPlus,FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import {incrementProduct,decrementProduct} from '../../redux-toolkit/feautures/product/productQuantitySlice'
const ProductQuantity = ({purpose,fontSize,spacing,w,h}) => {
    const quantity=1
    
const dispatch =    useDispatch()
const  style={fontSize:{fontSize},backgroundColor:'white'};
  return (
        <Stack >
           {
            purpose &&  <Text>Quantity:</Text>
           }
            <HStack borderRadius='1px' w={w}  spacing={spacing} border='1px' borderColor='gray.300' align='center' justify='center' h={h}>
  <IconButton h={h}  icon={<FaMinus aria-label='Decrease quantity' style={style}  />} bgColor='white' />
  <span > {quantity}</span>
  <IconButton h={h} icon={<FaPlus aria-label='Increase quantity' style={style} />}  bgColor='white' />
</HStack>

        </Stack>
    )
}

export default ProductQuantity