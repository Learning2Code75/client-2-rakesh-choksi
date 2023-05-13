import React from "react";
import { FaAward } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { CiMoneyCheck1 } from "react-icons/ci";
const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <FaAward className="about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle"> 33+ Years Working</span>
      </div>

      <div className="about__box">
        <BsFillBriefcaseFill className="about__icon" />
        <h3 className="about__title">Managed</h3>
        <span className="about__subtitle">7+ brands</span>
      </div>

      {/* <div className="about__box">
        <CiMoneyCheck1 className="about__icon" />
        <h3 className="about__title">Present Renumeration</h3>
        <span className="about__subtitle">20 Lac</span>
      </div> */}
    </div>
  );
};

export default Info;
