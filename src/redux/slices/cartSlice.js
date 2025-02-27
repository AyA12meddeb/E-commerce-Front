import {createSlice} from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isLoading: false,
        error: false,
        products: [],

    },

    reducers:{
        AddToCart: (state,action) => {
            state.products = [...state.products, action.payload]
        },
        

    },
})


export default cartSlice.reducer;
export const {AddToCart} = cartSlice.actions;