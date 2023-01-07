import React, { useState } from "react";
import "./header.css";
import { FiHome } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { IoMdApps } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { MdWorkOutline, MdOutlineSchool } from "react-icons/md";
import { BsGraphUp, BsFillGrid1X2Fill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const toggleLink = (index) => {
    setActiveLink(index);
  };
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Rakesh Choksi
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item " onClick={() => toggleLink(1)}>
              <a
                href="#home"
                className={
                  activeLink === 1 ? "nav__link active-link" : "nav__link"
                }
              >
                <FiHome className="nav__icon" /> Home
              </a>
            </li>
            <li className="nav__item" onClick={() => toggleLink(2)}>
              <a
                href="#about"
                className={
                  activeLink === 2 ? "nav__link active-link" : "nav__link"
                }
              >
                <BsFillPersonFill className="nav__icon" /> About
              </a>
            </li>
            <li className="nav__item" onClick={() => toggleLink(3)}>
              <a
                href="#skills"
                className={
                  activeLink === 3 ? "nav__link active-link" : "nav__link"
                }
              >
                <MdWorkOutline className="nav__icon" />
                Skills
              </a>
            </li>
            <li className="nav__item" onClick={() => toggleLink(4)}>
              <a
                href="#services"
                className={
                  activeLink === 4 ? "nav__link active-link" : "nav__link"
                }
              >
                <BsGraphUp className="nav__icon" />
                Career
              </a>
            </li>
            <li className="nav__item" onClick={() => toggleLink(5)}>
              <a
                href="#qualification"
                className={
                  activeLink === 5 ? "nav__link active-link" : "nav__link"
                }
              >
                <MdOutlineSchool className="nav__icon" />
                Qualification
              </a>
            </li>
            <li className="nav__item" onClick={() => toggleLink(6)}>
              <a
                href="#portfolio"
                className={
                  activeLink === 6 ? "nav__link active-link" : "nav__link"
                }
              >
                <BsFillGrid1X2Fill className="nav__icon" />
                Portfolio
              </a>
            </li>
            <li className="nav__item" onClick={() => toggleLink(7)}>
              <a
                href="#contact"
                className={
                  activeLink === 7 ? "nav__link active-link" : "nav__link"
                }
              >
                <BiPhoneCall className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>
          <GrClose className="nav__close" onClick={() => setToggle(false)} />
        </div>
        <div className="nav__toggle" onClick={() => setToggle(true)}>
          <IoMdApps />
        </div>
      </nav>
    </header>
  );
};

export default Header;
