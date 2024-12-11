import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [showSearch, setShowSearch] = useState(false); // State to manage search input visibility

  // Function to handle link click and update active state
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // Toggle search input visibility
  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev); // Toggle the visibility of the search input
  };

  return (
    <div className="container-fluid pt-2 text-black shadow m-auto bg-body-tertiary" style={{ height: '80px' }}>
      <div className="container w-100">

        <nav className="navbar navbar-expand-lg navbar-light w-100 me-5" style={{ color: '#395542' }}>
         

          {/* Hamburger toggle for small screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas for mobile menu */}
          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex="-1"
            id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Menu</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body  ">
              {/* Navbar items inside offcanvas */}
              <ul className="navbar-nav w-75 d-xl-flex justify-content-xl-between">

                <li className={`nav-item ${activeLink === 'home' ? 'text-success' : ''}`} onClick={() => handleLinkClick('home')}>
                  <Link className="nav-link text-black" to="/home">
                    Home
                  </Link>
                </li>
                <li className={`nav-item ${activeLink === 'bestseller' ? 'text-success' : ''}`} onClick={() => handleLinkClick('bestseller')}>
                  <Link className="nav-link text-black" to="/bestseller">
                    Bestseller
                  </Link>
                </li>
                <li className={`nav-item ${activeLink === 'brands' ? 'text-success' : ''}`} onClick={() => handleLinkClick('brands')}>
                  <Link className="nav-link text-black" to="/brands">
                    Brands
                  </Link>
                </li>
                <li className={`nav-item ${activeLink === 'skincare' ? 'text-success' : ''}`} onClick={() => handleLinkClick('skincare')}>
                  <Link className="nav-link text-black" to="/skincare">
                    Skincare
                  </Link>
                </li>
                <li className={`nav-item ${activeLink === 'skincareSets' ? 'text-success' : ''}`} onClick={() => handleLinkClick('skincareSets')}>
                  <Link className="nav-link text-black" to="/skincareSets">
                    Value Sets
                  </Link>
                </li>
              </ul>

              {/* Search form (only visible when showSearch is true) */}
              <form className={`d-flex w-100 mt-3 ${showSearch ? 'd-block' : 'd-none'}`}>
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              </form>
            </div>
          </div>

          {/* Button to toggle search form (only visible on small screens) */}
          <button className="btn btn-outline-dark " onClick={handleSearchToggle}>
            {showSearch ? 'Close Search' : 'Search'}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
