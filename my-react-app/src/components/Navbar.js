import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
import AuthService from "../services/auth.service";

function Navbar() {
  const [click, setClick] = useState(false);

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Easy Rental
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/vehicles"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Vehicle Fleet
              </Link>
            </li>

            {currentUser ? (
              <li className="nav-item">
                <a href="/sign-in" className="nav-link" onClick={logOut}>
                  Logout
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  to="/sign-in"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Admin
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
