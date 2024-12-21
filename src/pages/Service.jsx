import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

export default function Service() {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetchAllService();
  }, []);
  const fetchAllService = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/all-Service`
    );
    setService(data);
  };

  return (
    <>
      <div>Service {service.length} </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
          service?.map((data) => <ServiceCard key={data._id} data={data} />)
        }
      </div>
    </>
  );
}
