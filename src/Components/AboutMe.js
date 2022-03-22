import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FormattedMessage } from "react-intl";
import fotolinkedin from "../img/fotolinkedin.png";
import git from "../img/git.png";
import npm from "../img/npm.png";
import postman from "../img/postman.png";
import webpack from "../img/webpack.png";
import SkillsContainer from "./Subcomponents/SkillsContainer";
import pdf from "../Files/ArturoMonroyResume.pdf"

function AboutMe() {
  return (
    <div id="aboutme" className="mt-24">
        <h2 className="divideH2 my-8 text-3xl text-white font-bold text-center relative">
          <FormattedMessage id="about-header" defaultMessage="" />
        </h2>
        <div className="aboutme mx-auto max-w-5xl rounded px-8 phone:px-16 pt-8 pb-4 backdrop-blur-xl bg-black/40">
          <div className="perfil mx-auto mb-8">
            <img src={fotolinkedin} alt="" />
          </div>
          <div className="font-bold text-white text-2xl mb-2">
            Brian Arturo Monroy Torrez
            <p className="text-700 text-justify text-white text-xl mt-6">
              <FormattedMessage id="about-whoIm" defaultMessage="" />
            </p>
            <p className="text-700 text-justify text-white text-xl mt-6">
              <FormattedMessage id="about-whereImgoing" defaultMessage="" />
            </p>
            <div className="data-container grid grid-cols-2 mt-8">
              <div className="flex items-center mt-4">
                <MdEmail />
                <span className="mx-4 text-xl text-700 font-bold">Email: </span>
                <span className="text-xl font-semibold">
                  ingatorrez@gmail.com
                </span>
              </div>
              <div className="flex items-center mt-4">
                <BsFillPersonFill />
                <span className="mx-4 text-xl text-700 font-bold">
                  <FormattedMessage id="about-ageLabel" defaultMessage="" />
                </span>
                <span className="text-xl font-semibold">24</span>
              </div>
              <div className="flex items-center mt-4">
                <FaPhoneAlt size={20} />
                <span className="mx-4 text-xl text-700 font-bold">
                  <FormattedMessage id="about-phoneLabel" defaultMessage="" />
                </span>
                <span className="text-xl font-semibold">+52 772 138 6000</span>
              </div>
              <div className="flex items-center mt-4">
                <FaMapMarkedAlt />
                <span className="mx-4 text-xl text-700 font-bold">
                  <FormattedMessage
                    id="about-locationLabel"
                    defaultMessage=""
                  />
                </span>
                <span className="text-xl font-semibold">
                  42300, Ixmiquilpan, Hgo.
                </span>
              </div>
            </div>
          </div>
          <div className="font-bold text-white text-2xl my-8 text-center">
            <FormattedMessage id="about-skillsHeader" defaultMessage="" />
            <div>
              <SkillsContainer />
            </div>
            <div className="mt-12">
              <FormattedMessage id="about-techStackHeader" defaultMessage="" />
              <div className="grid grid-cols-4 mt-12 justify-items-center">
                <img src={webpack} alt="" />
                <img src={git} alt="" />
                <img src={postman} alt="" />
                <img src={npm} alt="" />
              </div>
              <a
                className="resume-download"
                href="https://arturo-mt.github.io/Arturo/static/media/ArturoMonroyResume.56b0a47722b71effb142.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <FormattedMessage id="about-resumeButton" defaultMessage="" />
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default AboutMe;
