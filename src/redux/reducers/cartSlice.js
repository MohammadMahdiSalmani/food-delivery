import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        totalPrice: 0,
        items: []
    },
    reducers: {
        increment(state, action) {
            if (state.items.length > 0) {
                let item = state.items.filter(item => item.name === action.payload.name)
                if(item[0]) {
                    item[0].count++
                    state.totalPrice = Number(state.totalPrice) + Number(item[0].price)
                } else {
                    state.items.push({
                        name: action.payload.name,
                        price: action.payload.price,
                        img: action.payload.img,
                        count: 1
                    })

                    state.totalPrice = Number(state.totalPrice) + Number(action.payload.price)
                }
            } else {
                state.items.push({
                    name: action.payload.name,
                    price: action.payload.price,
                    img: action.payload.img,
                    count: 1
                })

                state.totalPrice = Number(state.totalPrice) + Number(action.payload.price)
            }

            state.totalPrice = Math.trunc(state.totalPrice * 100) / 100
        },

        decrement(state, action) {
            state.items.filter(item => {
                if(item.name === action.payload.name) {
                    if(item.count === 1) {
                        state.items.splice(state.items.findIndex(item => item.name === action.payload.name), 1);
                        state.totalPrice = Number(state.totalPrice) - Number(item.price)
                    } else {
                        item.count--
                        state.totalPrice = Number(state.totalPrice) - Number(item.price)
                    }
                    
                }

                return state.items
            })

            state.totalPrice = Math.trunc(state.totalPrice * 100) / 100
        }
    }
})

export const { increment, decrement } = cartSlice.actions
export default cartSlice.reducer