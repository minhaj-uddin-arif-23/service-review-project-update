import React, { useEffect, useState } from 'react'
import { useAuth } from '../Hook/useAuth';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReviewShowAll from './ReviewShowAll';

export default function ALLReviews() {
  const {id} = useParams()
   const {user} = useAuth()
    const [review,setReview] = useState([])
    
  useEffect(()=>{
    if(id && user?.email){
      fetchAllReview()
    }
  },[id,user?.email])
  const fetchAllReview = async () => {

    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/All-review-show/${user?.email}/${id}`)
    setReview(data)
    console.log(data)
  } 
  return (
    <>
        <div className=' gap-5 space-y-10'>
        
          {
            
             review?.map(data => <ReviewShowAll key={data._id} data={data}/>) 
            
          }
    </div>
    </>
  )
}
