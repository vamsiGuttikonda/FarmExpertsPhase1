import { Skeleton, Box, Flex, Image, Card, Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  cartIsOpen,
  removeFromCart,
  selectCartIsOpen,
  selectCartItems,
} from "../../redux-toolkit/feautures/product/cartSlice";
import ProductDescription from "./ProductDescription";
import RatingComponent from "./RatingComponent";
import ProductPice from "./ProductPice";

export const AddToCartButton = ({ item, ...props }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  // Check if the item is already in the cart
  const [isCart, setisCart] = useState(false);
  const handleAddToCart = () => {
    setisCart(true);
    dispatch(
      addToCart({
        id: item.product_id,
        name:item.product_name,
        image_url: item.image_url,
        size: item.size,
        price: item.price,
      })
    );
    dispatch(cartIsOpen())
  };

  const handleRemoveFromCart = () => {
    setisCart(false);
    dispatch(removeFromCart({ id: item.product_id }));
  };

  return (
    <>
      {!isCart ? (
        <Button {...props} onClick={handleAddToCart}>
          Add to cart
        </Button>
      ) : (
        <Button {...props} onClick={handleRemoveFromCart}>
          Remove from cart
        </Button>
      )}
    </>
  );
};

const ProductCard = ({ item, loading, purpose }) => {
  return (
    <Skeleton isLoaded={!loading}>
      <Card
        w="100%"
        h={{ base: "380px", lg: "480px" }}
        borderRadius="1px"
        alignContent="center"
      >
        <Box
          h={{ base: "180px", lg: "200px" }}
          w={{ base: "180px", lg: "290px" }}
          p={3}
          letterSpacing="0.02rem"
        >
          <Image
            src={item.image_url}
            alt="Green double couch with wooden legs"
            borderRadius="sm"
            width="100%"
            h="100%"
            objectFit="cover"
          />
          <Flex direction="column" gap={{ base: "1", lg: "3" }}>
            <ProductDescription id={item.product_id} name={item.product_name} weight={item.size} />
            {/* rating comp */}

            <RatingComponent ratingValue="4" />
            {/* rating comp */}
            <ProductPice
              CurrentPrice={item.price}
              BeforePrice="899"
              purpose="small"
            />

            <Flex justifyContent="center" align="center">
              <AddToCartButton
                size={{ base: "md", lg: "lg" }}
                bgColor="green.100"
                w="100%"
                borderRadius="20px"
                item={item}
              />
            </Flex>
          </Flex>
        </Box>
      </Card>
    </Skeleton>
  );
};

export default ProductCard;
