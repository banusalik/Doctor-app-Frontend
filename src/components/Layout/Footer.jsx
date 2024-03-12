import React from "react";
import logo from "../../assets/Logo.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer flex px-2 justify-around p-10 lg:px-0 bg-secondaryColor text-base-content">
        <aside className="w-1/4">
          <p>
            <img src={logo} alt="logo" className="inline-block" />
            <div className="inline-block font-bold text-xl ml-3">My Doc</div>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aut culpa minus ipsam iusto maiores, aliquid nobis tenetur doloribus
            accusantium.
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <Link to="/book-appointment">
            <a className="link link-hover">Book Appointments</a>
          </Link>
          <Link to="/tests">
            <a className="link link-hover">Book Tests</a>
          </Link>
          <Link to="/doctor/Login">
            <a className="link link-hover">Appointment Management</a>
          </Link>
        </nav>
        <nav>
          <header className="footer-title ">Contact</header>
          <a className="link link-hover flex">
            <FaPhoneAlt className="mt-1 mr-2" />
            <div>+977 9827158522</div>
          </a>
          <a className="link link-hover flex">
            <MdEmail className="mt-1 mr-2" />
            <div>mydoc@gmail.com</div>
          </a>
          <a className="link link-hover flex">
            <FaLocationDot className="mt-1 mr-2" />
            <div>Pokhara, Nepal</div>
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
