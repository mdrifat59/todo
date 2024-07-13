import React from 'react'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home</title>
    </Helmet>
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-1/4  bg-gray-400 shadow-md rounded-md text-center box-border p-5'>
        {/* <div className='text-center'>  */}
            <h1 className='py-4 text-2xl'> Add Your Task</h1> 
            <input className='w-full p-2 rounded-md outline-none ' type="text" placeholder='Name' />
            <input className='w-full p-2 rounded-md outline-none mt-5' type="text" placeholder='Email' />
            <textarea maxLength={400} rows={5} className='w-full p-2 rounded-md outline-none mt-5 resize-none' type="text" placeholder='Description' />
            <p className='flex justify-end text-gray-300'>100 Cratacter Remaing</p>
            <label className='flex'>
            <input className='text-2xl' type="checkbox" name="" id="" />
            <p className='ml-2'>i want to add this task</p>
            </label>
            <div className='flex justify-end gap-4 mt-5'>
              <button className='border-2 py-1 bg-blue-500 text-white px-5 rounded-md '>Save</button>
              <button className='border-2 py-1 bg-white text-black border-black  px-4 rounded-md'>Cencel</button>
            </div>
        {/* </div> */}
        </div>
    </div>
    </>
  )
}

export default Home