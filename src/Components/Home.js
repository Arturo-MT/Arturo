import React, { useContext, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-scroll";
import "../App.css";
import { langContext } from "../Context/LangContext";
import Switch from "./Subcomponents/Switch";

function Home() {
  const language = useContext(langContext);

  const [isToggled, setIsToggled] = useState(false);

  useEffect(()=>{
    isToggled ? language.setLanguage("es-MX") : language.setLanguage("en-US");
  })

  return (
    <div id="home" className="home">
      <Switch isToggled={isToggled} toggle={() => setIsToggled(!isToggled)} />
        <div className="home-container flex flex-col">
          <span className="saludo text-white text-6xl font-mono">
            <FormattedMessage id="home-wave" defaultMessage="" />
          </span>
          <h2 className="nombre text-white text-3xl font-mono">
            <FormattedMessage id="home-name" defaultMessage="" />
          </h2>
          <h2 className="ocupacion text-white text-3xl font-mono">
            <FormattedMessage id="home-ocupation" defaultMessage="" />
          </h2>
          <h2 className="lugar text-emerald-400 text-3xl font-mono">
            <FormattedMessage id="home-place" defaultMessage="" />
          </h2>
        </div>
      <Link
        activeClass="active"
        to="aboutme"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="mouse-icon"
        href="a"
      >
        <span className="wheel"></span>
      </Link>
    </div>
  );
}

export default Home;
