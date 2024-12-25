import React, { useEffect, useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Hook/useAuth";
import { useLocation } from "react-router-dom";
import NavbarExtra from "../Components/NavbarExtra";
export default function UpdateReview() {
  const { user } = useAuth();
  // const email = user?.email
  
  const [startDate, setStartDate] = useState(new Date());
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const navigate = useNavigate();
  const [update,setUpdate] = useState({})
const {id} = useParams()
  // const location = useLocation()
  // const {title} = location.state || {}

  useEffect(()=>{
    fetchReview();
  },[])
  const fetchReview = async () => {

    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/update/${id}`)
    setUpdate(data)
    // console.log(data)
  } 
  // console.log(update)
  // update review
  const reviewUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.details.value;
    const rating = form.rating.value;
    const review = {  
      text,
      rating,
      startDate
    };
    console.log(review);
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/update-review-add/${id}`, review);
      toast.success("Your Review is updated!!");
      navigate("/myReview");
    } catch (err) {
      toast.error("You can some mistake");
    }
  };



  return (
<>
    <div>
      <NavbarExtra />
    </div>
    <div className="flex justify-center">
  <div className="card bg-gradient-to-t from-blue-100 via-blue-200 to-white w-full max-w-sm shrink-0 shadow-2xl my-10 p-6 rounded-lg">
    <h1 className="text-3xl font-semibold text-center text-gray-800 p-3">Update your review</h1>
    <form onSubmit={reviewUpdate} className="card-body space-y-4">
      {/* Review Rating Section First */}
      <div className="flex justify-center space-x-1">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                checked={rating === currentRating}
                onClick={() => setRating(currentRating)}
              />
              <IoIosStarOutline
                className="star"
                color={currentRating <= (hover || rating) ? "#8FD14F" : "#3B1C32"}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
                size={30}
              />
            </label>
          );
        })}
      </div>
      
      {/* Review Section Below Rating */}
      <div className="form-control">
        <label className="label text-gray-700">
          <span className="label-text">Review in service</span>
        </label>
        <textarea
          name="details"
          defaultValue={update.text}
          className="textarea textarea-info w-full p-3 rounded-lg border border-gray-300"
          placeholder="Write your review here..."
        ></textarea>
      </div>

      {/* Date Picker */}
      <div className="flex justify-center">
        <DatePicker
          selected={startDate}
          className="input input-bordered input-info w-full max-w-xs p-3 rounded-lg border border-gray-300"
          onChange={(date) => setStartDate(date)}
        />
      </div>
      
      {/* Submit Button */}
      <div className="form-control mt-6">
        <button className="btn bg-lime-400 text-black w-full sm:w-auto rounded-lg py-3">Save</button>
      </div>
    </form>
  </div>
</div>
</>



  
  
  );
}
