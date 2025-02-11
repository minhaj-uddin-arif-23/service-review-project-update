import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hook/useAuth";
import Loadings from "../Components/Loadings";
// -------------------->
export default function AddService() {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading,setLoading] = useState(true)

  useState(() => {
    setTimeout(() => {
      setLoading(false)
    },1000)
  })
  // ------------------>
  const handleService = async (e) => {
    e.preventDefault();
    setLoading(true)
    const image = e.target.image.value;
    const title = e.target.title.value;
    const name = e.target.name.value;
    const website = e.target.website.value;
    const desc = e.target.desc.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const email = user?.email;

    const service = {
      image,
      user : {
        email,
        name : user?.displayName,
        photo: user?.photoURL,
      },
      title,
      name,
      website,
      desc,
      category,
      startDate,
      price,
      Total_review: 0,
      email,
    };
    

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/add-services`, service);
      toast.success("Service added successfully");
      navigate("/service");
    } catch (err) {
      toast.error(err, "Data not added");
    }finally{
      setLoading(false)
    }
  };

  return (
    <div>
    <div>
  <h1 className="mb-8 flex text-center justify-center text-5xl font-semibold text-green-800">Add Your Service</h1>
  <hr className="mb-9 border-b-2  border-green-800 w-1/2 mx-auto mt-4" />
</div>
  <div className="card bg-green-50 w-full max-w-full shrink-0 shadow-2xl shadow-slate-400 border-2 border-gray-500">
    <form onSubmit={handleService} className="card-body">
      <div className="flex flex-wrap gap-4">
        {/* Left Side */}
        <div className="flex-1">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Image</span>
            </label>
            <input
              name="image"
              type="url"
              placeholder="Upload your image"
              className="input input-bordered input-success w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Title</span>
            </label>
            <input
              name="title"
              type="text"
              placeholder="title"
              className="input input-bordered input-success w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered input-success w-full"
              required
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Website</span>
            </label>
            <input
              name="website"
              type="url"
              placeholder="website link"
              className="input input-bordered input-success w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="desc"
              className="textarea textarea-accent w-full"
              placeholder="Bio"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              name="price"
              type="number"
              placeholder="Price"
              className="input input-bordered input-success w-full"
              required
            />
          </div>
        </div>
      </div>

      {/* Category & Date Picker (full width) */}
      <div className="form-control">
        <select
          name="category"
          className="select select-success w-full max-w-xs"
        >
          <option disabled selected>
            Category
          </option>
          <option>Backend Technology</option>
          <option>Education</option>
          <option>Transport</option>
          <option>IT</option>
       
          <option>Chemicals</option>
          <option>Cultural Goods</option>
         
         
         
          {/* <option>Computers & Phones</option> */}
        </select>
      </div>

      {/* Date Picker */}
      <div className="form-control">
        <DatePicker
          selected={startDate}
          className="input input-bordered input-success w-full"
          onChange={(date) => setStartDate(date)} //only when value has changed
        />
      </div>

      {/* Email Input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          name="email"
          type="email"
          placeholder="email"
          defaultValue={user?.email}
          readOnly
          className="input input-bordered input-success w-full"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="form-control mt-6">
        <button className="btn bg-lime-300 font-bold w-full">{loading ? <Loadings /> : "Add Service"}</button>
      </div>
    </form>
  </div>
</div>

  );
}
