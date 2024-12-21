import React from 'react'

export default function ServiceDetails({service}) {
  const {image, title, name, website, desc, category,startDate, price, email} = service || {}

     return (
      <div className="card bg-white w-full md:w-96 shadow-2xl rounded-lg overflow-hidden">
      <figure className="h-64 bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title text-2xl font-semibold text-gray-800">
          {title}
        </h2>
        <p className="text-sm text-gray-500 mb-3">{website}</p>
        <p className="text-gray-600 mb-2">{desc}</p>
        <div className="flex justify-between items-center my-4">
          <span className="text-lg font-medium text-green-600">{price}</span>
          <span className="bg-blue-100 text-blue-500 px-3 py-1 text-sm rounded-full">
            {category}
          </span>
        </div>
        <p className="text-sm text-gray-500 italic">Contact: {email}</p>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transform transition-transform">
            Explore More
          </button>
        </div>
      </div>
    </div>
    
  )
  
}
