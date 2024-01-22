import { Flex, Stack ,Box,Link} from '@chakra-ui/react'
import React from 'react'
import { desktopstyle } from './styles'
import AppLogo from '../AppLogo'
import Search from '../search/Search'

const DesktopNavbar = () => {
  
  return (
    <Flex {...desktopstyle}>
        <Stack direction='row' gap={6} flex={1} alignItems='center'>
            <Box><AppLogo/></Box>
            <Box><Search/></Box>
        </Stack>
        <Stack direction='row'  gap={5} fontSize='1.5rem'>
            <Box>whishlist</Box>
            <Box>Cart</Box>
            <Link href='/login'>
            <Box>Login</Box>
            </Link>
        </Stack>
    </Flex>
  )
}

export default DesktopNavbar