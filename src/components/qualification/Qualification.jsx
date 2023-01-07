import React, { useState } from "react";
import { TbBooks } from "react-icons/tb";
import { MdWorkOutline } from "react-icons/md";
import { BsCalendar4Week } from "react-icons/bs";
import "./qualification.css";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <MdWorkOutline />
            <span
              style={{
                marginLeft: ".3rem",
              }}
            >
              Experience
            </span>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <TbBooks />
            <span
              style={{
                marginLeft: ".3rem",
              }}
            >
              Education
            </span>
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Business Head</h3>
                <span className="qualification__subtitle">
                  KIAANA Home Originale, USA
                </span>
                <div className="qualification__calender">
                  <BsCalendar4Week /> <span> </span>Oct 2018 - present and Aug
                  2010 - Jun 2015.
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Consultant</h3>
                <span className="qualification__subtitle">KRA</span>
                <div className="qualification__calender">
                  <BsCalendar4Week /> Jun 2015 - Sep 2018
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  General Manager - Category & Business Development.
                </h3>
                <span className="qualification__subtitle">
                  Creative Portico India Pvt. Ltd, Mumbai.
                </span>
                <div className="qualification__calender">
                  <BsCalendar4Week /> Aug 2009 - Jul 2010
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Dy. General Manager-Kitchen, Dining, Living & Accessories
                </h3>
                <span className="qualification__subtitle">
                  WELSPUN RETAIL LTD, Mumbai, India.
                </span>
                <div className="qualification__calender">
                  <BsCalendar4Week /> Aug 2005 to Jul 2009.
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Siyarams Silk Mills Ltd, Mumbai
                </h3>
                <span className="qualification__subtitle">
                  Brand Marketing Manager.
                </span>
                <div className="qualification__calender">
                  <BsCalendar4Week /> Aug 1991 to Jul 2005.
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Plant Head</h3>
                <span className="qualification__subtitle">
                  Dupon Silk Industries Pvt. Ltd, Thane, Maharashtra.
                </span>
                <div className="qualification__calender">
                  <BsCalendar4Week /> May 1988 to Dec 1990.
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B. Textile </h3>
                <span className="qualification__subtitle">
                  V.J.T.I, Mumbai University
                </span>
                <div className="qualification__calender">
                  <BsCalendar4Week /> 1988
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Diploma in L.T.M </h3>
                <span className="qualification__subtitle">
                  V.J.T.I, Mumbai University
                </span>
                <div className="qualification__calender">
                  <BsCalendar4Week />
                  <span> </span>
                  1985
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
