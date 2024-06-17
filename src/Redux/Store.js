import { configureStore } from "@reduxjs/toolkit";
import { Reduxslice } from "./Slice";

export const store = configureStore({
    reducer:{
        project:Reduxslice
    }
})