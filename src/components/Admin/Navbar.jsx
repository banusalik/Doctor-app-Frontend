import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" onClick={() => toggleSidebar()}>
          <RiMenu2Fill />
        </a>
        <span className="ml-4 text-lg font-bold">Hello Admin</span>
        <span className="text-2xl" role="img" aria-label="wave">
          👋
        </span>
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
  );
};

export default Navbar;
