import Lottie from 'lottie-react'
import React from 'react'
import { Link } from 'react-router-dom'
import error from '../assets/error.json'
// import { FaArrowLeft } from 'react-icons/fa'
export default function Error() {
  return (
    <div className='flex lg:flex-row flex-col p-10' >
      <h1 className='text-4xl text-red-400 font-semibold '>You Have Get a Error</h1>
    <Link to={`/`} className='w-48 mt-16 btn bg-pink-600 text-lg text-white '> 
      Go To Home Page
      </Link>
      <div>
      <Lottie animationData={error} ></Lottie>
      </div>
    </div>
  )
}
