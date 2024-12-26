import React from "react";
import image from '../assets/education.jpg'
import hellow from '../assets/hello.jpeg'
import {easeOut, motion} from "framer-motion";
import BlogCard from "./BlogCard";
export default function Blog() {
  return (
      <div>
          <div className="hero bg-base-100 min-h-[60vh] my-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
       <div>
       <motion.img
          src={image}
          animate={{y:[50,100,50]}}
          transition={{duration:10,repeat:Infinity}}
          className="max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl border-3 border-l-2 border-sky-600"
        />
       <motion.img
          src={hellow}
          animate={{x:[100,150,100]}}
          transition={{duration:10,delay:10,repeat:Infinity}}
          className="max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl border-2 border-l-3 border-green-400"
        />

       </div>
       
        <div>
          <motion.h1 
          animate={{x:50}}
     
          transition={{duration:2,delay:1, repeat:Infinity,ease:easeOut}}
          className="text-5xl font-bold">Latest <motion.span
          animate={{color:['#FF77B7','#4335A7','#FF77B7']}}
          >Service Review</motion.span> </motion.h1>
          <p className="py-6">
            Our blog keeps you informed with detailed reviews, insights, and
            user experiences of the latest services. From tech gadgets to
            restaurants, we provide honest and comprehensive reviews to help you
            make better decisions. Stay tuned for the latest updates and
            recommendations.
          </p>
          <button className="btn bg-green-400">Explore Reviews</button>

          
        </div>
      </div>
    </div>
    <BlogCard />
      </div>
  );
}
