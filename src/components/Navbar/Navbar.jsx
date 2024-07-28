import React, { useEffect, useState } from "react";
import "./Navbar.css";
import hackathonLogo from "/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : null}`}>
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div className="logo">
          <img src={hackathonLogo} alt="hack-the-future" className="img" />
        </div>
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li className="borderXwidth">
            <a href="#About">Home</a>
          </li>

          <li className="borderXwidth">
            <a href="#Theme">Tracks</a>
          </li>
          <li className="borderXwidth">
            <a href="#Venue">Venue</a>
          </li>
		  <li className="borderXwidth">
            <a href="#Schedule">Timeline</a>
          </li>
          <li className="borderXwidth">
			<Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
