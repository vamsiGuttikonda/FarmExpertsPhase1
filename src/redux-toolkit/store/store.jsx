import { configureStore } from "@reduxjs/toolkit";
import productQuantitySlice from "../feautures/product/productQuantitySlice";
import {cartReducer} from "../feautures/product/cartSlice";
import {productReducer} from "../feautures/product/productSlice";
 export const store = configureStore({
  reducer: {
    productQuantity: productQuantitySlice,
    cart: cartReducer,
    products: productReducer,
  },
});
