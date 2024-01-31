import { configureStore } from "@reduxjs/toolkit";
import productQuantitySlice from '../feautures/product/productQuantitySlice'
import  {cartReducer}  from "../feautures/product/cartSlice";
const store=configureStore({
    reducer:{
        productQuantity:productQuantitySlice,
        cart:cartReducer,

    }
})
export default store;