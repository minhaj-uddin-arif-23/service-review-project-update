import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { SiBackendless } from "react-icons/si";
import { AuthContext } from '../Shared_Context/AuthProvider';
import { FcServices } from 'react-icons/fc';

export default function Navbar() {
  const { user, signout } = useContext(AuthContext);

  const beforeLogin = (
    <>
      <li>
        <NavLink to="/" className="font-semibold  ">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/service" className="font-semibold ">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth/signIn" className="font-semibold ">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth/signUp" className="font-semibold  btn-sm">
          Register
        </NavLink>
      </li>
    </>
  );

  const afterLogin = (
    <>
      <li>
        <NavLink to="/" className="font-semibold text-md mt-3 ">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/service" className="font-semibold text-md mt-3">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/myService" className="font-semibold text-md mt-3">
         My Services
        </NavLink>
      </li>

      <li>
        <NavLink to="/addService" className="font-semibold text-md mt-3">
          Add Service
        </NavLink>
      </li>
      <li>
        <NavLink to="/myReview" className="font-semibold text-md mt-3">
          My Reviews
        </NavLink>
      </li>
      <li>
        <button
          onClick={signout}
          className="btn bg-lime-400 text-black  btn-sm  font-semibold ml-4 mt-3"
        >
          Logout
        </button>
      </li>
    </>
  );

  return (
    <div className=" px-10 navbar bg-black text-white shadow-md ">
      <div className="flex-1 flex items-center gap-2">
        {/* Logo */}<SiBackendless className="text-lime-400 text-4xl"  />
     
        <NavLink to="/" className="btn bg-black text-white  px-4  btn-sm text-lg uppercase font-bold hover:bg-lime-300 hover:text-black">
        Backend Forge
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {user ? afterLogin : beforeLogin}
          {user && (
            <li>
              <details>
                <summary>
                  <div className="avatar ">
                    <div title={user?.displayName} className="w-10 rounded-full">
                      <img
                        className=''
                        src={user?.photoURL}
                        alt="User Avatar"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </summary>
              </details>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
