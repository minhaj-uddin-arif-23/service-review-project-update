import React, { useEffect, useState } from "react";
import { useAuth } from "../Hook/useAuth";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useAxiosSecuring } from "../Hook/useAxiosSecuring";

export default function MyServices() {
  const axiosSecuring = useAxiosSecuring();
  const [myReview, setReview] = useState([]);
  const [search, setSearch] = useState("");
  const { user } = useAuth();
  const [selectedServiceId, setSelectedServiceId] = useState(null); 

  useEffect(() => {
    fetchMyservice();
  }, [search]);

  const fetchMyservice = async () => {
    const { data } = await axiosSecuring.get(
      `/servicesOwn/${user?.email}?search=${search}`
    );
    setReview(data);
  };

  const handleDeleteMYservice = async (id) => {
    try {
      await axiosSecuring.delete(`/myServiceDelete/${id}`);
      fetchMyservice();
      toast.success("Deleted successfully");
    } catch (err) {
      toast.error("Something went wrong !!");
    }
  };

  const myserviceDelete = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <div>
          <p className="font-semibold">
            Are you <b className="text-blue-400">Sure?</b>
          </p>
        </div>
        <div className="gap-2">
          <button
            className="btn bg-red-500 text-white"
            onClick={() => {
              toast.dismiss(t.id);
              handleDeleteMYservice(id);
            }}
          >
            Yes
          </button>
          <button
            className="btn btn-outline ml-2"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  const confirmUpdateService = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <div>
          <p className="font-semibold">
            Update your <b className="text-blue-400">Service?</b> 
          </p>
        </div>
        <div className="gap-2">
          <button
            className="btn bg-green-500 text-white"
            onClick={() => {
              toast.dismiss(t.id);
             
              window.location.href = `/updateService/${id}`;
            }}
          >
            Yes
          </button>
          <button
            className="btn btn-outline ml-2"
            onClick={() => toast.dismiss(t.id)}
          >
            No
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-green-600 my-6 text-center">
        {user?.displayName} - Your All Services
      </h1>

      <Helmet>
        <title>Backend Forge Your Services</title>
      </Helmet>

      {/* Search */}
      <div className="flex justify-center my-6">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search services..."
          className="input input-bordered input-primary w-96 max-w-full"
        />
      </div>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="table table-zebra table-auto w-full lg:visible invisible">
          {/* Table Header */}
          <thead>
            <tr className="bg-green-100 text-green-700">
              <th className="py-3 px-4 text-left text-sm sm:text-base">#</th>
              <th className="py-3 px-4 text-left text-sm sm:text-base">Title</th>
              <th className="py-3 px-4 text-left text-sm sm:text-base">Company Name</th>
              <th className="py-3 px-4 text-left text-sm sm:text-base">Category</th>
              <th className="py-3 px-4 text-left text-sm sm:text-base">Price</th>
              <th className="py-3 px-4 text-center text-sm sm:text-base">Update</th>
              <th className="py-3 px-4 text-center text-sm sm:text-base">Delete</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {myReview?.map((data, index) => (
              <tr key={data._id} className="hover:bg-gray-50 transition">
                <td className="py-3 px-4 text-sm sm:text-base">{index + 1}</td>
                <td className="py-3 px-4 text-sm sm:text-base">{data.title}</td>
                <td className="py-3 px-4 text-sm sm:text-base">{data.name}</td>
                <td className="py-3 px-4 text-sm sm:text-base">{data.category}</td>
                <td className="py-3 px-4 text-sm sm:text-base">{data.price}</td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => confirmUpdateService(data._id)}
                    className="btn btn-sm bg-lime-400 text-black hover:bg-lime-500"
                  >
                    <CiEdit className="mr-2" />
                    Edit
                  </button>
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => myserviceDelete(data._id)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                  >
                    Delete <MdDeleteForever className="ml-2" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* For small screens, use flex layout */}
        <div className="sm:hidden">
          {myReview?.map((data, index) => (
            <div key={data._id} className="flex flex-col bg-gray-100 my-3 p-4 rounded-lg shadow-md">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">#</span>
                <span>{index + 1}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Title</span>
                <span>{data.title}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Company Name</span>
                <span>{data.name}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Category</span>
                <span>{data.category}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Price</span>
                <span>{data.price}</span>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => confirmUpdateService(data._id)}
                  className="btn btn-sm bg-lime-400 text-black hover:bg-lime-500"
                >
                  <CiEdit className="mr-2" />
                  Edit
                </button>
                <button
                  onClick={() => myserviceDelete(data._id)}
                  className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                >
                  Delete <MdDeleteForever className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
