import { configureStore } from "@reduxjs/toolkit";
import { ShoppingSlice } from "./ShoppingSlice";

export const store = () => {
    return configureStore({
        reducer: ShoppingSlice.reducer,
    })
}


export type AppStore = ReturnType<typeof store>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']