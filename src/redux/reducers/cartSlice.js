import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        increment(state, action) {
            if (state.length > 0) {
                let item = state.filter(item => item.name === action.payload.name)
                if(item[0]) {
                    item[0].count++
                } else {
                    state.push({
                        name: action.payload.name,
                        price: action.payload.price,
                        count: 1
                    })
                }
            } else {
                state.push({
                    name: action.payload.name,
                    price: action.payload.price,
                    count: 1
                })
            }
        },

        decrement(state, action) {
            state.filter(item => {
                if(item.name === action.payload.name) {
                    if(item.count === 1) {
                        state.splice(state.findIndex(item => item.name === action.payload.name), 1);
                    } else {
                        item.count--
                    }
                }

                return state
            })
        }
    }
})

export const { increment, decrement } = cartSlice.actions
export default cartSlice.reducer