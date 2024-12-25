import React from 'react'
import one from '../assets/one.json'
import Lottie from "lottie-react";
import { motion } from "motion/react"
export default function Lotie() {
  return (
    <div className="hero bg-gray-50 rounded-xl min-h-scree my-10">
    <div className="hero-content flex-col lg:flex-row">
      {/* <img
        src={one}
        className="max-w-sm rounded-lg shadow-2xl" /> */}
        <Lottie className='w-[70%]' animationData={one}></Lottie>
      <div className='ml-14'>
        <motion.h1 
          animate={{
            x: [0, 100], // Moves from left (0) to right (100px)
            color: ["#ff0000", "#0000ff"], // Animates from red to blue
          }}
          transition={{
            duration: 2, // Duration of the animation
            ease: "easeInOut", // Smooth easing
            repeat: Infinity, // Loop the animation
            repeatType: "reverse", // Reverse the animation
          }}
          className="text-5xl font-bold"> Service Available in today!</motion.h1>
        <p className="py-6 text-gray-600">
     

Backend Forge provides cutting-edge backend development services today, offering businesses scalable, secure, and efficient solutions that drive performance, enhance system integration, and help businesses stay competitive in the evolving tech landscape
        </p>
        <button className="btn bg-lime-400 ">See More</button>
      </div>
    </div>
  </div>
  )
}


