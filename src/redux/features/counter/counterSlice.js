import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  data: 0,
};

export const counterSlice = createSlice  ({
    name : "counter",
    initialState,
    reducers:{
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    }
})

export const {decrement, increment} = counterSlice.actions;

export default counterSlice.reducer
