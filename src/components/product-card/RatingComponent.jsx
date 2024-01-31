import { HStack } from '@chakra-ui/react'
import React from 'react'
import RatingIcon from '../icons/RatingIcon'
const RatingComponent = ({ratingValue}) => {
  return (
    <HStack className="starratingcomp" spacing={0} align='center' letterSpacing='0.04rem'>
                <RatingIcon ratingValue={ratingValue}/>
                <span style={{fontSize:'0.9rem',marginLeft:'4px',marginTop:'5px'}}>(12)</span>
            
            </HStack>
  )
}

export default RatingComponent