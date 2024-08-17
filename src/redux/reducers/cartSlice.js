import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        totalPrice: JSON.parse(localStorage.getItem("totalPrice")) ?? 0,
        items: JSON.parse(localStorage.getItem("order")) ?? []
    },
    reducers: {
        increment(state, action) {
            let food = {
                name: action.payload.name,
                price: action.payload.price,
                img: action.payload.img,
                count: 1
            }

            if (state.items.length > 0) {
                let item = state.items.filter(item => item.name === action.payload.name)
                let order = JSON.parse(localStorage.getItem("order"))
                let localStorageItem = order.filter(i => i.name === action.payload.name)

                if(item[0]) {
                    item[0].count++
                    localStorageItem[0].count++
                    localStorage.setItem("order", JSON.stringify(order))
                    
                    state.totalPrice = Number(state.totalPrice) + Number(item[0].price)
                } else {
                    state.items.push(food)
                    order.push(food)
                    localStorage.setItem("order", JSON.stringify(order))

                    state.totalPrice = Number(state.totalPrice) + Number(action.payload.price)
                }
            } else {
                state.items.push(food)
                localStorage.setItem("order", JSON.stringify([food]))

                state.totalPrice = Number(state.totalPrice) + Number(action.payload.price)
            }

            state.totalPrice = Math.trunc(state.totalPrice * 100) / 100
            localStorage.setItem("totalPrice", state.totalPrice)
        },

        decrement(state, action) {
            state.items.filter(item => {
                if(item.name === action.payload.name) {
                    let order = JSON.parse(localStorage.getItem("order"))
                    let localStorageItem = order.filter(i => i.name === action.payload.name)

                    if(item.count === 1) {
                        order.splice(order.findIndex(i => i.name === action.payload.name), 1)
                        localStorage.setItem("order", JSON.stringify(order))
                        state.items.splice(state.items.findIndex(item => item.name === action.payload.name), 1)
                        state.totalPrice = Number(state.totalPrice) - Number(item.price)
                    } else {
                        item.count--
                        localStorageItem[0].count--
                        localStorage.setItem("order", JSON.stringify(order))
                        state.totalPrice = Number(state.totalPrice) - Number(item.price)
                    }
                    
                }

                return state.items
            })

            state.totalPrice = Math.trunc(state.totalPrice * 100) / 100
            localStorage.setItem("totalPrice", state.totalPrice)
        }
    }
})

export const { increment, decrement } = cartSlice.actions
export default cartSlice.reducer