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
          <h6 className="uppercase text-lg font-semibold">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
          
        </nav>
        
        <nav>
          <h6 className="footer-title">BUISNESS</h6>
          <a className="link link-hover">Products</a>
          <a className="link link-hover">Buisness idea</a>
          <a className="link link-hover">Tech Buisness</a>
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
                className="input input-bordered join-item"
              />
              <button className="btn bg-lime-400 join-item">Subscribe</button>
            </div>
          </fieldset>
          <div className="flex text-xl gap-3 my-2">
            <FaLinkedinIn className="text-blue-500" />
            <FaMediumM />
            <BsYoutube className="" />
            <FaGithub />
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
