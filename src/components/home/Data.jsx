import React from "react";
import { FiSend } from "react-icons/fi";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Rakesh Choksi</h1>
      <h3 className="home__subtitle">Business Head</h3>
      <p className="home__description">
        I am this based in this , passionate and dedicated about this.
      </p>
      <a href="#contact" className="button button--flex home__data-contact">
        Contact
        <FiSend
          style={{
            marginLeft: ".5rem",
          }}
        />
      </a>
    </div>
  );
};

export default Data;
