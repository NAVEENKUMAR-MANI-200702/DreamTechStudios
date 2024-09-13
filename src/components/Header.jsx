import React, { useState, useEffect } from "react";
import "../styles/components/header.css";
import LogoImg from "../assets/img/Logo.png";
import { Link } from "react-scroll";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`headerContent ${sticky ? "dark-nav" : ""}` } id="home">
        <div className="logoImgContent">
          <img src={LogoImg} alt="LogoImg" className="LogoImg" />
        </div>
        <div className="contentOptions">
          <Link
            className="options"
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            HOME
          </Link>
          <Link
            className="options"
            to="about-us"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            ABOUT US
          </Link>
          <Link
            className="options"
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            SERVICES
          </Link>
          <Link
            className="options"
            to="contact-us"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
