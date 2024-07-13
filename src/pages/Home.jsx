import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  let [check, setCheck]= useState(false) 
  let [name, setName]= useState("")
  let [title, setTitle]= useState("")
  let [description, setDescription]= useState("")
  let handleSave = ()=>{
    let addtask ={
      id: Date.now().toString(32),
        name,
       title,
      description,
      createdAt: new Date().toString()
    }
    console.log(addtask);
  }
  return (
    <>
    <Helmet>
        <title>Home</title>
    </Helmet>
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-1/4  bg-gray-400 shadow-md rounded-md text-center box-border p-5'> 
            <h1 className='py-4 text-2xl'> Add Your Task</h1>             
            <h3 className='flex justify-start text-lg'>Name</h3>
            <input className='w-full p-2 rounded-md outline-none  mb-2' type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} value={name} />
            <div>
            <h3 className='flex justify-start text-lg'>Title</h3>
            <input className='w-full p-2 rounded-md outline-none mb-2' type="text" placeholder='Title' onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </div>
            <h3 className='flex justify-start text-lg'>Description</h3>
            <textarea maxLength={400} rows={5} className='w-full p-2 rounded-md outline-none resize-none' type="text" placeholder='Description. . .' onChange={(e)=>setDescription(e.target.value)} value={description}/>
            <p className='flex justify-end text-gray-300'>100 Cratacter Remaing</p>
            <label className='flex'>
            <input className='text-2xl' type="checkbox" checked={check} onChange={(e)=>setCheck(e.target.checked)} id="" />
            <p className='ml-2'>i want to add this task</p>
            </label>
            <div className='flex justify-end gap-4 mt-5'> 
              <button className={`border-2 py-1 px-5 rounded-md ${check ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`} disabled={!check} onClick={handleSave}>Save</button>
              <button className='border-2 py-1 bg-white text-black border-black  px-4 rounded-md'>Cencel</button>
            </div> 
        </div>
    </div> 
    </>
  )
}

export default Home