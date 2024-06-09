import React from "react";
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <div id="menu" className="navbar">
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
          <ul>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">최신제품 쇼핑하기</a>
            </li>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">Mac</a>
            </li>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">iPad</a>
            </li>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">iPhone</a>
            </li>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">Apple Watch</a>
            </li>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">Accessory</a>
            </li>
          </ul>
        </li>
        <li className="navbarItem">
          <a href="#">
            Mac
          </a>
          <ul>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">
                Mac 모두보기
              </a>
            </li>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">
                MacBook Air
              </a>
            </li>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">
                MacBook Pro
              </a>
            </li>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">
                iMac
              </a>
            </li>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">
                Mac mini
              </a>
            </li>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">
                Mac Studio
              </a>
            </li>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">
                Mac Pro
              </a>
            </li>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">
                Display
              </a>
            </li>
          </ul>
        </li>
        <li className="navbarItem">
          <a href="#">
            iPad
          </a>
          <ul>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">
                iPad 모두보기
              </a>
            </li>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">
                iPad Pro
              </a>
            </li>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">
                iPad Air
              </a>
            </li>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">
                iPad
              </a>
            </li>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">
                iPad mini
              </a>
            </li>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">
                Apple Pencil
              </a>
            </li>
            <li className="navbarItemInner">
              <a href="#" className="cartegory">
                Keyboard
              </a>
            </li>
          </ul>
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
    </div>
  )
}

export default Navbar;