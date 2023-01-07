import React from "react";
import "./skills.css";
import Business from "./Business";
import Textile from "./Textile";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My skills</span>

      <div className="skills__container container grid">
        <Business />
        <Textile />
      </div>
    </section>
  );
};

export default Skills;
