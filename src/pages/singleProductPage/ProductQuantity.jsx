import { Button, HStack, Stack,IconButton ,Text} from '@chakra-ui/react'
import React from 'react'
import { FaPlus,FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import {incrementProduct,decrementProduct} from '../../redux-toolkit/feautures/product/productQuantitySlice'
import { addToCart, removeFromCart, selectProductQuantity } from '../../redux-toolkit/feautures/product/cartSlice';
const ProductQuantity = ({productId,purpose,fontSize,spacing,w,h}) => {
    const quantity=useSelector((state)=>selectProductQuantity(state,productId))
    
const dispatch =    useDispatch()
const handleIncrement=()=>{
  dispatch(addToCart({id:productId,changeQuantity:1}))
}
const handleDecrement=()=>{
  dispatch(removeFromCart({id:productId,changeQuantity:1}))
}
const  style={fontSize:{fontSize},backgroundColor:'white'};
  return (
        <Stack >
           {
            purpose &&  <Text>Quantity:</Text>
           }
            <HStack borderRadius='1px' w={w}  spacing={spacing} border='1px' borderColor='gray.300' align='center' justify='center' h={h}>
  <IconButton h={h}  icon={<FaMinus aria-label='Decrease quantity' style={style}  onClick={handleDecrement}/>} bgColor='white' />
  <span > {quantity}</span>
  <IconButton h={h} icon={<FaPlus aria-label='Increase quantity' style={style} onClick={handleIncrement}/>}  bgColor='white' />
</HStack>

        </Stack>
    )
}

export default ProductQuantity