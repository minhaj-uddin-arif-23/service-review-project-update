import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { SiBackendless } from "react-icons/si";
import { AuthContext } from "../Shared_Context/AuthProvider";
// import { FcServices } from "react-icons/fc";
import { IoIosArrowDropdownCircle } from "react-icons/io";
export default function Navbar() {
  const { user, signout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

  const beforeLogin = (
    <>
      <li>
        <NavLink to="/" className="font-semibold hover:text-lime-200">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/service" className="font-semibold hover:text-lime-200">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/meetOurPartners"
          className="font-semibold hover:text-lime-200"
        >
          Meet Our Partners
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" className="font-semibold hover:text-lime-200">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/auth/signIn"
          className="btn  btn-outline md:text-white  btn-sm rounded-full font-semibold md:ml-4 lg:ml-4 mt-1"
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/auth/signUp"
          className="btn  btn-outline md:text-white mt-2 md:mt-0 btn-sm rounded-full font-semibold md:ml-4 lg:ml-4 md:mt-1"
        >
          Register
        </NavLink>
      </li>
    </>
  );

  const afterLogin = (
    <>
      <li>
        <NavLink
          to="/"
          className="font-semibold text-md mt-3  hover:text-lime-200"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/service"
          className="font-semibold text-md mt-3 hover:text-lime-200"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myService"
          className="font-semibold text-md mt-3 hover:text-lime-200"
        >
          My Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addService"
          className="font-semibold text-md mt-3 hover:text-lime-200"
        >
          Add Service
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myReview"
          className="font-semibold text-md mt-3 hover:text-lime-200"
        >
          My Reviews
        </NavLink>
      </li>
      {/* <li>
        <button
          onClick={signout}
          className="btn  btn-outline md:text-white btn-sm rounded-full font-semibold md:ml-4 lg:ml-4 mt-1 md:mt-3"
        >
          Logout
        </button>
      </li> */}
    </>
  );

  return (
    <div className="px-14 py-2 navbar bg-black text-white font-semibold text-md  shadow-md">
      <div className="flex-1 flex items-center gap-2">
        <SiBackendless className="text-lime-400 text-4xl" />
        <NavLink
          to="/"
          className=" bg-black text-white px-4 btn-sm text-lg uppercase font-bold  "
        >
          Backend Forge
        </NavLink>
      </div>
      <div className="lg:flex hidden flex-none">
        <ul className="menu menu-horizontal px-1">
          {user ? afterLogin : beforeLogin}
          {user && (
            <li>
              <details className="dropdown dropdown-end">
                <summary className="cursor-pointer">
                  <div className="avatar">
                    <div
                      title={user?.displayName}
                      className="w-10 rounded-full"
                    >
                      <img
                        src={user?.photoURL}
                        alt="User Avatar"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </summary>
                <ul className="menu dropdown-content p-2 shadow bg-black rounded-box w-40 text-white">
                  <li>
                    <NavLink
                      to="/dashboard"
                      className="hover:bg-lime-700 rounded-md px-2 py-1"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={signout}
                      className="w-full text-left hover:bg-red-600 rounded-md px-2 py-1"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          )}
        </ul>
      </div>
      {/* Dropdown for small devices */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className=" rounded-full py-2 border-2 px-2 text-lg  text-white md:mr-"
        >
          <IoIosArrowDropdownCircle />
        </button>
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-white text-black shadow-lg rounded-lg p-4">
            <ul className="menu menu-vertical">
              {user ? afterLogin : beforeLogin}
              {user && (
                <li>
                  <details className="dropdown dropdown-end">
                    <summary className="cursor-pointer">
                      <div className="avatar">
                        <div
                          title={user?.displayName}
                          className="w-10 rounded-full"
                        >
                          <img
                            src={user?.photoURL}
                            alt="User Avatar"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    </summary>
                    <ul className="menu dropdown-content p-2 shadow bg-black rounded-box w-40 text-white">
                      <li>
                        <NavLink
                          to="/dashboard"
                          className="hover:bg-lime-700 rounded-md px-2 py-1"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <button
                          onClick={signout}
                          className="w-full text-left hover:bg-red-600 rounded-md px-2 py-1"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </details>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
