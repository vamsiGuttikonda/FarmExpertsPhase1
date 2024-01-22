import { Box,InputGroup, InputRightElement,Input} from '@chakra-ui/react'
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { searchstyle } from './style';

const Search = () => {
  return (
    <Box>
        <InputGroup {...searchstyle}>
    <InputRightElement pointerEvents='none'>
      <IoSearchOutline color='black'  /> 
    </InputRightElement>
    <Input type='text'  placeholder='search for products..'  />
  </InputGroup>
    </Box>
  )
}

export default Search