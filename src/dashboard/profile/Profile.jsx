import { useContext, useState } from "react";
import { AuthContext } from "../../Shared_Context/AuthProvider";
import { NavLink } from "react-router-dom";
// import { AuthContext } from "../Shared_Context/AuthProvider";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "User");
  const [email, setEmail] = useState(user?.email || "");

  const handleSave = () => {
    // Placeholder for save logic (e.g., update user data via API)
    setIsEditing(false);
  };

  return (
    <main className="flex-1 p-4 sm:p-6 overflow-y-auto bg-black bg-opacity-90 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold text-white tracking-tight mb-6">
          Profile
        </h1>
        <div className="bg-black bg-opacity-80 rounded-xl shadow-lg p-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-blue-400 ring-opacity-50 ring-offset-2">
                <img
                  src={user?.photoURL || "https://via.placeholder.com/96"}
                  alt="User Avatar"
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 w-full">
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white text-opacity-80">
                      Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 bg-black bg-opacity-50 text-white border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white text-opacity-80">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-black bg-opacity-50 text-white border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="flex justify-end gap-4">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 bg-black bg-opacity-50 text-white rounded-lg hover:bg-opacity-70 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-white text-opacity-80">
                      Name
                    </h3>
                    <p className="text-lg text-white">
                      {user?.displayName || "User"}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white text-opacity-80">
                      Email
                    </h3>
                    <p className="text-lg text-white">
                      {user?.email || "Not provided"}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                  >
                    Edit Profile
                  </button>
                  <NavLink 
                    to={'/'}
                  className="px-4 py-2 bg-green-600 ml-5 text-white rounded-lg hover:bg-sky-900 transition-colors duration-200">
                    Home
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
