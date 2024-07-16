import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { formatDistance, } from 'date-fns'
import { deleteTask } from '../features/taskSlice'
import { ToastContainer, toast } from 'react-toastify'
import Update from '../components/menubar/Update'

const Task = () => {
  let taskView = useSelector((state) => state.task.tasks)
  let dispatch = useDispatch()
  let [show, setShow] = useState(false)
  let [editName, setEditName] = useState("")
  let [editTitle, setEditTitle] = useState("")
  let [editDescription, setEditDescription] = useState("")
  let [editId, setEditId] = useState("")
  let[visible, setVisiable]= useState(8)

  let handleDelete = (id) => {
    dispatch(deleteTask(id))
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

  let handleUpdate = (item) => {
    setShow(true)
    setEditName(item.name)
    setEditTitle(item.title)
    setEditDescription(item.description)
    setEditId(item.id)
  }

  let handleMoreTask= ()=>{   
      setVisiable((prev)=>prev + 4)    
  }

  return (
    <>
      <Helmet>
        <title>Task-view</title>
      </Helmet>
      <ToastContainer />
      {!show ?

        <div className='container pb-5'>
          <h1 className='text-center text-4xl my-2'>All Task</h1>
          <div className='grid grid-cols-4 gap-3 mt-5'>
            {taskView.slice(0,visible).map(item => (
              <div className='border border-black  rounded-md shadow-xl p-3'>
                <h2><span className='font-bold'>Name:</span> {item.name}</h2>
                <h3><span className='font-bold'>Title:</span> {item.title}</h3>
                <p><span className='font-bold'>Description:</span> {item.description}</p>
                <h4>{formatDistance(item.createdAt, new Date(), { addSuffix: true })}</h4>
                <div className='flex justify-end gap-3'>
                  <button className='border bg-red-500 text-white py-1 px-4 rounded-md hover:border-red-500 hover:bg-white hover:text-red-500' onClick={() => handleDelete(item.id)}>Delete</button>
                  <button className='border bg-gray-500 text-white py-1 px-4 rounded-md hover:border-gray-500 hover:bg-white hover:text-gray-500' onClick={() => handleUpdate(item)}>Update</button>
                </div>
              </div>
            ))}
          </div>
          {
            visible < taskView.length && (
            <div className='text-center'>
              <button className='bg-green-500 text-white py-1 px-2 rounded-md mt-5' onClick={handleMoreTask}>More Task</button>
          </div>
            )
          }
        </div>

        :

        <>
          {<Update setShow={setShow} editName={editName} editTitle={editTitle} editDescription={editDescription} editId={editId} setEditDescription={setEditDescription} setEditName={setEditName} setEditTitle={setEditTitle} />}

        </>
      }

    </>
  )
}

export default Task