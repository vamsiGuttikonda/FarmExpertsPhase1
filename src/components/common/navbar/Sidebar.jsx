import React from 'react';
import {
    Text,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  
  DrawerCloseButton,
  useDisclosure,
  Flex,
  Icon,
} from '@chakra-ui/react';
import MobileSidebarContent from './MobileSidebarContent';
import { IoMdMenu } from "react-icons/io";
import AppLogo from '../AppLogo';
function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  return (
    <>
      <Button bgColor='white' onClick={onOpen} >
        <Icon as={IoMdMenu} style={{fontSize:'1.7rem'}}/>
      </Button>
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen} size='xs' >
        
        <DrawerOverlay />
        <DrawerContent>
        <DrawerHeader pos='relative' >
            <Flex justify="center" align="center">
              <AppLogo />
            </Flex>
            <DrawerCloseButton pos='absolute' top='1.5rem' left='1rem'  fontSize='1rem' color='gray'/>
          </DrawerHeader>

         <DrawerBody>
         <MobileSidebarContent/>
         </DrawerBody>
          
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Sidebar