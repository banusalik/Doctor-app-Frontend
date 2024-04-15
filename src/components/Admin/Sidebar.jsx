import React, { useEffect, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { CgCalendarDates } from "react-icons/cg";
import { MdLocalHospital } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";

const Sidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  // Update the active item whenever the location changes
  useEffect(() => {
    const pathname = location.pathname;
    setActiveItem(pathname);
  }, [location]);

  return (
    <>
      <div className="bg-[#1E1E1E] text-white h-full w-64 pl-4 py-4">
        <h2 className="text-2xl font-bold py-2 mb-4">MyDoc Admin Panel</h2>
        <hr className="mb-6" />
        <ul>
          <li className="py-2">
            <NavLink
              to="/admin/dashboard"
              className={`flex items-center ${
                activeItem === "/admin/dashboard"
                  ? "text-black bg-white rounded-tl-xl rounded-bl-xl py-2 w-full"
                  : ""
              }`}
            >
              {activeItem === "/admin/dashboard" ? (
                <span className="ml-2 mr-2 bg-black inline-block cursor-pointer border border-black rounded-full w-8 h-8 flex content-center items-center hover:bg-btnColor transition-all duration-300 ease-in-out">
                  <FaHome className="w-5 h-5 text-white m-auto" />
                </span>
              ) : (
                <IoMdArrowDropright className="mr-2 inline-block" />
              )}
              Dashboard
            </NavLink>
          </li>

          <li className="py-2">
            <NavLink
              to="/admin/appointment"
              className={`flex items-center ${
                activeItem === "/admin/appointment"
                  ? "text-black bg-white rounded-tl-xl rounded-bl-xl py-2 w-full"
                  : ""
              }`}
            >
              {activeItem === "/admin/appointment" ? (
                <span className="ml-2 mr-2 bg-black inline-block cursor-pointer border border-black rounded-full w-8 h-8 flex content-center items-center hover:bg-btnColor transition-all duration-300 ease-in-out">
                  <CgCalendarDates className="w-5 h-5 text-white m-auto" />
                </span>
              ) : (
                <IoMdArrowDropright className="mr-2 inline-block" />
              )}
              Appointment List
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/admin/doctor"
              className={`flex items-center ${
                activeItem === "/admin/doctor"
                  ? "text-black bg-white rounded-tl-xl rounded-bl-xl py-2 w-full"
                  : ""
              }`}
            >
              {activeItem === "/admin/doctor" ? (
                <span className="ml-2 mr-2 bg-black inline-block cursor-pointer border border-black rounded-full w-8 h-8 flex content-center items-center hover:bg-btnColor transition-all duration-300 ease-in-out">
                  <MdLocalHospital className="w-5 h-5 text-white m-auto" />
                </span>
              ) : (
                <IoMdArrowDropright className="mr-2 inline-block" />
              )}
              Doctor List
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/admin/patient"
              className={`flex items-center ${
                activeItem === "/admin/patient"
                  ? "text-black bg-white rounded-tl-xl rounded-bl-xl py-2 w-full"
                  : ""
              }`}
            >
              {activeItem === "/admin/patient" ? (
                <span className="ml-2 mr-2 bg-black cursor-pointer border border-black rounded-full w-8 h-8 flex content-center items-center hover:bg-btnColor transition-all duration-300 ease-in-out">
                  <FaUser className="w-5 h-5 text-white m-auto" />
                </span>
              ) : (
                <IoMdArrowDropright className="mr-2 inline-block" />
              )}
              Patient List
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/admin/transaction"
              className={`flex items-center ${
                activeItem === "/admin/transaction"
                  ? "text-black bg-white rounded-tl-xl rounded-bl-xl py-2 w-full"
                  : ""
              }`}
            >
              {activeItem === "/admin/transaction" ? (
                <span className="ml-2 mr-2 bg-black inline-block cursor-pointer border border-black rounded-full w-8 h-8 flex content-center items-center hover:bg-btnColor transition-all duration-300 ease-in-out">
                  <AiOutlineTransaction className="w-5 h-5 text-white m-auto" />
                </span>
              ) : (
                <IoMdArrowDropright className="mr-2 inline-block" />
              )}
              Transaction
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/admin/emolument"
              className={`flex items-center ${
                activeItem === "/admin/emolument"
                  ? "text-black bg-white rounded-tl-xl rounded-bl-xl py-2 w-full"
                  : ""
              }`}
            >
              {activeItem === "/admin/emolument" ? (
                <span className="ml-2 mr-2 bg-black inline-block cursor-pointer border border-black rounded-full w-8 h-8 flex content-center items-center hover:bg-btnColor transition-all duration-300 ease-in-out">
                  <AiOutlineTransaction className="w-5 h-5 text-white m-auto" />
                </span>
              ) : (
                <IoMdArrowDropright className="mr-2 inline-block" />
              )}
              Emolument
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
