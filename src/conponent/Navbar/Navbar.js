import React, { useEffect, useState } from 'react';
import './Navbar.css';
import NavbarM from './NavbarM';

const Navbar = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const resizeListener = () => {
    setInnerWidth(window.innerWidth);
  }

  useEffect(()=>{
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    }
  },[]);

  console.log("innerWidth", innerWidth);

  return (
    <>
      {
        innerWidth < 992 ? <NavbarM /> : 
        <div id="menu" className="navbarBase">
        <ul className="navbarWrapper">
          <li className="navbarItem">
            <a href="#">
              <img src="image/apple.png" alt="logo" width="18px" />
            </a>
          </li>
          <li className="navbarItem">
            <a href="#">Store</a>
            <ul>
              <li className="navbarItemInner">
                <img
                  src="image/store.svg"
                  alt="cartegory"
                  style={{ width: 35 }}
                  className="cartegory"
                />
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  최신제품 쇼핑하기
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Mac
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  iPad
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  iPhone
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Apple Watch
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Accessory
                </a>
              </li>
            </ul>
          </li>
          <li className="navbarItem">
            <a href="#">Mac</a>
            <ul>
              <li className="navbarItemInner">
                <img src="image/macbook.png" className="cartegory" />
              </li>
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
            <a href="#">iPad</a>
            <ul>
              <li className="navbarItemInner">
                <img
                  src="image/pad.png"
                  style={{ width: 40 }}
                  className="cartegory"
                />
              </li>
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
            <a href="#">iPhone</a>
            <ul>
              <li className="navbarItemInner">
                <img
                  src="image/phone.svg"
                  style={{ width: 35 }}
                  className="cartegory"
                />
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  iPhone 모두보기
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  iPhone 15 Pro
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  iPhone 15
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  iPhone 14
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  iPhone 13
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  iPhone SE
                </a>
              </li>
            </ul>
          </li>
          <li className="navbarItem">
            <a href="#">Watch</a>
            <ul>
              <li className="navbarItemInner">
                <img
                  src="image/watch.svg"
                  style={{ width: 30 }}
                  className="cartegory"
                />
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Apple Watch 모두보기
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Apple Watch Series 9
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Apple Watch Ultra 2
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Apple Watch SE
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Apple Watch Nike
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Apple Watch Hermes
                </a>
              </li>
            </ul>
          </li>
          <li className="navbarItem">
            <a href="#">AirPods</a>
            <ul>
              <li className="navbarItemInner">
                <img
                  src="image/airpods.svg"
                  style={{ width: 30 }}
                  className="cartegory"
                />
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  AirPods 모두보기
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  AirPods Pro 2세대
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  AirPods 2세대
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  AirPods 3세대
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  AirPods Max
                </a>
              </li>
            </ul>
          </li>
          <li className="navbarItem">
            <a href="#">TV etc</a>
            <ul>
              <li className="navbarItemInner">
                <img
                  src="image/tv-fill.svg"
                  style={{ width: 30 }}
                  className="cartegory"
                />
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  TV 및 홈 모두보기
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Apple TV 4K
                </a>
              </li>
            </ul>
          </li>
          <li className="navbarItem">
            <a href="#">Entertainment</a>
            <ul>
              <li className="navbarItemInner">
                <img
                  src="image/entertainment.svg"
                  style={{ width: 30 }}
                  className="cartegory"
                />
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Apple One
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Apple TV+
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Apple Music
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Apple Arcade
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Apple Podcasts
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Apple Books
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Apple Store
                </a>
              </li>
            </ul>
          </li>
          <li className="navbarItem">
            <a href="#">Accessory</a>
            <ul>
              <li className="navbarItemInner">
                <img
                  src="image/accessory.png"
                  style={{ width: 40 }}
                  className="cartegory"
                />
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Accessory 모두보기
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Mac
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  iPad
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  iphone
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Apple Watch
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  AirPods
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  TV 및 홈
                </a>
              </li>
            </ul>
          </li>
          <li className="navbarItem">
            <a href="#">Customer Support</a>
            <ul>
              <li className="navbarItemInner">
                <img
                  src="image/custom.png"
                  style={{ width: 35 }}
                  className="cartegory"
                />
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  iphone
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Mac
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  iPad
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Watch
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  AirPods
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  Music
                </a>
              </li>
              <li className="navbarItemInner">
                <a href="#" className="cartegory">
                  TV
                </a>
              </li>
            </ul>
          </li>
          <li className="navbarItem">
            <a href="#">
              <img src="image/search.png" alt="search" width="18px" />
            </a>
          </li>
          <li className="navbarItem">
            <a href="#">
              <img src="image/basket.png" alt="basket" width="18px" />
            </a>
          </li>
        </ul>
      </div>
      }
    </>
  );
};

export default Navbar;
