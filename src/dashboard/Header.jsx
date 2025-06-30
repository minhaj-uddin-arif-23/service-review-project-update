import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Shared_Context/AuthProvider";

export default function Header() {
  const { user, signout } = useContext(AuthContext);

  return (
    <header className="bg-black bg-opacity-90 shadow-lg p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
      <h1 className="text-2xl font-semibold text-white tracking-tight">Overview</h1>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 pl-10 bg-black bg-opacity-50 text-white border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white text-opacity-60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex items-center space-x-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="cursor-pointer">
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-blue-400 ring-opacity-50 ring-offset-2">
                    <img
                      src={user?.photoURL || "https://via.placeholder.com/32"}
                      alt="User Avatar"
                      referrerPolicy="no-referrer"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-3 shadow-lg bg-black bg-opacity-95 text-white rounded-xl w-56 mt-2 z-50"
              >
                <li className="px-3 py-2 font-medium text-white text-opacity-90 border-b border-white border-opacity-10">
                  {user?.displayName || "User"}
                </li>
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      `text-white text-opacity-90 hover:bg-white hover:bg-opacity-10 rounded-md px-3 py-2 transition-colors duration-200 ${
                        isActive ? "bg-white bg-opacity-20 font-semibold" : ""
                      }`
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/setting"
                    className={({ isActive }) =>
                      `text-white text-opacity-90 hover:bg-white hover:bg-opacity-10 rounded-md px-3 py-2 transition-colors duration-200 ${
                        isActive ? "bg-white bg-opacity-20 font-semibold" : ""
                      }`
                    }
                  >
                    Settings
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={signout}
                    className="w-full text-left text-white text-opacity-90 hover:bg-red-600 hover:text-white rounded-md px-3 py-2 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <span className="text-white text-opacity-90 font-medium">Guest</span>
          )}
        </div>
      </div>
    </header>
  );
}