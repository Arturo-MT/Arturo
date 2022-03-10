import React from "react";
import { FormattedMessage } from "react-intl";
import "../../App.css";

function ProjectCard({ image, name, description, site, github }) {
  if (site && github) {
    var style = {};
  } else {
    style = { pointerEvents: "none", visibility: "hidden" };
  }

  return (
    <div className="card">
      <div
        className="face face1"
        style={{
          background: image ? `url(${image})` : "#333",
          backgroundSize: "18.75rem 12.5rem",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="content">
          <p className="title text-2xl font-extrabold">{name}</p>
        </div>
      </div>
      <div className="face face2 backdrop-blur-md bg-black/40">
        <div className="content">
          <p className="desc text-justify text-lg font-bold ">{description}</p>
          <div className="flex justify-between">
              <a
                className="text-base"
                target="_blank"
                rel="noreferrer"
                href={site}
                style={style}
              >
                <FormattedMessage id="projectCard-site" defaultMessage="" />
              </a>
              <a
                className="text-base"
                target="_blank"
                rel="noreferrer"
                href={github}
                style={style}
              >
                <FormattedMessage id="projectCard-repo" defaultMessage="" />
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
