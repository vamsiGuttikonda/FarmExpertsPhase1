import { Box, Flex, Image, Text, IconButton, Stack } from "@chakra-ui/react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import ProductQuantity from "../../pages/singleProductPage/ProductQuantity";
import { deleteCartItem, removeFromCart } from "../../redux-toolkit/feautures/product/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({item}) => {
    const dispatcher=useDispatch()
        const handleDeleteFromCart=()=>{
            dispatcher(deleteCartItem({id:item.id}))
        }

       
    return (
    <Stack
      w="100%"
      maxH="169px"
      direction="row"
      gap={{ base: "0", lg: "3" }}
      borderColor="gray.300"
      borderRadius="1px"
      letterSpacing={{ base: "0.002rem", lg: "0.01rem" }}
      position="relative"
    >
      <Box
        className="image-container"
        overflow="hidden"
        h={{ base: "85px", lg: "125px" }}
        w={{ base: "85px", lg: "125px" }}
      >
        <Image
          src={item.image_url}
          h="100%"
          w="100%"
          objectFit="contain"
        />
      </Box>
      <Stack
        gap="0"
        direction="column"
        align="start"
        justify="center"
        mx={5}
        fontSize={{ base: "normal", lg: "xl" }}
      >
        <Text fontWeight="900" w={{ base: "155px", lg: "225px" }} h="auto">
          {item.name}
        </Text>
        <Text>
          <span style={{ marginRight: "5px" }}>MRP</span>₹
          <span>{item.price}.00</span>
        </Text>
        <Text color="gray.500">pack of 1, {item.size}</Text>
        <ProductQuantity productId={item.id} fontSize="0.3rem" spacing={1} w="6rem" h="35px" />
      </Stack>
      <Flex
        pos="absolute"
        right={{ base: "1.3rem", lg: "3rem" }}
        top={{ base: "1.8rem", lg: "3rem" }}
      >
        <FaTrash style={{ fontSize: "1.3rem", color: "black" }} onClick={handleDeleteFromCart}/>
      </Flex>
    </Stack>
  );
};

export default CartItem;
