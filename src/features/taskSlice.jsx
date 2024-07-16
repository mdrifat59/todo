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
        },
        deleteTask: (state, action)=>{
            state.tasks = state.tasks.filter((task)=>task.id !== action.payload)
            localStorage.setItem('task', JSON.stringify(state.tasks))
        },
        updateTask:(state, action)=>{
            let{id,title,name,description,createdAt}= action.payload;
            let task = state.tasks.find((update)=> update.id == id)
            if(task){
                task.name =name,
                task.title =title,
                task.description = description,
                task.createdAt =createdAt,
                localStorage.setItem("task", JSON.stringify(state.tasks))
            }
        }
    }
 })

 export const { addTask, deleteTask, updateTask } = taskSlice.actions;
 
 export default taskSlice.reducer;