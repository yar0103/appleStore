import React from 'react';
import { NavbarOffcanvas } from 'react-bootstrap';

const NavbarM = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-md">
          <a className="navbar-brand" href="#">
            <img src="image/apple.png" alt="logo" width="22px" />
          </a>
          <div className="rightNav ">
            <button className="navbar-brand btn" href="#">
              <img src="image/basket.png" alt="logo" width="20px" />
            </button>
            <button className="navbar-brand btn" href="#">
              <img src="image/search.png" alt="logo" width="20px" />
            </button>
            <button
              class="navbar-brand btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <img src="image/list.svg" alt="logo" style={{ width: 25 }} />
            </button>
          </div>

          <div
            class="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                Category List
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div className='p-2'>
                store
              </div>
              <div className='p-2'>
                Mac
              </div>
              <div className='p-2'>
                iPad
              </div>
              <div className='p-2'>
                iPhone
              </div>
              <div className='p-2'>
                Watch
              </div>
              <div className='p-2'>
                AirPods
              </div>
              <div className='p-2'>
                TV etc
              </div>
              <div className='p-2'>
                Entertainment
              </div>
              <div className='p-2'>
                Accessory
              </div>
              <div className='p-2'>
                Customer Support
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarM;
