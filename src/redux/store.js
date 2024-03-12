import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./reducers/cartSlice"
import drawerReducer from "./reducers/drawerSlice"

export const store = configureStore({
    reducer: {
        drawerStatus: drawerReducer,
        cart: cartReducer
    }
})