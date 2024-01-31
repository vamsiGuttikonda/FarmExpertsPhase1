import { HStack ,Button,Box,Heading} from '@chakra-ui/react'
import React ,{useState}from 'react'

const SizeSelected = () => {
    const [size, setSize] = useState('')
    const handleSize=(size)=>{
        setSize(size);
    }
  return (
    <>
    <Box>
          <Heading size="sm" fontWeight="500">
            size :{size}
          </Heading>
        </Box>
    <HStack className="size-option-section">
          <Button bgColor="green.200" size={{base:'md',lg:'lg'}} onClick={()=>handleSize('500g | Pack of 1')} >
            500g | Pack of 1
          </Button>
          <Button bgColor="green.200" size={{base:'md',lg:'lg'}} onClick={()=>handleSize('1000g | Pack of 1')}>
            1000g | Pack of 1
          </Button>
        </HStack>
    </>
        
  )
}

export default SizeSelected