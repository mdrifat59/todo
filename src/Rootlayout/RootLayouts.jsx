import React from 'react'
import Navbar from '../components/menubar'
import { Outlet } from 'react-router-dom'

const RootLayouts = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default RootLayouts