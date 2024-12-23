
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
    console.log(Name, Email, Password, Photo, acceptTearm);

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
      console.log(result)
      await updateUserInfo(Name,Photo)
      setUser({...result.user,photoURL:Photo,displayName:Name})
      toast.success("Registration successfully");
      navigate('/');
    }catch(err){
      console.log(err)
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
    <div className=" hero bg-base-200 min-h-screen my-10">
      {/* <Helmet>
        <title>Register</title>
        
      </Helmet> */}
    <div className="flex hero-content flex-col lg:flex-row-reverse">
    <div className="w-96 hero-content flex-col lg:flex-row-reverse">
        <Lottie animationData={register} ></Lottie>
      </div>
      {/* <h1 className="text-white">Welcome to</h1> */}
      <div className=" ">
        <div className="">
         
        <div className="">
        <div>
              <h1 className="font-semibold text-4xl text-center md:text-left ml-4 md:ml-14 lg:ml-36">
                Register
              </h1>
            </div>
            <div className="form-control mt-6 ml-36">
            <button 
                onClick={handleGoogleLogin}
                className="btn rounded-full w-20 text-4xl"
              >
                <FcGoogle />
              </button>
            </div>
              
            </div>
         
          <form onSubmit={handleRegister} className="card-body">
         

            <section className="flex flex-col md:flex-row gap-4">
              <section className="w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="username"
                    className="input input-bordered "
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Photo</span>
                  </label>
                  <input
                    name="photo"
                    type="url"
                    placeholder="Photo url"
                    className="input input-bordered "
                    required
                  />
                </div>
              </section>

              <section className="w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered "
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text text-lg">Password</span>
                  </label>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered "
                    required
                  />
                </div>
              </section>
            </section>

            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[423px] right-[47%] cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>

            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" name="checked" className="checkbox" />
                <span className="label-text">Accept Terms & Conditions</span>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-lime-400 border-2 border-gray-300 font-medium text-lg w-full  text-black">
                Sign Up
              </button>
            </div>

            {errorMsg && <p className="text-red-400">{errorMsg}</p>}

            <label className="label flex justify-center">
              <p>Already have an account?</p>
              <div>
                <Link
                  to={`/auth/login`}
                  className="text-md font-semibold btn btn-outline bg-lime-400 text-black"
                >
                  Sign In
                </Link>
              </div>
            </label>

            <p className="mt-2 text-center">Or sign in with</p>
          
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
