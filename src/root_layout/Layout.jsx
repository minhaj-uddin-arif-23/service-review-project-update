import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function Layout() {
  return (
    <div>

    <header className='w-11/12 mx-auto z-50  top-0 fixed px-3 py-2 '>
      {/* this is navbar */}
      <Navbar />
      </header>
    <div className='w-11/12 mx-auto my-28'>
      {/* all components render or dynamically change this router */}
      <Outlet />
    </div>
  
      <footer>
        {/* statically all components can be shared */}
        {/* <Footer /> */}
      </footer>

    </div>
  )
}
