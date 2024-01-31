import { createSlice } from "@reduxjs/toolkit";
const initialState={
    items:[]
}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const itemToFind=state.items.find((item)=>item.id===action.payload.id);
            if(itemToFind){
            itemToFind.quantity++;
            }
            else{
                state.items.push({...action.payload,quantity:1});
            }
        },
        removeFromCart:(state,action)=>{
            const itemsNotContainingObject=state.items.filter((item)=>item.id!==action.payload.id);
            state.items=itemsNotContainingObject;


            
        }
    }
})
export const cartReducer=cartSlice.reducer;
export const selectCartItems = (state) => state.cart.items;
export const{addToCart,removeFromCart} =cartSlice.actions;
