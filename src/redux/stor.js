import { configureStore } from "@reduxjs/toolkit";

import CounterRecucer from "./features/counter/counterSlice"

export const store = configureStore({
    reducer: {
        counter : CounterRecucer
    }
})
