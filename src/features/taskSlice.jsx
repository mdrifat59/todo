import { createSlice } from "@reduxjs/toolkit";

let initialState ={
    task:[]
}

let taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask:(state, action)=>{
            state.task = state.task
        }
    }
})

export const {addTask} = taskSlice.actions;

export default  taskSlice.reducer;