import { Box ,Image, Link} from '@chakra-ui/react'
import React from 'react'
import companylogo from '../../assets/images/companylogo.png'

const AppLogo = () => {
  return (
    <Link href='/'>
    <Box w={{base:'6.5rem',lg:'12.5rem'}} h={{base:'2.1rem',lg:'69px'}}>
        <Image objectFit='cover' src={companylogo}/>
    </Box>
    </Link>
  )
}

export default AppLogo