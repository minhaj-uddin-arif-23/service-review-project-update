import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import ALLReviews from "../Components/ALLReviews";
import axios from "axios";
import ReviewShowAll from "../Components/ReviewShowAll";
import { Helmet } from "react-helmet";
export default function ServiceDetails({ service }) {
  
    // const [startDate, setStartDate] = useState(new Date());
   
  const {
    _id,
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


  
    const [review,setReview] = useState([])
      
    useEffect(()=>{
    
        fetchAllReview()
      
    },[_id])
    const fetchAllReview = async () => {
  
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/all-reviews-show/${_id}`)
      setReview(data)
      console.log(data)
    } 
    console.log('review found this',review)



  return (
   <>
   <div>
    <Helmet >
      <title> Backend Forge Details  </title>
    </Helmet>
   </div>
   <div className="card bg-gray-50 shadow-lg rounded-xl overflow-hidden border border-gray-200 my-10 mx-auto md:w-4/5 lg:w-3/5">
  <div className="flex flex-col md:flex-row">
    {/* Image Section */}
    <figure className="bg-gray-100 w-full md:w-2/5">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </figure>

    {/* Details Section */}
    <div className="card-body p-4 w-full md:w-3/5">
      <h2 className="card-title text-lg font-bold text-gray-700 mb-2">
        {title}
      </h2>
      <a href="#" className="text-sm text-blue-600 underline mb-2 break-words">
        {website}
      </a>
      <p className="text-gray-500 mb-3">{desc}</p>

      {/* Price and Category */}
      <div className="flex justify-between items-center my-2">
        <span className="text-lg font-semibold text-emerald-700">${price}</span>
        <span className="bg-emerald-50 text-emerald-600 px-3 py-1 text-sm font-medium rounded-md">
          {category}
        </span>
      </div>

      {/* Contact Information */}
      <p className="text-sm text-gray-400 italic mb-3 break-words">
        Contact: {email}
      </p>
      {/* date */}
      <p> 
            {startDate}
      </p>

      {/* Review Button */}
      <div className="card-actions justify-end">
        <Link
          to={`/review/${_id}`}
          state={{ title }}
          className="btn bg-lime-400 text-black px-5 py-2"
        >
          Add Review
        </Link>
      </div>
    </div>
  </div>
</div>


    
    <div>
    </div>


    {/* show review this */}
    <div className="w-11/12 mx-auto text-2xl font-semibold text-lime-800 ml-24 my-10">
      <h1>Total Review :{review.length}</h1>
    </div>
        <div className=' gap-5 space-y-10'>
            
              {
                
                 review?.map(data => <ReviewShowAll key={data._id} data={data}/>) 
                
              }
        </div>
   
   </>
  );
}
