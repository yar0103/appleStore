import React, { useEffect, useState } from 'react';
import './Navbar.css';
import NavbarM from './NavbarM';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const resizeListener = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  console.log('innerWidth', innerWidth);

  return (
    <>
      {innerWidth < 992 ? (
        <NavbarM />
      ) : (
        <div id="menu" className="navbarBase">
          <ul className="navbarWrapper">
            <li className="navbarItem">
              <Link to="/">
                <img
                  src={`${process.env.PUBLIC_URL}/image/apple.png`}
                  alt="logo"
                />
              </Link>
            </li>
            <li className="navbarItem">
              <Link to="/store">Store</Link>
              <ul>
                <li className="navbarItemInner">
                  <img
                    src={`${process.env.PUBLIC_URL}/image/store.svg`}
                    alt="cartegory"
                    style={{ width: 35 }}
                    className="cartegory"
                  />
                </li>
                <li className="navbarItemInner">
                  <Link to="/newShopping">
                    최신제품 쇼핑하기
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/newmac">
                    Mac
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/newipad">
                    iPad
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/newiphone">
                    iPhone
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/newapplewatch">
                    Apple Watch
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/newaccessory">
                    Accessory
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navbarItem">
              <Link to="/mac">Mac</Link>
              <ul>
                <li className="navbarItemInner">
                  <img src={`${process.env.PUBLIC_URL}/image/macbook.png`} className="cartegory" />
                </li>
                <li className="navbarItemInner">
                  <Link to="/allmac">
                    Mac 모두보기
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/macbookair">
                    MacBook Air
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/macbookpro">
                    MacBook Pro
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/imac">
                    iMac
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/macmini">
                    Mac mini
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/macstudio">
                    Mac Studio
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/macpro">
                    Mac Pro
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/display">
                    Display
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navbarItem">
              <Link to="/ipad">iPad</Link>
              <ul>
                <li className="navbarItemInner">
                  <img
                    src={`${process.env.PUBLIC_URL}/image/pad.png`}
                    style={{ width: 40 }}
                    className="cartegory"
                  />
                </li>
                <li className="navbarItemInner">
                  <Link to="/allipad">
                    iPad 모두보기
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/ipadpro">
                    iPad Pro
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/ipadair">
                    iPad Air
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/ipad">
                    iPad
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/ipadmini">
                    iPad mini
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/applepencil">
                    Apple Pencil
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/keyboard">
                    Keyboard
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navbarItem">
              <Link to="/iphone">iPhone</Link>
              <ul>
                <li className="navbarItemInner">
                  <img
                    src={`${process.env.PUBLIC_URL}/image/phone.svg`}
                    style={{ width: 35 }}
                    className="cartegory"
                  />
                </li>
                <li className="navbarItemInner">
                  <Link to="/alliphone">
                    iPhone 모두보기
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/iphone15pro">
                    iPhone 15 Pro
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/iphone15">
                    iPhone 15
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/iphone14">
                    iPhone 14
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/iphone13">
                    iPhone 13
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/iphonese">
                    iPhone SE
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navbarItem">
              <Link to="/watch">Watch</Link>
              <ul>
                <li className="navbarItemInner">
                  <img
                    src={`${process.env.PUBLIC_URL}/image/watch.svg`}
                    style={{ width: 30 }}
                    className="cartegory"
                  />
                </li>
                <li className="navbarItemInner">
                  <Link to="/allapplewatch">
                    Apple Watch 모두보기
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/watch9">
                    Apple Watch Series 9
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/watchultra2">
                    Apple Watch Ultra 2
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/watchse">
                    Apple Watch SE
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/watchnike">
                    Apple Watch Nike
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/watchhermes">
                    Apple Watch Hermes
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navbarItem">
              <Link to="/airpods">AirPods</Link>
              <ul>
                <li className="navbarItemInner">
                  <img
                    src={`${process.env.PUBLIC_URL}/image/airpods.svg`}
                    style={{ width: 30 }}
                    className="cartegory"
                  />
                </li>
                <li className="navbarItemInner">
                  <Link to="/allairpods">
                    AirPods 모두보기
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/airpodpro2">
                    AirPods Pro 2세대
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/airpods2">
                    AirPods 2세대
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/airpods3">
                    AirPods 3세대
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/airpodsmax">
                    AirPods Max
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navbarItem">
              <Link to="/tvetc">TV etc</Link>
              <ul>
                <li className="navbarItemInner">
                  <img
                    src={`${process.env.PUBLIC_URL}/image/tv-fill.svg`}
                    style={{ width: 30 }}
                    className="cartegory"
                  />
                </li>
                <li className="navbarItemInner">
                  <Link to="/alltvect">
                    TV 및 홈 모두보기
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/tv4k">
                    Apple TV 4K
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navbarItem">
              <Link to="/entertainment">Entertainment</Link>
              <ul>
                <li className="navbarItemInner">
                  <img
                    src={`${process.env.PUBLIC_URL}/image/entertainment.svg`}
                    style={{ width: 30 }}
                    className="cartegory"
                  />
                </li>
                <li className="navbarItemInner">
                  <Link to="/appleone">
                    Apple One
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/appletv+">
                    Apple TV+
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/applemusic">
                    Apple Music
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/applearcade">
                    Apple Arcade
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/applepodcasts">
                    Apple Podcasts
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/applebooks">
                    Apple Books
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/applestore">
                    Apple Store
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navbarItem">
              <Link to="/accessory">Accessory</Link>
              <ul>
                <li className="navbarItemInner">
                  <img
                    src={`${process.env.PUBLIC_URL}/image/accessory.png`}
                    style={{ width: 40 }}
                    className="cartegory"
                  />
                </li>
                <li className="navbarItemInner">
                  <Link to="/allaccessory">
                    Accessory 모두보기
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/amac">
                    Mac
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/aipad">
                    iPad
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/aiphone">
                    iphone
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/awatch">
                    Apple Watch
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/aairpods">
                    AirPods
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/atvect">
                    TV 및 홈
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navbarItem">
              <Link to="/customer">Customer Support</Link>
              <ul>
                <li className="navbarItemInner">
                  <img
                    src={`${process.env.PUBLIC_URL}/image/custom.png`}
                    style={{ width: 35 }}
                    className="cartegory"
                  />
                </li>
                <li className="navbarItemInner">
                  <Link to="/ciphone">
                    iphone
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/cmac">
                    Mac
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/cipad">
                    iPad
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/cwatch">
                    Watch
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/cairpods">
                    AirPods
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/cmusic">
                    Music
                  </Link>
                </li>
                <li className="navbarItemInner">
                  <Link to="/ctv">
                    TV
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navbarItem">
              <Link to="/login">
                <img
                  src={`${process.env.PUBLIC_URL}/image/login.svg`}
                  alt="search"
                  width="21px"
                />
              </Link>
            </li>
            <li className="navbarItem">
              <Link to="/basket">
                <img
                  src={`${process.env.PUBLIC_URL}/image/basket.svg`}
                  alt="basket"
                  width="18px"
                />
              </Link>
            </li>
            <li className="navbarItem">
              <a href="#">
                <img
                  src={`${process.env.PUBLIC_URL}/image/search.svg`}
                  alt="search"
                  width="18px"
                />
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
