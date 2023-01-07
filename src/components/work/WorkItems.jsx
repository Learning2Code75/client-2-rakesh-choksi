import React, { useState } from "react";
import { BsFillCaretRightFill, BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const WorkItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="work__card" key={item.id}>
      {item.image !== "" && (
        <img src={item.image} alt="" className="work__img" />
      )}
      <h3 className="work__title">{item.title}</h3>
      <h3
        className="work__title"
        style={{
          fontWeight: "600",
        }}
      >
        {item.designation}
      </h3>

      <div className="work__button" onClick={() => toggleTab(item.id)}>
        View More
        <BsFillCaretRightFill className="work__button-icon" />
      </div>

      <div
        className={
          toggleState === item.id ? "work__modal active-modal" : "work__modal"
        }
      >
        <div className="work__modal-content">
          <AiOutlineClose
            className="work__modal-close"
            onClick={() => toggleTab(0)}
          />
          <h3 className="work__modal-title">{item.title}</h3>
          <h3
            className="work__modal-title"
            style={{
              fontWeight: "600",
            }}
          >
            {item.designation}
          </h3>
          <p className="work__modal-description">{item.duration}</p>
          <p className="work__modal-description">{item.achievement}</p>
          <ul className="work__modal-services grid">
            {item.description.split("$").map((des) => {
              if (des !== "") {
                return (
                  <li className="work__modal-service">
                    <div>
                      <BsFillCheckCircleFill className="work__modal-icon" />
                    </div>
                    <p className="work__modal-info">{des}</p>
                  </li>
                );
              }
            })}
          </ul>
          {item.brands !== "" && (
            <h3
              className="work__modal-title"
              style={{
                textAlign: "left",
                fontSize: "1rem",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  padding: ".3rem",
                  background: "lightgrey",
                  borderRadius: ".3rem",
                  width: "fit-content",
                }}
              >
                Brands Handled
              </div>
              {item.brands}
            </h3>
          )}

          {item.reportingTo !== "" && (
            <h3
              className="work__modal-title"
              style={{
                textAlign: "left",
                fontSize: "1rem",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  padding: ".3rem",
                  background: "lightgrey",
                  borderRadius: ".3rem",
                  width: "fit-content",
                }}
              >
                Reporting to
              </div>
              {item.reportingTo}
            </h3>
          )}

          {item.businessTurnoverHandled !== "" && (
            <h3
              className="work__modal-title"
              style={{
                textAlign: "left",
                fontSize: "1rem",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  padding: ".3rem",
                  background: "lightgrey",
                  borderRadius: ".3rem",
                  width: "fit-content",
                }}
              >
                Business Turnover Handled
              </div>
              {item.businessTurnoverHandled}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkItems;
