import React from 'react'
import { SiBackendless } from 'react-icons/si'
import { Link } from 'react-router-dom'

export default function NavbarExtra() {
  return (
    <>
    <div className='bg-black'>
    <div className='w-11/12 mx-auto'>
    <div className="navbar ">
    <div className="flex-1 flex items-center gap-2 bg-black text-white">
        {/* Logo */}<SiBackendless className="text-lime-300 text-5xl ml-16 "  />
     
        <Link to="/" className="btn btn-ghost text-2xl uppercase font-bold ">
        Backend Forge
        </Link>
      </div>
    <div className="flex-none">
      {/* <ul className="menu menu-horizontal px-1">
        <li><a>Link</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul> */}
    </div>
  </div>
    </div>
    </div>
    </>
  )
}
