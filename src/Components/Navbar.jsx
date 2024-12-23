import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { IoCodeSlash } from 'react-icons/io5';
import { AuthContext } from '../Shared_Context/AuthProvider';
import { FcServices } from 'react-icons/fc';

export default function Navbar() {
  const { user, signout } = useContext(AuthContext);

  const beforeLogin = (
    <>
      <li>
        <NavLink to="/" className="font-semibold text-lg uppercase">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/service" className="font-semibold text-lg">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth/signIn" className="font-semibold text-lg">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth/signUp" className="font-semibold text-lg">
          Register
        </NavLink>
      </li>
    </>
  );

  const afterLogin = (
    <>
      <li>
        <NavLink to="/" className="font-semibold text-md uppercase">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/service" className="font-semibold text-md">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/myService" className="font-semibold text-md">
         My Services
        </NavLink>
      </li>

      <li>
        <NavLink to="/addService" className="font-semibold text-md">
          Add Service
        </NavLink>
      </li>
      <li>
        <NavLink to="/myReview" className="font-semibold text-md">
          My Reviews
        </NavLink>
      </li>
      <li>
        <button
          onClick={signout}
          className="btn btn-error text-white font-semibold"
        >
          Logout
        </button>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1 flex items-center gap-2">
        {/* Logo */}
        <FcServices  className="text-lime-300 text-2xl" />
        <NavLink to="/" className="btn btn-ghost text-xl uppercase">
       Service Review
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {user ? afterLogin : beforeLogin}
          {user && (
            <li>
              <details>
                <summary>
                  <div className="avatar">
                    <div title={user?.displayName} className="w-10 rounded-full">
                      <img
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
