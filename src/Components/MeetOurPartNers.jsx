import React from 'react'

import FramerMotion from '../Components/FramerMotion'
import MeetPartnersSection from '../Components/MeetPartnersSection'
import { Helmet } from 'react-helmet'

export default function MeetOurPartNers() {
  return (
<>
<div>
  <div>
    <Helmet>
      <title> Backend Forge | Meet Our Partners</title>
    </Helmet>
  </div>
  <FramerMotion />
  <MeetPartnersSection />
</div>
</>
  )
}
