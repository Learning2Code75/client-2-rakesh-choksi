import React from "react";
import Brand from "../../assets/brand.png";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Rakesh Choksi</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Qualification
            </a>
          </li>
        </ul>

        {/* <div className="footer__social">
        <a href="" className="home__social-icon" target={"_blank"}></a>
      <a href="" className="home__social-icon" target={"_blank"}></a>
      <a href="" className="home__social-icon" target={"_blank"}></a>
        </div> */}
        <span
          className="footer__copy"
          style={{
            display: "flex",
          }}
        >
          Made with ❤️ .{" "}
          <a
            href="https://github.com/Learning2Code75/"
            target="__blank"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            Learning2Code75
            <img src={Brand} alt="brand img" className="brand__img" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
