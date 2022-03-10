import React from "react";
import { useState, useEffect } from "react";
import "../../App.css";

function ProgressBar ( {percent, width, color} ){
    const [value, setValue] = useState(0);

    const progress = (percent * width) / 100;

    useEffect(() => {
        setValue(progress);
    },[progress])
  
  return(
    <div className="progress-div mx-auto mt-2" style={{ width: `${width}px` }}>
      <div style={{ width: `${value}px`, background:color }} className="progress" />
    </div>
  );
};

export default ProgressBar;