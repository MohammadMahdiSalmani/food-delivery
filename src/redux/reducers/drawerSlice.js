import { createSlice } from "@reduxjs/toolkit"

const drawerSlice = createSlice({
    name: "drawer",
    initialState: {
        status: false,
        name: "",
        price: "",
        img: "",
        count: 0
    },
    reducers: {
        toggleDrawer: (state, action) => {
            state.status = action.payload.status
            state.name = action.payload.name
            state.price = action.payload.price
            state.img = action.payload.img
        },

        increament: (state) => {
            state.count++
        },

        decreament: (state) => {
            if(state.count > 0) 
                state.count--
        }
    }
})

export const { toggleDrawer, increament, decreament } = drawerSlice.actions
export default drawerSlice.reducer