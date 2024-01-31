import React from 'react';
import { Flex, Stack, Text, Icon, useDisclosure, Collapse, Divider } from '@chakra-ui/react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import categorysidebardata from '../../data/CategoryData'
import  additionalCategoryData  from '../../data/AdditionalSidebar';


const MobileSidebarContent = () => {
  

  const Item = ({ icon, children, onClick, divider, ...props }) => {
    
   
    return (
      <>
        <Flex
          align="center"
          h='3rem'
          fontSize='0.9rem'
          letterSpacing='0.02rem'
          cursor="pointer"
          w='100%'
          fontWeight="semibold"
          transition=".30s ease"
          onClick={onClick}
          {...props}
        >
          {icon && <Icon as={icon} />}
          <Text>{children}</Text>
        </Flex>
        {divider && <Divider />}
      </>
    );
  };

  const ItemWithSubCategories = ({ subCategories, name }) => {
          const toggle=useDisclosure()
    return (
      <>
        <Item onClick={toggle.onToggle} align='center' divider='true'>
          {name}
          <Icon
            as={MdKeyboardArrowRight}
            pos='absolute' right='2rem' // Aligns the arrow to the right
            transform={toggle.isOpen ? 'rotate(90deg)' : 'rotate(0deg)'}
          />
        </Item>
        <Collapse in={toggle.isOpen}>
          {subCategories.map((subitem) => (
            <Item pl='5' fontWeight='normal' key={subitem.id} h='2rem'>
              {subitem.name}
            </Item>
          ))}
        </Collapse>
      </>
    );
  };

  return (
    <Stack overflowX='hidden' overflowY='auto' h='100%' w='100%' >
      <Flex direction="column" as="nav" fontSize="sm" color="black" aria-label="Main Navigation">
        {categorysidebardata.map((item) => (
          item.subcategories ? (
            <ItemWithSubCategories key={item.id} subCategories={item.subcategories} name={item.name} />
          ) : (
            <Item key={item.id} divider='true'>
              {item.name}
            </Item>
          )
        ))}
        {additionalCategoryData.map((additionalItem) => (
           <Item key={additionalItem.id}  fontWeight='normal'>
           {additionalItem.name}
         </Item>
        ))}
      </Flex>
    </Stack>
  );
};

export default MobileSidebarContent;
