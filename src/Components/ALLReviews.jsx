import React, { useEffect, useState } from 'react'
import { useAuth } from '../Hook/useAuth';
import axios from 'axios';

export default function ALLReviews() {
   const {user} = useAuth()
    const [review,setReview] = useState()
    
  useEffect(()=>{
    fetchAllReview();
  },[])
  const fetchAllReview = async () => {

    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/All-review-show`)
    setReview(data)
    // console.log(data)
  } 
  return (
    <>
    {/* <h1>Total Review is: {review.length}</h1> */}
        <div className=' gap-5 space-y-10'>
      {
        review?.map(data => (<>
         <div className="card   shadow-md p-4 max-w-md mx-auto">
      

      <div className="flex items-center gap-4 mb-4">
        <div className="avatar">
          <div className="w-12 rounded-full bg-neutral-focus text-neutral-content">
            <img src={user?.photoURL} alt="" />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">{user?.displayName}</h2>
          <p className="text-sm text-gray-500">{data.rating} reviews • BD</p>
        </div>
      </div>

   

      <p className="text-lg font-semibold mb-2">{data.title}</p>
      <p>{data.text}</p>
      <p className="text-sm text-gray-500 mb-4">
        Date of experience: December 22, 2024
      </p>
{/* 
      <div className="flex gap-4">
        <Link
        to={`/update/${data._id}`}
        className="btn btn-outline btn-sm">Edit</Link>
        <button
          onClick={() => modernDelete(data._id)}
          className="btn btn-error btn-sm text-white"
        >
          Delete
        </button>
      </div> */}
    </div>
        
        </>))
      }
    </div>
    </>
  )
}
