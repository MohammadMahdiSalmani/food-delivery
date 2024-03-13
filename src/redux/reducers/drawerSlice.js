import { createSlice } from "@reduxjs/toolkit"

const drawerSlice = createSlice({
    name: "drawer",
    initialState: {
        status: false,
        name: "",
        price: "",
        img: "",
    },
    reducers: {
        toggleDrawer: (state, action) => {
            state.status = action.payload.status
            state.name = action.payload.name
            state.price = action.payload.price
            state.img = action.payload.img
        }
    }
})

export const { toggleDrawer } = drawerSlice.actions
export default drawerSlice.reducer