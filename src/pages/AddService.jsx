import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hook/useAuth";
// -------------------->
export default function AddService() {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const { user } = useAuth();
  // ------------------>
  const handleService = async (e) => {
    e.preventDefault();
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
    console.log(service);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/add-services`, service);
      toast.success("Service added successfully");
      navigate("/");
    } catch (err) {
      toast.error(err, "Data not added");
    }
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleService} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Image</span>
            </label>
            <input
              name="image"
              type="url"
              placeholder="Upload your image"
              className="input input-bordered input-success w-full max-w-xs"
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
              className="input input-bordered input-success w-full max-w-xs"
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
              className="input input-bordered input-success w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Website</span>
            </label>
            <input
              name="website"
              type="url"
              placeholder="website link"
              className="input input-bordered input-success w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Desciption</span>
            </label>
            <textarea
              name="desc"
              className="textarea textarea-accent"
              placeholder="Bio"
            ></textarea>
          </div>
          <div>
            <select
              name="category"
              className="select select-success w-full max-w-xs"
            >
              <option disabled selected>
                Category
              </option>
              <option>Education</option>
              <option>Language Learning</option>
              <option>Medical Specialists</option>
              <option>Repair Service Providers</option>
              <option>Chemicals & Plastic</option>
              <option>Cultural Goods</option>
              <option>Bars & Cafes</option>
              <option>Vegetarian & Diet</option>
              <option>Jewelry & Watches</option>
              <option>omputers & Phones</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              name="price"
              type="number"
              placeholder="Price"
              className="input input-bordered input-success w-full max-w-xs"
              required
            />
          </div>
          {/* date */}
          <DatePicker
            selected={startDate}
            className="input input-bordered input-success w-full max-w-xs"
            onChange={(date) => setStartDate(date)} //only when value has changed
          />
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
              className="input input-bordered input-success w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Service</button>
          </div>
        </form>
      </div>
    </div>
  );
}
