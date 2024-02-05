import React from 'react';
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Text,
  DrawerCloseButton,
  useDisclosure,
  Flex,
  Icon,
  Heading,
  Divider,
  Link,
} from '@chakra-ui/react';
import { PiBagSimpleLight } from "react-icons/pi";
import CartContent from './CartContent';
import {  useSelector } from 'react-redux';
import { selectCartItems, selectCartSubTotal } from '../../redux-toolkit/feautures/product/cartSlice';

function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cartItems=useSelector(selectCartItems)
  const subTotal=useSelector(selectCartSubTotal) 

  return (
    <>
      <Button bgColor='white' onClick={onOpen}>
        <Icon as={PiBagSimpleLight} style={{ fontSize: '1.9rem' }} />
      </Button>
      <Drawer placement={'right'} onClose={onClose} isOpen={isOpen} size='md'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader pos='relative' h='5rem' mb={0} pb={0}>
            <Flex justify='start' align='center'>
              <Heading>Cart</Heading>
            </Flex>
            <DrawerCloseButton
              pos='absolute'
              top='1.2rem'
              right='1.2rem'
              fontSize='1rem'
              color='gray'
            />
          </DrawerHeader>

          <DrawerBody transition='0.4s ease'>
            <Flex
              w='100%'
              direction='column'
              rowGap={2}
              className='discount-indicator'
              align='center'
              overflow='hidden'
              height='10%'
            >
              <Divider />
              <Text fontSize='0.9rem' color='gray.600'>
                Spend ₹115 more to avail free shipping!
              </Text>
              <Divider />
            </Flex>
            <Flex
              h='65%'
              w='100%'
              className='cart-body'
              direction='column'
              rowGap={{base:'4',lg:'6'}}
              overflowX='hidden'
              overflowY='auto'
            >
              {/* map the cartItems to get the items in cart */}
                  {
                    cartItems.map((item,index)=>(
                      <CartContent key={index} item={item} />
                    ))
                  }
            </Flex>
            <Flex h='25%' w='100%' overflow='hidden' className='cart-footer-section' borderTop='gray.200' borderWidth='1px' direction='column' >
              <Flex align='center'  px='4' pt='2'  fontSize='1.3rem' letterSpacing='0.1rem' my='auto'>
                <Text fontWeight='thin'>SubTotal    </Text>
                <Text fontWeight='550' >:   {subTotal}</Text>

              </Flex>
              <Flex justify='center' w='100%' my='auto'>
                <Link href='/checkout' w='100%' justify='center'display='inline-block'>
                <Button w='85%' borderRadius='5rem' size='lg' display='block'  px={0} mx='auto'  fontSize='medium' bgColor='orange.300'> 
                <Text color='white'>Proceed To Checkout</Text>
                
                </Button>
                </Link>
              </Flex> 
              <Flex align='center' justify='center' my='auto'>
                <Text fontSize='0.69rem'>Shipping, taxes, and discount codes calculated at checkout.</Text>
              </Flex>
            </Flex>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Cart;
