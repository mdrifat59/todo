import React, { useState } from 'react'
import { useDispatch } from 'react-redux' 
import { updateTask } from '../../features/taskSlice'

const Update = ({setShow, editName, editTitle, editDescription, editId, setEditName, setEditTitle, setEditDescription}) => {
  let [check, setCheck]= useState(false) 
  let dispatch = useDispatch()

  let handleDescription =(e)=>{
    setEditDescription(e.target.value)
        setCheck(e.target.value.length)
  }


  let handleUpdate = ()=>{
    let updatevalue ={
      id: editId,
      name: editName,
      title: editTitle,
      description: editDescription,
      createdAt: new Date().toString()
    }
    dispatch(updateTask(updatevalue))
    setShow(false)
  }
  
  return (
    <>
        <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-1/4  bg-gray-400 shadow-md rounded-md text-center box-border p-5'> 
            <h1 className='py-4 text-2xl'> Update Your Task</h1>             
            <h3 className='flex justify-start text-lg'>Name</h3>
            <input className='w-full p-2 rounded-md outline-none  mb-2' type="text" placeholder='Name' value={editName}  onChange={(e)=>setEditName(e.target.value)}  />
            <div>

            <h3 className='flex justify-start text-lg'>Title</h3>
            <input className='w-full p-2 rounded-md outline-none mb-2' type="text" placeholder='Title' value={editTitle} onChange={(e)=>setEditTitle(e.target.value)} />
            </div>

            <h3 className='flex justify-start text-lg'>Description</h3>
            <textarea maxLength={100} rows={5} className='w-full p-2 rounded-md outline-none resize-none' type="text" placeholder='Description. . .' value={editDescription} onChange={handleDescription} />
            <p className='flex justify-end text-gray-200'>{100 - check } Cratacter Remaing</p> 
             

            <div className='flex justify-end gap-4 mt-5'> 
              <button className='border-2 py-1 px-5 rounded-md bg-blue-500 text-white'onClick={handleUpdate} >Update</button>
              <button className='border-2 py-1 bg-white text-black border-black  px-4 rounded-md' onClick={()=>setShow(false)} >Cencel</button>
            </div> 
        </div>
        </div>
    </>
  )
}

export default Update