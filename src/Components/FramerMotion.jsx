import React from 'react'
import { motion } from "motion/react"
export default function FramerMotion() {
  const typingVariants = {
    hidden: {
      width: 0, // Start with 0 width
    },
    visible: {
      width: "7ch", // End with the full width of the word "Category"
      transition: {
        duration: 3, // Duration for typing animation
        ease: "linear",
        repeat: Infinity, // Repeat the animation infinitely
        repeatType: "revers", // Reverse typing to create an endless loop
      },
    },
  };
  return (
    <div
  className="hero min-h-[90vh]"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/B6LDNJX/back-school-education-background-concept-school-accessories-items-3d-render-illustration-696265-94.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold ">Search In <motion.span
        className="overflow-hidden border-r-2 border-gray-500 inline-block"
        variants={typingVariants}
        initial="hidden"
        animate="visible"
        style={{ whiteSpace: "nowrap" }}
      >
        Category
      </motion.span> </h1>
      <input
  type="text"
  placeholder="Type here"
  className="input input-bordered input-accent w-full max-w-xs" />
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn bg-lime-100">Find one</button>
    </div>
  </div>
</div>
  )
}
