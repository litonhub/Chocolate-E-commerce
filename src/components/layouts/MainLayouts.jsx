import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router'

const MainLayouts = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayouts
