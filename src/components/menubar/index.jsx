import React from 'react'   

const Navbar = () => {
  return (
    <>
        <div className='container'>
            <div className='bg-sky-400 flex justify-between mt-5'> 
                <div className='flex justify-start p-4'> <h3>Logo</h3></div>
                <div className='flex gap-4 items-center mr-20'>  
                  <a className='border-2 border-blue-500 text-white hover:text-black  hover:bg-white py-1 px-4 rounded-md ' href="#">Home</a>
                  <a className='border-2 border-blue-500 text-white hover:text-black  hover:bg-white py-1 px-4 rounded-md ' href="#">Task View</a>
                  <a className='border-2 border-blue-500 text-white hover:text-black  hover:bg-white py-1 px-4 rounded-md ' href="#">Contact</a>
                </div> 
            </div>
        </div>
     </>
  )
}

export default Navbar