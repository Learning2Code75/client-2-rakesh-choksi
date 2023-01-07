import React from "react";
import { BsArrowDown } from "react-icons/bs";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <BsArrowDown
          style={{
            color: "black",
          }}
        />
        <span className="home__scroll-name">Scroll Down</span>
      </a>
    </div>
  );
};

export default ScrollDown;
