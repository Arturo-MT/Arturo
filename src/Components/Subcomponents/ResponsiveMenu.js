import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-scroll'

function ResponsiveMenu () {
  const handleMenu = () => {
    const menu = document.getElementById('menu-responsive')
    const close = document.getElementById('close')
    const bars = document.getElementById('bars')

    close.classList.toggle('close')
    bars.classList.toggle('open')
    menu.classList.toggle('actived-menu')
  }

  return (
    <div id="menu-responsive" className="flex flex-col menu-responsive p-2 ">
        <div className="link-responsive--menu flex justify-center">
          <Link
            onClick={handleMenu}
            activeClass="active"
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="link w-full text-center whitespace-nowrap mt-2 h-7 text-xl font-bold font-mono"
          >
            <FormattedMessage id="nav-about" defaultMessage=""/>
          </Link>
        </div>
        <div className="link-responsive--menu flex justify-center">
          <Link
            onClick={handleMenu}
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="link w-full text-center mt-2 h-7 text-xl font-bold font-mono"
          >
            <FormattedMessage id="nav-services" defaultMessage=""/>
          </Link>
        </div>
        <div className="link-responsive--menu flex justify-center">
          <Link
            onClick={handleMenu}
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-110}
            duration={500}
            className="link w-full text-center mt-2 h-7 text-xl font-bold font-mono"
          >
            <FormattedMessage id="nav-projects" defaultMessage=""/>
          </Link>
        </div>
        <div className="link-responsive--menu flex justify-center">
          <Link
            onClick={handleMenu}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="link w-full text-center mt-2 h-7 text-xl font-bold font-mono"
          >
            <FormattedMessage id="nav-contact" defaultMessage=""/>
          </Link>
        </div>
    </div>
  )
}

export default ResponsiveMenu
