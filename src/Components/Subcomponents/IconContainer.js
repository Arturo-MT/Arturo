import React from 'react'
import PropTypes from 'prop-types'

function IconContainer (props) {
  IconContainer.propTypes = {
    children: PropTypes.node.isRequired
  }
  return (
    <div
      className="icon-container cursor-pointer w-12 mt-10"
    >
      <i className='h-full align-middle text-lg'>{props.children}</i>
    </div>
  )
}

export default IconContainer
