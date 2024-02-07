import { createSlice, createSelector } from "@reduxjs/toolkit";
import productData from "../../../components/data/MockData";

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: productData,
    filteredProducts: productData, // Initialize with all products
    selectedCategory: "all",
    selectedProduct: null,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const category = action.payload.toLowerCase();

        // If no category is provided or "all" is provided, show all products
        if (!category || category === "all") {
          state.filteredProducts = state.allProducts;
          state.selectedCategory = "all";
        } else {
          const filter = productData.filter(
            (product) => product.category === category
          );
          state.filteredProducts = filter;
          state.selectedCategory = category;
        }
      } catch (err) {
        return err;
      }
    },

    filterProductById(state, action) {
      const productId = action.payload;
      const product = state.allProducts.find(
        (product) => product.id === productId
      );
      state.filteredProducts = product ? [product] : [];
      state.selectedCategory = "singleProduct";
      state.selectedProduct = product;
    },
  },
});

export const selectFilteredProducts = createSelector(
  // First function is to select the slice
  (state) => state.products.filteredProducts,
  // Second function is the identity function
  (filteredProducts) => filteredProducts
);

export const selectSelectedProduct = createSelector(
  (state) => state.products.selectedProduct,
  (selectedProduct) => selectedProduct
);

export const { filterProducts, filterProductById } = productSlice.actions;
export const productReducer = productSlice.reducer;
