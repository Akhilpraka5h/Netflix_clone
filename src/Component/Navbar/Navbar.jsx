import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_icon from "../../assets/profile_img.png";
import drop_down_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  //Underline effect
  const [underLine, setUnderLine] = useState("home");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar_left">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <ul>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/tvshow" className="link">
            TV Shows
          </Link>
          <Link to="/movies" className="link">
            Movies
          </Link>
          <Link to="/popular" className="link">
            New & Popular
          </Link>
          <Link to="/mylist" className="link">
            My List
          </Link>
          {/* <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li> */}
        </ul>
      </div>
      <div className="navbar_right">
        <img src={search_icon} alt="" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="icons" />
        <div className="navbar_profile">
          <img src={profile_icon} alt="" className="profile" />
          <img src={drop_down_icon} alt="" />
          <div className="dropdown">
            <p
              onClick={() => {
                logout();
              }}
            >
              Sign Out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
