import React from 'react'

import FramerMotion from '../Components/FramerMotion'
import MeetPartnersSection from '../Components/MeetPartnersSection'
import { Helmet } from 'react-helmet'
import Slidess from './Slidess'
import Slider from './Slider'

export default function MeetOurPartNers() {
  return (
<>
<div>
  <div>
    <Helmet>
      <title> Backend Forge | Meet Our Partners</title>
    </Helmet>
  </div>
  {/* <FramerMotion /> */}
  {/* <Slidess /> */}
  <Slider />
  <MeetPartnersSection />
</div>
</>
  )
}
