import React from 'react'
import PropTypes from 'prop-types'

function Switch ({ isToggled, toggle }) {
  Switch.propTypes = {
    isToggled: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
  }
  return (
    <label className="language-switcher absolute">
      <input
        className="slider-input"
        type="checkbox"
        checked={isToggled}
        onChange={toggle}
      />
      <span className="slider round"></span>
      <span className="select-en cursor-pointer">EN</span>
      <span className="select-es cursor-pointer">ES</span>
    </label>
  )
}

export default Switch
