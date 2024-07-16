import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../features/taskSlice'
import { ToastContainer, toast } from 'react-toastify'

const Deletepopup = ({setPopup,   val }) => {
    let dispatch = useDispatch()
    let hendlePopupDelete = (id)=>{ 
        dispatch(deleteTask(id))
         setPopup(true)
         toast.success('Delete a Task Compelete', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
          });
    }
  return (
    <>
    <ToastContainer/>
        <div className='container'>
            <div className='flex justify-center items-center'>
                <div className='w-1/4  bg-sky-500 p-2 rounded-md'>
                    <h2 className='text-white my-5'>Are you Sure, Delete This Task</h2>
                    <div className='flex justify-end gap-3'>
                        <button className='py-1 px-2 bg-red-500 text-white rounded-md' onClick={()=>hendlePopupDelete(val)}>Delete</button>
                        <button className='py-1 px-2 bg-white  rounded-md' onClick={()=>setPopup(true)}>Cencel</button>
                    </div>
                </div>
            </div>
        </div>
     </>
  )
}

export default Deletepopup