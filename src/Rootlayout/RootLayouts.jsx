import React from 'react'
import Navbar from '../components/menubar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayouts = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayouts