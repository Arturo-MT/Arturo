import React from "react";
import pdf from "../Files/ArturoMonroyResume.pdf";

function Pdf() {
  return (
    <div className="absolute w-screen h-screen">
      <object data={pdf} width="100%" height="100%">Resume</object>
    </div>
  );
}

export default Pdf;
