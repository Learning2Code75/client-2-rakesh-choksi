import React from "react";
import "./about.css";
import AboutImg from "../../assets/side_profile.png";
import CV from "../../assets/RakeshChoksiCV.pdf";
import Info from "./Info";
import { AiOutlineDownload } from "react-icons/ai";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="about img" className="about__img" />
        <div className="about__data">
          <Info />

          <p className="about__description">
            An Engineering Professional with over 33 years of hard core
            experience, hands on Merchandising, Category Management, Online
            Channel category management, Sales Development, Wholesale &
            Distribution Network servicing, Supply Chain Management while
            reaching out to Exclusive Brand Outlets - EBO's Operations, Multi
            Brand Outlets - MBO's & Large Format Stores - LFS Business
            management.
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV
            <AiOutlineDownload
              style={{
                marginLeft: ".3rem",
                fontSize: "1.5rem",
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
