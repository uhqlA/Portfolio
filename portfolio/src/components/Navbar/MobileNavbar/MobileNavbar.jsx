import React from "react";
import "./MobileNavbar.css";
import Logo from "../../assets/logo.png"

const MobileNavbar = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src={Logo} alt="" />
          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>

            <li>
              <a className="menu-item">About</a>
            </li>

            <li>
              <a className="menu-item">Skills</a>
            </li>

            <li>
              <a className="menu-item">Publications</a>
            </li>

            <li>
              <a className="menu-item">Contact Me</a>
            </li>
            <button className="contact-btn" onClick={() => {}}>Hire Me</button>
          </ul>

        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
