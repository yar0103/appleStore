import React from "react";
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbarWrapper">
        <li className="navbarItem">
          <a href="#">
            <img src='image/apple.png' alt='logo' width="18px"/>
          </a>
        </li>
        <li className="navbarItem">
          <a href="#">
            Store
          </a>
        </li>
        <li className="navbarItem">
          <a href="#">
            Mac
          </a>
        </li>
        <li className="navbarItem">
          <a href="#">
            iPad
          </a>
        </li>
        <li className="navbarItem">
          <a href="#">
            iPhone
          </a>
        </li>
        <li className="navbarItem">
          <a href="#">
            Watch
          </a>
        </li>
        <li className="navbarItem">
          <a href="#">
            AirPods
          </a>
        </li>
        <li className="navbarItem">
          <a href="#">
            TV etc
          </a>
        </li>
        <li className="navbarItem">
          <a href="#">
            Entertainment
          </a>
        </li>
        <li className="navbarItem">
          <a href="#">
            Accessory
          </a>
        </li>
        <li className="navbarItem">
          <a href="#">
            Customer Support
          </a>
        </li>
        <li className="navbarItem">
          <a href="#">
            <img src='image/search.png' alt='search' width="18px"/>
          </a>
        </li>
        <li className="navbarItem">
          <a href="#">
            <img src='image/basket.png' alt='basket' width="18px"/>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;