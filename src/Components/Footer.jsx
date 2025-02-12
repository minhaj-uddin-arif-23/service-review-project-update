import React from 'react'
import { FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa'
import { IoLogoYoutube } from "react-icons/io";
import { SiBackendless } from 'react-icons/si'

export default function Footer() {
  return (
    <div>
      <footer className="bg-black text-white">
    <div className="container p-16 mx-auto">
        <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
                <div className="px-6">
                    <SiBackendless className="text-lime-400 text-4xl" />
                    <p className='my-3 font-medium'>Backend Forge Service ltd  </p>

                    <p className="max-w-sm mt-2 text-white">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>

                    <div className="flex mt-6 -mx-2">
                        <a href="#"
                            className="mx-2  transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Reddit">
                             <a href="https://medium.com/@arifk62901" target="_blank" rel="noopener noreferrer"><FaMediumM /></a>
                        </a>
                    
                        <a href="#"
                            className="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Facebook">
                            <a target="_blank" href="https://youtube.com/@arifuddinm?si=wkqnbqutknbHqY_o"> <IoLogoYoutube className="" /></a>
                        </a>
                    
                        <a href="#"
                            className="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Github">
                           <a href="https://github.com/minhaj-uddin-arif-23" target="_blank" rel="noopener noreferrer"> <FaGithub /></a>
                        </a>
                        <a href="#"
                            className="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Github">
                           
  <a href="https://www.linkedin.com/in/minhaj-uddin-arif-profile/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="" /></a>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <h3 className=" uppercase dark:text-white">About</h3>
                        <a href="#" className="block mt-2 text-sm  text-white hover:underline">Company</a>
                        <a href="#" className="block mt-2 text-sm text-white hover:underline">community</a>
                        <a href="#" className="block mt-2 text-sm text-white hover:underline">Careers</a>
                    </div>

                    <div>
                        <h3 className=" uppercase dark:text-white">Blog</h3>
                        <a href="#" className="block mt-2 text-sm text-white hover:underline">Tec</a>
                        <a href="#" className="block mt-2 text-sm  text-white hover:underline">Music</a>
                        <a href="#" className="block mt-2 text-sm text-white hover:underline">Videos</a>
                    </div>

                 

                    <div>
                        <h3 className=" uppercase dark:text-white">Contact</h3>
                        <span className="block mt-2 text-sm  text-white hover:underline">+880-1306291550</span>
                        <span className="block mt-2 text-sm  text-white hover:underline">uarif1933@email.com</span>
                    </div>
                </div>
            </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
            <p className="text-center  text-white">© Backend Forge 2024 - All rights reserved</p>
        </div>
    </div>
</footer>
    </div>
  )
}
