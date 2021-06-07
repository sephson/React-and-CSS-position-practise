import React, { useState } from "react";
import MenuItems from "./MenuItems";
// import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Button from "../Button";
import "../AnimatedHam.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Toyin</h1>
        <div className="menu-icon" onClick={handleClick}>
          {/* {click ? (
            <FaTimes className="fa-times" />
          ) : (
            <FaBars className="fa-bars" />
          )} */}
          <div className="hamburger-menu">
            <div
              onClick={handleClick}
              className={click ? "line line-1 change " : "line line-1"}
            ></div>
            <div
              onClick={handleClick}
              className={click ? " line line-2 change" : "line line-2"}
            ></div>
            <div
              onClick={handleClick}
              className={click ? "line line-3 change" : "line line-3"}
            ></div>
          </div>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} onClick={closeMobileMenu}>
                <a href={item.link} className={item.cName}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    </>
  );
}

export default Navbar;
