import { HStack,Text } from '@chakra-ui/react'
import React from 'react'
import RupeeCurrencyIcon from '../icons/RupeeCurrencyIcon'
import DiscountBadge from '../../pages/singleProductPage/DiscountBadge'
const ProductPice = ({CurrentPrice,BeforePrice,purpose}) => {
  return (
    <HStack align='center' ml={{lg:'3'}}>
                {/* <RupeeCurrencyIcon/> */}
                <Text fontSize={{base:'xl',lg:'3xl'}} color='black' ml='-2'>₹{CurrentPrice}</Text><s style={{marginTop:'2px'}}>₹{BeforePrice}</s>
                <DiscountBadge CurrentPrice={CurrentPrice} BeforePrice={BeforePrice} purpose={purpose} />
            </HStack>
            
  )
}

export default ProductPice