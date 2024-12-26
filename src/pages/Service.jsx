import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
export default function Service() {

  // filter
  const [filter,setFilter] = useState('')
  
  // pagination
  const [currentPage, setCurrentPage] = useState(0);
  // const [count,setCount] = useState()
  const { count } = useLoaderData();
  const [itemperPage, setItemperPage] = useState(5);
  const totalService = Number(count) || 0;
  const numberOfPages = Math.ceil(totalService / itemperPage);
  const pages = [...Array(numberOfPages).keys()];
  // console.log(pages);

  const handleChange = (e) => {
    // console.log(e.target.value);
    const val = parseInt(e.target.value);
    setItemperPage(val);
    setCurrentPage(0);
    // console.log(val);
  };
  const [service, setService] = useState([]);
  useEffect(() => {
    fetchAllService();
  }, [currentPage, itemperPage,filter]);
  const fetchAllService = async () => {
    const { data } = await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/all-Service?filter=${filter}&page=${currentPage}&size=${itemperPage}`
    );
    setService(data);
  };
console.log(filter)
  // handle prev and next
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div>
        <Helmet>
          <title>Backend frog services</title>
        </Helmet>
        <h1 className="text-3xl font-semibold text-lime-700 my-4">
          Best Services in Deals
        </h1>{" "}
      </div>
      <select 
      onChange={(e)=> setFilter(e.target.value)}
      className="select select-info w-full max-w-xs">
        <option disabled selected>
          Category
        </option>
        <option>Food</option>
        <option>Transport</option>
        <option>IT</option>
        <option>Education</option>
      </select>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 ml-9 md:ml-0 lg:ml-0 my-5">
        {service?.map((data) => (
          <ServiceCard key={data._id} data={data} />
        ))}
      </div>
      {/* pagination implementation */}
      <div>
        <div className="gap-6 pagination my-10 flex items-center justify-center ">
          {/* <p>Current page: {currentPage}</p> */}
        
          <button 
          className="flex items-center justify-center"
          onClick={handlePrev}>
          <p> <GrLinkPrevious /></p>
            </button>
          {pages.map((number) => (
            <button
              onClick={() => setCurrentPage(number)}
              className={currentPage === number ? "selectItem" : undefined} // dynamic toogle color
              key={number}
            >
              {number}
            </button>
          ))}
          <button
          className="flex items-center justify-center "
          onClick={handleNext}><GrLinkNext /> </button>
          <select name="" value={itemperPage} onChange={handleChange} id="one">
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
