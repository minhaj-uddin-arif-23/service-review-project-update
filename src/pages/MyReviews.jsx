import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../Hook/useAuth';
import ShowRevies from '../Components/ShowRevies';

export default function MyReviews() {
   const {user} = useAuth()
  const [review,setReview] = useState()

  useEffect(()=>{
    fetchReview();
  },[user])
  const fetchReview = async () => {

    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/reviewShow/${user?.email}`)
    setReview(data)
    // console.log(data)
  } 

  return (
    <div className='flex gap-5'>
      {
        review?.map(data => <ShowRevies key={data._id} item={data} />)
      }
    </div>
  )
}
