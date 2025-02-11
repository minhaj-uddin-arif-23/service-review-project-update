
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import register from '../assets/register.json'
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// import { Helmet } from "react-helmet";
import { AuthContext } from "../Shared_Context/AuthProvider";
import { auth } from "../firebase/firebase.init";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";

export default function Register() {
  const { google, createUser,  updateUserInfo } =
    useContext(AuthContext);
    const [user,setUser] =useState(null)
  const [errorMsg, setErrorMsg] = useState(""); 
  const [success, setSuccess] = useState(false);
  // state for password eye show
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();

    const Name = e.target.name.value;
    const Email = e.target.email.value;
    const Password = e.target.password.value;
    const Photo = e.target.photo.value;
    const acceptTearm = e.target.checked.checked;

    setErrorMsg("");
    setSuccess(false);
    if (!acceptTearm) {
      setErrorMsg("please accept the tearm & conditon");
      return;
    }
    if (Password.length < 6) {
      setErrorMsg("Password Should be at least 6 character");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(Password)) {
      setErrorMsg("Password should be at least one uppercase one lowecase ");
      return;
    }
    // create user, email and password
    try{
      const result = await createUser(Email,Password)
    
      await updateUserInfo(Name,Photo)
      setUser({...result.user,photoURL:Photo,displayName:Name})
      toast.success("Registration successfully");
      navigate('/');
    }catch(err){
      
      toast.error(err?.message)
    }
  };

  //sign google and github

  const provider = new GoogleAuthProvider();

  // const provider2 = new GithubAuthProvider();
  const handleGoogleLogin = () => {
    google(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setUser(err.message);
      });
  };
  // const handleGitHuLogin = () => {
  //   signInWithPopup(auth, provider2)
  //     .then((result) => {
  //       const user = result.user;

  //       setUser(user)
  //     })
  //     .catch((err) => {

  //       setUser(err,message)
  //     });
  // };
  //sign google and github

  return (
    <div className="hero bg-base-200 min-h-screen py-10">
    <Helmet>
      <title>Register</title>
    </Helmet>
    <div className="flex flex-col lg:flex-row-reverse items-center justify-center">
      {/* Lottie Animation */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Lottie animationData={register} className="max-w-xs lg:max-w-md" />
      </div>
  
      {/* Registration Form */}
      <div className="w-full lg:w-1/2 px-6">
        <div className="bg-white rounded-lg shadow-  border-2 border-gray-200 p-8">
          {/* Title */}
          <h1 className="font-semibold text-4xl text-center text-gray-800 mb-4">
            Register
          </h1>
  
          {/* Google Login Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={handleGoogleLogin}
              className="border-2 border-gray-200 text-2xl  flex   py-2 rounded-md px-4 hover:bg-gray-100 transition  justify-evenly w-full"
            >
              <FcGoogle className="text-xl mt-1" />
              <span className="ml-2 text-lg text-gray-800">Sign in with Google</span>
            </button>
          </div>
  
          {/* Registration Form */}
          <form onSubmit={handleRegister}>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name and Photo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-md">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Username"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-md">Photo</span>
                </label>
                <input
                  name="photo"
                  type="url"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
  
              {/* Email and Password */}
              <div className="form-control">
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
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-md">Password</span>
                </label>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[3.8rem] right-3 transform -translate-y-1/2 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </section>
  
            {/* Terms and Conditions */}
            <div className="form-control mt-6">
              <label className="label cursor-pointer flex items-center gap-2">
                <input type="checkbox" name="checked" className="checkbox" />
                <span className="label-text">Accept Terms & Conditions</span>
              </label>
            </div>
  
            {/* Submit Button */}
            <div className="form-control mt-4">
              <button className="btn bg-lime-400 w-full">
                Sign Up
              </button>
            </div>
  
            {/* Error Message */}
            {errorMsg && <p className="text-red-500 mt-2 text-center">{errorMsg}</p>}
  
            {/* Redirect to Login */}
            <div className="mt-6 text-center">
              <p className="mb-2">Already have an account?  <Link
                to={`/auth/signIn`}
                className=" text-lime-800 font-medium w-1/2"
              >
                Sign In
              </Link>  </p>
             
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  );
}
