import React from 'react'

import IconContainer from './IconContainer'
import { SiWebpack, SiPostman, SiVisualstudiocode, SiWindows } from 'react-icons/si'
import { FaGitAlt, FaNpm } from 'react-icons/fa'

function TechStackContainer () {
  return (
    <div className="tech-container grid grid-cols-6 justify-items-center">
      <IconContainer>
        <SiWebpack size={50} />
      </IconContainer>
      <IconContainer>
        <FaGitAlt size={50} />
      </IconContainer>
      <IconContainer>
        <SiPostman size={49} />
      </IconContainer>
      <IconContainer>
        <FaNpm size={49} />
      </IconContainer>
      <IconContainer>
        <SiVisualstudiocode size={49} />
      </IconContainer>
      <IconContainer>
        <SiWindows size={49} />
      </IconContainer>
    </div>
  )
}

export default TechStackContainer
