import { createSelector, createSlice } from "@reduxjs/toolkit";

const saveItemsInLocalStorage = (key, items) => {
  localStorage.setItem(key, JSON.stringify(items));
};

const getSavedItemsInLocalStorage = (key) => {
  const savedItems = localStorage.getItem(key);
  return savedItems ? JSON.parse(savedItems) : [];
};

const calculateSubTotal = (items) => {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
};

const initialState = {
  items: getSavedItemsInLocalStorage("cart"),
  subTotal: 0,
  isOpen:false
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const changeQuantity = action.payload.changeQuantity; // Fix: Use changeQuantity instead of prodQuantity
      const itemToFind = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemToFind) {
        itemToFind.quantity+=changeQuantity;
      } else {
        state.items = [...state.items, { ...action.payload, quantity: 1 }];
      }
      state.subTotal = calculateSubTotal(state.items);
      saveItemsInLocalStorage("cart", state.items);
      saveItemsInLocalStorage("total", state.subTotal);
    },

    removeFromCart: (state, action) => {
      const changeQuantity = action.payload.changeQuantity; // Fix: Use changeQuantity instead of prodQuantity
      const itemToFind = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemToFind) {
        itemToFind.quantity -= changeQuantity;
        if (itemToFind.quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
      state.subTotal = calculateSubTotal(state.items);
      saveItemsInLocalStorage("cart", state.items);
      saveItemsInLocalStorage("total", state.subTotal);
    },
    deleteCartItem: (state, action) => {
        const itemIdToDelete = action.payload.id;
  
        // Remove the item with the specified id from the cart
        state.items = state.items.filter((item) => item.id !== itemIdToDelete);
  
        // Recalculate the subtotal
        state.subTotal = calculateSubTotal(state.items);
  
        // Save the updated cart and subtotal to localStorage
        saveItemsInLocalStorage("cart", state.items);
        saveItemsInLocalStorage("total", state.subTotal);
      },
    clearCart: (state) => {
      state.items = [];
      state.subTotal = 0;
      saveItemsInLocalStorage("cart", state.items);
      saveItemsInLocalStorage("total", state.subTotal);
    },
    cartIsOpen:(state)=>{
        state.isOpen=true
    }
  },
});

export const cartReducer = cartSlice.reducer;
export const selectCartItems = (state) => state.cart.items;

// Selector for cart length using createSelector
export const selectCartLength = createSelector(
  [selectCartItems],
  (items) => items.length
);
export const selectProductQuantity = createSelector(
    [selectCartItems, (_, productId) => productId],
    (items, productId) => {
      const product = items.find((item) => item.id === productId);
      return product ? product.quantity : 0;
    }
  );
  

// Selector for cart subtotal using createSelector
export const selectCartSubTotal = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.quantity * item.price, 0)
);
export const selectCartIsOpen=(state)=>state.cart.isOpen
export const { addToCart, removeFromCart,cartIsOpen,deleteCartItem } = cartSlice.actions;
