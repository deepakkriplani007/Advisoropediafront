import { Link } from "react-router-dom";
import React, { useState } from "react";
// import Imagesrc from "../assets/logo1.png";
const Navbar = ({ setToken }) => {
  const [bar, setBar] = useState(true);
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  return (
    <div className="bg-gradient-to-br from-orange-400 to-pink-500 mb-10">
      <div className=" z-40 w-full sm:px-2 md:px-4 lg:px-6 xl:px-8 h-auto text-slate-200 flex justify-between">
        <div className="w-1/2">
          <div className=" md:hidden ">
            <button onClick={() => setBar(!bar)}>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* list 2 */}
          <div className=" p-4 gap-4 md:flex hidden">
            <Link
              className=" text-black text-xl hover:bg-gray-900 rounded-lg hover:font-bold  hover:text-white p-1"
              to="/"
            >
              Home
            </Link>
            <Link
              className=" text-xl text-black  hover:bg-gray-900 rounded-lg hover:font-bold hover:text-white p-1"
              to="/about"
            >
              About
            </Link>
            <Link
              className="text-black  text-xl hover:bg-gray-900 rounded-lg hover:font-bold hover:text-white p-1"
              to="/services"
            >
              Services
            </Link>
          </div>
        </div>

        <div className="p-2 flex gap-5 ">
          <button
            type="button"
            onClick={handleLogout}
            className="border-2 border-gray-800 hover:border-gray-200 self-center text-black text-xl hover:bg-gray-900 rounded-lg font-bold  hover:text-white p-1"
          >
            LogOut
          </button>
        </div>
      </div>
      {/* list 1*/}
      <div
        className={`${bar == true && "hidden"} flex justify-start md:hidden `}
      >
        <ul
          tabIndex={0}
          className="flex-col md:flex-row flex md:space-x-20  md:mt-0 md:text-sm md:font-medium"
        >
          <li>
            <Link
              to="/"
              className="text-white rounded hover:bg-gray-900 hover:font-bold  mb-[1px] md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white rounded hover:bg-gray-900 hover:font-bold  mb-[1px] md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-white rounded hover:bg-gray-900 hover:font-bold  mb-[1px] md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0"
            >
              Services
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
