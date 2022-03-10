import React from "react";

function WhatIDoCard(props) {
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
  );
}

export default WhatIDoCard;
