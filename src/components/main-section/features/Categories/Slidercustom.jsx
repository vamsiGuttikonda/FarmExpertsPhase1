import { Box, HStack, Heading, Image, Link } from "@chakra-ui/react";
import React from "react";
import SLidercomp from "./SLidercomp";
import categoriesarray from "../../../data/CategoryData";

import { filterProducts } from "../../../../redux-toolkit/feautures/product/productSlice";
import { useDispatch, useSelector } from "react-redux";

const slider = () => {
  const dispatcher = useDispatch();

  // const selector=useSelector()

  return (
    <Box overflow="hidden" whiteSpace="nowrap" py={4}>
      <HStack className="category-heading" justify="space-between">
        <Heading fontSize="35px">Explore Categories</Heading>
        <Link href="/product">view all</Link>
      </HStack>

      {categoriesarray.map((category) => (
        <Link
          key={category.id + 50}
          onClick={() =>
            dispatcher(filterProducts(category.name.toLowerCase()))
          }
          
        >
          <SLidercomp
            key={category.id}
            name={category.name}
            image_url={category.image_url}
          />
        </Link>
      ))}
    </Box>
  );
};

export default slider;
