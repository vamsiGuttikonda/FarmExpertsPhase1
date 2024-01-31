import { createSlice } from "@reduxjs/toolkit";
const initialState={
    items:[]
}
const cartActions=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            state.items.push(action.payload)
        },
        removeFromCart(state,action){
            state.items.filter((item)=>
                    state.items= item.id!==action.payload.id
            )
        }
    }
})
export const {addToCart,removeFromCart} =cartActions.actions;
export default cartActions.reducer 