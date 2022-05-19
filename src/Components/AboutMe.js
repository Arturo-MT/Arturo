import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FormattedMessage } from 'react-intl'
import SkillsContainer from './Subcomponents/SkillsContainer'
import TechStackContainer from './Subcomponents/TechStackContainer'

function AboutMe () {
  return (
    <div id="aboutme" className="mt-24">
      <h2 className="divideH2 my-8 text-3xl text-white font-bold text-center relative">
        <FormattedMessage id="about-header" defaultMessage="" />
      </h2>
      <div className="aboutme mx-auto max-w-5xl rounded px-8 phone:px-16 pt-8 pb-4 backdrop-blur-xl bg-black/40">
        <div className="perfil mx-auto mb-8">
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
                <FormattedMessage id="about-locationLabel" defaultMessage="" />
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
            <TechStackContainer/>
            <a
              className="resume-download"
              href="./ResumeCV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="about-resumeButton" defaultMessage="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
