import {
  Skeleton,
  Box,
  Flex,
  VStack,
  Image,
  Card,
  Text,
  Link,
  HStack,
  Button,
  AspectRatio,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductDescription from "./ProductDescription";
import RatingComponent from "./RatingComponent";
import ProductPice from "./ProductPice";
import AddToCartButton from "./AddToCartButton";
import { addToCart } from "../../redux-toolkit/feautures/product/cartSlice";

const ProductCard = ({ item, loading, purpose }) => {
  const dispatcher = useDispatch();
  const handleAddToCart = () => {
    dispatcher(
      addToCart({
        id: item.product_id,
        name: item.product_name,
        price: item.price,
        size:item.size,
        image_url:item.image_url
      })
    );
  };

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
            <ProductDescription name={item.product_name} weight={item.size} />
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
                onClick={handleAddToCart}
              />
            </Flex>
          </Flex>
        </Box>
      </Card>
    </Skeleton>
  );
};

export default ProductCard;
