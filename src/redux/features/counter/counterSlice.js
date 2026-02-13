import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  value: 0,
};

export const counterSlice = createSlice  ({
    name : "counter",
    initialState,
    reducers:{
        increment: () => {},
        decrement: () => {},
    }
})

export const {decrement, increment} = counterSlice.actions;

export default counterSlice.reducer
