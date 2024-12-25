import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import ServiceDetails from './ServiceDetails'
import Navbar from '../Components/Navbar'
import ALLReviews from '../Components/ALLReviews'

export default function DetailsService() {
  const data = useLoaderData()
  const [service,setService] = useState(data)


  
// console.log(data)
  const {image, title, name, website, desc, category,startDate, price, email,_id} = data || {}

  return (
  <>
    <div className=''>
     <div className=''>
     <Navbar />
     </div>
    </div>
  <div>
      
      {
       service ? < ServiceDetails key={service._id} service={service}
       setService={service}
       /> : "Not found" 
    
     }
   </div>
   
  </>
  )
 
}
