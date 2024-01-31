import { Badge } from '@chakra-ui/react'
import React, { useEffect ,useState } from 'react'
import RupeeCurrencyIcon from '../../components/icons/RupeeCurrencyIcon'

const DiscountBadge = ({BeforePrice,CurrentPrice,purpose}) => {
    let fontsize='1rem';
    
        if(purpose==='small'){
                fontsize='0.6rem'
        }
        const [discount, setDiscount] = useState(0)
        //calc discount evrytime prices change
        useEffect(()=>{
            const discount=()=>{
                setDiscount(((BeforePrice - CurrentPrice) / BeforePrice) * 100)
            }
            discount();
        },[BeforePrice,CurrentPrice])
  return (
    <Badge variant='solid' colorScheme='green' display='inline' fontSize={fontsize} textAlign='center'pt='2px' >
         save {discount.toFixed(0)} %
            </Badge>
    )
}

export default DiscountBadge