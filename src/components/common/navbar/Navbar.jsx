import { Box } from '@chakra-ui/react'
import React from 'react'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import { navbarstyles } from './styles'


const Navbar = () => {
  return (
    <>
    <Box {...navbarstyles} as='header' >
        <DesktopNavbar/>
        <MobileNavbar/>
    </Box>
    </>
  )
}

export default Navbar