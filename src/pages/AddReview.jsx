import React, { useState } from 'react'
import { IoIosStarOutline } from 'react-icons/io'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Hook/useAuth';
export default function AddReview(){
    const {user} = useAuth()
      // const email = user?.email
  const [startDate, setStartDate] = useState(new Date());
  const[rating,setRating] = useState(null);
  const [hover,setHover] = useState(null);
  const navigate = useNavigate()
  const addToReview = async (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.details.value;
    const rating = form.rating.value;
    const review = {text,rating,
      user :{
        email : user?.email,
        name : user?.displayName,
        photo: user?.photoURL,
      },
      startDate};
    console.log(review)
    try{
      await axios.post(`${import.meta.env.VITE_API_URL}/add-review`,review)
      toast.success("Thanks to your valuable feedback!!")
      navigate('/myReview')
    }catch(err){
      toast.error("You can some mistake")
    }


  }


  return (
    <div>

<div className="card bg-base-100 w-ful max-w-sm shrink-0 shadow-2xl">
<h1 className='text-4xl  font-semibold'>Review This Service</h1>
      <form 
      onSubmit={addToReview}
      className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Review in service</span>
          </label>
          <textarea 
          name='details'
          className="textarea textarea-info" placeholder="Bio"></textarea>
        </div>
            {/* review */}
      <div>
      {[...Array(5)].map((star,index) => {
        const currentRating = index + 1;
        return( 
          <label>
            <input type="radio" 
            name='rating'
            value={currentRating}
            onClick={()=>setRating(currentRating)}
            />
            <IoIosStarOutline className='star'
              color={currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={()=>setHover(currentRating)}
              onMouseLeave={()=>setHover(null)}
            size={30} />
          </label>
      )

      })}

      </div>
      <div>
           {/* date */}
              <DatePicker selected={startDate} className="input input-bordered input-info w-full max-w-xs" onChange={(date)=>
                setStartDate(date)} //only when value has changed
                />
      </div>
        <div className="form-control mt-6">
          <button className="btn bg-lime-400 text-black">Save</button>
        </div>
      </form>
    </div>


     






    </div>
  )
}
