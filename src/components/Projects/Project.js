import React from "react";

export const Project = (props) => {
  return (
    <div className="project">
      <div className="projects__name">
        <header>{props.header}</header>
        <p>{props.p}</p>
        <div className="projects__sample">
          <div className="projects__btn">
            <a className="projects__live" href={props.live}>
              see live
            </a>
            <a className="projects__code" href={props.source}>
              source code
            </a>
          </div>
          <div className="projects__img">
            <img src={props.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
