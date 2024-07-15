import React from 'react'

const Update = () => {
  return (
    <>
        <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-1/4  bg-gray-400 shadow-md rounded-md text-center box-border p-5'> 
            <h1 className='py-4 text-2xl'> Update Your Task</h1>             
            <h3 className='flex justify-start text-lg'>Name</h3>
            <input className='w-full p-2 rounded-md outline-none  mb-2' type="text" placeholder='Name'     />
            <div>

            <h3 className='flex justify-start text-lg'>Title</h3>
            <input className='w-full p-2 rounded-md outline-none mb-2' type="text" placeholder='Title'  />
            </div>

            <h3 className='flex justify-start text-lg'>Description</h3>
            <textarea maxLength={100} rows={5} className='w-full p-2 rounded-md outline-none resize-none' type="text" placeholder='Description. . .'  />
            <p className='flex justify-end text-gray-200'>{100 } Cratacter Remaing</p> 
             

            <div className='flex justify-end gap-4 mt-5'> 
              <button className='border-2 py-1 px-5 rounded-md bg-blue-500 text-white'>Save</button>
              <button className='border-2 py-1 bg-white text-black border-black  px-4 rounded-md' >Cencel</button>
            </div> 
        </div>
        </div>
    </>
  )
}

export default Update