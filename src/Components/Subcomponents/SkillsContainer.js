import React from "react";
import IconContainer from "./IconContainer";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { DiJavascript1, DiPostgresql } from "react-icons/di";
import {
  SiMaterialui,
  SiTailwindcss,
  SiCplusplus,
  SiTypescript,
  SiArduino,
  SiReactrouter,
} from "react-icons/si";

function SkillsContainer() {
  return (
    <div
      id="skillsContainer"
      className="skills-container grid grid-cols-7 justify-items-center"
    >
      <IconContainer>
        <FaHtml5 size={50} />
      </IconContainer>
      <IconContainer>
        <FaCss3Alt size={50} />
      </IconContainer>
      <IconContainer>
        <DiJavascript1 size={50} />
      </IconContainer>
      <IconContainer>
        <FaReact size={50} />
      </IconContainer>
      <IconContainer>
        <FaNodeJs size={50} />
      </IconContainer>
      <IconContainer>
        <DiPostgresql size={50} />
      </IconContainer>
      <IconContainer>
        <FaBootstrap size={50} />
      </IconContainer>
      <IconContainer>
        <SiMaterialui size={49} />
      </IconContainer>
      <IconContainer>
        <SiTailwindcss size={49} />
      </IconContainer>
      <IconContainer>API's</IconContainer>
      <IconContainer>
        <SiCplusplus size={50} />
      </IconContainer>
      <IconContainer>
        <SiTypescript size={49} />
      </IconContainer>
      <IconContainer>
        <SiArduino size={49} />
      </IconContainer>
      <IconContainer>
        <SiReactrouter size={50} />
      </IconContainer>
    </div>
  );
}

export default SkillsContainer;
