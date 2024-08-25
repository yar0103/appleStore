import React from 'react';
import { NavbarOffcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarM = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-md">
          <button className="navbar-brand" href="#">
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/image/apple.png`}
                alt="logo"
                style={{ width: 30 }}
              />
            </Link>
          </button>
          <div className="rightNav ">
            <button className="navbar-brand btn" >
              <Link to="/login">
                <img
                  src={`${process.env.PUBLIC_URL}/image/login.svg`}
                  alt="logo"
                  style={{ width: 33 }}
                />
              </Link>
            </button>
            <button className="navbar-brand btn" href="#">
              <Link to="/basket">
                <img
                  src={`${process.env.PUBLIC_URL}/image/basket.svg`}
                  alt="logo"
                  style={{ width: 30 }}
                />
              </Link>
            </button>
            <button className="navbar-brand btn" href="#">
              <img
                src={`${process.env.PUBLIC_URL}/image/search.svg`}
                alt="logo"
                style={{ width: 30 }}
              />
            </button>
            <button
              className="navbar-brand btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <img
                src={`${process.env.PUBLIC_URL}/image/list.svg`}
                alt="logo"
                style={{ width: 36 }}
              />
            </button>
          </div>

          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Category List
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <Link to="/store" className="mobileNav">
                store
              </Link>
              <Link to="/allmac" className="mobileNav">
                Mac
              </Link>
              <Link to="/allipad" className="mobileNav">
                iPad
              </Link>
              <Link to="/alliphone" className="mobileNav">
                iPhone
              </Link>
              <Link to="/allwatch" className="mobileNav">
                Watch
              </Link>
              <Link to="/allairpods" className="mobileNav">
                AirPods
              </Link>
              <Link to="/alltvect" className="mobileNav">
                TV etc
              </Link>
              <Link to="/entertainment" className="mobileNav">
                Entertainment
              </Link>
              <Link to="/accessory" className="mobileNav">
                Accessory
              </Link>
              <Link to="/customer" className="mobileNav">
                Customer Support
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarM;
