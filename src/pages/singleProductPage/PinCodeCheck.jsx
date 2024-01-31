import { HStack, Input, InputGroup, Text, InputRightAddon, Stack, Icon } from '@chakra-ui/react';
import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { IoLeafOutline } from 'react-icons/io5';
import { MdDiscount } from "react-icons/md";
import { BsBox } from 'react-icons/bs';
import { AiOutlineLock } from 'react-icons/ai';

const PinCodeCheck = () => {
  const pinCodeBelow = [
    {
      iconName: IoLeafOutline,
      text: '100% Pure and Natural',
    },
    {
      iconName: MdDiscount,
      text: '5% OFF, Code "NEW5" (Order above ₹599)',
    },
    {
      iconName: BsBox,
      text: 'Free Delivery On All Orders Above ₹499/-',
    },
    {
      iconName: AiOutlineLock,
      text: 'Secure online payments',
    },
  ];

  return (
    <Stack>
      <HStack align='center'>
        <MdLocationOn style={{ fontSize: '1.7rem' }} />
        <Text fontWeight='bold' fontSize='1.3rem'>
          Check Availability
        </Text>
      </HStack>
      <InputGroup size={{base:'md',lg:'lg'}} w='auto' p={2} m={1}>
        <Input placeholder='enter your pincode' bgColor='gray.100' />
        <InputRightAddon width='auto' px='1rem' fontSize='1.27rem' cursor='pointer'>
          <Text fontSize='1rem'>Check</Text>
        </InputRightAddon>
      </InputGroup>
      <Stack className='organization-spec' ml={3} rowGap={{base:'2',lg:'4'}}>
        
          {pinCodeBelow.map((item, index) => (
            <HStack key={index}>
              <Icon as={item.iconName} color='green' fontSize='2rem' />
              <Text color='green' fontSize={{base:'0.8rem',lg: '1.3rem'}} fontWeight='500'>
  {item.text}
</Text>

            </HStack>
          ))}
        
      </Stack>
    </Stack>
  );
};

export default PinCodeCheck;
