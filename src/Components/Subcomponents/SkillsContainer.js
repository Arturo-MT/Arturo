import React from "react";
import ProgressBar from "./ProgressBar";

function SkillsContainer() {
  return (
    <div id="skillsContainer" className="skills-container grid grid-cols-2">
      <div className="text-700 text-white text-base mt-6 text-center">
        HTML, CSS & JavaScript
        <ProgressBar
          width="300"
          percent="80"
          color="linear-gradient(90deg, rgba(242,62,22,1) 8%, rgba(3,103,166,1) 50%, rgba(217,164,4,1) 92%)"
        />
      </div>
      <div className="text-700 text-white text-base mt-6 text-center">
        React
        <ProgressBar width="300" percent="50" color="#61DBFB" />
      </div>
      <div className="text-700 text-white text-base mt-6 text-center">
        Node.js
        <ProgressBar width="300" percent="60" color="#3c873a" />
      </div>
      <div className="text-700 text-white text-base mt-6 text-center">
        API-REST
        <ProgressBar width="300" percent="60" color="#4000b8" />
      </div>
      <div className="text-700 text-white text-base mt-6 text-center">
        PostgreSQL
        <ProgressBar width="300" percent="40" color="#008bb9" />
      </div>
      <div className="text-700 text-white text-base mt-6 text-center">
        Bootstrap
        <ProgressBar width="300" percent="40" color="#563d7c" />
      </div>
      <div className="text-700 text-white text-base mt-6 text-center">
        MaterialUI
        <ProgressBar width="300" percent="60" color="#0031b8" />
      </div>
      <div className="text-700 text-white text-base mt-6 text-center">
        Tailwind
        <ProgressBar width="300" percent="50" color="#42cbf5" />
      </div>
    </div>
  );
}

export default SkillsContainer;
