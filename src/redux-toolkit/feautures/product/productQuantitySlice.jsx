import { createSlice } from "@reduxjs/toolkit";


const initialState={
    quantity:1
}
const productQuantitySlice=createSlice({
    name:'productQuantity',
    initialState:initialState,
    reducers:{
        incrementProduct(state){
            state.quantity+=1;

        },
        decrementProduct(state,action){
            if(state.quantity>1){
                state.quantity-=1;
            }

        },

    }
})
export const {incrementProduct,decrementProduct} = productQuantitySlice.actions;
export default productQuantitySlice.reducer;