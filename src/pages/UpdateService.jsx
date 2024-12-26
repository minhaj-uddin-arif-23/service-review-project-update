import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../Hook/useAuth'
import toast from 'react-hot-toast'
import { useAxiosSecuring } from '../Hook/useAxiosSecuring'

export default function UpdateService() {
  const axiosSecuring = useAxiosSecuring()
  const {user} = useAuth()
  const {id} = useParams()
  const [update,setUpdate] = useState({})
  const navigate = useNavigate()

  useEffect(()=>{
    fetchServiceData();
  },[id])

  const fetchServiceData = async () => {
    const {data} = await axiosSecuring.get(`/get-service-data/${id}`)
    console.log(data)
    setUpdate(data)
  }

  // console.log(update)

  const handleServiceUpdate = async (e) => {
    e.preventDefault();
   
    const title = e.target.title.value;
    const name = e.target.name.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
 

    const UpdateService = { 
      title,
      name,
      category,
      price,
    };
    console.log(UpdateService);

    try {
      await axiosSecuring.put(`/update-service/${id}`, UpdateService);
      toast.success("Service Updated successfully");
      navigate("/myService");
    } catch (err) {
      toast.error(err, "Update not added");
    }
  };


  return (
    <>
    <h1 className="text-3xl font-bold text-center border-b-4 border-lime-400 inline-block px-6 py-3 text-gray-700 my-6">
      Update Your Service
    </h1>
    <div className="flex justify-center items-center  bg-gradient-to-r from-blue-0 via-yellow-50 to-red-50">
      <div className="card bg-gradient-to-r from-green-200 via-lime-50 to-teal-50 w-full max-w-lg shadow-2xl border-2 border-gray-400 p-8 rounded-lg">
        <form onSubmit={handleServiceUpdate} className="space-y-5">
          {/* Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-600">Title</span>
            </label>
            <input
              defaultValue={update.title}
              type="text"
              name="title"
              placeholder="Title"
              className="input input-bordered input-info w-full"
              required
            />
          </div>
  
          {/* Company Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-600">
                Company Name
              </span>
            </label>
            <input
              name="name"
              type="text"
              defaultValue={update.name}
              placeholder="Name your company"
              className="input input-bordered input-info w-full"
              required
            />
          </div>
  
          {/* Category */}
          {
            update.category && (
              <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-600">
                Category
              </span>
            </label>
            <select
            defaultValue={update.category}
              name="category"
              className="select select-info w-full"
              required
            >
              <option disabled selected>
                Category
              </option>
              <option>Backend Technology</option>
              <option>Food</option>
              <option>Transport</option>
              <option>IT</option>
              <option>Repair Service Providers</option>
              <option>Chemicals</option>
              <option>Cultural Goods</option>
              <option>Bars & Cafes</option>
              <option>Vegetarian & Diet</option>
              <option>Jewelry & Watches</option>
              <option>Computers & Phones</option>
            </select>
          </div>
            )
          }
  
          {/* Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-600">Price</span>
            </label>
            <input
              name="price"
              type="number"
              defaultValue={update.price}
              placeholder="Price"
              className="input input-bordered input-info w-full"
              required
            />
          </div>
  
          {/* Submit Button */}
          <div className="form-control mt-4">
            <button className="btn bg-lime-400 hover:bg-lime-500 text-black w-full">
              Update Service
            </button>
          </div>
        </form>
  
        {/* My Service Link */}
        <div className="text-center mt-6">
          <Link to="/myService" className="btn bg-sky-500 hover:bg-sky-600 text-white">
            My Service Page
          </Link>
        </div>
      </div>
    </div>
  </>
  
  )
}
