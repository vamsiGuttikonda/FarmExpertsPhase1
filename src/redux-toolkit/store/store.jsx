import { configureStore } from "@reduxjs/toolkit";
import productQuantitySlice from '../feautures/product/productQuantitySlice'
import cartActions from "../feautures/product/cartActions";
const store=configureStore({
    reducer:{
        productQuantity:productQuantitySlice,
        cart:cartActions,

    }
})
export default store;