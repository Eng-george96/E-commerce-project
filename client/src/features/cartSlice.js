import { createSlice} from "@reduxjs/toolkit";


import  {cartItems}  from "../data";

const initialState ={
    cartItems:cartItems,
    amount:2,
    total:4,
};
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartItems =[];
        },
        removeItem:(state,action)=>{
        const itemId = action.payload.id;
        state.cartItems = state.cartItems.filter((item)=>item.id !== itemId)
        },
        increaseItem:(state,{payload})=>{
            const cartItem = state.cartItems.find((item)=>(item.id === payload.id))
            cartItem.amount++;
            },
        decreaseItem:(state,{payload})=>{
            const cartItem = state.cartItems.find(item=>item.id === payload.id)
            cartItem.amount --;
            },
        calculateTotals:(state)=>{
            let amount =0;
            let total =0;
            state.cartItems.forEach((item)=>{
            amount += item.amount;
            total += item.amount * item.price;
            });
            state.amount =amount;
            state.total= total;
            },

    },
    extraReducers:{}
});

export const {clearCart,removeItem,increaseItem,decreaseItem,calculateTotals} = cartSlice.actions;
export default cartSlice.reducer;