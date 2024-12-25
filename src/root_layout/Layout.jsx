import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function Layout() {
  return (
    <div>

    <div className='bg-black'>
    <header className='w-11/12 mx-auto z-50  top-0 sticky   '>
      {/* this is navbar */}
     
    <Navbar />
      </header>
    </div>
    <div className='w-11/12 mx-auto my-28'>
      {/* all components render or dynamically change this router */}
      <Outlet />
    </div>
  
      <footer className='mt-20'>
        {/* statically all components can be shared */}
        <Footer />
      </footer>

    </div>
  )
}
