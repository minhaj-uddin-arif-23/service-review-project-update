import React, { useEffect, useState } from "react";
import { useAuth } from "../Hook/useAuth";
import { format } from "date-fns";
import { GrLike } from "react-icons/gr";
import { RiShareForwardLine } from "react-icons/ri";
export default function ReviewShowAll({ data }) {
     const [startDate, setStartDate] = useState(new Date());
  const {user} = useAuth()

useEffect(()=>{
  if(data?.startDate){
    setStartDate(new Date(data.startDate));
  }
},[data])


  return (
    <div className='rounded-sm'>
   
      <div className=" my-5 shadow-md max-w-xl mx-auto p-3 bg-white border-2 border-lime-200">
     
      <div className=" bg-white  ">
      <div className="flex items-center gap-4 mb-4 border-2 border-gray-50 p-3 rounded-sm shadow-sm">
        <div className="avatar">
          <div className="w-12 rounded-full bg-neutral-focus text-neutral-content">
            <img 
               referrerPolicy="no-referrer"
            src={`${data?.user?.photo}`} alt="" />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">{data?.user?.name}</h2>
          
          <p className="text-sm text-gray-500">{data.rating} reviews • BD</p>
        </div>
      </div>
      </div>
  
<div className="p-5 ">
     <p className="text-lg font-semibold mb-2">{data.title}</p>
      <p>{data.text}</p>
      <p className="text-sm text-gray-500 mb-4">
          {format(new Date(startDate), "do MMMM yyyy")}
          {/* {startDate ? format(startDate,)} */}
      </p>
      <div className='flex gap-4'>
      <p> <GrLike /> </p>
      <p className="text-xl ">  <RiShareForwardLine /> </p>
      </div>
     </div>

    </div>
    </div>
  );
}
