import React from 'react'
import { Link } from 'react-router-dom'

export default function Slidess({image,text}) {
  return (
    <div
      className=' h-60 md:h-[20rem] md:w-full bg-center bg-cover lg:h-[26rem] 2xl:[h-35rem] '
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>
          <h1 className='md:text-3xl font-semibold text-white lg:text-4xl'>
            {text}
          </h1>
          <br />
         
        </div>
      </div>
    </div>
  )
}
