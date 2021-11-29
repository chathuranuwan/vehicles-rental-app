import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function AdminNavbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/vehicles-list"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            Admin
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/vehicles-list"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Manage Vehicles
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/booking"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Orders
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGNOUT</Button>}
        </div>
      </nav>
    </>
  );
}

export default AdminNavbar;
