import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../Hook/useAuth";

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
  console.log(myReview)

  

  return <div>
  <h1>My service</h1>

  <div>
  
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
        <td><button className="btn bg-lime-300">edit</button></td>
        <td><button   className="btn bg-red-500">Delete</button></td>
      </tr>
        </>)
      }

    </tbody>
  </table>
</div>
    </div>
  </div>;
}
