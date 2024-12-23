import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { useLoaderData } from "react-router-dom";

export default function Service() {

  // pagination
  const [currentPage,setCurrentPage] = useState(0)
  // const [count,setCount] = useState()
  const {count} = useLoaderData()
  const [itemperPage,setItemperPage] = useState(5);
  const totalService = Number(count) || 0;
  const numberOfPages = Math.ceil(totalService / itemperPage);
  const pages =  [...Array(numberOfPages).keys()];
  console.log(pages);

  const handleChange = (e) => {
    // console.log(e.target.value);
    const val = parseInt(e.target.value);
    setItemperPage(val);
    setCurrentPage(0)
    // console.log(val);
  };
  const [service, setService] = useState([]);
  useEffect(() => {
    fetchAllService();
  }, [currentPage,itemperPage]);
  const fetchAllService = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/all-Service?&page=${currentPage}&size=${itemperPage}`
    );
    setService(data);
  };

  // handle prev and next
  const handlePrev = () => {
    if(currentPage > 0){
        setCurrentPage(currentPage-1)
    }
  }
  const handleNext = () =>{
    if(currentPage < pages.length -1){
      setCurrentPage(currentPage + 1 )
    }
  }

  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold text-lime-700 my-4">
          Best Services in Deals
        </h1>{" "}
      </div>
      <div className="my-5">
        <select className="select select-primary w-full max-w-xs">
          <option disabled selected>
            Category
          </option>
          {
            service?.map(d=><>
            
        <option>{d.category}</option>
        

            </>)
          }
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {service?.map((data) => (
          <ServiceCard key={data._id} data={data} />
        ))}
      </div>
        {/* pagination implementation */}
        <div>
        <div className="pagination my-10 flex items-center justify-center ">
        {/* <p>Current page: {currentPage}</p> */}
        <button onClick={handlePrev}>Prev</button>
        {
        pages.map((number) => (
        <button 
           onClick={() => setCurrentPage(number)}
           className={currentPage === number ? 'selectItem':undefined } // dynamic toogle color 
           key={number}>
          {number}
          </button>
        ))
        }
        <button onClick={handleNext}>Next</button>
        <select name="" value={itemperPage} onChange={handleChange} id="">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
        </div>
    </>
  );
}
