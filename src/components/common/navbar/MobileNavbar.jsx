import { Flex,Box, Stack, Text, Icon, Link } from '@chakra-ui/react'
import React from 'react'
import AppLogo from '../AppLogo'
import Search from '../search/Search'
import { mobilestyle } from './styles'
import Sidebar from './Sidebar'
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import Cart from '../../cart/Cart'

const MobileNavbar = () => {
  return (
    <>
    <Flex {...mobilestyle}>
        <Flex ml={-3}  align='center' justify='center'> 
          <Sidebar/>
        </Flex>
        <AppLogo/>
        <Stack direction='row'  spacing={2} fontSize='1rem'>
            <Text>whishlist</Text>
            
            <Cart/>
            

        </Stack>
        
    </Flex>
    <Box px='2rem' py='0.5rem' mb='1rem' display={{base:'block',lg:'none'}}>
            <Search/>
        </Box>
    </>
  )
}

export default MobileNavbar