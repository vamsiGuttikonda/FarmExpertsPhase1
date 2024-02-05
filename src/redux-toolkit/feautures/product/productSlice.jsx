import { createSlice ,createSelector} from "@reduxjs/toolkit";
import productData from "../../../components/data/MockData";



const productSlice=createSlice({
    name:'products',
    initialState:{
        allProducts:productData,
        filteredProducts: "",
        selectedCategory:"all"
    },
    reducers:{
        filterProducts(state,action){
            try{
                const filter=productData.filter(
                    (product)=>product.category===action.payload
                );
                state.filteredProducts=filter;
                state.selectedCategory=action.payload
            }
            catch(err){
                return err
            }
        }
    }
})


export const selectFilteredProducts=createSelector(
    //first function is to select slice
    (state)=>state.products.filteredProducts,
    //2nd function is identity function
    (filteredProducts)=>filteredProducts
)
export const {filterProducts} =productSlice.actions;
export const productReducer= productSlice.reducer