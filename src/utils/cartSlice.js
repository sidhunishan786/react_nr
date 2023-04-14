import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:"cart",
    initialState:{
        items:[]

    },
    reducers: {
        //addItem is action
        addItem:(state,action)=>{
            //state is current state
            //action is data coming in
            //reducer function
            console.log(action.payload);
            state.items.push(action.payload);
            
        },
        removeItem:(state,action)=>{
            //reducer function
            state.items.pop();

        },
        clearCart:(state)=>{
            //reducer function
            state.items=[];
        }
    }
});

export const {addItem,removeItem,clearCart} = cartslice.actions;


export default cartslice.reducer;