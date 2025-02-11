import React, { useContext } from "react";
import login from '../assets/login.json'
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Shared_Context/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
export default function Login() {

  const navigate = useNavigate()
  const location =useLocation()
  const from = location?.state || '/'
  const {signIn,google} = useContext(AuthContext)

  const handleGoogle = async () => {
   try{
    await google()
    toast.success("Sign in successfuly")
    navigate(from,{replace:true})
   }catch(err){
    toast.error(err?.message)
   }
  }

  const handleSignIn =async (e) => {
    e.preventDefault()
    const form = e.target;
    const email= form.email.value
    const password= form.password.value

    try{
      await signIn(email,password)
      toast.success("SignIn successfullt")
      navigate(from , {replace:true})
    }catch(err){
      toast.error(err?.message)
    }
  }  

  return (
    <div className="hero bg-base-200 min-h-screen py-10">
    <Helmet>
      <title>Login</title>
    </Helmet>
    <div className="hero-content flex-col lg:flex-row-reverse items-center">
   
      <div className="text-center lg:text-left w-full lg:w-1/2 flex justify-center">
        <Lottie animationData={login} className="max-w-xs lg:max-w-xl" />
      </div>
  
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      
        <h2 className="text-4xl  text-center mb-4">Sign In</h2>
  
        
        <p className="text-center text-gray-500 mb-4">Sign in with a social account</p>
        <div className="form-control mb-6">
          <button
            onClick={handleGoogle}
            className="border-2 border-gray-200 text-2xl  flex   py-2 rounded-md px-4 hover:bg-gray-100 transition  justify-evenly"
          >
            <FcGoogle className="text-xl mt-1 " />
            <span className="ml-2 text-lg text-gray-800">Sign in with Google</span>
          </button>
        </div>
  
        {/* Divider */}
        <div className="divider">OR</div>
  
        {/* Form */}
        <form onSubmit={handleSignIn}>
          {/* Email Field */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-md">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
  
          {/* Password Field */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-md">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-sm">
                Forgot password?
              </a>
            </label>
          </div>
  
          {/* Login Button */}
          <div className="form-control">
            <button className="btn bg-lime-400 text-black font-medium w-full">
              Login
            </button>
          </div>
          <div className="form-control  flex items-center">
          <p class="mt-8 text-sm font-light text-center text-gray-400"> Don't have an account? <Link to={'/auth/signUp'}  class="font-medium text-gray-700 dark:text-gray-200 hover:underline">Resigter Now</Link></p>
          
          </div>
        </form>
      </div>
    </div>
  </div>
  
  );
}
