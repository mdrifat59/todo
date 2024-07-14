 import { createSlice } from "@reduxjs/toolkit";
 
 const initialState = {
    tasks: [],
 }

 const savetask = JSON.parse(localStorage.getItem("task"))
if(savetask){
    initialState.tasks = savetask;
}
 const taskSlice = createSlice ({
    name:"task",
    initialState,
    reducers:{
        addTask: (state, action)=>{
            state.tasks = [...state.tasks, action.payload]
            localStorage.setItem('task', JSON.stringify(state.tasks))
        }
    }
 })

 export const { addTask } = taskSlice.actions;
 
 export default taskSlice.reducer;