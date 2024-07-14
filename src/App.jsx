import React from 'react'   
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayouts from './Rootlayout/RootLayouts'
import Home from './pages/Home'
import Task from './pages/Task'
import Contact from './pages/Contact'
import 'react-toastify/dist/ReactToastify.css';

function App() {  
let router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayouts/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/task-view" element={<Task/>} />
      <Route path="/contact" element={<Contact/>} />
    </Route>
  )
)
  return (
    <RouterProvider router={router}>  
    </RouterProvider>
  )
}

export default App
