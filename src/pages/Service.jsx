import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import Loadings from "../Components/Loadings";
export default function Service() {
  //  * filter
  const [filter, setFilter] = useState("");
  // * search
  const [search, setSearch] = useState("");
  // * pagination
  const [currentPage, setCurrentPage] = useState(0);
  // const [count,setCount] = useState()
  const { count } = useLoaderData();
  const [itemperPage, setItemperPage] = useState(5);
  const totalService = Number(count) || 0;
  const numberOfPages = Math.ceil(totalService / itemperPage);
  const pages = [...Array(numberOfPages).keys()];
  const [loading, setLoading] = useState(true);

  // * api multiple query write system like  ? then & sign
  const handleChange = (e) => {
    const val = parseInt(e.target.value);
    setItemperPage(val);
    setCurrentPage(0);
  };
  const [service, setService] = useState([]);
  useEffect(() => {
    fetchAllService();
  }, [currentPage, itemperPage, filter, search]);
  const fetchAllService = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/all-Service?filter=${filter}&search=${search}&page=${currentPage}&size=${itemperPage}`
      );
      setTimeout(() => {
        setService(data);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.log("No data fetchin service ", error);
      setLoading(false)
    }
  };

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
      <div className="flex gap-4">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="select select-info w-full max-w-xs"
        >
          <option disabled selected>
            Category
          </option>
          <option>Backend Technology</option>
          {/* <option>Chemicals</option> */}
          <option>Transport</option>
          <option>IT</option>
          <option>Education</option>
          <option>Cultural Goods</option>
          <option>Chemicals</option>
        </select>
        <div>
          {/* search implement */}
          <input
            placeholder="Search your favourite service"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="input input-info w-full max-w-xs"
          />
        </div>
      </div>

      {/*  fetch the data */}
      {loading ? (
        <Loadings />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 ml-9 md:ml-0 lg:ml-0 my-5">
          {service?.map((data) => (
            <ServiceCard key={data._id} data={data} />
          ))}
        </div>
      )}

      {/* pagination implementation */}
      <div>
        <div className="gap-6 pagination my-10 flex items-center justify-center ">
          {/* <p>Current page: {currentPage}</p> */}

          <button
            className="flex items-center justify-center"
            onClick={handlePrev}
          >
            <p>
              {" "}
              <GrLinkPrevious />
            </p>
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
            onClick={handleNext}
          >
            <GrLinkNext />{" "}
          </button>
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
