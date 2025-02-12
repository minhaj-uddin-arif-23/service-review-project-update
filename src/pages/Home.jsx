import React, { useEffect } from 'react'
import HomeCard from './HomeCard'
import Lotie from '../Components/Lotie'
import Countup from './Countup'
import Accordian from '../Components/Accordian'
import { Helmet } from 'react-helmet'
import Slider from '../Components/Slider'
import Recent_Review from '../Components/Recent_Review'
import Team from './Team'
import OfferSection from '../Components/OfferSection'
import FramerMotion from '../Components/FramerMotion'
// import Sliders from '../Components/Sliders'

// import Pagination from '../Components/pagination'

export default function Home() {
  // <Recent_Review />
  return (
    <div className='my-20'>
     <Helmet>
      <title>Backend forge Home</title>
     </Helmet>
      {/* photo anr write moving */}
      {/* <Pagination /> */}
      {/* carousal */}
      {/* <Slider /> */}
      <FramerMotion />
      
     <Lotie />
      <HomeCard />
    
      <OfferSection />
   
      <Team />
      <Accordian />
      {/* faq */}
      <Countup />
    </div>
  )
}
            
           
         