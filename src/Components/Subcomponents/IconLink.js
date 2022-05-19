import React from 'react'
import PropTypes from 'prop-types'

function IconLink (props) {
  IconLink.propTypes = {
    children: PropTypes.node.isRequired,
    link: PropTypes.string.isRequired
  }
  return (
    <a
      className="icon-container cursor-pointer w-12 mt-4"
      target="_blank"
      rel="noreferrer"
      href={props.link}
    >
      <i>{props.children}</i>
    </a>
  )
}

export default IconLink
