import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

export default function Authentication() {
  return (
    <div>
      <header className='w-11/12 mx-auto z-50  top-0 fixed'>
      <Navbar />
      </header>
      <Outlet />
      <Footer />
    </div>
  )
}
