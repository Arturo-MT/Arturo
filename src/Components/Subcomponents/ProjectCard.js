import React from 'react'
import { FormattedMessage } from 'react-intl'
import '../../App.css'
import PropTypes from 'prop-types'

function ProjectCard (props) {
  ProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    site: PropTypes.string,
    github: PropTypes.string
  }

  return (
    <div className="card">
      <div
        className="face face1"
        style={{
          background: props.image ? `url(${props.image})` : '#333',
          backgroundSize: '340px',
          backgroundPosition: 'content-box',
          backgroundRepeat: 'no-repeat',
          backgroundFilter: 'blur(2px)'
        }}
      >
        <div className="content">
          <p className="title text-2xl text-black font-extrabold">{props.name}</p>
        </div>
      </div>
      <div className="face face2 backdrop-blur-md bg-black/40">
        <div className="content">
          <p className="desc text-justify text-lg font-bold ">{props.description}</p>
          <div className="flex justify-between">
              <a
                className="text-base"
                target="_blank"
                rel="noreferrer"
                href={props.site}
                style={props.site ? {} : { visibility: 'hidden' }}
              >
                <FormattedMessage id="projectCard-site" defaultMessage="" />
              </a>
              <a
                className="text-base"
                target="_blank"
                rel="noreferrer"
                href={props.github}
                style={props.github ? {} : { visibility: 'hidden' }}
              >
                <FormattedMessage id="projectCard-repo" defaultMessage="" />
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
