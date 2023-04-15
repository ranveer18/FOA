import React, { useState, useEffect, useRef } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  // const [islogin, setislogin] = useState(true);
  const [islogout, setislogout] = useState(true);

  useEffect(() => {
    // setislogout(true);
    verifyUser();
  });

  const verifyUser = async () => {
    try {
      const res = await fetch("/api/v1/studentAuthenticate", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        // setislogin(false);
        setislogout(false);
      }
    } catch (e) {
      setislogout(true);
    }
  };

  const navigator = useNavigate();
  const [nav, setNav] = useState(false);
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 50) {
        navRef.current.style.boxShadow = "0px 2px 10px 1px #ffffff";
        navRef.current.style.background = "#aabfce";
      } else {
        navRef.current.style.background = null;
        navRef.current.style.boxShadow = null;
      }
    });
  }, []);
  const handleAbout = () => {
    if (window.location.pathname !== "/") navigator("/");
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView();
    }, 200);
  };
  const handleContact = () => {
    if (window.location.pathname !== "/") navigator("/");
    setTimeout(() => {
      document.getElementById("get-in-touch")?.scrollIntoView();
    }, 200);
  };
  return (
    <>
      <button className="hamberger" onClick={() => setNav(!nav)}>
        <GiHamburgerMenu />
      </button>
      <header ref={navRef} className={nav ? "show-header " : "header"}>
        <div onClick={() => setNav(!nav)} className="nav__close">
          <MdClose />
        </div>
        <img src={logo} alt="logo" className="logo" />
        <nav className="nav_content">
          <ul className="nav_ul">
            <Link to="/">
              <li className="nav_li">Home</li>
            </Link>
            {/* <a href="#about"> */}
            <li className="nav_li" onClick={handleAbout}>
              About Us
            </li>
            {/* </a> */}
            {/* <a href="#get-in-touch"> */}
            <li className="nav_li" onClick={handleContact}>
              Contact Us
            </li>
            {/* </a> */}
            <div className={islogout ? "hide_logout" : ""}>
              <Link to="/Course">
                <li className="nav_li">Course</li>
              </Link>
            </div>

            <div className={islogout ? "" : "hide_logout"}>
              <Link to="/login">
                <li className="nav_li">Login</li>
              </Link>
            </div>
            <div className={islogout ? "hide_logout" : ""}>
              <Link to="/logout">
                <li className="nav_li">Logout</li>
              </Link>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
