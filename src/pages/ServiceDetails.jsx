import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import ALLReviews from "../Components/ALLReviews";
import { format } from "date-fns";
import axios from "axios";
import ReviewShowAll from "../Components/ReviewShowAll";
import { Helmet } from "react-helmet";
import { MdOutlineCall } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
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

  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchAllReview();
  }, [_id]);
  const fetchAllReview = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/all-reviews-show/${_id}`
    );
    setReview(data);
  };

  return (
    <>
      <div>
        <Helmet>
          <title> Backend Forge Details </title>
        </Helmet>
      </div>
      <div className="mt-36  shadow-lg rounded-xl overflow-hidden border border-gray-200 my-10 mx-auto md:w-3/5 lg:w-1/2 bg-[#fcfbf3]">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <figure className="bg-gray-100 w-full md:w-2/5">
            <img src={image} alt={title} className=" object-cover" />
          </figure>

          {/* Details Section */}
          <div className="card-body p-4 w-full md:w-3/5">
            <h2 className="card-title text-2xl font-bold">{title}</h2>
            <div className="flex gap-4 ">
              <h1 className="text-gray-500 font-semibold ">
                Reviews {review.length}
              </h1>
              <h2 className=" border-2 border-gray-300 font-bold  px-3 rounded-md text-gray-500">
                Exellent
              </h2>
            </div>
            <a
              href="#"
              className="text-sm text-blue-600 underline mb-2 break-words"
            >
              {/* {website} */}
            </a>
            <p className="text-gray-500 mb-3">{desc}</p>

            {/* Price and Category */}
            <div className="flex justify-between items-center my-2">
              <span className="text-lg font-semibold text-emerald-700">
                ${price}
              </span>
              <span className="bg-emerald-50 text-emerald-600 px-3 py-1 text-sm font-medium rounded-md">
                {category}
              </span>
            </div>

            {/* Contact Information */}
            <p className="text-sm text-gray-400 italic mb-3 break-words">
              {/* Contact: {email} */}
            </p>
            {/* date */}
            <p>
              {/* {startDate? format(new Date(startDate),"do MMMM YYYY") : "N/A"} */}
              {format(new Date(startDate), "do MMMM yyyy")}
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

      <div></div>

      {/* show review this */}
      <div className="w-11/12 mx-auto text-2xl font-semibold text-lime-800 ml-24 my-10 bg-[#fcfbf3]">
        <h1>Total Review :{review.length}</h1>
      </div>
      <div className=" gap-5 mb-20 grid grid-cols-12  ">
        <div className="col-span-12 md:col-span-8  p-4 bg-[#fcfbf3]">
          {review?.map((data) => (
            <ReviewShowAll key={data._id} data={data} />
          ))}
        </div>
        {/* right side */}
        <div className=" col-span-12 md:col-span-4 p-4 bg-[#fcfbf3]">
          <div>
            <div className="card bg-base-100 w-96 shadow-xl">
              <h1 className="p-4 font-semibold text-green-800">About {title}</h1>
              <figure>
                <img
                  src={image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-gray-500">{desc}</p>
                <h1 className="font-semibold text-lg text-green-600">Contact Information</h1>
                <div className="space-y-2 border-2 p-3 rounded-xl">
                  
    
                  <h1 className="flex gap-3"> <MdOutlineCall /> 01571185975</h1>
                  <p className="flex gap-3"> <MdMarkEmailRead /> {email} </p>
                  <div className="flex gap-3"><CiLocationOn className="text-2xl" /> 1703,Chittagong Bakalia ,17 no word Chadgao chittagong</div>
                  <div className="">{}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
