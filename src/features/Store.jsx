import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";

let store= configureStore({
    reducer:{
        task:taskSlice
    }
})

export default store;