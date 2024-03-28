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
          <div>
            <img src={logo} alt="logo" className="inline-block" />
            <div className="inline-block font-bold text-xl ml-3">My Doc</div>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aut culpa minus ipsam iusto maiores, aliquid nobis tenetur doloribus
            accusantium.
          </div>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <Link to="/book-appointment">
            <div className="link link-hover">Book Appointments</div>
          </Link>
          <Link to="/tests">
            <div className="link link-hover">Book Tests</div>
          </Link>
          <Link to="/doctor/Login">
            <div className="link link-hover">Appointment Management</div>
          </Link>
        </nav>
        <nav>
          <header className="footer-title ">Contact</header>
          <div className="link link-hover flex">
            <FaPhoneAlt className="mt-1 mr-2" />
            <div>+977 9827158522</div>
          </div>
          <div className="link link-hover flex">
            <MdEmail className="mt-1 mr-2" />
            <div>mydoc@gmail.com</div>
          </div>
          <div className="link link-hover flex">
            <FaLocationDot className="mt-1 mr-2" />
            <div>Pokhara, Nepal</div>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
