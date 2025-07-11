import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      name: "Users",
      path: "/users",
      icon: "M12 4.5v15m7.5-7.5h-15",
    },
    {
      name: "Reports",
      path: "/reports",
      icon: "M9 17v-6h6v6H9zm4 4H7a2 2 0 01-2-2v-6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2z",
    },
    {
      name: "Settings",
      path: "/settings",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z",
    },
    {
      name: "Language",
      path: "/language",
      icon: "M3 5h18M9 3v2c0 4.418-3.582 8-8 8m20 0c-4.418 0-8-3.582-8-8V3m-2 14c0 4.418-3.582 8-8 8",
    },
    {
      name: "Home",
      path: "/",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
  ];

  return (
    <div className="w-full sm:w-16 md:w-64 bg-gray-950 shadow-lg h-full fixed top-0 left-0 z-40 transition-all duration-300">
      <div className="p-4 sm:p-3 md:p-6">
        <h2 className="text-lg sm:text-base md:text-xl font-bold text-white hidden sm:block md:block">
          <span className="md:inline hidden">Dashboard</span>
          <span className="md:hidden inline">Dash</span>
        </h2>
      </div>
      <nav className="mt-4 sm:mt-3 md:mt-6">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 sm:px-3 md:px-6 py-2 sm:py-2.5 md:py-3 text-white text-opacity-90 hover:bg-white hover:bg-opacity-10 transition-colors duration-200 rounded-r-lg text-sm sm:text-xs md:text-base ${
                isActive ? "bg-white bg-opacity-20 text-white font-semibold border-r-4 border-blue-500" : ""
              }`}
          >
            <svg className="w-5 h-5 sm:w-4 md:w-5 mr-0 sm:mr-0 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
            </svg>
            <span className="md:inline hidden">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}