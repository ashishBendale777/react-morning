import { CardTravel } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cartItems: [],
    cartTotal: 0,
    itemCount: 0
}

let cartSLice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, actions) => {
            let newItem = { ...actions.payload, Qty: 1 }
            state.cartItems = [...state.cartItems, newItem]
            state.itemCount = state.cartItems.length
        },
        increQty: (state, actions) => {
            let prodItem = state.cartItems.find((itm) => itm.id == actions.payload.pId)
            prodItem.Qty += 1
        },
        decreQty: (state, actions) => {
            let prodItem = state.cartItems.find((itm) => itm.id == actions.payload.pId)
            prodItem.Qty -= 1
        },
        calcilateTotal: () => { },
        removeItem: () => { }
    }
})

export const { addItem, removeItem, increQty, decreQty, calcilateTotal } = cartSLice.actions
export default cartSLice.reducer