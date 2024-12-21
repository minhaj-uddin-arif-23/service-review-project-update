import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { AuthContext } from '../Shared_Context/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
export default function Navbar() {

  const {user,signout} = useContext(AuthContext)
// console.log(signout)
  const link = <>
  
    <NavLink to={`/`}><li className='mr-4 font-semibold text- uppercase'>Home</li></NavLink>
    <NavLink to={`/h`}><li className='mr-4 font-semibold text- uppercase'>About me</li></NavLink>
    <NavLink to={`/i`}><li className='mr-4 font-semibold text- uppercase'>Contact</li></NavLink>
    <NavLink to={`/l`}><li className='mr-4 font-semibold text- uppercase'>Contact</li></NavLink>
    <NavLink to={`/w`}><li className='mr-4 font-semibold text- uppercase'>Profile</li></NavLink>
    <NavLink to={`/p`}><li className='mr-4 font-semibold text- uppercase'>All Page</li></NavLink>
    <NavLink to={`/q`}><li className='mr-4 font-semibold text- uppercase'>Send me email</li></NavLink>
  </>

  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {link}
        </ul>
      </div>
    <div className='flex '>
      {/* logo */} <p className='mt-3 text-xl text-lime-300 font-bold'><IoCodeSlash /></p>
    <a className="btn btn-ghost text-lg uppercase ">Project Name</a>
    </div>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {link}
      </ul>
    </div>
    <div className="navbar-end  gap-4">
    <div className="flex">
            {
            user && user?.email ? (
              <div className="flex gap-2">
                <Link to={`/profile`}>
                  <img
                    src={user?.photoURL}
                    className="w-10 h-10 rounded-full"
                    title={user?.displayName}
                    alt=""
                  />
                </Link>
              </div>
            ) : (
              <div className="mt-3 ">
                <FaUserCircle />
              </div>
            )
            }
      </div>
      {/* user && */}
    {
       user?.email ? (
      <>
        <button onClick={signout} className='btn bg-red-500' > Sign Out </button>
      </>
    )  :
    (
    <>
      <div>
      <Link to={`/auth/signIn`} className='btn bg-lime-400 text-black '>Sign in</Link>
      <Link to={`/auth/signUp`} className='btn bg-lime-400 text-black '>Sign up</Link>
      </div>
    </>)
    }

    </div>
  </div>
  )
}
