import React, { useEffect, useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Hook/useAuth";
import { useLocation } from "react-router-dom";
export default function UpdateReview() {
  const { user } = useAuth();
  // const email = user?.email
  const [startDate, setStartDate] = useState(new Date());
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  // const navigate = useNavigate();
  const [update,setUpdate] = useState({})
const {id} = useParams()
  const location = useLocation()
  const {title} = location.state || {}

  useEffect(()=>{
    fetchReview();
  },[])
  const fetchReview = async () => {

    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/update/${id}`)
    setUpdate(data)
    // console.log(data)
  } 
  console.log(update)

  return (
    <div>
      <div className="card bg-base-100 w-ful max-w-sm shrink-0 shadow-2xl ml-20 my-10 p-3">
        <h1 className="text-4xl  font-semibold p-3">Update your review</h1>
        <form  className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Review in service</span>
            </label>
            <textarea
              name="details"
              defaultValue={update.text}
              className="textarea textarea-info"
              placeholder="Bio"
            ></textarea>
          </div>
          {/* review */}
          <div>
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    defaultValue={update.rating}
                    onClick={() => setRating(currentRating)}
                  />
                  <IoIosStarOutline
                    className="star"
                    color={
                      currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                    size={30}
                  />
                </label>
              );
            })}
          </div>
          <div>
            {/* date */}
            <DatePicker
              selected={startDate}
              className="input input-bordered input-info w-full max-w-xs"
              onChange={(date) => setStartDate(date)} //only when value has changed
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-lime-400 text-black">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
