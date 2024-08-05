import React from 'react';

const NavbarM = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-md">
          <a className="navbar-brand" href="#">
            <img src="image/apple.png" alt="logo" width="22px" />
          </a>
          <div className="rightNav">
            <a className="navbar-brand" href="#">
              <img src="image/basket.png" alt="logo" width="20px" />
            </a>
            <a className="navbar-brand" href="#">
              <img src="image/search.png" alt="logo" width="20px" />
            </a>
            <a className="navbar-brand" href="#">
              <img src="image/list.svg" alt="logo" style={{ width: 25 }} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarM;
