import React from 'react'   
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='container'>
            <div className='bg-sky-400 flex justify-between mt-5'> 
                <div className='flex justify-start p-4'> <h3>Logo</h3></div>
                <div className='flex gap-4 items-center mr-20'>  
                  <Link to="/" className='border-2 border-blue-500 text-white hover:text-black  hover:bg-white py-1 px-4 rounded-md ' href="#">Home</Link>
                  <Link to ="/task-view" className='border-2 border-blue-500 text-white hover:text-black  hover:bg-white py-1 px-4 rounded-md ' href="#">Task View</Link>
                  <Link to="/contact" className='border-2 border-blue-500 text-white hover:text-black  hover:bg-white py-1 px-4 rounded-md ' href="#">Contact</Link>
                </div> 
            </div>
        </div>
     </>
  )
}

export default Navbar