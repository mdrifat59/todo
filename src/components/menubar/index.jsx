import React from 'react'    
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const linkClass = (path) => 
    `border-2 border-blue-500 ${
      location.pathname === path ? 'bg-white text-black' : 'text-white'
    } hover:text-black hover:bg-white py-1 px-4 rounded-md`;
  return (
    <>
        <div className='container'>
            <div className='bg-sky-400 flex justify-between mt-5'> 
                <div className='flex justify-start p-4'> <h3>Logo</h3></div>
                <div className='flex gap-4 items-center mr-20'>   
                   <Link to="/" className={linkClass('/')}>Home</Link>
                  <Link to="/task-view" className={linkClass('/task-view')}>Task View</Link>
                  <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
                </div> 
            </div>
        </div>
     </>
  )
}

export default Navbar