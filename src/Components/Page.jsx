import React from 'react'
import img from '../assets/c.jpeg'
export default function Page({data}) {
  const {id,name,country,age,work} = data || {}
  return (
    <div>
      <div className="card card-compact bg-base-100 border-2 border-gray-300 shadow-xl">
  <figure>
    <img
      src={img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>I{work}</p>
    <p>{age}</p>
    <p>Country :{country}</p>
    <div className="card-actions ">
      <button className="btn btn-outline">Details</button>
    </div>
  </div>
</div>
    </div>
  )
}
