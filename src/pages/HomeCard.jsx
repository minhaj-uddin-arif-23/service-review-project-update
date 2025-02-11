import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

export default function HomeCard() {

  const [home,setHome] = useState([])

  useEffect(()=>{
    fetchHomeCard()
  },[])
  const fetchHomeCard = async () => {
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/home-service`)
    setHome(data)
  }
  

  return (
    <div>
      <div>
        <h1 className='text-2xl my-3 ml-9 md:ml-4 lg:ml-0 font-semibold'>Top-Rated Service Provider 🥇</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   ml-11 md:ml-0 lg:ml-0'>
        {
          home?.map((data) => (
                    <ServiceCard key={data._id} data={data} />
                  ))
        }
      </div>
    </div>
  )
}
