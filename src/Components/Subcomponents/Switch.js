import React from "react";

function Switch({ isToggled, toggle }) {
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
  );
}

export default Switch;
