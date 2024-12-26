import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import ServiceDetails from './ServiceDetails'
import Navbar from '../Components/Navbar'
// import ALLReviews from '../Components/ALLReviews'

export default function DetailsService() {
  const data = useLoaderData()
  const [service,setService] = useState(data)


  


  return (
  <>
    <div className='w-full mx-auto z-50 top-0 fixed'>
     <div className=''>
     <Navbar />
     </div>
    </div>
  <div className=''>
      
      {
       service ? < ServiceDetails key={service._id} service={service}
       setService={service}
       /> : "Not found" 
    
     }
   </div>
   
  </>
  )
 
}
