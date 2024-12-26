import React from "react";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { SiBackendless } from "react-icons/si";
export default function Footer() {
  return (
    <>
      <footer className="footer bg-black text-white p-10">
        <aside>
          <SiBackendless className="text-lime-600 text-4xl" />
          <p className="font-bold text-md">
            Backend Forge Industries Ltd.
            <br />
          </p>
        </aside>
        <nav>
          <h6 className="uppercase text-lg font-semibold  ">Adress</h6>
          <a className="link link-hover mt-3">Bangladesh Office</a>
          <p className="link link-hover my-3 ">A-15 Chattogram-1233 <br></br>,Bangladesh</p>
          <a className="link link-hover">Email</a>
          <a className="link link-hover my-3">uarif1933@gmail.com</a>
          <a className="link link-hover my-3">arif62901@gmail.com</a>
        </nav>
        
        <nav>
          <h6 className="uppercase text-lg font-semibold  ">Services</h6>
          <a className="link link-hover mt-3">Branding</a>
          <a className="link link-hover my-3 ">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover my-3">Advertisement</a>
        </nav>
        
        <nav>
          <h6 className="uppercase text-lg font-semibold">Company</h6>
          <a className="link link-hover my-3 ">About us</a>
          <a className="link link-hover my-3 ">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover my-3 ">Press kit</a>
          
        </nav>
        
        <nav>
          <h6 className="uppercase text-lg font-semibold">BUISNESS</h6>
          <a className="link link-hover my-3 ">Products</a>
          <a className="link link-hover my-3 " >Buisness idea</a>
          <a className="link link-hover my-3 ">Tech Buisness</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Send me email get Update news"
                className="input input-bordered join-item  w-40 lg:w-44"
              />
              <button className="btn bg-lime-400 join-item">Subscribe</button>
            </div>
          </fieldset>
          <div className="flex text-xl gap-3 my-2">
            
            <a href="https://www.linkedin.com/in/minhaj-uddin-arif-4321b0258/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="text-blue-500" /></a>
             <a href="https://medium.com/@arifk62901" target="_blank" rel="noopener noreferrer"><FaMediumM /></a>
            <a target="_blank" href="https://youtube.com/@arifuddinm?si=wkqnbqutknbHqY_o"> <BsYoutube className="text-red-400" /></a>
           <a href="https://github.com/minhaj-uddin-arif-23" target="_blank" rel="noopener noreferrer"> <FaGithub /></a>
           
          </div>
          <div>
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              BACKEND FORGE Industries Ltd
            </p>
          </aside>
          </div>
      
        </form>
      </footer>
    </>
  );
}
