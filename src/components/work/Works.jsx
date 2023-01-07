import React from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  return (
    <div>
      {/* <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span key={index} className="work__item">
              {item.name}
            </span>
          );
        })}
      </div> */}
      <div className="work__container container grid">
        {projectsData.map((item, index) => {
          return <WorkItems item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Works;
