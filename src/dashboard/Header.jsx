import { useContext } from "react";
import { AuthContext } from "../Shared_Context/AuthProvider";

export default function Header() {
  const { user, signout } = useContext(AuthContext);

  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-800">Overview</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center space-x-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="cursor-pointer">
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-blue-200 ring-offset-2">
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
                className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 mt-2"
              >
                <li className="px-3 py-2 text-gray-800 font-medium">
                  {user?.displayName || "User"}
                </li>
                <li>
                  <a className="text-gray-600 hover:bg-gray-100">Profile</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:bg-gray-100">Settings</a>
                </li>
                <li>
                  <button
                    onClick={signout}
                    className="w-full  hover:bg-red-600 rounded-md px-2 py-1 ml-2 hover:text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <span className="text-gray-600">Guest</span>
          )}
        </div>
      </div>
    </header>
  );
}
