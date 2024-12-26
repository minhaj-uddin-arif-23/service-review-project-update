import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../Hook/useAuth';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
// import ShowRevies from '../Components/ShowRevies';

export default function MyReviews() {
   const {user} = useAuth()
  const [review,setReview] = useState()

  useEffect(()=>{
    fetchReview();
  },[])
  const fetchReview = async () => {

    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/reviewShow/${user?.email}`)
    setReview(data)
  
  } 
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/removeR/${id}`
      );
      fetchReview()
      toast.success("Deleted successfully");
   
    } catch (err) {
      toast.error("Something was wrong !!");
    }

  };

  const modernDelete = (id) => {
    toast(
      (t) => (
        <div className="flex gap-3 items-center">
          <div>
            <p className="font-semibold">
              Discard your <b className="font-bold text-lime-900">review?</b>
            </p>
          </div>
          <div className="flex gap-3">
            <button
            className="btn btn-error btn-sm text-white"
              onClick={() => {

                toast.dismiss(t.id);
                handleDelete(id);
              }}
            >
              yes
            </button>
            <button
            className="btn bg-lime-500 btn-sm text-white"
             onClick={() => toast.dismiss(t.id)}>cancel</button>
          </div>
        </div>
      ),
      // {
      //   icon: <Icon />,
      // }
    );
  };

  return (
    <>
        <div className=' gap-5 space-y-6'>
          {/* <h1>Total Review is: {review.length}</h1> */}
          <h1 className='text-xl italic text-green-600 font-semibold my-10'>{user?.displayName} <span className='text-black'>You can review this</span></h1>
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
      </div>
    </div>
        
        </>))
      }
    </div>
    </>
  )
}