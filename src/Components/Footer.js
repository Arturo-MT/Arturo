import React from "react";
import { AiFillCopyrightCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className="w-screen h-32 bg-black/40 mb-0 backdrop-blur-md p-8">
      <div className="text-white text-lg text-center">
        <h2>Arturo Monroy</h2>
        <a
          href="https://www.pexels.com/es-es/@matej-117839?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
          target="_blank"
          rel="noreferrer"
        >
          Matej Photo on Pexels
        </a>
        <div className="flex space-x-1 items-center mx-auto mb-4 w-44">
          <AiFillCopyrightCircle />
          <span>All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
