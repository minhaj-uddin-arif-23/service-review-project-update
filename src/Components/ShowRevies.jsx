import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Hook/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

export default function ShowRevies({item}) {
  const { title, text, rating } = item || {};
  const [items, setItem] = useState();
  const { user } = useAuth();
  // console.log(item);


  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/removeR/${id}`
      );
      // setItem(data)
      setItem(data)
      toast.success("Deleted successfully");
   
    } catch (err) {
      toast.error("Something was wrong !!");
    }

  };
  return (
    <div className="card bg-base-100 shadow-md p-4 max-w-md mx-auto">
      {/* <div className="alert alert-info text-sm mb-4"> */}
      {/* <span>Your review is pending. <a href="#" className="underline">Read more</a></span> */}
      {/* </div> */}

      <div className="flex items-center gap-4 mb-4">
        <div className="avatar">
          <div className="w-12 rounded-full bg-neutral-focus text-neutral-content">
            <img src={user?.photoURL} alt="" />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">{user?.displayName}</h2>
          <p className="text-sm text-gray-500">{rating} reviews • BD</p>
        </div>
      </div>

   

      <p className="text-lg font-semibold mb-2">{title}</p>
      <p>{text}</p>
      <p className="text-sm text-gray-500 mb-4">
        Date of experience: December 22, 2024
      </p>

      <div className="flex gap-4">
        <Link className="btn btn-outline btn-sm">Edit</Link>
        <button
          onClick={() => handleDelete(item._id)}
          className="btn btn-error btn-sm text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
