import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../Hook/useAuth";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

export default function MyServices() {
  const [myReview, setReview] = useState([]);
  const {user} = useAuth()
  useEffect(() => {
    fetchMyservice();
  }, []);
  const fetchMyservice = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/servicesOwn/${user?.email}`
    );
    setReview(data);
  };
  console.log(myReview);
  // console.log(myReview)
  const handleDeleteMYservice = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/myServiceDelete/${id}`
      );
      fetchMyservice()
      toast.success("Deleted successfully");
   
    } catch (err) {
      toast.error("Something was wrong !!");
    }

  };

  const myserviceDelete = (id) => {
    toast(
      (t) => (
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
              yes
            </button>
            <button
            className="btn btn-outline ml-2"
             onClick={() => toast.dismiss(t.id)}>cancel</button>
          </div>
        </div>
      ),
     
    );
  };





  return <div>
  <h1 className="text-2xl font-semibold text-green-500 my-4"> {user?.displayName} your all Service</h1>

  <div> 
    <div className="my-5"><input
  type="text"
  placeholder="Search here"
  className="input input-bordered input-primary w-full max-w-xs" /></div>
  
  </div>
    <div>
    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Number</th>
        <th>Title</th>
        <th>Company Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        myReview?.map((data,index)=><>
          <tr>
            <th>{index + 1}</th>
        <th>{data.title}</th>
        <td>{data.name}</td>
        <td>{data.category}</td>
        <td>{data.price}</td>
        <td><button className="btn bg-lime-400 text-black"><CiEdit />Edit</button></td>
        <td><button onClick={()=>myserviceDelete(data._id)}  className="btn bg-red-500 text-white">Delete <MdDeleteForever /></button></td>
      </tr>
        </>)
      }

    </tbody>
  </table>
</div>
    </div>
  </div>;
}
