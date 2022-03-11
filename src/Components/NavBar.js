import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-scroll";
import "../App.css";

function NavBar() {
  return (
      <div className="navbar flex items-center justify-between h-20 w-full m-0 top-0 fixed bg-black/40 backdrop-blur-md">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="homeLink animate-bounce ml-10 h-10 text-3xl text-white font-bold"
        >
          AM
        </Link>
        <div className="flex menu p-2">
          <div className="">
            <Link
              activeClass="active"
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="link text-center whitespace-nowrap mt-2 mr-10 h-7 text-xl font-bold text-white font-mono  "
            >
              <FormattedMessage id="nav-about" defaultMessage=""/>
            </Link>
          </div>
          <div className="">
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="link text-center w-full mt-2 mr-10 h-7 text-xl font-bold text-white font-mono"
            >
              <FormattedMessage id="nav-services" defaultMessage=""/>
            </Link>
          </div>
          <div className="">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-110}
              duration={1000}
              className="link text-center w-full mt-2 mr-10 h-7 text-xl font-bold text-white font-mono"
            >
              <FormattedMessage id="nav-projects" defaultMessage=""/>
            </Link>
          </div>
          <div className="">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={1000}
              className="link text-center w-full mt-2 mr-10 h-7 text-xl font-bold text-white font-mono"
            >
              <FormattedMessage id="nav-contact" defaultMessage=""/>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default NavBar;
