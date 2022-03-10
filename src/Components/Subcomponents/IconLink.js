import React from "react";

function IconLink(props) {
  return (
    <a
      className="icon-container cursor-pointer w-12 mt-4"
      target="_blank"
      rel="noreferrer"
      href={props.link}
    >
      <i>{props.children}</i>
    </a>
  );
}

export default IconLink;
