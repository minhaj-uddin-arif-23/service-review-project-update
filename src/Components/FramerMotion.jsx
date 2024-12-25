import React from 'react'
import { motion } from "motion/react"
import { Link } from 'react-router-dom';
export default function FramerMotion() {
  const typingVariants = {
    hidden: {
      width: 0,
    },
    visible: {
      width: "12ch", 
      transition: {
        duration: 3, 
        ease: "linear",
        repeat: Infinity, 
        repeatType: "revers", 
      },
    },
  };
  return (
    <div
  className="hero min-h-[90vh] "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/B6LDNJX/back-school-education-background-concept-school-accessories-items-3d-render-illustration-696265-94.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-md text-white ">Discover a partner off <motion.span
        className="overflow-hidden border-r-2 border-gray-500 inline-block"
        variants={typingVariants}
        initial="hidden"
        animate="visible"
        style={{ whiteSpace: "nowrap" }}
      >
        you can rely on
      </motion.span> 
      </h1>
      <p className="mb-5 text-lg font-semibold">
      True opinions from real voices
      </p>
      <input
  type="text"
  placeholder="Type here"
  className="input input-bordered input-accent w-full rounded-lg max-w-xs" />
      
      <Link to={`/service`} className="btn bg-lime-400 ml-4 font-bold">Find one</Link>
    </div>
  </div>
</div>
  )
}
