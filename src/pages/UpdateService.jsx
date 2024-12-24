import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../Hook/useAuth'
import toast from 'react-hot-toast'

export default function UpdateService() {
  const {user} = useAuth()
  const {id} = useParams()
  const [update,setUpdate] = useState({})
  const navigate = useNavigate()

  useEffect(()=>{
    fetchServiceData();
  },[id])

  const fetchServiceData = async () => {
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/get-service-data/${id}`)
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
      await axios.put(`${import.meta.env.VITE_API_URL}/update-service/${id}`, UpdateService);
      toast.success("Service Updated successfully");
      navigate("/myService");
    } catch (err) {
      toast.error(err, "Update not added");
    }
  };


  return (
 <>
  <h1 className='ml-10 text-4xl border-2 px-5 py-3 text-lime-900 mr-10 my-4'>Update your Service</h1>
    <div className='ml-10 my-5'>
    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-4">
      <form
      onSubmit={handleServiceUpdate}
      className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input 
          defaultValue={update.title}
          type="text"
         name='title'
          placeholder="title" className="input input-bordered input-info w-full max-w-xs" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">company Name</span>
          </label>
          <input
          name='name'
          type="text" placeholder="name your company" className="input input-bordered input-info w-full max-w-xs" required />
      
        </div>
        {/* update category  */}
        <div className="form-control">
        <select
          name="category"
          className="select select-success w-full max-w-xs"
        >
          <option disabled selected>
            Category
          </option>
          <option>Food</option>
          <option>Transport</option>
          <option>IT</option>
          <option>Repair Service Providers</option>
          <option>Chemicals & Plastic</option>
          <option>Cultural Goods</option>
          <option>Bars & Cafes</option>
          <option>Vegetarian & Diet</option>
          <option>Jewelry & Watches</option>
          <option>Computers & Phones</option>
        </select>
      </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
          name='price'
          type="number" placeholder="price" className="input input-bordered input-info w-full max-w-xs" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-lime-400 text-black">Update Service</button>
        </div>
      </form>
    
    </div>
    <div className='my-3'>
        <Link to={`/myService`} className='btn bg-sky-500 text-white'>My Serivce page</Link>
      </div>
    </div>
 </>
  )
}
