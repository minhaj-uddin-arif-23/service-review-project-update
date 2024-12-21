import React, { useContext } from "react";
import login from '../assets/login.json'
import Lottie from "lottie-react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Shared_Context/AuthProvider";
import toast from "react-hot-toast";
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

  return (
    <div className="hero bg-base-200 min-h-screen my-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={login}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="ml-24 my-4 text-4xl text-white font-semibold">
            <p>Sign in</p>
          </div>

          <div>
            <p className="ml-16 text-gray-400">Sign in with social account</p>
          </div>
          <div className="form-control mt-6">
            <button onClick={handleGoogle} className="btn btn-outline">Google</button>
          </div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-lime-400 text-black">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
