import React from "react";
import { Link } from "react-router-dom";
const NavBar = ({ user }) => {
  const navList = [
    { name: "home", path: "/" },
    { name: "UserLogin", path: "/user-login" },
    { name: "UserRegistration", path: "/user-registration" },
  ];

  return (
    <div>
      <div className="w-full hidden fixed top-0 bg-[rgba(255,255,255,0.8)] backdrop-blur-md z-50 sm:flex justify-between items-center px-4 py-5 shadow-md">
        <nav className="flex space-x-4">
          {navList.map((item) => (
            <Link key={item.name} to={item.path}>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Small Devices Navigation */}
      <div>
           <div className="sm:hidden fixed w-full top-0 bg-[rgba(255,255,255,0.8)] backdrop-blur-md z-50 flex justify-between items-center px-4 py-3 shadow-md rounded-b-3xl">
          <nav className="flex space-x-4 w-full justify-around">
            {navList.map((item) => (
              <Link key={item.name} to={item.path}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="sm:hidden fixed w-full bottom-0 bg-[rgba(255,255,255,0.8)] backdrop-blur-md z-50 flex justify-between items-center px-4 py-5 shadow-md rounded-t-3xl">
          <nav className="flex space-x-4 w-full justify-around">
            {navList.map((item) => (
              <Link key={item.name} to={item.path}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
