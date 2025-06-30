import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Shared_Context/AuthProvider";

export default function Header() {
  const { user, signout } = useContext(AuthContext);
  const [notifications] = useState([
    { id: 1, type: "info", message: "New feature available!", time: "2m ago" },
    { id: 2, type: "warning", message: "Storage almost full", time: "1h ago" },
    { id: 3, type: "error", message: "Payment failed", time: "3h ago" },
    { id: 4, type: "success", message: "Profile updated", time: "1d ago" },
  ]);

  const getNotificationStyle = (type) => {
    switch (type) {
      case "info":
        return "bg-blue-500 bg-opacity-20 text-blue-400";
      case "warning":
        return "bg-yellow-500 bg-opacity-20 text-yellow-400";
      case "error":
        return "bg-red-500 bg-opacity-20 text-red-400";
      case "success":
        return "bg-green-500 bg-opacity-20 text-green-400";
      default:
        return "bg-gray-500 bg-opacity-20 text-gray-400";
    }
  };

  return (
    <header className="bg-black bg-opacity-90 shadow-lg px-4 py-3 sm:px-6 sm:py-4 flex flex-col md:flex-row justify-between items-center gap-3 sticky top-0 z-50">
      <h1 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
        Overview
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 pl-10 bg-black bg-opacity-50 text-white border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 text-sm sm:text-base"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white text-opacity-60"
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
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="cursor-pointer relative">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white text-opacity-60 hover:text-opacity-100 transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V5a3 3 0 00-6 0v.083A6 6 0 002 11v3.159c0 .538-.214 1.053-.595 1.436L0 17h5m10 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 sm:p-3 shadow-lg bg-black bg-opacity-95 text-white rounded-xl w-64 sm:w-72 max-h-80 overflow-y-auto"
            >
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <li
                    key={notification.id}
                    className={`p-2 sm:p-3 mb-1 sm:mb-2 rounded-md ${getNotificationStyle(
                      notification.type
                    )}`}
                  >
                    <div className="flex justify-between items-center gap-2 text-xs sm:text-sm">
                      <span className="truncate">{notification.message}</span>
                      <span className="text-xs opacity-70 shrink-0">
                        {notification.time}
                      </span>
                    </div>
                  </li>
                ))
              ) : (
                <li className="p-2 sm:p-3 text-white text-opacity-70 text-xs sm:text-sm">
                  No notifications
                </li>
              )}
            </ul>
          </div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="cursor-pointer">
                <div className="avatar">
                  <div className="w-6 sm:w-7 rounded-full ring ring-yellow-950 ring-opacity-90 ring-offset-2">
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
                className="dropdown-content menu p-2 sm:p-3 shadow-lg bg-black bg-opacity-95 text-white rounded-xl w-48 sm:w-56 mt-2"
              >
                <li className="px-2 sm:px-3 py-1 sm:py-2 font-medium text-white text-opacity-90 border-b border-white border-opacity-10 text-xs sm:text-sm">
                  {user?.displayName || "User"}
                </li>
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      `text-white text-opacity-90 hover:bg-white hover:bg-opacity-10 rounded-md px-2 sm:px-3 py-1 sm:py-2 transition-colors duration-200 text-xs sm:text-sm ${
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
                      `text-white text-opacity-90 hover:bg-white hover:bg-opacity-10 rounded-md px-2 sm:px-3 py-1 sm:py-2 transition-colors duration-200 text-xs sm:text-sm ${
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
                    className="w-full text-left text-white text-opacity-90 hover:bg-red-600 hover:text-white rounded-md px-2 sm:px-3 py-1 sm:py-2 transition-colors duration-200 text-xs sm:text-sm"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <span className="text-white text-opacity-90 font-medium text-xs sm:text-sm">
              Guest
            </span>
          )}
        </div>
      </div>
    </header>
  );
}