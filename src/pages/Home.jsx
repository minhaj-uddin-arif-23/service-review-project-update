import React, { useEffect } from 'react'
import HomeCard from './HomeCard'
// import Pagination from '../Components/pagination'

export default function Home() {

  return (
    <div className='my-20'>
      <h1>Home page render different categoryis components</h1>
      {/* photo anr write moving */}
      {/* <Pagination /> */}
      {/* carousal */}
      <HomeCard />
      {/* faq */}
    </div>
  )
}
