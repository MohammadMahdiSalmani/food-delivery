import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push({
                name: action.payload.name,
                price: action.payload.price,
                count: action.payload.count
            })
        },
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer