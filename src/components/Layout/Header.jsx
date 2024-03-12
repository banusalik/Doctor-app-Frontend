import React, { useState } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.svg';
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((prevMenuState) => !prevMenuState);
  };

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="navbar bg-base-100 px-8 md:px-16 shadow-lg z-1000 sticky top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={handleToggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm bg-slate-300 dropdown-content mt-2 z-1000 p-4 shadow rounded-box w-52 ${
                isMenuOpen ? 'block' : 'hidden'
              }`}
            >
              <li onClick={(e) => handleMenuItemClick(e)} className=" mb-4">
                <Link to="/" className="py-4">
                  Home
                </Link>
              </li>

              <li onClick={(e) => handleMenuItemClick(e)} className="mb-4">
                <Link to="/tests" className="py-4">
                  Tests
                </Link>
              </li>

              <li onClick={(e) => handleMenuItemClick(e)} className="mb-4">
                <Link to="/find-doctor" className="py-4">
                  Find Doctor
                </Link>
              </li>
              <li onClick={(e) => handleMenuItemClick(e)} className="mb-4">
                <Link to="/about" className="py-4">
                  About us
                </Link>
              </li>
              <li onClick={(e) => handleMenuItemClick(e)} className="mb-4">
                <Link to="/contact" className="py-4">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl pt-2">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <li>
              <NavLink
                to="/"
                className={`font-bold ${isActive('/') && 'active'}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={`font-bold ${isActive('/about') && 'active'}`}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/tests"
                className={`font-bold ${isActive('/tests') && 'active'}`}
              >
                Tests
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/find-doctor"
                className={`font-bold ${isActive('/find-doctor') && 'active'}`}
              >
                Find Doctor
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={`font-bold ${isActive('/contact') && 'active'}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="px-4 py-2 rounded-md bg-btnColor">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
