import React from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import ResponsiveMenu from './ResponsiveMenu'

function ResponsiveNav () {
  const handleMenu = () => {
    const menu = document.getElementById('menu-responsive')
    const close = document.getElementById('close')
    const bars = document.getElementById('bars')

    close.classList.toggle('close')
    bars.classList.toggle('open')
    menu.classList.toggle('actived-menu')
  }

  return (
    <div className="navbar-responsive flex pr-4 items-center justify-between h-20 w-full m-0 top-0 fixed bg-black/40 backdrop-blur-md">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="homeLink w-4 ml-10 h-10 text-3xl text-white font-bold"
      >
        AM
      </Link>
      <div className="menu-container relative">
        <FaBars
          id="bars"
          className="opened menu--icon cursor-pointer"
          onClick={handleMenu}
          color="white"
          size={40}
        />
        <FaTimes
          id="close"
          className="closed menu--icon cursor-pointer"
          onClick={handleMenu}
          color="white"
          size={40}
        />
      </div>
      <ResponsiveMenu />
    </div>
  )
}

export default ResponsiveNav
