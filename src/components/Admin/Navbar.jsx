import React, { useState } from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropup } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { MdOutlineMessage } from 'react-icons/md';

const Navbar = ({ toggleSidebar }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" onClick={() => toggleSidebar()}>
            <RiMenu2Fill />
          </a>
          <div className="relative inline-block">
            <button
              onClick={toggleDropdown}
              className="bg-white text-[#808080] border border-black py-2 px-4 rounded focus:outline-none"
            >
              All Categories
              {isDropdownOpen ? (
                <IoMdArrowDropup className="inline-block text-black ml-2" />
              ) : (
                <IoMdArrowDropdown className="inline-block  text-black ml-2" />
              )}
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <ul>
                  <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                    Option 1
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                    Option 2
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                    Option 3
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className=" flex items-center">
            <input
              type="text"
              placeholder="Search Anything..."
              className="ml-2 px-8 py-2 border border-black relative w-24 md:w-auto"
            />
            <span className="ml-2 mr-2 bg-black cursor-pointer border border-black rounded-full w-8 h-8 flex content-center items-center hover:bg-btnColor transition-all duration-300 ease-in-out">
              <FaSearch className="w-5 h-5 text-white m-auto" />
            </span>
          </div>
        </div>
        <div className="flex-none">
          <div className="flex mr-8">
            <div className="noti-container gap-4 flex items-center space-x-4">
              {/* Notification */}
              <div className="notification relative">
                <FaBell className="text-2xl" />
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </div>

              {/* Message */}
              <div className="message relative">
                <MdOutlineMessage className="text-2xl" />
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar mr-10"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
