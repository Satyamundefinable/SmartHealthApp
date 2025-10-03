// src/components/Header.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext.jsx";
import "../UI/CSS/header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  return (
    <header className="header">
      <div className="logo">
        <img
          src="/Brain.jpeg" // keep this in public folder
          alt="BrainLogo"
          style={{ borderRadius: "50%" }}
        />
        <span>MindCare</span>
      </div>

      {/* Hamburger Menu */}
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <nav className={`navbar ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink to="/home" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/resource" onClick={() => setIsOpen(false)}>
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
          </li>

           {isLoggedIn ? (
            <>
              <li 
              style={{ backgroundColor:"#ec1111ff"}}>
                <button
                  className="logout-btn"
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  style={{ color:"#ffffff",  backgroundColor:"#ec1111ff"}}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/signup" onClick={() => setIsOpen(false)}>
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
