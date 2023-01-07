import React, { useState } from "react";
import { RiShirtFill } from "react-icons/ri";
import { BsFillCaretRightFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { GiRolledCloth } from "react-icons/gi";
import "./services.css";
const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Career Highlights</h2>
      <span className="section__subtitle">Highlights of my journey</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <RiShirtFill className="services__icon" />
            <h3 className="services__title">Portico New york Home</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <BsFillCaretRightFill className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <AiOutlineClose
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Portico New york Home</h3>
              <p className="services__modal-description">Bed, Bath & Linen.</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <div>
                    <BsFillCheckCircleFill className="services__modal-icon" />
                  </div>
                  <p className="services__modal-info">
                    Category management for all channels Multi Brand Outlets,
                    Wholesale/Distributor, Large Format Stores all,
                    Institutional Supplies, Star Hotels.
                  </p>
                </li>

                <li className="services__modal-service">
                  <div>
                    <BsFillCheckCircleFill className="services__modal-icon" />
                  </div>
                  <p className="services__modal-info">
                    Delt with GHCL, Valliant Glass, Ahmedabad Printers, Trivec,
                    Dishan Etc. for Procurements.
                  </p>
                </li>

                <li className="services__modal-service">
                  <div>
                    <BsFillCheckCircleFill className="services__modal-icon" />
                  </div>
                  <p className="services__modal-info">
                    Handled Mattel, Disney etc various Kids Character.
                  </p>
                </li>

                <li className="services__modal-service">
                  <div>
                    <BsFillCheckCircleFill className="services__modal-icon" />
                  </div>
                  <p className="services__modal-info">
                    We were Importing products like Soyabean.
                  </p>
                </li>

                <li className="services__modal-service">
                  <div>
                    <BsFillCheckCircleFill className="services__modal-icon" />
                  </div>
                  <p className="services__modal-info">
                    Handled Home production of Bed sheet manufacturing, Quilting
                    (Comforters) and Pillows.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <MdWorkOutline className="services__icon" />
            <h3 className="services__title">Welspun</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <BsFillCaretRightFill className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <AiOutlineClose
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Welspun</h3>
              <p className="services__modal-description">
                In Welspun since inception developed and managed Kitchen,
                Dinning, Leaving and Accessories Soft and Hard goods.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <div>
                    <BsFillCheckCircleFill className="services__modal-icon" />
                  </div>
                  <p className="services__modal-info">
                    Launched Curtain Fabric Offering in Organize Retail.
                  </p>
                </li>

                <li className="services__modal-service">
                  <div>
                    <BsFillCheckCircleFill className="services__modal-icon" />
                  </div>
                  <p className="services__modal-info">
                    Rolled Out Ready Made Curtain in Pan India 250 EBO Stores
                    (Exclusive Brand Outlets) WELHOME.
                  </p>
                </li>

                <li className="services__modal-service">
                  <div>
                    <BsFillCheckCircleFill className="services__modal-icon" />
                  </div>
                  <p className="services__modal-info">
                    Also handled SPACES BRAND KDLA as a Category Head.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <GiRolledCloth className="services__icon" />
            <h3 className="services__title">J.Hampstead</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <BsFillCaretRightFill className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <AiOutlineClose
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">J.Hampstead</h3>
              <p className="services__modal-description">
                Launched J.Hampstead the premium Suiting and Shirting brand of
                Siyarams Silk Mills Ltd.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <div>
                    <BsFillCheckCircleFill className="services__modal-icon" />
                  </div>
                  <p className="services__modal-info">
                    Looking Right from Yarn, Fabric Manufacturing (In-house and
                    Outsourced), Finishing, Range Planning With Sales
                    Responsibility servicing to 200 wholesale/distribution
                    channel partners and 700 Multi Brand Outlet dealers PAN
                    India.
                  </p>
                </li>

                <li className="services__modal-service">
                  <div>
                    <BsFillCheckCircleFill className="services__modal-icon" />
                  </div>
                  <p className="services__modal-info">
                    Have an Exposure to various material Cotton, Wool, Linen,
                    Polyester, Viscose , Bamboo. Spinning, Weaving , Finishing,
                    Printing and Making technologies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
