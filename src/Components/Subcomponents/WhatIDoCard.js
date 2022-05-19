import React from 'react'
import PropTypes from 'prop-types'

function WhatIDoCard (props) {
  WhatIDoCard.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.object.isRequired,
    description: PropTypes.object.isRequired
  }
  return (
    <div className="single-service mx-4 bg-black/40 backdrop-blur-md">
      <div className="service-icon">
        <i className="icon">
          {props.children}
        </i>
      </div>
      <h4 className="text-white text-xl font-bold">{props.title}</h4>
      <p className="WID-description text-white text-base font-semibold mt-2 text-justify">{props.description}</p>
    </div>
  )
}

export default WhatIDoCard
