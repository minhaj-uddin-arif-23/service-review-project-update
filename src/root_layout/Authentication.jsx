import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

export default function Authentication() {
  return (
    <div>
       <div className='bg-black'>
        <header className='w-11/12 mx-auto z-50  top-0 sticky    '>
          {/* this is navbar */}
         
        <Navbar />
          </header>
        </div>
      <Outlet />
      <Footer />
    </div>
  )
}
