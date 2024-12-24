import React from "react";
import { Link } from "react-router-dom";
export default function ServiceDetails({ service }) {
  const {
    image,
    title,
    name,
    website,
    desc,
    category,
    startDate,
    price,
    email,
  } = service || {};




  return (
    <div className="card bg-gray-50 md:w-2/3 shadow-lg rounded-xl overflow-hidden border border-gray-200 ml-48 my-10">
      <div className="flex">
        <figure className=" bg-gray-100">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title text-xl font-bold text-gray-700 mb-2">
            {title}
          </h2>
          <p className="text-sm text-blue-600 underline mb-3">{website}</p>
          <p className="text-gray-500 mb-4">{desc}</p>
          <div className="flex justify-between items-center my-3">
            <span className="text-xl font-semibold text-emerald-500">
              {price}
            </span>
            <span className="bg-emerald-50 text-emerald-600 px-4 py-1 text-sm font-medium rounded-md">
              {category}
            </span>
          </div>
          <p className="text-sm text-gray-400 italic mb-4">Contact: {email}</p>
          <div className="card-actions justify-end">
            <Link to={`/review`}
            state={{title}}
            className="btn bg-lime-400 text-black">
              Add Review
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
