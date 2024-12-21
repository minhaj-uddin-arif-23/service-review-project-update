import React from 'react'
import { Link } from 'react-router-dom'

export default function ServiceCard({data}) {
  const {_id,image, title,  desc, category, price} =data || {}
  return (
    <div className="card card-compact bg-base-100 border-2  shadow-xl">
    <figure>
      <img className='w-80 object-cover'
        src={image}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
     <div className='flex justify-between'>
     <p>{category}</p>
     <p>${price}</p>
     
     </div>
      {desc}
    
      <div className="card-actions">
        <Link to={`/details/${_id}`} className="btn bg-lime-500 text-black font-bold">See Details</Link>
      </div>
    </div>
  </div>
  )
}
