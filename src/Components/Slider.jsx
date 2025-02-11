import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import img1 from '../assets/img1.jpg'
import img4 from '../assets/img4.jpg'
import img3 from '../assets/img3.jpg'
import Slidess from './Slidess'
export default function Slider() {

    return (
      <div className='container px-6 py-7 mx-auto'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <Slidess
              image={img1}
              text='Learn More about React js Node js'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slidess
              image={img4}
              text='Service can available in this place'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slidess
              image={img3}
              text='Find You Best services for you !!'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    )
  
}
