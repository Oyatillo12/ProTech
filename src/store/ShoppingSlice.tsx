import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Product} from '../app/page'


const initialState:{products:Product[]} = {
    products: []
}

export const ShoppingSlice = createSlice({
    name:"shopping",
    initialState,
    reducers:{
        addProduct: (state, action:PayloadAction<Product>) => {
            state.products.push(action.payload)
        },
        removeProduct: (state, action:PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        }
    },
});

export const {addProduct, removeProduct} = ShoppingSlice.actions;
