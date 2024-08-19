import React from 'react';
import { NavbarOffcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarM = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-md">
          <a className="navbar-brand" href="#">
            <img
              src={`${process.env.PUBLIC_URL}/image/apple.png`}
              alt="logo"
              style={{ width: 30 }}
            />
          </a>
          <div className="rightNav ">
            <button className="navbar-brand btn" Link to="/login">
              <img
                src={`${process.env.PUBLIC_URL}/image/login.svg`}
                alt="logo"
                style={{ width: 33 }}
              />
            </button>
            <button className="navbar-brand btn" href="#">
              <img
                src={`${process.env.PUBLIC_URL}/image/basket.svg`}
                alt="logo"
                style={{ width: 30 }}
              />
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
              <Link to="/" className="mobileNav">
                store
              </Link>
              <Link to="/" className="mobileNav">
                Mac
              </Link>
              <Link to="/" className="mobileNav">
                iPad
              </Link>
              <Link to="/" className="mobileNav">
                iPhone
              </Link>
              <Link to="/" className="mobileNav">
                Watch
              </Link>
              <Link to="/" className="mobileNav">
                AirPods
              </Link>
              <Link to="/" className="mobileNav">
                TV etc
              </Link>
              <Link to="/" className="mobileNav">
                Entertainment
              </Link>
              <Link to="/" className="mobileNav">
                Accessory
              </Link>
              <Link to="/" className="mobileNav">
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
