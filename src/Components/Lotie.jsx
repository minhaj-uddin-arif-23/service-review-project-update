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
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  )
}


