import { createSlice } from "@reduxjs/toolkit";
//reducer first
const Cart= createSlice({
    name:'cart',
    initialState:{
        cartItem:[],
        totalPrice:0,
    },
    reducers:{
        addCart:(state,action)=>{
state.cartItem.push(action.payload)
        },
    }
})
export const{addCart}= Cart.actions
export default Cart.reducer