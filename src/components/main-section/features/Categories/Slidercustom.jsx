import { Box ,HStack,Heading,Image, Link} from '@chakra-ui/react'
import React from 'react'
import SLidercomp from './SLidercomp'

const slider = () => {
  return (
    <Box overflow='hidden' whiteSpace='nowrap'  py={4}  >
      <HStack className='category-heading' justify='space-between'>
        <Heading fontSize='35px'>Explore Categories</Heading>
        <Link href='/product'>view all</Link>
        

      </HStack>
     <SLidercomp/>
     <SLidercomp/>

     <SLidercomp/>

     <SLidercomp/>

     <SLidercomp/>

     <SLidercomp/>

     <SLidercomp/>

     
    </Box>
  )
}

export default slider