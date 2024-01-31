import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { incrementProduct, decrementProduct } from '../../redux-toolkit/feautures/product/productQuantitySlice';
import {addToCart,removeFromCart} from '../../redux-toolkit/feautures/product/cartActions'
import { useDispatch, useSelector } from 'react-redux'
const AddToCartButton = ({product,...props}) => {
  const dispatch=useDispatch()
  const productQuantity=useSelector(state=>state.productQuantity.quantity)
  const handleCart=(product)=>{
    dispatch(addToCart(product))
  }
  return (
    <Button {...props} onClick={handleCart(product)} >
    Add to Cart
    </Button>
  )
}

export default AddToCartButton