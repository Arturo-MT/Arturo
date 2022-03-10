import React from "react";
import { FormattedMessage } from "react-intl";
import "../App.css";
import tasksapp from "../img/tasksapp.png";
import weatherapp from "../img/weatherapp.png";
import ProjectCard from "./Subcomponents/ProjectCard";

function Projects() {
  return (
    <div id="projects" className=" mt-24 ">
        <h2 className="divideH2 text-3xl text-white font-bold text-center relative">
          <FormattedMessage id="projects-header" defaultMessage="" />
        </h2>
        <div className="container grid-cols-3">
          <ProjectCard
            name={
              <FormattedMessage id="projects-project3-name" defaultMessage="" />
            }
            description={
              <FormattedMessage
                id="projects-project3-description"
                defaultMessage=""
              />
            }
            site="https://heuristic-morse-415821.netlify.app/"
            github="https://github.com/Arturo-MT/frontend-tasks-app"
            image={tasksapp}
          />
          <ProjectCard
            name={
              <FormattedMessage id="projects-project2-name" defaultMessage="" />
            }
            description={
              <FormattedMessage
                id="projects-project2-description"
                defaultMessage=""
              />
            }
            site="https://heuristic-morse-415821.netlify.app/"
            github="https://github.com/Arturo-MT/backend-tasks-app"
            image={tasksapp}
          />
          <ProjectCard
            name={
              <FormattedMessage id="projects-project1-name" defaultMessage="" />
            }
            description={
              <FormattedMessage
                id="projects-project1-description"
                defaultMessage=""
              />
            }
            site="https://arturo-mt.github.io/weather-app/"
            github="https://github.com/Arturo-MT/weather-app"
            image={weatherapp}
          />
          <ProjectCard
            name={
              <FormattedMessage id="projects-project0-name" defaultMessage="" />
            }
            description={
              <FormattedMessage
                id="projects-project0-description"
                defaultMessage=""
              />
            }
          />
        </div>
    </div>
  );
}

export default Projects;
