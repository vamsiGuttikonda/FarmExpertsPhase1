import { Flex,Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import AppLogo from '../AppLogo'
import Search from '../search/Search'
import { mobilestyle } from './styles'

const MobileNavbar = () => {
  return (
    <>
    <Flex {...mobilestyle}>
        <Box> Nav menu</Box>
        <AppLogo/>
        <Stack direction='row'  spacing={2} fontSize='1rem'>
            <Text>whishlist</Text>
            <Text>cart</Text>

        </Stack>
        
    </Flex>
    <Box px='2rem' py='0.5rem' mb='1rem' display={{base:'block',lg:'none'}}>
            <Search/>
        </Box>
    </>
  )
}

export default MobileNavbar